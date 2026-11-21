"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/LanguageProvider";
import { FlightAlertPanel } from "@/components/visuals/FlightAlertPanel";
import { FlowPanel } from "@/components/visuals/FlowPanel";
import type { Project } from "@/content/site";
import { view } from "@/content/view";

const previewCount = 3;

export function ProjectShowcase({ project }: { project: Project }) {
  const { locale } = useLocale();
  const { text, status } = view(locale);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const images = project.images;
  const preview = images.slice(0, previewCount);
  const hasImages = images.length > 0;
  const hasVisual = Boolean(project.visual || project.flow) || hasImages;
  const inProgress = project.status === "in_progress";

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onKey = (event: KeyboardEvent) => {
      if (!dialog.open || images.length === 0) return;
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % images.length);
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + images.length) % images.length);
      }
    };

    dialog.addEventListener("keydown", onKey);
    return () => dialog.removeEventListener("keydown", onKey);
  }, [images.length]);

  function openAt(nextIndex: number) {
    setIndex(nextIndex);
    dialogRef.current?.showModal();
  }

  function close() {
    dialogRef.current?.close();
  }

  function step(direction: -1 | 1) {
    setIndex((current) => (current + direction + images.length) % images.length);
  }

  const active = images[index];
  const links = [
    ...(project.repoUrl ? [{ label: text.repository, href: project.repoUrl }] : []),
    ...(project.liveUrl ? [{ label: text.liveSite, href: project.liveUrl }] : []),
    ...project.extraLinks,
  ];

  return (
    <article id={project.id} className="project-card scroll-mt-24">
      <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <div>
          <p
            className={
              inProgress
                ? "inline-flex rounded-full border border-accent/50 px-3 py-1 text-xs font-medium text-accent"
                : "inline-flex rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
            }
          >
            {status(project.status)}
          </p>
          <h3 className="mt-4 font-display text-3xl font-bold text-balance text-ink md:text-4xl">
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="group hover:text-accent"
              >
                {project.title}
                <ArrowUpRight
                  aria-hidden="true"
                  className="ml-1 inline-block size-6 align-[-0.1em] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className="mt-4 text-base text-pretty leading-7 text-ink-soft">{project.summary}</p>
          {project.highlights.length > 0 ? (
            <ul className="mt-5 space-y-2.5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-5 text-sm text-pretty leading-6 text-muted before:absolute before:top-[0.6em] before:left-0 before:size-1.5 before:rounded-full before:bg-accent before:content-['']"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
          {project.stack.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
              {project.stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {links.length > 0 ? (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-link inline-flex items-center gap-1"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {hasVisual ? (
          <div>
            {project.visual === "flight" ? (
              <FlightAlertPanel />
            ) : project.flow ? (
              <FlowPanel flow={project.flow} />
            ) : (
              <div>
                <ul className="grid grid-cols-3 gap-2 sm:gap-3">
                  {preview.map((image, imageIndex) => (
                    <li key={image.src}>
                      <button
                        type="button"
                        className="shot block w-full overflow-hidden rounded-lg border border-line bg-black/30"
                        aria-label={`Open screen: ${image.alt}`}
                        onClick={() => openAt(imageIndex)}
                      >
                        <Image
                          src={image.src}
                          alt=""
                          width={image.width}
                          height={image.height}
                          sizes="(min-width: 1024px) 180px, 30vw"
                          className="aspect-[9/19] h-auto w-full object-cover object-top"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
                <button type="button" className="text-link mt-4" onClick={() => openAt(0)}>
                  {images.length > preview.length
                    ? text.allScreens.replace("{count}", String(images.length))
                    : text.openScreens}
                </button>
              </div>
            )}
          </div>
        ) : null}
      </div>

      {hasImages ? (
        <dialog
          ref={dialogRef}
          className="project-dialog"
          aria-labelledby={titleId}
          onClick={(event) => {
            if (event.target === dialogRef.current) close();
          }}
        >
          <div className="flex items-start justify-between gap-4 border-b border-line px-4 py-3 md:px-5">
            <div>
              <h4 id={titleId} className="font-display text-xl text-ink">
                {project.title}
              </h4>
              <p className="text-sm text-muted">
                {index + 1} / {images.length}
              </p>
            </div>
            <button type="button" className="button-secondary" onClick={close}>
              {text.close}
            </button>
          </div>
          {active ? (
            <figure className="flex flex-col items-center gap-3 overflow-auto px-4 py-4">
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="(min-width: 768px) 420px, 80vw"
                className="h-auto max-h-[68vh] w-auto"
              />
              <figcaption className="max-w-lg text-center text-sm leading-6 text-muted">
                {active.alt}
              </figcaption>
            </figure>
          ) : null}
          <div className="flex justify-between gap-3 border-t border-line px-4 py-3 md:px-5">
            <button type="button" className="button-secondary" onClick={() => step(-1)}>
              {text.previous}
            </button>
            <button type="button" className="button-secondary" onClick={() => step(1)}>
              {text.next}
            </button>
          </div>
        </dialog>
      ) : null}
    </article>
  );
}
