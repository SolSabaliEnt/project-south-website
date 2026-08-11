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

// Move approved production images into /public and set their paths here.
// Empty src values intentionally keep the layout intact with placeholders.
export const brownsvilleMedia: Record<string, BrownsvilleMedia> = {
  intro: {
    src: "",
    alt: "Mutual Aid Liberation Center and Brownsville Futures community work",
    caption: "",
  },
  septima: {
    src: "",
    alt: "Septima Clark Community Power Institute youth fellowship",
    caption: "",
  },
  garden: {
    src: "",
    alt: "Umoja Garden in South Atlanta",
    caption: "",
  },
  rooted: {
    src: "",
    alt: "Rooted to Build Brownsville redevelopment",
    caption: "",
  },
};

// The source confirms a short documentary exists, but the uploaded materials
// do not expose its destination URL. Replace this when the actual link is available.
export const rootedToBuildDocumentaryHref = "#";
