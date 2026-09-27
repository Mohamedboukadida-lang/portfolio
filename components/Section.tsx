import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, index, title, intro, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex items-baseline gap-4">
            <span className="font-display text-sm text-accent">{index}</span>
            <h2 id={titleId} className="font-display text-4xl tracking-tight text-ink md:text-5xl">
              {title}
            </h2>
          </div>
          {intro ? <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{intro}</p> : null}
          <div className="mt-12">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
