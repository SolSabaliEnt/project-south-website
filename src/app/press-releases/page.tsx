import { PressArchive } from "@/components/press/PressArchive";
import { pressArchiveCounts, pressReleases } from "@/data/press-releases";
import styles from "./page.module.css";

export default function PressReleasesPage() {
  return (
    <main>
      <section className={styles.intro}>
        <div className="site-container">
          <div className="section-label">Press Releases</div>
          <h1 className={styles.title}>
            The public
            <br />
            <span>record.</span>
          </h1>

          <div className={styles.introGrid}>
            <h2>Statements, filings, advisories, and movement responses across years of struggle.</h2>
            <div>
              <div className={styles.smallLabel}>Project South press archive</div>
              <p>
                Explore {pressArchiveCounts.total} Project South releases, including {pressArchiveCounts.pages} publication pages and {pressArchiveCounts.pdfs} direct PDF releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.archiveSection}>
        <div className="site-container">
          <div className={styles.archiveIntro}>
            <div className="section-label">Archive</div>
            <div>
              <h2 className={styles.headline}>Find the release. Follow the record.</h2>
              <p>
                Search by title or topic, or browse Project South publication pages and direct PDF releases. Each item opens the original publication in a new tab.
              </p>
            </div>
          </div>

          <PressArchive releases={pressReleases} />
        </div>
      </section>
    </main>
  );
}
