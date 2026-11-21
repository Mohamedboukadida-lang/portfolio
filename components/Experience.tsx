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
    <Section id="experience" title={section.title} intro={section.intro}>
      <div className="border-t border-line">
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </div>
    </Section>
  );
}
