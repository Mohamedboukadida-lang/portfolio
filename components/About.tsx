"use client";

import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function About() {
  const { locale } = useLocale();
  const { text, profile, education, languages } = view(locale);
  const section = text.sections.about;

  return (
    <Section id="about" index={section.index} title={section.title}>
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="max-w-xl text-lg leading-8 text-ink-soft">{profile.about}</p>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted">{profile.seeking}</p>
          <p className="mt-3 text-sm text-muted">
            {profile.location}. {profile.locationDetail}
          </p>
        </div>
        <div className="grid gap-10">
          <div>
            <h3 className="font-display text-2xl text-ink">{text.education}</h3>
            <ol className="mt-4 border-t border-line">
              {education.map((item) => (
                <li key={item.id} className="border-b border-line py-4">
                  <p className="text-sm text-muted">{item.dates}</p>
                  <p className="mt-1 font-medium text-ink">{item.credential}</p>
                  <p className="text-sm leading-6 text-ink-soft">{item.school}</p>
                  {item.detail ? <p className="mt-1 text-sm text-muted">{item.detail}</p> : null}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="font-display text-2xl text-ink">{text.spokenLanguages}</h3>
            <ul className="mt-4 border-t border-line">
              {languages.map((language) => (
                <li
                  key={language.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-3"
                >
                  <span className="text-ink">{language.name}</span>
                  {language.level ? (
                    <span className="text-sm text-muted">{language.level}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
