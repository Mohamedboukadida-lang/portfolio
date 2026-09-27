"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { useLocale } from "@/components/LanguageProvider";
import { FlightAlertPanel } from "@/components/visuals/FlightAlertPanel";
import { PipelinePanel } from "@/components/visuals/PipelinePanel";
import type { Project } from "@/content/site";
import { view } from "@/content/view";

const previewCount = 4;

export function ProjectShowcase({ project }: { project: Project }) {
  const { locale } = useLocale();
  const { text, status } = view(locale);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const images = project.images;
  const preview = images.slice(0, previewCount);
  const hasImages = images.length > 0;

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

  return (
    <article
      id={project.id}
      className="scroll-mt-24 border-t border-line py-12 first:border-t-0 md:py-16"
    >
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <p className="text-sm text-accent">{status(project.status)}</p>
          <h3 className="mt-2 font-display text-3xl tracking-tight text-ink md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-ink-soft">{project.summary}</p>
          {project.highlights.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-4 text-sm leading-6 text-muted before:absolute before:top-[0.6em] before:left-0 before:size-1 before:bg-accent/80 before:content-['']"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          ) : null}
          <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
            {project.stack.map((item) => (
              <li
                key={item}
                className="border border-line bg-white/5 px-2 py-1 text-xs tracking-wide text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {project.repoUrl ? (
              <a href={project.repoUrl} className="text-link" target="_blank" rel="noreferrer">
                {text.repository}
              </a>
            ) : null}
            {project.liveUrl ? (
              <a href={project.liveUrl} className="text-link" target="_blank" rel="noreferrer">
                {text.liveSite}
              </a>
            ) : null}
            {project.extraLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-link"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          {project.visual === "flight" ? (
            <FlightAlertPanel />
          ) : project.visual === "pipeline" ? (
            <PipelinePanel />
          ) : hasImages ? (
            <>
              <ul className="flex gap-3 overflow-x-auto pb-2">
                {preview.map((image, imageIndex) => (
                  <li key={image.src} className="shrink-0">
                    <button
                      type="button"
                      className="shot block overflow-hidden border border-line bg-black/30"
                      aria-label={`Open screen: ${image.alt}`}
                      onClick={() => openAt(imageIndex)}
                    >
                      <Image
                        src={image.src}
                        alt=""
                        width={image.width}
                        height={image.height}
                        sizes="180px"
                        className="h-72 w-auto md:h-80"
                      />
                    </button>
                  </li>
                ))}
              </ul>
              {images.length > preview.length ? (
                <button type="button" className="text-link mt-3" onClick={() => openAt(0)}>
                  {text.allScreens.replace("{count}", String(images.length))}
                </button>
              ) : (
                <button type="button" className="text-link mt-3" onClick={() => openAt(0)}>
                  {text.openScreens}
                </button>
              )}
            </>
          ) : (
            <div
              className="flex min-h-56 items-end border border-dashed border-line bg-white/5 p-6 md:min-h-72"
              aria-hidden="true"
            >
              <p className="font-display text-4xl tracking-tight text-ink/25">
                {status(project.status)}
              </p>
            </div>
          )}
        </div>
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
