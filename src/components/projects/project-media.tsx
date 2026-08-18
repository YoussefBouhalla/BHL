import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectImage } from "@/types/content";

interface ProjectMediaProps {
  image: ProjectImage;
  /** Rendered widths, so the optimiser generates the right srcset candidates. */
  sizes: string;
  /** Set on the largest above-the-fold visual only. */
  priority?: boolean;
  /** Overrides the intrinsic ratio when a layout needs a uniform crop. */
  ratio?: string;
  className?: string;
  /** Scales the visual when the nearest `group` ancestor is hovered. */
  zoomOnHover?: boolean;
  /** Hides the visual from assistive tech when a caption already describes it. */
  decorative?: boolean;
}

export function ProjectMedia({
  image,
  sizes,
  priority = false,
  ratio,
  className,
  zoomOnHover = false,
  decorative = false,
}: ProjectMediaProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-secondary",
        className,
      )}
      style={{ aspectRatio: ratio ?? `${image.width} / ${image.height}` }}
      role={image.placeholder && !decorative ? "img" : undefined}
      aria-label={image.placeholder && !decorative ? image.alt : undefined}
    >
      <div
        className={cn(
          "absolute inset-0",
          zoomOnHover &&
            "transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]",
        )}
      >
        {image.placeholder ? (
          <PlaceholderVisual />
        ) : (
          <Image
            src={image.src}
            alt={decorative ? "" : image.alt}
            fill
            sizes={sizes}
            priority={priority}
            // UI screenshots stay as the source PNG. Next.js 16's default
            // quality-75 WebP pass blurs text and chrome.
            quality={100}
            unoptimized
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
}

/**
 * Stand-in wireframe used until a real screenshot exists. Labelled so an
 * unfinished asset never reads as a broken or misleading image.
 */
function PlaceholderVisual() {
  return (
    <div aria-hidden className="absolute inset-0">
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      <div className="absolute inset-0 flex flex-col p-[5%]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-border" />
          <span className="ml-auto font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
            Placeholder
          </span>
        </div>

        <div className="mt-[5%] flex min-h-0 flex-1 gap-[4%]">
          <div className="flex w-[22%] flex-col gap-[5%]">
            <span className="h-[9%] rounded-sm bg-primary/25" />
            <span className="h-[9%] rounded-sm bg-border/80" />
            <span className="h-[9%] rounded-sm bg-border/80" />
            <span className="h-[9%] rounded-sm bg-border/50" />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-[4%]">
            <span className="h-[16%] rounded-sm border border-primary/25 bg-primary/10" />
            <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-[4%]">
              <span className="rounded-sm bg-border/60" />
              <span className="rounded-sm bg-border/40" />
              <span className="rounded-sm bg-border/40" />
              <span className="rounded-sm bg-border/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
