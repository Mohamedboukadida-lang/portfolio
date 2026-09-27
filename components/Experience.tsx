"use client";

import { ExperienceItem } from "@/components/ExperienceItem";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function Experience() {
  const { locale } = useLocale();
  const { text, experience } = view(locale);
  const section = text.sections.experience;

  return (
    <Section id="experience" index={section.index} title={section.title} intro={section.intro}>
      <div className="relative space-y-12 border-l border-line pl-8">
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
