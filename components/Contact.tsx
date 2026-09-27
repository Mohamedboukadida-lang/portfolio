"use client";

import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { Section } from "@/components/Section";
import { useLocale } from "@/components/LanguageProvider";
import { view } from "@/content/view";

export function Contact() {
  const { locale } = useLocale();
  const { text, profile } = view(locale);
  const section = text.sections.contact;
  const subject = locale === "de" ? "Werkstudentenstelle" : "Werkstudent role";
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}`;

  const channels = [
    { href: mailto, label: text.email, value: profile.email, icon: Mail, external: false },
    {
      href: profile.phoneHref,
      label: text.phone,
      value: profile.phoneDisplay,
      icon: Phone,
      external: false,
    },
    {
      href: profile.linkedin,
      label: "LinkedIn",
      value: "mouhamed-boukadida",
      icon: LinkedinIcon,
      external: true,
    },
    { href: profile.github, label: "GitHub", value: "Mrbkd11", icon: GithubIcon, external: true },
  ];

  return (
    <Section
      id="contact"
      index={section.index}
      title={section.title}
      intro={`${profile.seeking} ${profile.location}. ${profile.locationDetail}`}
    >
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <div>
          <a
            href={mailto}
            className="inline-block max-w-full font-display text-2xl tracking-tight break-all text-ink underline decoration-accent/40 decoration-2 underline-offset-[0.35em] hover:text-accent sm:text-4xl"
          >
            {profile.email}
          </a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={mailto} className="button-primary">
              {text.emailMe}
            </a>
            <a href={profile.resumePath} className="button-secondary" download>
              {text.downloadResume}
            </a>
          </div>
        </div>
        <div className="border border-line bg-white/4">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.label}
                href={channel.href}
                className="contact-row"
                {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
              >
                <span className="grid size-10 shrink-0 place-items-center border border-line text-accent">
                  <Icon aria-hidden="true" size={16} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted">{channel.label}</span>
                  <span className="block truncate text-sm text-ink">{channel.value}</span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
