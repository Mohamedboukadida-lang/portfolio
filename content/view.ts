import {
  credentials,
  education,
  experience,
  languages,
  profile,
  projects,
  skillGroups,
  statusLabel,
  type ProjectStatus,
} from "@/content/site";
import type { Locale } from "@/content/locale";

const ui = {
  en: {
    skip: "Skip to content",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    backToTop: "back to top",
    language: "Language",
    viewProjects: "View projects",
    contact: "Contact",
    resume: "Resume",
    downloadResume: "Download resume",
    phone: "Phone",
    email: "Email",
    emailMe: "Email me",
    portraitAlt: "Portrait of Mohamed Boukadida",
    education: "Education",
    spokenLanguages: "Languages",
    repository: "Repository",
    liveSite: "Live site",
    allScreens: "All {count} screens",
    openScreens: "Open screens",
    close: "Close",
    previous: "Previous",
    next: "Next",
    otherRepos: "Other repositories are on",
    github: "GitHub",
    nav: [
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#projects", label: "Projects" },
      { href: "#skills", label: "Skills" },
      { href: "#credentials", label: "Training" },
      { href: "#contact", label: "Contact" },
    ],
    sections: {
      about: { index: "01", title: "About" },
      experience: {
        index: "02",
        title: "Experience",
        intro:
          "Backend work in digital health, production microservices, and financial document automation.",
      },
      projects: {
        index: "03",
        title: "Projects",
        intro: "Mobile products, a flight-alert service, and a delivery pipeline.",
      },
      skills: {
        index: "04",
        title: "Skills",
        intro:
          "Backend, APIs, microservices, and DevOps, with fullstack when a product needs an interface.",
      },
      credentials: {
        index: "05",
        title: "Training",
        intro:
          "A KodeKloud course certificate and Cisco Networking Academy courses. These are completed courses, not issued AWS or CCNA exam badges.",
      },
      contact: { index: "06", title: "Contact" },
    },
    status: statusLabel,
    roles: {
      myoncare: "Backend Developer",
      omnilink: "Software Engineer Intern",
      finspot: "AI Engineer Intern",
    } as Record<string, string>,
  },
  de: {
    skip: "Zum Inhalt springen",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    backToTop: "nach oben",
    language: "Sprache",
    viewProjects: "Projekte ansehen",
    contact: "Kontakt",
    resume: "Lebenslauf",
    downloadResume: "Lebenslauf herunterladen",
    phone: "Telefon",
    email: "E-Mail",
    emailMe: "E-Mail schreiben",
    portraitAlt: "Porträt von Mohamed Boukadida",
    education: "Ausbildung",
    spokenLanguages: "Sprachen",
    repository: "Repository",
    liveSite: "Live-Seite",
    allScreens: "Alle {count} Screens",
    openScreens: "Screens öffnen",
    close: "Schließen",
    previous: "Zurück",
    next: "Weiter",
    otherRepos: "Weitere Repositories gibt es auf",
    github: "GitHub",
    nav: [
      { href: "#about", label: "Über mich" },
      { href: "#experience", label: "Erfahrung" },
      { href: "#projects", label: "Projekte" },
      { href: "#skills", label: "Kenntnisse" },
      { href: "#credentials", label: "Weiterbildung" },
      { href: "#contact", label: "Kontakt" },
    ],
    sections: {
      about: { index: "01", title: "Über mich" },
      experience: {
        index: "02",
        title: "Erfahrung",
        intro:
          "Backend-Arbeit in Digital Health, Microservices in Produktion und Automatisierung von Finanzdokumenten.",
      },
      projects: {
        index: "03",
        title: "Projekte",
        intro: "Mobile Produkte, ein Flight-Alert-Service und eine Delivery-Pipeline.",
      },
      skills: {
        index: "04",
        title: "Kenntnisse",
        intro:
          "Backend, APIs, Microservices und DevOps, plus Fullstack, wenn ein Produkt eine Oberfläche braucht.",
      },
      credentials: {
        index: "05",
        title: "Weiterbildung",
        intro:
          "Ein Kurszertifikat von KodeKloud und Kurse der Cisco Networking Academy. Das sind abgeschlossene Kurse, keine ausgestellten AWS- oder CCNA-Prüfungs-Badges.",
      },
      contact: { index: "06", title: "Kontakt" },
    },
    status: {
      shipped: "Fertig",
      in_progress: "In Arbeit",
      planned: "Geplant",
    } satisfies Record<ProjectStatus, string>,
    roles: {
      myoncare: "Backend-Entwickler",
      omnilink: "Praktikant Software Engineering",
      finspot: "Praktikant AI Engineering",
    } as Record<string, string>,
  },
} as const;

const deCopy = {
  headline: "Backend / Software Engineer · M.Sc. Informatik",
  heroSupport:
    "Backend-Entwickler bei MyOnCare in München. Ich baue APIs und containerisierte Services und suche Werkstudentenstellen in Bayern.",
  about:
    "Masterstudent der Informatik auf der Suche nach einer Werkstudentenstelle in Backend und Softwareentwicklung. Ich baue sichere REST-APIs, OAuth-Integrationen und containerisierte Microservices, mit Docker, CI/CD und automatisierten Tests. DevOps und Cloud-Datenplattformen interessieren mich besonders. Zurzeit arbeite ich als Backend-Entwickler bei MyOnCare in München an einer regulierten Digital-Health-Plattform.",
  seeking:
    "Werkstudent oder Teilzeit in Backend, Softwareentwicklung, DevOps oder Fullstack.",
  locationDetail: "Offen für Bayern und den Raum München, hybrid oder vor Ort.",
  location: "Passau, Deutschland",
  experienceLocations: {
    myoncare: "München, Deutschland",
    omnilink: "Tunis, Tunesien",
    finspot: "Sousse, Tunesien",
  } as Record<string, string>,
  experienceDates: {
    myoncare: "Mai 2025 – heute",
    omnilink: "Jun 2024 – Okt 2024",
    finspot: "Mai 2023 – Sep 2023",
  } as Record<string, string>,
  experienceBullets: {
    myoncare: [
      "Backend-Integrationen, die Wearables der Patientinnen und Patienten (Glukosemessgeräte, Aktivitätstracker) an eine Digital-Health-Plattform anbinden.",
      "REST-APIs und Microservices zum Import, zur Verarbeitung und zur Speicherung von Gesundheitsmesswerten.",
      "OAuth 2.0, Einwilligungen sowie Verbinden und Trennen von Konten.",
      "Mitarbeit an der Patienten-App (React, Capacitor, TypeScript).",
      "Fehlersuche über den gesamten Datenfluss von externen Anbietern bis in die Plattform-Datenbank, mit Git, Docker, Code Reviews und automatisierten Tests.",
    ],
    omnilink: [
      "Backend-REST-APIs und Datenfluss zwischen Microservices in Produktion.",
      "Services mit Docker containerisiert und CI/CD mit GitHub Actions aufgesetzt.",
      "Tests und Monitoring, Git-Workflows und agile Lieferung.",
    ],
    finspot: [
      "Sichere Backend-Services für die Verarbeitung von Finanzdaten und die Automatisierung von Dokumenten.",
      "JWT-Authentifizierung und rollenbasierte Zugriffskontrolle.",
      "Ein Microservice, der strukturierte Daten aus Finanzdokumenten für Analysen und ML-Pipelines extrahiert.",
      "REST-Endpunkte zum Speichern und Wiederverwenden der extrahierten Datensätze.",
    ],
  } as Record<string, string[]>,
  education: {
    passau: {
      credential: "M.Sc. Informatik",
      school: "Universität Passau, Deutschland",
      dates: "Okt 2024 – heute",
      detail: "4. Semester",
    },
    supcom: {
      credential: "Ingenieurstudium ICT",
      school: "SUPCOM (Höhere Schule für Kommunikation, Tunis)",
      dates: "Sep 2022 – Jun 2024",
    },
    monastir: {
      credential: "Vorbereitungsstudium Ingenieurwesen",
      school: "Vorbereitungsinstitut für Ingenieurstudien Monastir, Tunesien",
      dates: "Sep 2020 – Jun 2022",
    },
  } as Record<string, { credential: string; school: string; dates: string; detail?: string }>,
  languages: {
    English: "Englisch",
    German: "Deutsch",
    French: "Französisch",
    Arabic: "Arabisch",
  } as Record<string, string>,
  projects: {
    "well-being": {
      summary:
        "Eine Wellness-Plattform für Schlaftracking, Hydration und einen Chatbot. Der Mobile-Client spricht mit Flask- und Spring-Boot-Microservices hinter einem Nginx-Reverse-Proxy, mit JWT-Authentifizierung.",
      highlights: [
        "Schlaftracking, Hydration und ein Chatbot in einem Produkt.",
        "Flutter-Client mit Flask- und Spring-Boot-Services.",
        "Nginx-Reverse-Proxy und JWT zwischen Client und APIs.",
      ],
    },
    "coworking-hub": {
      summary:
        "Coworking-Spaces finden, reservieren und verwalten, mit Karte, Profilen, Bewertungen und einem Admin-Flow zum Einreichen eines Spaces. Flutter-Client auf einer Spring-Boot-API mit PostgreSQL.",
      highlights: [
        "Spaces suchen, reservieren und verwalten.",
        "Karte, Profile, Bewertungen und ein Formular für neue Spaces.",
        "Flutter, Spring Boot und PostgreSQL.",
      ],
    },
    "flight-alert": {
      summary:
        "Ein Python-CLI prüft direkte One-Way-Flüge von Tunesien nach Deutschland und Österreich und schickt eine Telegram-Nachricht, wenn ein Tarif ein Angebot ist oder fällt. Geprüft wird der nächste Kalendermonat von Tunis, Enfidha und Monastir nach München, Salzburg, Wien und Frankfurt.",
      highlights: [
        "Ein Deal-Alert ab 150 € oder weniger, ein Drop-Alert ab 15 € oder 10 %.",
        "Tarife kommen von Travelpayouts, der letzte Preis liegt in Redis.",
        "GitHub Actions führt die Prüfung alle 12 Stunden aus.",
      ],
    },
    "cicd-pipeline-lab": {
      summary:
        "Ein Beispiel-Backend mit einer durchgängigen Delivery-Pipeline. GitHub Actions prüft den Code, führt Tests aus, baut ein Docker-Image und deployt es nach Staging. Das Image entsteht erst nach grünen Tests, und der vorherige Tag bleibt für ein Rollback liegen.",
      highlights: [
        "Lint, Test, Image-Build und Staging-Deploy laufen als getrennte Jobs.",
        "Der Image-Build wartet auf einen grünen Test-Job.",
        "Staging behält den vorherigen Tag, ein Rollback ist ein erneutes Deploy.",
      ],
    },
  } as Record<string, { summary: string; highlights: string[] }>,
  skillTitles: {
    languages: "Sprachen",
    backend: "Backend",
    frontend: "Frontend und Mobile",
    data: "Daten",
    devops: "DevOps und Cloud",
    practices: "Arbeitsweise",
    ml: "Machine Learning",
  } as Record<string, string>,
  skillNote: "Ergänzend, wenn ein Projekt es braucht.",
};

export function view(locale: Locale) {
  const text = ui[locale];
  const german = locale === "de";

  return {
    text,
    profile: {
      ...profile,
      headline: german ? deCopy.headline : profile.headline,
      heroSupport: german ? deCopy.heroSupport : profile.heroSupport,
      about: german ? deCopy.about : profile.about,
      seeking: german ? deCopy.seeking : profile.seeking,
      location: german ? deCopy.location : profile.location,
      locationDetail: german ? deCopy.locationDetail : profile.locationDetail,
    },
    education: education.map((item) => {
      const translated = german ? deCopy.education[item.id] : undefined;
      return translated ? { ...item, ...translated } : item;
    }),
    languages: languages.map((language) => ({
      ...language,
      name: german ? (deCopy.languages[language.name] ?? language.name) : language.name,
    })),
    experience: experience.map((item) => ({
      ...item,
      role: text.roles[item.id] ?? item.role,
      location: german ? (deCopy.experienceLocations[item.id] ?? item.location) : item.location,
      dates: german ? (deCopy.experienceDates[item.id] ?? item.dates) : item.dates,
      bullets: german ? (deCopy.experienceBullets[item.id] ?? item.bullets) : item.bullets,
    })),
    projects: projects.map((project) => {
      const translated = german ? deCopy.projects[project.id] : undefined;
      const extraLabels: Record<string, string> = {
        "Watch demo": "Demo ansehen",
        "Download APK": "APK herunterladen",
      };
      return {
        ...project,
        summary: translated?.summary ?? project.summary,
        highlights: translated?.highlights ?? project.highlights,
        extraLinks: project.extraLinks.map((link) => ({
          ...link,
          label: german ? (extraLabels[link.label] ?? link.label) : link.label,
        })),
      };
    }),
    skillGroups: skillGroups.map((group) => ({
      ...group,
      title: german ? (deCopy.skillTitles[group.id] ?? group.title) : group.title,
      note: group.note && german ? deCopy.skillNote : group.note,
    })),
    credentials: credentials.map((item) => ({
      ...item,
      kind: item.kind[locale],
    })),
    status: (status: ProjectStatus) => text.status[status],
  };
}
