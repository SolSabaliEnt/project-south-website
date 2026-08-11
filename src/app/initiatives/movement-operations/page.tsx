import { MediaBlock } from "@/components/media/MediaBlock";
import { InitiativeLinks } from "@/components/ui/InitiativeLinks";
import {
  movementOperationsMedia,
  movementOperationsSupportAreas,
} from "@/data/movement-operations";
import styles from "./page.module.css";

export default function MovementOperationsPage() {
  return (
    <>
      <section className={styles.intro}>
        <div className="site-container">
          <div className="section-label">Initiative</div>
          <h1 className={styles.title}>
            Movement
            <br />
            <span>Operations</span>
          </h1>

          <div className={styles.introGrid}>
            <h2>The work behind the work is movement work.</h2>
            <div>
              <div className={styles.smallLabel}>
                Movement infrastructure · regional support
              </div>
              <p>
                Movement Operations strengthens Project South’s development as a
                Movement Anchor Organization and expands regional fiscal sponsorship
                and movement support capacity with partners and peer anchors.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`site-container ${styles.twoColumn}`}>
          <div>
            <div className="section-label">Movement Anchor Organization</div>
            <div className={styles.mediaTop}>
              <MediaBlock
                src={movementOperationsMedia.operations.src}
                alt={movementOperationsMedia.operations.alt}
                caption={movementOperationsMedia.operations.caption}
              />
            </div>
          </div>

          <div>
            <h2 className={styles.headline}>
              Strong movements need organizations built to hold the work.
            </h2>

            <div className={styles.copyGrid}>
              <p>
                The Movement Operations Initiative strengthens Project South’s
                development as a Movement Anchor Organization.
              </p>
              <p className={styles.muted}>
                It also streamlines regional fiscal sponsorship and movement support
                capacity with partners, peer anchor organizations, movement operations
                projects, and practitioners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.soft}`}>
        <div className={`site-container ${styles.labelGrid}`}>
          <div className="section-label">What it strengthens</div>
          <div>
            <h2 className={styles.headline}>Capacity is part of the strategy.</h2>

            <div className={styles.supportGrid}>
              {movementOperationsSupportAreas.map((item) => (
                <article key={item.label} className={styles.supportItem}>
                  <div className={styles.smallLabel}>{item.label}</div>
                  <strong>{item.copy}</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statement}>
        <div className="site-container">
          <div className={`${styles.smallLabel} ${styles.smallLabelLight}`}>
            Movement Operations
          </div>
          <h2>
            Infrastructure is not separate from movement power. It helps sustain it.
          </h2>
        </div>
      </section>

      <InitiativeLinks excludeHref="/initiatives/movement-operations" />
    </>
  );
}
