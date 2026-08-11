"use client";

import { useMemo, useState } from "react";
import type { PressReleaseSource } from "@/data/press-releases";
import styles from "./PressArchive.module.css";

const PAGE_SIZE = 18;

type Filter = "all" | "page" | "pdf";

export function PressArchive({ releases }: { releases: PressReleaseSource[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return releases.filter((release) => {
      const matchesType = filter === "all" || release.sourceType === filter;
      const matchesQuery = !normalized || release.title.toLowerCase().includes(normalized);
      return matchesType && matchesQuery;
    });
  }, [releases, query, filter]);

  const shown = filtered.slice(0, visible);

  function chooseFilter(next: Filter) {
    setFilter(next);
    setVisible(PAGE_SIZE);
  }

  return (
    <div className={styles.archive}>
      <div className={styles.controls}>
        <label className={styles.searchLabel}>
          <span>Search the archive</span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search by title or topic"
          />
        </label>

        <div className={styles.filters} aria-label="Filter press releases by source type">
          {(["all", "page", "pdf"] as Filter[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => chooseFilter(option)}
              className={filter === option ? styles.activeFilter : ""}
              aria-pressed={filter === option}
            >
              {option === "all" ? "All" : option === "page" ? "Project South pages" : "PDF releases"}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultMeta} aria-live="polite">
        Showing {Math.min(shown.length, filtered.length)} of {filtered.length} releases
      </div>

      <div className={styles.list}>
        {shown.map((release, index) => (
          <article key={release.href} className={styles.release}>
            <div className={styles.releaseIndex}>{String(index + 1).padStart(2, "0")}</div>
            <div className={styles.releaseBody}>
              <div className={styles.metaRow}>
                <span>{release.sourceLabel}</span>
                {release.dateLabel ? <span>{release.dateLabel}</span> : null}
              </div>
              <h2>{release.title}</h2>
              <a href={release.href} target="_blank" rel="noreferrer" className={styles.releaseLink}>
                {release.sourceType === "pdf" ? "Open PDF" : "Open original release"}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {shown.length === 0 ? (
        <div className={styles.empty}>No releases match that search.</div>
      ) : null}

      {visible < filtered.length ? (
        <button type="button" className={styles.loadMore} onClick={() => setVisible((count) => count + PAGE_SIZE)}>
          Load more releases
        </button>
      ) : null}
    </div>
  );
}
