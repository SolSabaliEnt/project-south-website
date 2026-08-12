export type BrownsvilleMedia = {
  src?: string;
  alt: string;
  caption?: string;
};

export const brownsvilleSkills = [
  "Leadership",
  "Critical thinking",
  "Media making + advocacy skills",
  "Community organizing skills",
] as const;

export const brownsvilleMedia: Record<string, BrownsvilleMedia> = {
  intro: {
    src: "/images/brownsville-futures/IMG_0729-2-scaled-e1780425158293.webp",
    alt: "Mutual Aid Liberation Center and Brownsville Futures community work",
    caption: "",
  },
  septima: {
    src: "/images/brownsville-futures/septima.webp",
    alt: "Septima Clark Community Power Institute youth fellowship",
    caption: "",
  },
  garden: {
    src: "/images/brownsville-futures/IMG_9988-scaled.webp",
    alt: "Umoja Garden in South Atlanta",
    caption: "",
  },
  rooted: {
    src: "/images/brownsville-futures/Screenshot 2026-08-11 at 8.32.30 PM.png",
    alt: "Rooted to Build Brownsville redevelopment",
    caption: "",
  },
};

export const rootedToBuildDocumentaryHref = "#";
