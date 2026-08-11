import Link from "next/link";
import { MediaBlock } from "@/components/media/MediaBlock";
import { VideoThumbnail } from "@/components/media/VideoThumbnail";
import { InitiativeLinks } from "@/components/ui/InitiativeLinks";
import {
  southernAnchorOrganizations,
  southernLinks,
  southernMedia,
  southernOrganizingAreas,
} from "@/data/southern-organizing";
import styles from "./page.module.css";

export default function SouthernOrganizingPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className="site-container">
          <div className="section-label">Initiative</div>
          <h1 className={styles.title}>
            Southern
            <br />
            <span>Organizing</span>
          </h1>

          <div className={styles.introGrid}>
            <h2>Movements need places to converge, learn, and govern together.</h2>
            <div>
              <div className={styles.smallLabel}>Movement infrastructure · U.S. South</div>
              <p>
                Southern Organizing builds, flanks, and fortifies movement
                infrastructure, movement education, and movement governance to grow
                movement power rooted in the U.S. South.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`site-container ${styles.twoColumn}`}>
          <div>
            <div className="section-label">Southern Organizing Work</div>
            <div className={styles.mediaTop}>
              <MediaBlock
                src={southernMedia.intro.src}
                alt={southernMedia.intro.alt}
                caption={southernMedia.intro.caption}
              />
            </div>
          </div>

          <div>
            <h2 className={styles.headline}>Infrastructure is what lets movement power travel.</h2>
            <p className={styles.muted}>
              The initiative works across local, regional, frontline, and global
              formations—coordinating assemblies, mutual aid, resource redistribution,
              education, and training.
            </p>

            <div className={styles.areaGrid}>
              {southernOrganizingAreas.map((item) => (
                <div key={item} className={styles.areaItem}>
                  <span aria-hidden="true">+</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`site-container ${styles.darkGrid}`}>
          <div>
            <div className="section-label">Assembly of Assemblies</div>
            <h2 className={`${styles.headline} ${styles.light}`}>A defining moment demands coordinated action.</h2>
            <p>
              The <a href={southernLinks.assembly}>Assembly of Assemblies</a> is a
              convening of representatives from organized bases working on critical
              frontlines to resist fascism and transform our world.
            </p>
            <p>
              A national effort led by Southern organizations, rooted in Black Radical
              Traditions, and in practice with the ten K20 Movement Agreements, the
              Assembly will converge April 8–11, 2027 in Tunica, Mississippi.
            </p>
            <p>
              The conditions demand bold action, radical imagination, coordinated
              action, and movement infrastructure at a scale we have yet to fully
              realize.
            </p>
            <a className={styles.redButton} href={southernLinks.assembly}>
              Visit Assembly of Assemblies <span aria-hidden="true">→</span>
            </a>
          </div>

          <MediaBlock
            src={southernMedia.assembly.src}
            alt={southernMedia.assembly.alt}
            caption={southernMedia.assembly.caption}
          />
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={`site-container ${styles.labelGrid}`}>
          <div>
            <div className="section-label">People’s Movement Assembly</div>
            <div className={styles.mediaTop}>
              <MediaBlock
                src={southernMedia.pma.src}
                alt={southernMedia.pma.alt}
                caption={southernMedia.pma.caption}
              />
            </div>
          </div>

          <div>
            <h2 className={styles.headline}>A methodology for turning collective analysis into power.</h2>
            <p>
              The <a href={southernLinks.pmaHandbook}>People’s Movement Assembly Handbook</a>{" "}
              is designed for organizers, educators, activists, and community members
              who want to use the People’s Movement Assembly methodology to build power
              in their community, on their frontline struggle, and in social movements.
            </p>
            <a className={styles.editorialLink} href={southernLinks.pmaHandbook}>
              Open the People’s Movement Assembly Handbook <span aria-hidden="true">→</span>
            </a>

            <div className={styles.anchors}>
              <div className={styles.smallLabel}>
                Produced with Southern Movement Assembly anchors + leaders
              </div>
              <div className={styles.tags}>
                {southernAnchorOrganizations.map((org) => (
                  <span key={org}>{org}</span>
                ))}
              </div>
              <p className={styles.smallMuted}>
                Special acknowledgments to Jozan Powell, Cita Cook, Dan Leahy, Drost
                Kokoye, and Colette Pichon Battle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`site-container ${styles.twoColumn}`}>
          <div>
            <div className="section-label">Katrina 20 Movement Assembly</div>
            <div className={styles.mediaTop}>
              <MediaBlock
                src={southernMedia.katrina.src}
                alt={southernMedia.katrina.alt}
                caption={southernMedia.katrina.caption}
              />
            </div>
          </div>

          <div>
            <h2 className={styles.headline}>A report can be more than a record. It can be an organizing tool.</h2>
            <p>
              The Katrina 20 Movement Assembly Synthesis Report & Organizing Handbook is
              a tool and an invitation to organize.
            </p>
            <p className={styles.muted}>
              Created following the K20 People’s Movement Assembly, the report includes
              descriptions of the organizing and synthesis process, the full Katrina 20
              Solidarity Statement, planning worksheets to develop an assembly, and the
              organizations and groups that engaged and affirmed the process.
            </p>
            <p className={styles.muted}>
              When people agree on direction and practice political values with rigor
              and love, they begin to shape the future on their own terms.
            </p>
            <a className={styles.editorialLink} href={southernLinks.k20Report}>
              Read the Katrina 20 Report <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.dark}`}>
        <div className={`site-container ${styles.darkGrid}`}>
          <div>
            <div className="section-label">Community Medic Trainings</div>
            <h2 className={`${styles.headline} ${styles.light}`}>When the state fails, communities still need someone to call.</h2>
            <p>
              When the lights go out. When disaster hits. Who do we call? Each other.
              Project South’s work of building strong social movements also includes
              growing leadership, education, healing, and disciplined emergency response.
            </p>
            <p>
              During summer 2025, Project South piloted a 90-hour Wilderness First
              Responder training through the Building A Movement Institute at its rural
              Georgia sanctuary space.
            </p>

            <div className={styles.statGrid}>
              <div className={styles.statRed}>
                <div className={styles.smallLabelLight}>Certified responders</div>
                <strong>18</strong>
              </div>
              <div className={styles.statDark}>
                <div className={styles.smallLabel}>Youth responders · ages 5–12</div>
                <strong>7</strong>
              </div>
            </div>
          </div>

          <div>
            <VideoThumbnail
              href={southernLinks.wfrVideo}
              imageSrc={southernMedia.medic.src}
              imageAlt={southernMedia.medic.alt}
              eyebrow="Project South"
              title="Wilderness First Responder Training"
            />
            <p>
              Participants trained in CPR, trauma care, bleed control, mass-casualty
              response, and other lifesaving skills. The program reframes emergency
              medicine for “austere environments”—from hurricane aftermaths to mass
              shootings.
            </p>
            <p>
              Back in their home communities, participants are strengthening mutual aid
              liberation centers, sanctuary land projects, and long-term resilience
              across the South.
            </p>
            <div className={styles.credit}>
              Video by <a href={southernLinks.youtubeChannel}>Project South on YouTube</a>
            </div>
          </div>
        </div>
      </section>

      <InitiativeLinks excludeHref="/initiatives/southern-organizing" />
    </>
  );
}
