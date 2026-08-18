"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { buttonStyles } from "@/components/primitives/button";
import { ProjectMedia } from "@/components/projects/project-media";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/content";

const heroSizes = "(min-width: 1280px) 1200px, calc(100vw - 3rem)";
const gallerySizes = "(min-width: 768px) 50vw, calc(100vw - 3rem)";

interface ProjectGalleryProps {
  images: readonly ProjectImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const viewableIndexes = React.useMemo(
    () =>
      images.flatMap((image, index) => (image.placeholder ? [] : [index])),
    [images],
  );

  const activeImage =
    activeIndex === null ? null : (images[activeIndex] ?? null);
  const canBrowse = viewableIndexes.length > 1;
  const position =
    activeIndex === null ? 0 : viewableIndexes.indexOf(activeIndex) + 1;

  const close = React.useCallback(() => setActiveIndex(null), []);

  const open = React.useCallback(
    (index: number, trigger: HTMLButtonElement) => {
      if (images[index]?.placeholder) return;
      triggerRef.current = trigger;
      setActiveIndex(index);
    },
    [images],
  );

  const showRelative = React.useCallback(
    (step: number) => {
      if (activeIndex === null || viewableIndexes.length === 0) return;

      const current = viewableIndexes.indexOf(activeIndex);
      if (current === -1) return;

      const next =
        (current + step + viewableIndexes.length) % viewableIndexes.length;
      setActiveIndex(viewableIndexes[next] ?? null);
    },
    [activeIndex, viewableIndexes],
  );

  const showRelativeRef = React.useRef(showRelative);

  React.useEffect(() => {
    showRelativeRef.current = showRelative;
  }, [showRelative]);

  const isOpen = activeIndex !== null;

  React.useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog) return;

    const getFocusable = () =>
      Array.from(
        dialog.querySelectorAll<HTMLElement>("button:not([disabled])"),
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setActiveIndex(null);
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showRelativeRef.current(-1);
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showRelativeRef.current(1);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [isOpen]);

  const multiColumn = images.length > 1;
  const thumbSizes = multiColumn ? gallerySizes : heroSizes;

  return (
    <>
      <ul
        className={multiColumn ? "grid gap-6 md:grid-cols-2" : "grid gap-6"}
      >
        {images.map((image, index) => {
          const clickable = !image.placeholder;

          return (
            <li key={image.src}>
              <figure>
                {clickable ? (
                  <button
                    type="button"
                    onClick={(event) => open(index, event.currentTarget)}
                    className="group relative w-full cursor-zoom-in rounded-lg text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`View full image: ${image.alt}`}
                  >
                    <ProjectMedia
                      image={image}
                      sizes={thumbSizes}
                      decorative
                      zoomOnHover
                      className="transition-colors duration-[var(--duration-base)] group-hover:border-foreground/25"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background/80 text-muted-foreground opacity-90 backdrop-blur-sm transition-opacity duration-[var(--duration-base)] sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100"
                    >
                      <Expand className="h-3.5 w-3.5" />
                    </span>
                  </button>
                ) : (
                  <ProjectMedia
                    image={image}
                    sizes={thumbSizes}
                    decorative
                  />
                )}
                <figcaption className="mt-3 font-mono text-xs leading-6 text-muted-foreground">
                  {image.alt}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>

      {activeImage && activeIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-lightbox-caption"
          className="fixed inset-0 z-[70] flex flex-col bg-background/90 backdrop-blur-sm"
        >
          <div className="relative flex h-[var(--header-height)] shrink-0 items-center justify-between border-b border-border px-4 md:px-6">
            <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
              {canBrowse
                ? `${String(position).padStart(2, "0")} / ${String(viewableIndexes.length).padStart(2, "0")}`
                : "Screenshot"}
            </p>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={close}
              className={buttonStyles({ variant: "ghost", size: "icon" })}
            >
              <X className="h-5 w-5" aria-hidden />
              <span className="sr-only">Close full image</span>
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-6 md:px-16 md:py-8"
            onClick={(event) => {
              if (event.target === event.currentTarget) close();
            }}
          >
            {canBrowse ? (
              <button
                type="button"
                onClick={() => showRelative(-1)}
                className={cn(
                  buttonStyles({ variant: "outline", size: "icon" }),
                  "absolute left-3 top-1/2 z-10 -translate-y-1/2",
                )}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
                <span className="sr-only">Previous screenshot</span>
              </button>
            ) : null}

            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              sizes="100vw"
              quality={100}
              unoptimized
              className="h-auto max-h-[calc(100vh-10rem)] w-auto max-w-full rounded-lg border border-border object-contain"
              priority
            />

            {canBrowse ? (
              <button
                type="button"
                onClick={() => showRelative(1)}
                className={cn(
                  buttonStyles({ variant: "outline", size: "icon" }),
                  "absolute right-3 top-1/2 z-10 -translate-y-1/2",
                )}
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
                <span className="sr-only">Next screenshot</span>
              </button>
            ) : null}
          </div>

          <div className="relative shrink-0 border-t border-border px-4 py-4 md:px-6">
            <p
              id="project-lightbox-caption"
              aria-live="polite"
              className="mx-auto max-w-3xl text-center font-mono text-xs leading-6 text-muted-foreground"
            >
              {activeImage.alt}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
