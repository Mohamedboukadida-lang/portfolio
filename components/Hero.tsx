"use client";

import Image from "next/image";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

const chips = ["Docker", "CI/CD", "APIs"];

export function Hero() {
  const { locale } = useLocale();
  const { text, profile } = view(locale);
  const role = profile.headline.split("·")[0]?.trim() || profile.headline;
  const support = profile.heroSupport.split(/(?<=\.)\s/)[0] ?? profile.heroSupport;

  return (
    <section id="top" className="scroll-mt-20" aria-labelledby="hero-name">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-6 md:px-8 md:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
          <div>
            <h1
              id="hero-name"
              className="font-display text-[clamp(3.25rem,9.7vw,7.75rem)] leading-[0.92] font-bold text-balance text-ink"
            >
              <span className="block">Mohamed</span>
              <span className="block">Boukadida</span>
            </h1>
            <span className="mt-5 block h-0.5 w-16 bg-accent" aria-hidden="true" />
            <p className="mt-5 text-2xl text-ink sm:text-3xl">{role}</p>
            <p className="mt-3 max-w-xl text-base text-pretty leading-7 text-muted">{support}</p>
            <ul
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
              aria-label={text.sections.skills.title}
            >
              {chips.map((chip) => (
                <li key={chip} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              <a href="#contact" className="text-link">
                {text.contact}
              </a>
              <a href={profile.resumePath} className="text-link" download>
                {text.resume}
              </a>
            </div>
          </div>
          <Image
            src="/portrait.webp"
            alt={text.portraitAlt}
            width={400}
            height={400}
            priority
            className="portrait mx-auto lg:mx-0"
          />
        </div>
        <div className="mt-16 grid gap-6 border-t border-line pt-5 sm:grid-cols-2">
          <a
            href="#experience"
            className="font-display text-4xl font-bold text-ink hover:text-accent sm:text-5xl"
          >
            {text.sections.experience.title}
          </a>
          <a
            href="#projects"
            className="font-display text-4xl font-bold text-ink hover:text-accent sm:text-5xl"
          >
            {text.sections.projects.title}
          </a>
        </div>
      </div>
    </section>
  );
}
