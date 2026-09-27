"use client";

import Image from "next/image";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

const track = [
  "APIs",
  "Microservices",
  "Docker",
  "CI/CD",
  "Kubernetes",
  "Spring Boot",
  "PostgreSQL",
  "GitHub Actions",
];

export function Hero() {
  const { locale } = useLocale();
  const { text, profile } = view(locale);
  const loop = [...track, ...track];

  return (
    <section id="top" className="scroll-mt-20" aria-labelledby="hero-name">
      <div className="mx-auto flex min-h-[calc(100svh-4.25rem)] max-w-6xl flex-col justify-between px-5 py-12 md:px-8 md:py-16">
        <div className="hero-rise grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-4xl">
          <p className="text-sm tracking-wide text-muted">
            {profile.location}, {profile.locationDetail}
          </p>
          <h1
            id="hero-name"
            className="mt-5 font-display text-[3.1rem] leading-[0.88] tracking-[-0.055em] text-ink min-[400px]:text-6xl sm:text-7xl lg:text-8xl"
          >
            <span className="block">Mohamed</span>
            <span className="block text-accent">Boukadida</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-snug text-ink-soft sm:text-3xl">
            {profile.headline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
            {profile.heroSupport}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="button-primary">
              {text.viewProjects}
            </a>
            <a href="#contact" className="button-secondary">
              {text.contact}
            </a>
            <a href={profile.resumePath} className="button-text" download>
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
            className="portrait order-first lg:order-none"
          />
        </div>
        <div className="marquee mt-14 border-t border-line pt-4" aria-hidden="true">
          <div className="marquee-track">
            {loop.map((item, index) => (
              <span key={`${item}-${index}`} className="font-display text-lg text-ink-soft">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
