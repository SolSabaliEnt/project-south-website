export type AboutPerson = {
  name: string;
  title: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: string;
};

export const aboutHeaderMedia = {
  src: "/images/about/header/IMG_4358-scaled.webp",
  alt: "Project South community gathering",
  position: "center center",
  caption: "",
};

const defaultPosition = "center 32%";

export const leadership: AboutPerson[] = [
  { name: "Emery Wright", title: "Executive Director", imageSrc: "/images/about/leadership/EMERY-WRIGHT.webp", imagePosition: defaultPosition },
  { name: "Shelley Danzy", title: "Director of Development", imageSrc: "/images/about/leadership/SHELLEY-DANZY.webp", imagePosition: defaultPosition },
  { name: "La’Die Mansfeld", title: "Director of Programs", imageSrc: "/images/about/leadership/LADIE-MANSFIELD.webp", imagePosition: defaultPosition },
  { name: "Marc Turk", title: "Director of Finance", imageSrc: "/images/about/leadership/Revised_Marc-Turk-scaled.webp", imagePosition: defaultPosition },
  { name: "Azadeh Shahshahani", title: "Director of Legal and Advocacy", imageSrc: "/images/about/leadership/AZADEH-SHAHSHAHANI.webp", imagePosition: defaultPosition },
  { name: "Annie Thomas", title: "Director of Southern Organizing", imageSrc: "/images/about/leadership/ANNIE-THOMAS.webp", imagePosition: defaultPosition },
  { name: "Hanifah Shoatz-Bey", title: "Director of Operations", imageSrc: "/images/about/leadership/Hanifah-Shoatz-Bey.webp", imagePosition: defaultPosition },
  { name: "Ra’Niqua Lee", title: "Associate Director", imageSrc: "/images/about/leadership/Raniqua-lee-headshot.webp", imagePosition: defaultPosition },
];

export const staff: AboutPerson[] = [
  { name: "Stephanie Guilloud", title: "Movement Organizing Senior Strategist", imageSrc: "/images/about/staff/STEPHANIE-GUILLOUD.webp", imagePosition: defaultPosition },
  { name: "Priyanka Bhatt", title: "Senior Staff Attorney", imageSrc: "/images/about/staff/PRIYANKA-BHATT.webp", imagePosition: defaultPosition },
  { name: "Nanyamka Shukura", title: "Movement Administrative Coordinator", imageSrc: "/images/about/staff/NANYAMKA-SHUKURA.webp", imagePosition: defaultPosition },
  { name: "Bassey Etuk", title: "Movement Organizer", imageSrc: "/images/about/staff/Bassey-Etuk.webp", imagePosition: defaultPosition },
  { name: "Imani Austin", title: "Organizing Programs Assistant", imageSrc: "/images/about/staff/IMANI-AUSTIN.webp", imagePosition: defaultPosition },
  { name: "Nautica Jenkins", title: "Youth Programs Multimedia Coordinator", imageSrc: "/images/about/staff/NAUTICA-JENKINS.webp", imagePosition: defaultPosition },
  { name: "Ayinde Summers", title: "Land and Freedom Project Coordinator", imageSrc: "/images/about/staff/AYINDE-SUMMERS-2.webp", imagePosition: defaultPosition },
  { name: "Aljosie Aldrich Harding", title: "Movement Elder in Residence", imageSrc: "/images/about/staff/ALJOSIE-ALDRICH-HARDING.webp", imagePosition: defaultPosition },
  { name: "Desiree Evans", title: "Senior Narrative Strategist", imageSrc: "/images/about/staff/desiree-pic.webp", imagePosition: defaultPosition },
  { name: "Evelyn Zachary", title: "Movement Organizer", imageSrc: "/images/about/staff/Evelyn-Zachery.webp", imagePosition: defaultPosition },
  { name: "Brandon Pittman", title: "Facilities Maintenance Assistant", imageSrc: "/images/about/staff/Brandon-Pittman.webp", imagePosition: defaultPosition },
  { name: "Kumasi Amin", title: "Movement Organizer", imageSrc: "/images/about/staff/KUMASI-McFARLAND.webp", imagePosition: defaultPosition },
  { name: "Solidad Tillman", title: "Operations Manager", imageSrc: "/images/about/staff/Solidad-Tillman-1.webp", imagePosition: defaultPosition },
  { name: "Sofía Veronica Montez", title: "Staff Attorney", imageSrc: "/images/about/staff/sofia-v-martez-webedit.webp", imagePosition: defaultPosition },
  { name: "Jemar Raheem", title: "Education & Training", imageSrc: "/images/about/staff/JEMAR-RAHEEM.webp", imagePosition: defaultPosition },
  { name: "Tina Al-kherson", title: "Staff Attorney", imageSrc: "/images/about/staff/tina.webp", imagePosition: defaultPosition },
];

export const hungerCoalition: AboutPerson[] = [
  { name: "Carolyn Pittman", title: "Executive Director", imageSrc: "/images/about/hunger-coalition/CAROLYN-PITTMAN.webp", imagePosition: defaultPosition },
  { name: "Antionio Barksdale", title: "Director of Operations", imageSrc: "/images/about/hunger-coalition/ANTONIO-BARKSDALE.webp", imagePosition: defaultPosition },
  { name: "Toyia Gray", title: "Community Organizer / MALC Coordinator", imageSrc: "/images/about/hunger-coalition/TOYIA-GRAY.webp", imagePosition: defaultPosition },
  { name: "Melissa Pittman", title: "Director of Administration", imageSrc: "/images/about/hunger-coalition/MELISSA-PITTMAN.webp", imagePosition: defaultPosition },
  { name: "Kenyetta Brown", title: "Project Coordinator, Hunger Hotline", imageSrc: "/images/about/hunger-coalition/KENYATTA-BROWN.webp", imagePosition: defaultPosition },
  { name: "Randall Pittman", title: "Operations Assistant", imageSrc: "/images/about/hunger-coalition/Photo_Randall-Pittman_2024.webp", imagePosition: defaultPosition },
  { name: "Bryanna Bassey", title: "Volunteer", imageSrc: "/images/about/hunger-coalition/BRYANNA-BASSEY.webp", imagePosition: defaultPosition },
];
