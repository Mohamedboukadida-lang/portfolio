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
  headline: "Backend developer · IT application management and process automation",
  heroSupport:
    "At MyOnCare in Munich I connect wearable health data to a digital-health platform. I am looking for a working-student role in application management, process automation, and business applications.",
  about:
    "Master’s Computer Science student at the University of Passau, seeking a working-student role in IT application management, process automation, and business applications. I automate build, test, and deployment, integrate external systems, monitor running services, and stabilise end-to-end data flows, in Agile teams using Jira and Confluence.",
  location: "Passau, Germany",
  locationDetail: "Open to Bayern and the Munich area, hybrid or on-site.",
  seeking:
    "Working-student role in IT application management, process automation, and business applications.",
  email: "boukad01@ads.uni-passau.de",
  phoneDisplay: "+49 179 15815119",
  phoneHref: "tel:+4917915815119",
  linkedin: "https://www.linkedin.com/in/mouhamed-boukadida",
  github: "https://github.com/Mohamedboukadida-lang",
  resumePath: "/resume.pdf",
  studyStatus: "M.Sc. Computer Science, University of Passau",
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
    dates: "May 2026 – Present",
    bullets: [
      "Backend integrations that securely connect patients’ wearable health devices (glucose monitors, activity trackers; providers such as Abbott LibreView, Withings, and Corsano) to the digital health platform.",
      "Debugged and stabilised the full data flow from external device providers to the platform database, using Git, Docker, code reviews, and automated tests.",
      "Secure user authorization with OAuth 2.0, consent handling, and account connect and disconnect flows in a multi-tenant health platform.",
      "REST APIs and microservices that import, process, and store health measurements, with the path from provider to database checked for reliability and traceability.",
    ],
  },
  {
    id: "omnilink",
    role: "Software Engineer Intern",
    company: "Omnilink",
    location: "Tunis, Tunisia",
    dates: "Jun 2024 – Oct 2024",
    bullets: [
      "CI/CD pipelines with GitHub Actions that automate build, test, and deployment and cut down manual release work.",
      "Testing and monitoring of running services so regressions show up before a deploy.",
      "Backend REST APIs and data flow between microservices in production.",
      "Git-based workflows, code reviews, and Agile collaboration, including new DevOps tools.",
    ],
  },
  {
    id: "finspot",
    role: "AI Engineer Intern",
    company: "Finspot Finance Consultancy",
    location: "Sousse, Tunisia",
    dates: "May 2023 – Sep 2023",
    bullets: [
      "Secure backend services for financial data processing and document-driven automation.",
      "REST endpoints and data handling so extracted records can be stored and reused by downstream services.",
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
    id: "rag",
    title: "RAG",
    status: "in_progress",
    summary:
      "A retrieval-augmented generation project I am building now. There is no public repository yet, and the architecture is still in progress, so this card stays limited to that.",
    stack: [],
    repoUrl: null,
    liveUrl: null,
    extraLinks: [],
    images: [],
    highlights: [],
  },
  {
    id: "well-being",
    title: "Well-Being Application",
    status: "shipped",
    summary:
      "Academic project, January to May 2024. Microservices in Flask, Spring Boot, and Flutter, with an LLM chatbot, tried by about 50 users. The mobile client reaches the APIs through an Nginx reverse proxy and JWT authentication.",
    stack: ["Flutter", "Flask", "Spring Boot", "Nginx", "JWT", "Microservices"],
    repoUrl: "https://github.com/Mohamedboukadida-lang/Projet-bien-etre",
    liveUrl: null,
    extraLinks: [],
    images: wellbeingImages,
    highlights: [
      "Sleep tracking, hydration tracking, and an LLM chatbot.",
      "Flask, Spring Boot, and Flutter, with Nginx and JWT in front of the APIs.",
      "Tried with about 50 users.",
    ],
  },
  {
    id: "coworking-hub",
    title: "Coworking Hub",
    status: "shipped",
    summary:
      "Find, reserve, and manage coworking spaces, with maps, profiles, ratings, and an admin flow for submitting a space. Built as a Flutter client on a Spring Boot API with PostgreSQL.",
    stack: ["Flutter", "Spring Boot", "PostgreSQL"],
    repoUrl: "https://github.com/Mohamedboukadida-lang/Coworking-Hub",
    liveUrl: null,
    extraLinks: [
      {
        label: "Watch demo",
        href: "https://github.com/Mohamedboukadida-lang/Coworking-Hub/blob/main/demo.mp4",
      },
      {
        label: "Download APK",
        href: "https://github.com/Mohamedboukadida-lang/Coworking-Hub/blob/main/app-release.apk",
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
    id: "automation",
    title: "Automation & integration",
    items: [
      "Automation workflows",
      "System integration",
      "REST APIs",
      "OAuth 2.0",
      "JWT",
      "CI/CD",
      "GitHub Actions",
      "Docker",
      "Monitoring, debugging, and troubleshooting",
    ],
  },
  {
    id: "languages",
    title: "Languages",
    items: ["Python", "SQL", "Java", "TypeScript", "C++", "PHP"],
  },
  {
    id: "data",
    title: "Data",
    items: [
      "PostgreSQL",
      "MySQL",
      "SQL Server",
      "MongoDB",
      "Firebase",
      "NoSQL",
      "Data preprocessing",
    ],
  },
  {
    id: "tools",
    title: "Tools & practices",
    note: "AWS entries are coursework, not exam certifications.",
    items: [
      "Git",
      "Jira",
      "ClickUp",
      "Confluence",
      "Agile / Scrum",
      "Unit testing",
      "Integration testing",
      "Kubernetes",
      "AWS (coursework)",
    ],
  },
  {
    id: "also",
    title: "Also",
    items: [
      "Microservices",
      "Spring Boot",
      "Django",
      "Flask",
      "Express.js",
      "GitHub Copilot",
      "Cursor",
      "React Capacitor",
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
    id: "kodekloud-cp",
    title: "AWS Cloud Practitioner",
    issuer: "KodeKloud",
    dates: "2026",
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
