"use client";

import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function Footer() {
  const { locale } = useLocale();
  const { text, profile } = view(locale);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg text-ink">{profile.name}</p>
          <p className="mt-1">{profile.headline}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href={profile.github} className="text-link" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="text-link" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-link">
            {text.email}
          </a>
        </div>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
