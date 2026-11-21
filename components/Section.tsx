import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, title, intro, children }: SectionProps) {
  const titleId = `${id}-title`;

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <h2
            id={titleId}
            className="font-display text-4xl leading-none font-bold text-balance text-ink sm:text-5xl md:text-6xl"
          >
            {title}
          </h2>
          <span className="mt-5 block h-0.5 w-16 bg-accent" aria-hidden="true" />
          {intro ? (
            <p className="mt-6 max-w-2xl text-lg text-pretty leading-8 text-muted">{intro}</p>
          ) : null}
          <div className="mt-12">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
