export type InitiativeMedia = {
  src?: string;
  alt: string;
  caption?: string;
};

export const counteringStateRepression = {
  intro: {
    eyebrow: "Initiative",
    title: ["Countering", "State Repression"],
    headline: "When state power expands, movements need defense.",
    meta: "Movement lawyering · advocacy",
    summary:
      "A movement lawyering project working against surveillance, detention, rights violations, and repression while supporting movements in the U.S. South and the Global South.",
  },
  movementLawyering: {
    headline: "Rights are defended in the places power tries to narrow them.",
    body: [
      "The Countering State Repression Initiative works to prevent counter-movement and state surveillance attempts and to shut down Georgia ICE prisons.",
      "The initiative protects fundamental rights for Black, Muslim, and migrant populations while supporting social justice movements in the Global South.",
    ],
  },
  focusAreas: [
    {
      label: "Surveillance",
      copy: "Prevent counter-movement and state surveillance attempts.",
    },
    {
      label: "ICE Prisons",
      copy: "Shut down Georgia ICE prisons.",
    },
    {
      label: "Fundamental Rights",
      copy: "Protect Black, Muslim, and migrant populations.",
    },
    {
      label: "Global Solidarity",
      copy: "Support social justice movements in the Global South.",
    },
  ],
  lawAndLiberation: {
    headline: "Human rights abuses don’t occur in a vacuum.",
    body: [
      "Global systems can enable violence without accountability. Liberation seeks to dismantle those systems so people can thrive in safety and with dignity.",
      "Listen to Director of Legal and Advocacy Azadeh Shahshahani discuss European colonialism, interventionism, international violence, and how those dynamics return to shape domestic rights violations.",
    ],
    videoHref: "#",
    videoEyebrow: "Law at the Margins",
    videoTitle: "Law + Liberation: Episode 12 — Human Rights",
  },
  galleryHeadline: "Movement defense is collective work.",
} as const;

// Add production image paths once the final assets are copied into /public.
export const counteringStateRepressionMedia = {
  intro: {
    alt: "Countering State Repression organizing",
    caption: "",
  },
  video: {
    alt: "Law + Liberation video thumbnail",
  },
  gallery: [
    {
      alt: "Countering State Repression field image 1",
      caption: "From the field",
    },
    {
      alt: "Countering State Repression field image 2",
      caption: "From the field",
    },
    {
      alt: "United Against Racism and Islamophobia group gathering",
      caption: "United against racism & Islamophobia",
    },
    {
      alt: "Countering State Repression field image 4",
      caption: "From the field",
    },
  ],
} satisfies {
  intro: InitiativeMedia;
  video: InitiativeMedia;
  gallery: InitiativeMedia[];
};
