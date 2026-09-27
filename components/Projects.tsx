"use client";

import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { profile } from "@/content/site";
import { view } from "@/content/view";

export function Projects() {
  const { locale } = useLocale();
  const { text, projects } = view(locale);
  const section = text.sections.projects;

  return (
    <Section id="projects" index={section.index} title={section.title} intro={section.intro}>
      <div className="-mt-4">
        {projects.map((project) => (
          <ProjectShowcase key={project.id} project={project} />
        ))}
      </div>
      <p className="mt-8 text-base text-ink-soft">
        {text.otherRepos}{" "}
        <a href={profile.github} className="text-link" target="_blank" rel="noreferrer">
          {text.github}
        </a>
        .
      </p>
    </Section>
  );
}
