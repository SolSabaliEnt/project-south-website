import Image from "next/image";
import Link from "next/link";
import { PersonCard } from "@/components/ui/PersonCard";
import { aboutHeaderMedia, hungerCoalition, leadership, staff } from "@/data/about";
import { donateHref } from "@/data/navigation";
import { withBasePath } from "@/lib/site-path";
import styles from "./page.module.css";

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export default function AboutPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className={styles.decorCircle} aria-hidden="true" />
        <div className={styles.decorGlow} aria-hidden="true" />

        <div className="site-container">
          <div className="section-label">About Us</div>
          <h1 className={styles.title}>
            The movement
            <br />
            is the mission.
          </h1>

          <div className={styles.introGrid}>
            <div className={styles.headerMediaWrap}>
              <div className={styles.headerAccent} aria-hidden="true" />
              <div className={styles.headerMedia}>
                {aboutHeaderMedia.src ? (
                  <Image
                    src={withBasePath(aboutHeaderMedia.src)}
                    alt={aboutHeaderMedia.alt}
                    fill
                    priority
                    sizes="(max-width: 820px) 100vw, 55vw"
                    className={styles.headerImage}
                    style={{ objectPosition: aboutHeaderMedia.position }}
                  />
                ) : (
                  <div className={styles.headerPlaceholder}>About Us header image</div>
                )}
              </div>
              <div className={styles.locationTag}>Atlanta · Project South</div>
              {aboutHeaderMedia.caption ? (
                <div className={styles.headerCaption}>{aboutHeaderMedia.caption}</div>
              ) : null}
            </div>

            <div>
              <h2 className={styles.missionHeadline}>
                Project South builds strong social movements for power rooted in Black Radical Traditions.
              </h2>

              <div className={styles.missionCopy}>
                <div className={styles.smallLabel}>Southern-based · leadership development</div>
                <p>
                  Project South is a Southern-based leadership development organization that creates spaces
                  for movement building. We work with communities pushed forward by struggle to strengthen
                  leadership and provide popular, political, and economic education for personal and social
                  transformation.
                </p>
                <p>
                  We build relationships with organizations and networks across the U.S. and the global South
                  to inform local work and engage in bottom-up movement building for social and economic justice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={`site-container ${styles.peopleLayout}`}>
          <div>
            <div className="section-label">Leadership</div>
            <p className={styles.sectionIntro}>
              Project South’s leadership stewards strategy, programs, infrastructure, and organizational direction.
            </p>
          </div>

          <div>
            <h2 className={styles.headline}>People build the infrastructure. They should be visible.</h2>
            <div className={styles.leadershipGrid}>
              {leadership.map((person, index) => (
                <div key={person.name} className={styles.personOffset} data-offset={index % 4}>
                  <PersonCard {...person} size="large" imageAlt={person.imageAlt || person.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="site-container">
          <div className="section-label">Staff</div>
          <div className={styles.staffIntroGrid}>
            <h2 className={styles.headline}>
              Organizers, strategists, educators, attorneys, and support staff moving the work every day.
            </h2>
            <p>
              Across organizing, legal advocacy, political education, operations, and narrative work, Project South staff helps build and sustain movement power every day.
            </p>
          </div>

          <div className={styles.staffGrid}>
            {staff.map((person, index) => (
              <div key={person.name} className={styles.personOffset} data-offset={index % 4}>
                <PersonCard {...person} imageAlt={person.imageAlt || person.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={styles.darkCircle} aria-hidden="true" />
        <div className="site-container">
          <div className="section-label">Hunger Coalition of Atlanta</div>
          <div className={styles.staffIntroGrid}>
            <h2 className={`${styles.headline} ${styles.light}`}>Community power grows through partnership.</h2>
            <p className={styles.darkCopy}>
              The Hunger Coalition of Atlanta leadership and staff are part of the broader ecosystem of movement
              infrastructure, direct service, and community-rooted organizing connected to Project South.
            </p>
          </div>

          <div className={styles.staffGrid}>
            {hungerCoalition.map((person, index) => (
              <div key={person.name} className={styles.personOffset} data-offset={index % 4}>
                <PersonCard {...person} imageAlt={person.imageAlt || person.name} dark />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.explore}>
        <div className="site-container">
          <div className="section-label">Keep exploring</div>
          <div className={styles.exploreList}>
            <Link href="/initiatives/brownsville-futures" className={styles.exploreRow}>
              <span>Initiatives</span><Arrow />
            </Link>
            <Link href="/press-releases" className={styles.exploreRow}>
              <span>Press Releases</span><Arrow />
            </Link>
            <a href={donateHref} className={styles.exploreRow}>
              <span>Donate</span><Arrow />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
