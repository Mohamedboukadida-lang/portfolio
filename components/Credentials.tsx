"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function Credentials() {
  const { locale } = useLocale();
  const { text, credentials } = view(locale);
  const section = text.sections.credentials;

  return (
    <Section id="credentials" index={section.index} title={section.title} intro={section.intro}>
      <ol className="border-t border-line">
        {credentials.map((item) => (
          <li
            key={item.id}
            className="grid gap-2 border-b border-line py-5 md:grid-cols-[11rem_1fr_auto] md:items-baseline md:gap-8"
          >
            <p className="text-sm text-muted">{item.dates}</p>
            <div>
              <h3 className="font-display text-2xl tracking-tight text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-ink-soft">{item.issuer}</p>
            </div>
            <p className="text-sm text-accent">{item.kind}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
