export type AboutPerson = {
  name: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export const aboutHeaderMedia = {
  src: undefined as string | undefined,
  alt: "Project South community",
  position: "center center",
  caption: "",
};

const defaultPosition = "center 32%";

export const leadership: AboutPerson[] = [
  { name: "Emery Wright", title: "Executive Director", imagePosition: defaultPosition },
  { name: "Shelley Danzy", title: "Director of Development", imagePosition: defaultPosition },
  { name: "La’Die Mansfeld", title: "Director of Programs", imagePosition: defaultPosition },
  { name: "Marc Turk", title: "Director of Finance", imagePosition: defaultPosition },
  { name: "Azadeh Shahshahani", title: "Director of Legal and Advocacy", imagePosition: defaultPosition },
  { name: "Annie Thomas", title: "Director of Southern Organizing", imagePosition: defaultPosition },
  { name: "Hanifah Shoatz-Bey", title: "Director of Operations", imagePosition: defaultPosition },
  { name: "Ra’Niqua Lee", title: "Associate Director", imagePosition: defaultPosition },
];

export const staff: AboutPerson[] = [
  { name: "Stephanie Guilloud", title: "Movement Organizing Senior Strategist", imagePosition: defaultPosition },
  { name: "Priyanka Bhatt", title: "Senior Staff Attorney", imagePosition: defaultPosition },
  { name: "Nanyamka Shukura", title: "Movement Administrative Coordinator", imagePosition: defaultPosition },
  { name: "Bassey Etuk", title: "Movement Organizer", imagePosition: defaultPosition },
  { name: "Imani Austin", title: "Organizing Programs Assistant", imagePosition: defaultPosition },
  { name: "Nautica Jenkins", title: "Youth Programs Multimedia Coordinator", imagePosition: defaultPosition },
  { name: "Ayinde Summers", title: "Land and Freedom Project Coordinator", imagePosition: defaultPosition },
  { name: "Aljosie Aldrich Harding", title: "Movement Elder in Residence", imagePosition: defaultPosition },
  { name: "Desiree Evans", title: "Senior Narrative Strategist", imagePosition: defaultPosition },
  { name: "Evelyn Zachary", title: "Movement Organizer", imagePosition: defaultPosition },
  { name: "Brandon Pittman", title: "Facilities Maintenance Assistant", imagePosition: defaultPosition },
  { name: "Kumasi Amin", title: "Movement Organizer", imagePosition: defaultPosition },
  { name: "Solidad Tillman", title: "Operations Manager", imagePosition: defaultPosition },
  { name: "Sofía Veronica Montez", title: "Staff Attorney", imagePosition: defaultPosition },
  { name: "Jemar Raheem", title: "Education & Training", imagePosition: defaultPosition },
  { name: "Tina Al-kherson", title: "Staff Attorney", imagePosition: defaultPosition },
];

export const hungerCoalition: AboutPerson[] = [
  { name: "Carolyn Pittman", title: "Executive Director", imagePosition: defaultPosition },
  { name: "Antionio Barksdale", title: "Director of Operations", imagePosition: defaultPosition },
  { name: "Toyia Gray", title: "Community Organizer / MALC Coordinator", imagePosition: defaultPosition },
  { name: "Melissa Pittman", title: "Director of Administration", imagePosition: defaultPosition },
  { name: "Kenyetta Brown", title: "Project Coordinator, Hunger Hotline", imagePosition: defaultPosition },
  { name: "Randall Pittman", title: "Operations Assistant", imagePosition: defaultPosition },
  { name: "Bryanna Bassey", title: "Volunteer", imagePosition: defaultPosition },
];
