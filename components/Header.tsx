"use client";

import { Menu, X } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { useEffect, useState } from "react";
import { useLocale } from "@/components/LanguageProvider";
import { profile } from "@/content/site";
import { view } from "@/content/view";

const sectionIds = ["about", "experience", "projects", "skills", "credentials", "contact"];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const { locale, setLocale } = useLocale();
  const { text } = view(locale);

  useEffect(() => {
    const nodes = sectionIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const fromHash = () => {
      const hash = window.location.hash;
      if (sectionIds.some((id) => `#${id}` === hash)) setActive(hash);
    };

    fromHash();
    window.addEventListener("hashchange", fromHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.2, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => {
      window.removeEventListener("hashchange", fromHash);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="site-header sticky top-0 z-30 border-b border-line bg-paper/75 backdrop-blur-md">
      <a href="#content" className="skip-link">
        {text.skip}
      </a>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3 md:px-8">
        <a href="#top" className="font-display text-sm tracking-[0.14em] text-ink">
          MB
          <span className="sr-only">
            {" "}
            {profile.name}, {text.backToTop}
          </span>
        </a>

        <nav aria-label="Primary" className="ml-6 hidden items-center gap-4 xl:flex">
          {text.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              aria-current={active === item.href ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={profile.github}
            className="icon-btn inline-flex"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon />
          </a>
          <a
            href={profile.linkedin}
            className="icon-btn inline-flex"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <div role="group" aria-label={text.language} className="lang-switch">
            <button
              type="button"
              className="lang-btn"
              aria-pressed={locale === "en"}
              onClick={() => setLocale("en")}
            >
              EN
            </button>
            <button
              type="button"
              className="lang-btn"
              aria-pressed={locale === "de"}
              onClick={() => setLocale("de")}
            >
              DE
            </button>
          </div>
          <button
            type="button"
            className="icon-btn inline-flex xl:hidden"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" size={18} /> : <Menu aria-hidden="true" size={18} />}
            <span className="sr-only">{open ? text.closeMenu : text.openMenu}</span>
          </button>
        </div>
      </div>

      <nav
        id="site-nav"
        aria-label="Primary"
        hidden={!open}
        className="border-t border-line bg-paper px-5 py-3 xl:hidden"
      >
        {text.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="nav-link block py-2.5"
            aria-current={active === item.href ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
