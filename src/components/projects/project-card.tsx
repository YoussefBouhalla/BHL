import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectMedia } from "@/components/projects/project-media";
import { TechnologyList } from "@/components/projects/technology-list";
import type { Project } from "@/types/content";

const cardSizes =
  "(min-width: 1024px) 32vw, (min-width: 640px) 48vw, calc(100vw - 3rem)";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const titleId = `project-${project.slug}-title`;

  return (
    /**
     * The title anchor is the only link; its ::after overlay makes the whole
     * card clickable. That keeps the link's accessible name short instead of
     * announcing every word in the card.
     */
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card/40 transition-colors duration-[var(--duration-base)] hover:border-foreground/25 hover:bg-card has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-offset-2 has-[a:focus-visible]:ring-offset-background">
      <ProjectMedia
        image={project.image}
        sizes={cardSizes}
        ratio="16 / 10"
        zoomOnHover
        className="rounded-none border-0 border-b border-border"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3 font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span>{project.category}</span>
          <span className="tabular-nums">{project.year}</span>
        </div>

        <h4 id={titleId} className="mt-3 text-lg font-semibold leading-snug">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors duration-[var(--duration-base)] after:absolute after:inset-0 after:content-[''] focus-visible:outline-none group-hover:text-primary"
          >
            {project.title}
          </Link>
        </h4>

        <p className="mt-2.5 flex-1 text-sm leading-6 text-muted-foreground">
          {project.shortDescription}
        </p>

        <TechnologyList
          technologies={project.technologies}
          limit={3}
          className="mt-5"
          aria-label={`Technologies used in ${project.title}`}
        />

        <p className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 font-mono text-xs text-primary">
          View project
          <ArrowUpRight
            aria-hidden
            className="h-3.5 w-3.5 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </p>
      </div>
    </article>
  );
}
