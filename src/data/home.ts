export type HomeMedia = {
  src: string | null;
  alt: string;
  caption?: string;
};

export const homeInitiatives = [
  {
    number: "01",
    title: "Brownsville Futures",
    href: "/initiatives/brownsville-futures",
  },
  {
    number: "02",
    title: "Countering State Repression",
    href: "/initiatives/countering-state-repression",
  },
  {
    number: "03",
    title: "Southern Organizing",
    href: "/initiatives/southern-organizing",
  },
  {
    number: "04",
    title: "Movement Operations",
    href: "/initiatives/movement-operations",
  },
] as const;

export const homeStories = [
  {
    label: "ASSEMBLY OF ASSEMBLIES",
    headline:
      "Hundreds of organizations are preparing to meet in Mississippi. What happens after they leave matters just as much.",
    meta: "APRIL 8–11, 2027 · TUNICA, MISSISSIPPI",
    href: "https://assemblyofassemblies.my.canva.site/",
  },
  {
    label: "ATL GET READY",
    headline: "Community safety cannot begin and end with policing.",
    meta: "CURRENT CAMPAIGN",
    href: "#",
  },
  {
    label: "40TH ANNIVERSARY",
    headline:
      "Forty years later, the people who came through Project South are still carrying the work forward.",
    meta: "1986—2026",
    href: "#archive",
  },
] as const;

// Add production image paths here as assets are moved into /public.
// Leaving a src as null intentionally removes the media block without breaking layout.
export const homeMedia = {
  record1: {
    src: null,
    alt: "Project South archival image",
    caption: "",
  },
  record2: {
    src: null,
    alt: "Project South archival image",
    caption: "",
  },
  work: {
    src: null,
    alt: "Project South movement work",
    caption: "",
  },
  now: {
    src: null,
    alt: "Project South current organizing",
    caption: "",
  },
  field: {
    src: null,
    alt: "Project South organizing in the field",
    caption: "",
  },
  people: {
    src: null,
    alt: "Project South organizers and community members",
    caption: "",
  },
  archive: {
    src: null,
    alt: "Project South movement archive",
    caption: "",
  },
} satisfies Record<string, HomeMedia>;
