export type SouthernMedia = {
  src?: string;
  alt: string;
  caption?: string;
};

export const southernOrganizingAreas = [
  "Local, regional, frontline + global assemblies",
  "Coordinating mutual aid projects",
  "Redistributing resources",
  "Education + training initiatives",
] as const;

export const southernAnchorOrganizations = [
  "Alternate ROOTS",
  "Black Workers for Justice",
  "Concerned Citizens for Justice",
  "Crescent City Media Group",
  "Georgia Citizens’ Coalition on Hunger",
  "Gulf Coast Center for Law & Policy",
  "National Council of Elders",
  "New Jim Crow Movement",
  "Southwest Workers Union",
  "SpiritHouse",
  "The Ordinary Peoples Society (TOPS)",
  "University Sin Fronteras",
  "Women Watch Afrika",
] as const;

export const southernLinks = {
  assembly: "https://assemblyofassemblies.my.canva.site/",
  pmaHandbook: "https://projectsouth.org/wp-content/uploads/2023/04/PMA-Handbook.pdf",
  k20Report: "https://assemblyofassemblies.my.canva.site/k20-report",
  wfrVideo: "https://www.youtube.com/watch?v=eQiQWKz3gPA",
  youtubeChannel: "https://www.youtube.com/channel/UCK9_-Wznq0NNMXY5i79hpzA",
} as const;

export const southernMedia: Record<string, SouthernMedia> = {
  intro: {
    src: "/images/southern-organizing/11-scaled.webp",
    alt: "Project South Southern Organizing work",
  },
  assembly: {
    src: "/images/southern-organizing/Screenshot-2026-06-03-at-6.52.22-AM.webp",
    alt: "Assembly of Assemblies gathering",
  },
  pma: {
    src: "/images/southern-organizing/20-1-scaled.webp",
    alt: "People’s Movement Assembly organizing",
  },
  katrina: {
    src: "/images/southern-organizing/Katrina-new-orleans-flooding3-2005.webp",
    alt: "View of flooded New Orleans in the aftermath of Hurricane Katrina",
    caption: "View of flooded New Orleans in the aftermath of Hurricane Katrina",
  },
  medic: {
    src: "/images/southern-organizing/Screenshot 2026-08-11 at 8.36.35 PM.png",
    alt: "Project South Wilderness First Responder training",
  },
};
