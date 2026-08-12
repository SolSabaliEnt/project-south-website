import Image from "next/image";
import { InitiativeLinks } from "@/components/ui/InitiativeLinks";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  brownsvilleMedia,
  brownsvilleSkills,
  rootedToBuildDocumentaryHref,
} from "@/data/brownsville";
import styles from "./page.module.css";

function Media({ src, alt, caption, aspect = "landscape", dark = false }: { src?: string; alt: string; caption?: string; aspect?: "landscape" | "portrait"; dark?: boolean }) {
  return (
    <figure className={styles.mediaBlock}>
      <div className={`${styles.mediaFrame} ${aspect === "portrait" ? styles.mediaPortrait : styles.mediaLandscape} ${dark ? styles.mediaDark : ""}`}>
        {src ? <Image src={src} alt={alt} fill sizes="(max-width: 820px) 100vw, 40vw" className={styles.mediaImage} /> : <div className={styles.mediaPlaceholder}>Image placeholder</div>}
      </div>
      {caption ? <figcaption className={styles.mediaCaption}>{caption}</figcaption> : null}
    </figure>
  );
}

export default function BrownsvilleFuturesPage() {
  return (
    <>
      <section className={styles.intro}><div className="site-container"><SectionLabel>Initiative</SectionLabel><h1 className={styles.title}>Brownsville<br /><span>Futures</span></h1><div className={styles.introGrid}><h2 className={styles.introHeadline}>Community governance has an address.</h2><div><p className={styles.eyebrow}>9 Gammon · South Atlanta</p><p className={styles.mutedBody}>A land-based practice for community governance of the Mutual Aid Liberation Center, developed in partnership with the Hunger Coalition of Atlanta.</p></div></div></div></section>

      <section className={styles.section}><div className={`site-container ${styles.splitMediaLeft}`}><div><SectionLabel>Mutual Aid Liberation Center</SectionLabel><div className={styles.mediaTopGap}><Media {...brownsvilleMedia.intro} /></div></div><div><h2 className={styles.sectionHeadline}>A community center built around what people need.</h2><div className={styles.twoColumnBody}><p>The Brownsville Futures Initiative is a land-based practice for community governance of the Mutual Aid Liberation Center at 9 Gammon, in partnership between the Hunger Coalition of Atlanta and Project South.</p><p className={styles.mutedBody}>The MALC provides direct services, community-based education, and movement convergence while drawing from the history of Black Reconstruction in the neighborhood and throughout the U.S. South.</p></div></div></div></section>

      <section className={`${styles.section} ${styles.softSection}`}><div className={`site-container ${styles.splitTextLeft}`}><div><SectionLabel>Septima Clark Community Power Institute</SectionLabel><h2 className={`${styles.sectionHeadline} ${styles.sectionHeadlineGap}`}>Youth power is built, not discovered.</h2><p className={`${styles.mutedBody} ${styles.bodyTopGap}`}>Brownsville Futures continues to hold its annual Septima Clark Community Power Institute, a four-week summer fellowship for Atlanta youth ages 13–18.</p><div className={styles.skillsGrid}>{brownsvilleSkills.map((item) => <div key={item} className={styles.skillItem}><span aria-hidden="true">+</span><strong>{item}</strong></div>)}</div><p className={styles.bodyTopGap}>Participants connect with other young people, organizers, educators, and activists, and lead a real organizing process to help build youth power in Atlanta.</p></div><Media {...brownsvilleMedia.septima} aspect="portrait" /></div></section>

      <section className={styles.section}><div className={`site-container ${styles.splitMediaLeft}`}><div><SectionLabel>Umoja Garden</SectionLabel><div className={styles.mediaTopGap}><Media {...brownsvilleMedia.garden} /></div></div><div><h2 className={styles.sectionHeadline}>Food is movement infrastructure, too.</h2><p className={styles.bodyTopGap}>In partnership with the Hunger Coalition of Atlanta, Brownsville Futures helps steward a five-acre South Atlanta farm.</p><div className={styles.featureGrid}><article className={styles.featureDark}><p className={styles.featureLabel}>Community food</p><h3>Free organic produce for the community.</h3></article><article className={styles.featureRed}><p className={styles.featureLabel}>Weekly garden days</p><h3>Residents learn to plant and harvest their own healthy food.</h3></article></div><p className={`${styles.mutedBody} ${styles.bodyTopGap}`}>Garden days are held weekly during the spring and summer.</p></div></div></section>

      <section className={`${styles.section} ${styles.darkSection}`}><div className={`site-container ${styles.rootedGrid}`}><div><SectionLabel>Rooted to Build</SectionLabel><h2 className={`${styles.sectionHeadline} ${styles.lightHeadline} ${styles.sectionHeadlineGap}`}>Help us redevelop our Brownsville home.</h2><p className={`${styles.darkBody} ${styles.bodyTopGap}`}>Learn more about what “Rooted to Build” means through Project South’s short documentary.</p>{rootedToBuildDocumentaryHref === "#" ? <span className={styles.documentaryButton} aria-disabled="true"><span className={styles.playIcon} aria-hidden="true">▶</span>Watch the short documentary</span> : <a href={rootedToBuildDocumentaryHref} className={styles.documentaryButton}><span className={styles.playIcon} aria-hidden="true">▶</span>Watch the short documentary</a>}</div><Media {...brownsvilleMedia.rooted} dark /></div></section>

      <InitiativeLinks excludeHref="/initiatives/brownsville-futures" />
    </>
  );
}
