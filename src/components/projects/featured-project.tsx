import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/primitives/button";
import { CornerMarks } from "@/components/primitives/corner-marks";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectMedia } from "@/components/projects/project-media";
import { TechnologyList } from "@/components/projects/technology-list";
import { cn } from "@/lib/utils";
import type { Project } from "@/types/content";

const featuredSizes = "(min-width: 1280px) 1200px, calc(100vw - 3rem)";

function FieldLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        "font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground",
        className,
      )}
    >
      {children}
    </h4>
  );
}

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const href = `/projects/${project.slug}`;
  const titleId = `featured-${project.slug}-title`;

  return (
    <article aria-labelledby={titleId}>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em]">
        <span className="text-primary">Featured case study</span>
        <span aria-hidden className="text-border">
          /
        </span>
        <span className="text-muted-foreground">{project.category}</span>
        <span aria-hidden className="text-border">
          /
        </span>
        <span className="tabular-nums text-muted-foreground">
          {project.year}
        </span>
      </div>

      <div className="mt-6 grid gap-x-8 gap-y-5 lg:grid-cols-12 lg:items-end">
        <h3
          id={titleId}
          className="text-balance text-[clamp(1.875rem,3.8vw,3rem)] font-bold leading-[1.08] tracking-[-0.03em] lg:col-span-7"
        >
          {project.title}
        </h3>
        <p className="text-base leading-7 text-muted-foreground lg:col-span-5">
          {project.shortDescription}
        </p>
      </div>

      <Link
        href={href}
        aria-label={`${project.title} — read the case study`}
        className="group relative mt-10 block rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <CornerMarks />
        <ProjectMedia
          image={project.image}
          sizes={featuredSizes}
          ratio="16 / 9"
          zoomOnHover
          className="transition-colors duration-[var(--duration-base)] group-hover:border-foreground/25"
        />
      </Link>

      <div className="mt-12 grid gap-10 border-t border-border pt-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <FieldLabel>The problem</FieldLabel>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.problem}
          </p>
        </div>

        <div className="lg:col-span-4">
          <FieldLabel>The solution</FieldLabel>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="lg:col-span-4">
          <FieldLabel>My role</FieldLabel>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {project.role}
          </p>

          <FieldLabel className="mt-8">Technology stack</FieldLabel>
          <TechnologyList
            technologies={project.technologies}
            className="mt-4"
            aria-label={`Technology stack for ${project.title}`}
          />
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-10">
        <FieldLabel>Key implementation details</FieldLabel>
        <ol className="mt-6 grid gap-x-8 gap-y-9 md:grid-cols-3">
          {project.solutions.map((solution, index) => (
            <li key={solution.title}>
              <span
                aria-hidden
                className="font-mono text-xs tabular-nums text-primary"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h5 className="mt-2 text-base font-semibold leading-snug">
                {solution.title}
              </h5>
              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">
                {solution.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href={href}
          className={buttonStyles({ size: "lg", className: "group" })}
        >
          Read the case study
          <ArrowRight
            aria-hidden
            className="ml-2 h-4 w-4 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
          />
        </Link>
        <ProjectLinks project={project} size="default" />
      </div>
    </article>
  );
}
