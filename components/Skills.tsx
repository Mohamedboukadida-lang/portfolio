"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function Skills() {
  const { locale } = useLocale();
  const { text, skillGroups } = view(locale);
  const section = text.sections.skills;

  return (
    <Section id="skills" title={section.title} intro={section.intro}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id} className="skill-card">
            <h3 className="font-display text-xl font-bold text-balance text-ink">{group.title}</h3>
            {group.note ? (
              <p className="mt-1 text-sm text-pretty text-muted">{group.note}</p>
            ) : null}
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
