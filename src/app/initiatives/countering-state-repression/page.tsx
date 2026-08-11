import { ImageGallery } from "@/components/media/ImageGallery";
import { MediaBlock } from "@/components/media/MediaBlock";
import { VideoThumbnail } from "@/components/media/VideoThumbnail";
import { InitiativeLinks } from "@/components/ui/InitiativeLinks";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  counteringStateRepression,
  counteringStateRepressionMedia,
} from "@/data/countering-state-repression";
import styles from "./page.module.css";

export default function CounteringStateRepressionPage() {
  const content = counteringStateRepression;
  const media = counteringStateRepressionMedia;

  return (
    <>
      <section className={styles.intro}>
        <div className="site-container">
          <SectionLabel>{content.intro.eyebrow}</SectionLabel>
          <h1 className={styles.pageTitle}>
            {content.intro.title[0]}
            <br />
            <span>{content.intro.title[1]}</span>
          </h1>

          <div className={styles.introGrid}>
            <h2>{content.intro.headline}</h2>
            <div>
              <p className={styles.meta}>{content.intro.meta}</p>
              <p className={styles.summary}>{content.intro.summary}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`site-container ${styles.twoColumn}`}>
          <div>
            <SectionLabel>Movement Lawyering</SectionLabel>
            <div className={styles.mediaWrap}>
              <MediaBlock
                src={media.intro.src}
                alt={media.intro.alt}
                caption={media.intro.caption}
                aspect="square"
              />
            </div>
          </div>

          <div>
            <h2 className={styles.sectionHeadline}>
              {content.movementLawyering.headline}
            </h2>
            <div className={styles.bodyGrid}>
              <p>{content.movementLawyering.body[0]}</p>
              <p className={styles.muted}>{content.movementLawyering.body[1]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.softSection}>
        <div className={`site-container ${styles.labelGrid}`}>
          <SectionLabel>What the work confronts</SectionLabel>
          <div>
            <h2 className={styles.sectionHeadline}>
              Repression changes form. The work has to meet it there.
            </h2>

            <div className={styles.focusGrid}>
              {content.focusAreas.map((item) => (
                <article key={item.label} className={styles.focusCard}>
                  <p className={styles.meta}>{item.label}</p>
                  <h3>{item.copy}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.darkSection}>
        <div className={`site-container ${styles.darkGrid}`}>
          <div>
            <SectionLabel>Law + Liberation</SectionLabel>
            <h2 className={`${styles.sectionHeadline} ${styles.lightHeadline}`}>
              {content.lawAndLiberation.headline}
            </h2>
            <p className={styles.darkBody}>{content.lawAndLiberation.body[0]}</p>
            <p className={styles.darkBody}>{content.lawAndLiberation.body[1]}</p>
          </div>

          <VideoThumbnail
            href={content.lawAndLiberation.videoHref}
            imageSrc={media.video.src}
            imageAlt={media.video.alt}
            eyebrow={content.lawAndLiberation.videoEyebrow}
            title={content.lawAndLiberation.videoTitle}
          />
        </div>
      </section>

      <section className={styles.section}>
        <div className={`site-container ${styles.labelGrid}`}>
          <SectionLabel>From the field</SectionLabel>
          <div>
            <h2 className={styles.sectionHeadline}>{content.galleryHeadline}</h2>
            <div className={styles.galleryWrap}>
              <ImageGallery images={media.gallery} />
            </div>
          </div>
        </div>
      </section>

      <InitiativeLinks excludeHref="/initiatives/countering-state-repression" />
    </>
  );
}
