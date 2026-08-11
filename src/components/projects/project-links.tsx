import { ExternalLink, Github } from "lucide-react";
import { buttonStyles } from "@/components/primitives/button";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

interface ProjectLinksProps {
  project: Project;
  size?: "sm" | "default";
  /** Shown instead of the links while both URLs are still unset. */
  emptyNote?: string;
  className?: string;
}

export function ProjectLinks({
  project,
  size = "default",
  emptyNote,
  className,
}: ProjectLinksProps) {
  const { liveUrl, githubUrl, title } = project;

  if (!liveUrl && !githubUrl) {
    return emptyNote ? (
      <p className={cn("font-mono text-xs text-muted-foreground", className)}>
        {emptyNote}
      </p>
    ) : null;
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles({ variant: "outline", size })}
        >
          <ExternalLink aria-hidden className="mr-2 h-4 w-4" />
          Live site
          <span className="sr-only">{` — ${title}, opens in a new tab`}</span>
        </a>
      ) : null}

      {githubUrl ? (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles({ variant: "outline", size })}
        >
          <Github aria-hidden className="mr-2 h-4 w-4" />
          Source
          <span className="sr-only">{` — ${title}, opens in a new tab`}</span>
        </a>
      ) : null}
    </div>
  );
}
