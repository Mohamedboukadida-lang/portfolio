import type { ExperienceItem as ExperienceItemData } from "@/content/site";

export function ExperienceItem({ item }: { item: ExperienceItemData }) {
  return (
    <article className="grid gap-2 border-b border-line py-10 md:grid-cols-[11rem_1fr] md:gap-8">
      <p className="pt-1.5 text-sm text-muted">{item.dates}</p>
      <div>
        <h3 className="font-display text-2xl font-bold text-balance text-ink md:text-3xl">
          {item.role}
        </h3>
        <p className="mt-1 text-base text-ink-soft">
          {item.company}
          <span className="text-muted"> · {item.location}</span>
        </p>
        <ul className="mt-5 max-w-xl space-y-2.5">
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              className="relative pl-5 text-[0.95rem] text-pretty leading-7 text-ink-soft before:absolute before:top-[0.75em] before:left-0 before:size-1.5 before:rounded-full before:bg-accent before:content-['']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
