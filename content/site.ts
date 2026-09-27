/**
 * Portfolio content. Edit this file to update the site.
 *
 * Projects use status:
 * - "shipped" — published work with repo and screenshots
 * - "in_progress" — started, repo or screens may still be missing
 * - "planned" — not built yet; leave repoUrl null
 *
 * To add screenshots later, drop files in public/projects/<id>/ and append
 * to that project's images array: { src, alt, width, height }.
 */

export type ProjectStatus = "shipped" | "in_progress" | "planned";

export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label?: string;
};

export type ExternalLink = {
  label: string;
  href: string;
};

export type ProjectVisual = "flight" | "pipeline";

export type Project = {
  id: string;
  title: string;
  status: ProjectStatus;
  summary: string;
  stack: string[];
  repoUrl: string | null;
  liveUrl: string | null;
  extraLinks: ExternalLink[];
  images: ProjectImage[];
  highlights: string[];
  /** Designed interface when the project has no screenshot files. */
  visual?: ProjectVisual;
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export type EducationItem = {
  id: string;
  credential: string;
  school: string;
  dates: string;
  detail?: string;
};

export type SkillGroup = {
  id: string;
  title: string;
  note?: string;
  items: string[];
};

export const profile = {
  name: "Mohamed Boukadida",
  headline: "Backend / Software Engineer · M.Sc. Computer Science student",
  heroSupport:
    "Backend developer at MyOnCare in Munich, building APIs and containerized services, and open to Werkstudent roles in Bayern.",
  about:
    "Master’s CS student seeking a working-student role in backend and software development. I build secure REST APIs, OAuth integrations, and containerized microservices, with Docker, CI/CD, and automated tests in the delivery path. I am especially interested in DevOps and cloud data platforms. I currently work as a backend developer at MyOnCare in Munich on a regulated digital-health platform.",
  location: "Passau, Germany",
  locationDetail: "Open to Bayern and the Munich area, hybrid or on-site.",
  seeking:
    "Working student (Werkstudent) or part-time roles in backend, software engineering, DevOps, or fullstack.",
  email: "boukad01@ads.uni-passau.de",
  phoneDisplay: "+49 163 7104998",
  phoneHref: "tel:+491637104998",
  linkedin: "https://www.linkedin.com/in/mouhamed-boukadida",
  github: "https://github.com/Mrbkd11",
  resumePath: "/resume.pdf",
  studyStatus: "Master’s Computer Science, 4th semester, University of Passau",
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;

export const languages: { name: string; level: string | null }[] = [
  { name: "English", level: "C1" },
  { name: "German", level: "B1" },
  { name: "French", level: "B2" },
  { name: "Arabic", level: null },
];

export const education: EducationItem[] = [
  {
    id: "passau",
    credential: "M.Sc. Computer Science",
    school: "University of Passau, Germany",
    dates: "Oct 2024 – Present",
    detail: "4th semester",
  },
  {
    id: "supcom",
    credential: "ICT Engineering Degree",
    school: "SUPCOM (Higher School of Communication of Tunis)",
    dates: "Sep 2022 – Jun 2024",
  },
  {
    id: "monastir",
    credential: "Pre-Engineering Degree",
    school: "Monastir Preparatory Engineering Institute, Tunisia",
    dates: "Sep 2020 – Jun 2022",
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "myoncare",
    role: "Backend Developer",
    company: "MyOnCare",
    location: "Munich, Germany",
    dates: "May 2025 – Present",
    bullets: [
      "Backend integrations connecting patients’ wearable health devices (glucose monitors, activity trackers) to a digital health platform.",
      "REST APIs and microservices to import, process, and store health measurements.",
      "OAuth 2.0, consent handling, and account connect and disconnect flows.",
      "Contributed to the patient mobile app (React, Capacitor, TypeScript).",
      "Debugged full data flows from external providers into the platform database, using Git, Docker, code reviews, and automated tests.",
    ],
  },
  {
    id: "omnilink",
    role: "Software Engineer Intern",
    company: "Omnilink",
    location: "Tunis, Tunisia",
    dates: "Jun 2024 – Oct 2024",
    bullets: [
      "Backend REST APIs and data flow between microservices in production.",
      "Dockerized services and CI/CD with GitHub Actions.",
      "Testing and monitoring, Git workflows, and Agile delivery.",
    ],
  },
  {
    id: "finspot",
    role: "AI Engineer Intern",
    company: "Finspot Finance Consultancy",
    location: "Sousse, Tunisia",
    dates: "May 2023 – Sep 2023",
    bullets: [
      "Secure backend services for financial data processing and document automation.",
      "JWT authentication and role-based access control.",
      "A microservice that extracts structured data from financial documents for analytics and ML pipelines.",
      "REST endpoints for storing and reusing extracted records.",
    ],
  },
];

const wellbeingImages: ProjectImage[] = [
  {
    src: "/projects/wellbeing/welcome.webp",
    alt: "Well-Being app welcome screen with an illustration and a Go To Home button.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/wellbeing/login.webp",
    alt: "Well-Being app login screen with email and password fields.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/wellbeing/registration.webp",
    alt: "Well-Being app registration screen for creating an account.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/wellbeing/create-profile.webp",
    alt: "Well-Being app screen for completing a profile with gender, date of birth, weight, and height.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/wellbeing/profile.webp",
    alt: "Well-Being app profile screen with account settings and notification controls.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/wellbeing/hydration.webp",
    alt: "Well-Being app activity tracker showing water intake, step count, and a weekly progress chart.",
    width: 900,
    height: 2000,
  },
];

const coworkingImages: ProjectImage[] = [
  {
    src: "/projects/coworking/space-list.webp",
    alt: "Coworking Hub search screen listing coworking spaces.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/coworking/home.webp",
    alt: "Coworking Hub home screen with space booking and reservation actions.",
    width: 900,
    height: 2000,
  },
  {
    src: "/projects/coworking/map.webp",
    alt: "Coworking Hub map of coworking spaces around Ariana, Tunisia, with the nearest space and a rating.",
    width: 398,
    height: 658,
  },
  {
    src: "/projects/coworking/profile.webp",
    alt: "Coworking Hub profile screen with account details and a reservation count.",
    width: 317,
    height: 632,
  },
  {
    src: "/projects/coworking/submit-space.webp",
    alt: "Coworking Hub form for submitting a new coworking space.",
    width: 340,
    height: 742,
  },
];

/** Cropped app UI for the hero. System bars are removed so the frame is the product. */
export const heroImages: ProjectImage[] = [
  {
    src: "/projects/hero/hydration.webp",
    alt: "Well-Being activity tracker with water intake, steps, and a weekly chart.",
    width: 900,
    height: 1780,
    label: "Well-Being",
  },
  {
    src: "/projects/hero/coworking.webp",
    alt: "Coworking Hub home screen with space booking and reservations.",
    width: 900,
    height: 1780,
    label: "Coworking Hub",
  },
];

export const projects: Project[] = [
  {
    id: "well-being",
    title: "Well-Being Application",
    status: "shipped",
    summary:
      "A wellness platform for sleep tracking, hydration tracking, and a smart chatbot. The mobile client talks to Flask and Spring Boot microservices behind an Nginx reverse proxy, with JWT authentication.",
    stack: ["Flutter", "Flask", "Spring Boot", "Nginx", "JWT", "Microservices"],
    repoUrl: "https://github.com/mrbkd11/Projet-bien-etre",
    liveUrl: null,
    extraLinks: [],
    images: wellbeingImages,
    highlights: [
      "Sleep tracking, hydration tracking, and a chatbot in one product.",
      "Flutter client with Flask and Spring Boot services.",
      "Nginx reverse proxy and JWT auth between the client and the APIs.",
    ],
  },
  {
    id: "coworking-hub",
    title: "Coworking Hub",
    status: "shipped",
    summary:
      "Find, reserve, and manage coworking spaces, with maps, profiles, ratings, and an admin flow for submitting a space. Built as a Flutter client on a Spring Boot API with PostgreSQL.",
    stack: ["Flutter", "Spring Boot", "PostgreSQL"],
    repoUrl: "https://github.com/mrbkd11/Coworking-Hub",
    liveUrl: null,
    extraLinks: [
      {
        label: "Watch demo",
        href: "https://github.com/mrbkd11/Coworking-Hub/blob/main/demo.mp4",
      },
      {
        label: "Download APK",
        href: "https://github.com/mrbkd11/Coworking-Hub/blob/main/app-release.apk",
      },
    ],
    images: coworkingImages,
    highlights: [
      "Search, reserve, and manage coworking spaces.",
      "Map, profiles, ratings, and a form to submit a new space.",
      "Flutter, Spring Boot, and PostgreSQL.",
    ],
  },
  {
    id: "flight-alert",
    title: "Flight Alerts",
    status: "shipped",
    summary:
      "A Python CLI that checks one-way direct flights from Tunisia to Germany and Austria, then sends a Telegram message when a fare is a deal or drops. It samples the next calendar month from Tunis, Enfidha, and Monastir to Munich, Salzburg, Vienna, and Frankfurt.",
    stack: ["Python", "Travelpayouts", "Redis", "Telegram", "GitHub Actions"],
    repoUrl: "https://github.com/Mohamedboukadida-lang/flights-alert",
    liveUrl: null,
    extraLinks: [],
    images: [],
    visual: "flight",
    highlights: [
      "A deal alert fires at €150 or below, and a drop alert at €15 or 10%.",
      "Fares come from Travelpayouts, and the last price is kept in Redis.",
      "GitHub Actions runs the check every 12 hours.",
    ],
  },
  {
    id: "cicd-pipeline-lab",
    title: "CI/CD Pipeline Lab",
    status: "shipped",
    summary:
      "A sample backend service with an end-to-end delivery pipeline. GitHub Actions lints the code, runs the tests, builds a Docker image, and deploys that image to staging. The image is built only after the tests pass, and the previous tag stays available so a rollback is a redeploy.",
    stack: ["Docker", "GitHub Actions", "CI/CD", "Linux", "AWS", "Kubernetes"],
    repoUrl: null,
    liveUrl: null,
    extraLinks: [],
    images: [],
    visual: "pipeline",
    highlights: [
      "Lint, test, image build, and staging deploy run as separate jobs.",
      "The image build waits until the test job is green.",
      "Staging keeps the previous tag, so a rollback redeploys that image.",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    items: ["Python", "Java", "C++", "TypeScript", "PHP"],
  },
  {
    id: "backend",
    title: "Backend",
    items: [
      "Django",
      "Flask",
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "JWT",
      "Express.js",
      "Laravel",
      "Microservices",
      "CQRS / event-driven concepts",
    ],
  },
  {
    id: "frontend",
    title: "Frontend & mobile",
    items: ["React (including Capacitor)", "Angular", "Flutter"],
  },
  {
    id: "data",
    title: "Data",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Firebase", "NoSQL"],
  },
  {
    id: "devops",
    title: "DevOps & cloud",
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "AWS", "Linux / virtualization"],
  },
  {
    id: "practices",
    title: "Practices",
    items: ["Unit & integration testing", "Git", "Jira / ClickUp", "Agile / Scrum", "OOP"],
  },
  {
    id: "ml",
    title: "Machine learning",
    note: "Supporting work, used when a project needs it.",
    items: [
      "scikit-learn",
      "NLP",
      "LangChain",
      "Prompt engineering",
      "Model integration / serving",
      "Data preprocessing",
      "ML pipelines",
    ],
  },
];

export const statusLabel: Record<ProjectStatus, string> = {
  shipped: "Shipped",
  in_progress: "In progress",
  planned: "Coming soon",
};

/** Course records from the certificates Mohamed provided. Not official exam badges. */
export const credentials = [
  {
    id: "kodekloud-saa",
    title: "AWS Solutions Architect Associate",
    issuer: "KodeKloud",
    dates: "Sep 2026",
    kind: {
      en: "Course completion certificate",
      de: "Kursabschluss-Zertifikat",
    },
  },
  {
    id: "ccna-intro",
    title: "CCNAv7: Introduction to Networks",
    issuer: "Cisco Networking Academy · SUPCOM",
    dates: "Nov 2022 – Jun 2023",
    kind: { en: "Course completed", de: "Kurs abgeschlossen" },
  },
  {
    id: "ccna-srwe",
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy · SUPCOM",
    dates: "Mar 2024 – Dec 2024",
    kind: { en: "Course completed", de: "Kurs abgeschlossen" },
  },
  {
    id: "ccna-ensa",
    title: "CCNAv7: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy · SUPCOM",
    dates: "Mar 2024 – Dec 2024",
    kind: { en: "Course completed", de: "Kurs abgeschlossen" },
  },
] as const;
