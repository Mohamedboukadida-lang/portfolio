"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function Skills() {
  const { locale } = useLocale();
  const { text, skillGroups } = view(locale);
  const section = text.sections.skills;

  return (
    <Section id="skills" index={section.index} title={section.title} intro={section.intro}>
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.id} className="border-t border-line pt-4">
            <h3 className="font-display text-2xl text-ink">{group.title}</h3>
            {group.note ? <p className="mt-1 text-sm text-muted">{group.note}</p> : null}
            <p className="mt-3 text-[0.95rem] leading-7 text-ink-soft">{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
