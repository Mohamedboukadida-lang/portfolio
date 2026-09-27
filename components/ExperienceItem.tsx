import type { ExperienceItem as ExperienceItemData } from "@/content/site";

export function ExperienceItem({ item }: { item: ExperienceItemData }) {
  return (
    <article className="relative">
      <span
        className="absolute top-1.5 -left-8 size-2 -translate-x-1/2 bg-accent"
        aria-hidden="true"
      />
      <div className="grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
        <p className="text-sm text-muted">{item.dates}</p>
        <div>
          <h3 className="font-display text-2xl tracking-tight text-ink md:text-3xl">{item.role}</h3>
          <p className="mt-1 text-base text-ink-soft">
            {item.company}
            <span className="text-muted"> · {item.location}</span>
          </p>
          <ul className="mt-4 space-y-2.5">
            {item.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-4 text-[0.95rem] leading-6 text-ink-soft before:absolute before:top-[0.62em] before:left-0 before:size-1 before:bg-accent/80 before:content-['']"
              >
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
