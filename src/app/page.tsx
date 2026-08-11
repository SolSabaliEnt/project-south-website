import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { donateHref } from "@/data/navigation";
import { homeInitiatives, homeMedia, homeStories, type HomeMedia } from "@/data/home";

function Arrow() {
  return (
    <svg
      className={styles.arrow}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 9H15" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 4.5L15 9L10.5 13.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function EditorialMedia({ media, wide = false }: { media: HomeMedia; wide?: boolean }) {
  if (!media.src) return null;

  return (
    <div className={styles.mediaBlock}>
      <div className={`${styles.mediaFrame} ${wide ? styles.mediaFrameWide : ""}`}>
        <Image
          src={media.src}
          alt={media.alt}
          width={1600}
          height={900}
          sizes="(max-width: 820px) 100vw, 50vw"
        />
      </div>
      {media.caption ? <div className={styles.mediaCaption}>{media.caption}</div> : null}
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.heroEyebrow}>Atlanta · Est. 1986</div>
              <h1 className={styles.heroTitle}>
                Project
                <br />
                <span>South.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Institute for the Elimination of Poverty and Genocide
              </p>
            </div>

            <div className={styles.heroAside}>
              <div className={styles.heroAsideLabel}>40 years on the ground</div>
              <p>
                Organizing, political education, movement lawyering, community power,
                and movement infrastructure rooted in the U.S. South.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.heroForty} aria-hidden="true">
          40
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.editorialGrid}>
            <div className={styles.kicker}>The Record</div>
            <div>
              <h2 className={styles.sectionHeadline}>
                A lot of history happened before anyone thought to post it.
              </h2>

              {homeMedia.record1.src || homeMedia.record2.src ? (
                <div className={styles.mediaPair}>
                  <EditorialMedia media={homeMedia.record1} />
                  <EditorialMedia media={homeMedia.record2} />
                </div>
              ) : null}

              <div className={styles.bodyGrid}>
                <p className={styles.bodyCopy}>
                  For four decades, Project South has organized across communities,
                  generations, movements, and borders.
                </p>
                <p className={`${styles.bodyCopy} ${styles.muted}`}>
                  Some of that history lives in reports. Some lives on old hard drives.
                  Some lives only in the memories of the people who were there. It is
                  time to make the record visible.
                </p>
              </div>

              <a href="#archive" className={styles.editorialLink}>
                Explore 40 Years of Project South <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionSoft} id="work">
        <div className={styles.container}>
          <div className={`${styles.editorialGrid} ${styles.workIntro}`}>
            <div className={styles.kicker}>The Work</div>
            <div>
              <h2 className={styles.sectionHeadline}>
                Movements need more than moments. They need infrastructure.
              </h2>

              {homeMedia.work.src ? (
                <div className={styles.mediaWide}>
                  <EditorialMedia media={homeMedia.work} wide />
                </div>
              ) : null}

              <p className={`${styles.bodyCopy} ${styles.muted}`} style={{ marginTop: 24, maxWidth: 760 }}>
                Project South works across four connected areas: building community
                power, organizing across the South, resisting state repression, and
                strengthening the systems movements need to continue.
              </p>
            </div>
          </div>

          <div className={styles.initiativeList}>
            {homeInitiatives.map((initiative) => (
              <Link key={initiative.href} href={initiative.href} className={styles.initiativeRow}>
                <span className={styles.initiativeNumber}>{initiative.number}</span>
                <span className={styles.initiativeTitle}>{initiative.title}</span>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.editorialGrid} ${styles.nowIntro}`}>
            <div className={styles.kicker}>Project South, Now</div>
            <div>
              <h2 className={styles.sectionHeadline}>
                The movement isn&apos;t gone. You just may not be seeing it.
              </h2>
              {homeMedia.now.src ? (
                <div className={styles.mediaWide}>
                  <EditorialMedia media={homeMedia.now} wide />
                </div>
              ) : null}
            </div>
          </div>

          <div className={styles.storyGrid}>
            {homeStories.map((story) => (
              <a key={story.label} href={story.href} className={styles.storyCard}>
                <div>
                  <div className={styles.storyLabel}>{story.label}</div>
                  <h3 className={styles.storyHeadline}>{story.headline}</h3>
                </div>
                <div>
                  <div className={styles.storyMeta}>{story.meta}</div>
                  <Arrow />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <div className={styles.editorialGrid}>
            <div className={styles.kicker}>From The Field</div>
            <div>
              <h2 className={`${styles.sectionHeadline} ${styles.sectionHeadlineLight}`}>
                The work happens on the ground. The story should travel farther.
              </h2>

              {homeMedia.field.src ? (
                <div className={styles.mediaWide}>
                  <EditorialMedia media={homeMedia.field} wide />
                </div>
              ) : null}

              <p className={`${styles.bodyCopy} ${styles.mutedDark}`} style={{ marginTop: 28, maxWidth: 770 }}>
                Organizing does not become more meaningful because a camera is present.
                But when the work is documented, more people can learn from it, support
                it, share it, and see themselves inside it.
              </p>

              <div className={styles.actionPills}>
                <a href="/about" className={styles.actionPill}>LEARN <Arrow /></a>
                <a href="https://www.instagram.com/projectsouthatl/" className={styles.actionPill}>SHARE <Arrow /></a>
                <a href="#" className={styles.actionPill}>SHOW UP <Arrow /></a>
                <a href={donateHref} className={styles.actionPill}>SUPPORT <Arrow /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.editorialGrid}>
            <div className={styles.kicker}>People</div>
            <div>
              <h2 className={styles.sectionHeadline}>
                Project South didn&apos;t only build campaigns. It helped build people.
              </h2>

              {homeMedia.people.src ? (
                <div className={styles.mediaWide}>
                  <EditorialMedia media={homeMedia.people} wide />
                </div>
              ) : null}

              <p className={`${styles.bodyCopy} ${styles.muted}`} style={{ marginTop: 28, maxWidth: 760 }}>
                A generation of young people, organizers, educators, advocates, and
                community leaders passed through Project South. Their stories are part
                of the impact.
              </p>

              <Link href="/about" className={styles.editorialLink}>
                Meet the people who carried it forward <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionSoft} id="archive">
        <div className={styles.container}>
          <div className={styles.archiveGrid}>
            <div>
              <div className={styles.archiveForty}>40</div>
              <div className={styles.archiveYears}>1986—2026</div>
            </div>

            <div>
              <div className={styles.kicker}>The Archive</div>
              <h2 className={styles.sectionHeadline}>
                Forty years of movement history should not disappear into hard drives,
                boxes, and memory.
              </h2>

              {homeMedia.archive.src ? (
                <div className={styles.mediaWide}>
                  <EditorialMedia media={homeMedia.archive} wide />
                </div>
              ) : null}

              <p className={`${styles.bodyCopy} ${styles.muted}`} style={{ marginTop: 28, maxWidth: 760 }}>
                Speeches. Campaigns. Youth programs. Assemblies. Photographs. Video.
                Organizing manuals. Political education. Legal struggles. People.
                Places. Victories. Losses. Lessons.
              </p>

              <a href="#archive" className={styles.editorialLink}>
                Enter the archive <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionRed}>
        <div className={styles.container}>
          <div className={styles.nextFortyLabel}>The Next 40</div>
          <h2 className={styles.nextFortyHeadline}>History doesn&apos;t continue by itself.</h2>
          <p className={styles.nextFortyCopy}>
            Project South&apos;s next chapter will be built the same way the last forty
            years were built: through people willing to organize, learn, support one
            another, and act.
          </p>

          <div className={styles.nextFortyLinks}>
            <a href={donateHref} className={styles.nextFortyLink}>SUPPORT THE WORK <Arrow /></a>
            <a href="#" className={styles.nextFortyLink}>SHOW UP <Arrow /></a>
            <a href="https://www.instagram.com/projectsouthatl/" className={styles.nextFortyLink}>FOLLOW THE WORK <Arrow /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
