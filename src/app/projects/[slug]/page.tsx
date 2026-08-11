import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/primitives/container";
import { CornerMarks } from "@/components/primitives/corner-marks";
import { ProjectLinks } from "@/components/projects/project-links";
import { ProjectMedia } from "@/components/projects/project-media";
import { TechnologyList } from "@/components/projects/technology-list";
import {
  getNextProject,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

const heroSizes = "(min-width: 1280px) 1200px, calc(100vw - 3rem)";
const gallerySizes = "(min-width: 768px) 50vw, calc(100vw - 3rem)";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: `${project.title} — Case study`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const nextProject = getNextProject(slug);

  return (
    <article className="pb-4">
      <Container className="pt-12 md:pt-16">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors duration-[var(--duration-base)] hover:text-foreground"
        >
          <ArrowLeft
            aria-hidden
            className="h-3.5 w-3.5 transition-transform duration-[var(--duration-base)] group-hover:-translate-x-0.5"
          />
          Selected work
        </Link>

        {project.contentStatus === "placeholder" ? (
          <div className="mt-8 flex items-start gap-3 rounded-md border border-border bg-card/50 px-4 py-3">
            <span
              aria-hidden
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            />
            <p className="font-mono text-xs leading-6 text-muted-foreground">
              Placeholder case study. The copy below is scaffolding — replace it
              in{" "}
              <code className="text-foreground">src/content/projects.ts</code>{" "}
              and set <code className="text-foreground">contentStatus</code> to{" "}
              <code className="text-foreground">&quot;confirmed&quot;</code>.
            </p>
          </div>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em]">
          <span className="text-primary">Case study</span>
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

        <h1 className="mt-6 text-balance text-[clamp(2.25rem,5.2vw,3.75rem)] font-bold leading-[1.06] tracking-[-0.035em]">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-[1.7] text-muted-foreground md:text-lg">
          {project.shortDescription}
        </p>

        <ProjectLinks
          project={project}
          className="mt-8"
          emptyNote="// Links unset — add githubUrl / liveUrl in src/content/projects.ts"
        />

        <div className="relative mt-12 md:mt-16">
          <CornerMarks />
          <ProjectMedia
            image={project.image}
            sizes={heroSizes}
            ratio="16 / 9"
            priority
          />
        </div>

        <dl className="mt-10 grid gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-3">
          <Fact label="Role" value={project.role} />
          <Fact label="Category" value={project.category} />
          <Fact label="Year" value={String(project.year)} />
        </dl>
      </Container>

      <CaseSection id="overview" number="01" title="Overview">
        <p className="text-base leading-[1.8] text-muted-foreground">
          {project.description}
        </p>
      </CaseSection>

      <CaseSection id="problem" number="02" title="The problem">
        <p className="text-base leading-[1.8] text-muted-foreground">
          {project.problem}
        </p>
      </CaseSection>

      <CaseSection id="approach" number="03" title="Approach">
        <ol className="grid gap-8">
          {project.solutions.map((solution, index) => (
            <li
              key={solution.title}
              className="border-l-2 border-border pl-5 transition-colors duration-[var(--duration-base)] hover:border-primary/60"
            >
              <span
                aria-hidden
                className="font-mono text-xs tabular-nums text-primary"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1.5 text-lg font-semibold leading-snug">
                {solution.title}
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">
                {solution.description}
              </p>
            </li>
          ))}
        </ol>
      </CaseSection>

      <CaseSection
        id="challenges"
        number="04"
        title="Technical challenges"
      >
        <ul className="grid gap-8">
          {project.challenges.map((challenge) => (
            <li key={challenge.title}>
              <h3 className="text-lg font-semibold leading-snug">
                {challenge.title}
              </h3>
              <p className="mt-2.5 text-sm leading-7 text-muted-foreground">
                {challenge.description}
              </p>
            </li>
          ))}
        </ul>
      </CaseSection>

      <CaseSection id="stack" number="05" title="Technology stack">
        <TechnologyList
          technologies={project.technologies}
          className="gap-x-8 gap-y-3"
          aria-label={`Technology stack for ${project.title}`}
        />
      </CaseSection>

      {project.gallery.length > 0 ? (
        <CaseSection id="screenshots" number="06" title="Screenshots" wide>
          <ul
            className={
              project.gallery.length > 1
                ? "grid gap-6 md:grid-cols-2"
                : "grid gap-6"
            }
          >
            {project.gallery.map((image) => (
              <li key={image.src}>
                <figure>
                  <ProjectMedia
                    image={image}
                    sizes={
                      project.gallery.length > 1 ? gallerySizes : heroSizes
                    }
                    ratio="16 / 10"
                    decorative
                  />
                  <figcaption className="mt-3 font-mono text-xs leading-6 text-muted-foreground">
                    {image.alt}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </CaseSection>
      ) : null}

      <CaseSection id="outcome" number="07" title="Outcome">
        <ul className="grid gap-4">
          {project.results.map((result) => (
            <li key={result} className="flex items-start gap-3">
              <Check
                aria-hidden
                className="mt-1 h-4 w-4 shrink-0 text-primary"
              />
              <span className="text-sm leading-7 text-muted-foreground">
                {result}
              </span>
            </li>
          ))}
        </ul>
      </CaseSection>

      {nextProject ? (
        <nav aria-label="Project navigation" className="border-t border-border">
          <Container className="py-14 lg:py-20">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group flex flex-col gap-4 rounded-lg border border-border bg-card/40 p-6 transition-colors duration-[var(--duration-base)] hover:border-foreground/25 hover:bg-card sm:flex-row sm:items-center sm:justify-between sm:p-8"
            >
              <span>
                <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
                  Next project
                </span>
                <span className="mt-2 block text-xl font-semibold transition-colors duration-[var(--duration-base)] group-hover:text-primary md:text-2xl">
                  {nextProject.title}
                </span>
                <span className="mt-1 block font-mono text-xs text-muted-foreground">
                  {nextProject.category}
                </span>
              </span>
              <ArrowRight
                aria-hidden
                className="h-5 w-5 shrink-0 text-primary transition-transform duration-[var(--duration-base)] group-hover:translate-x-1"
              />
            </Link>
          </Container>
        </nav>
      ) : null}
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-6 text-foreground">{value}</dd>
    </div>
  );
}

interface CaseSectionProps {
  id: string;
  number: string;
  title: string;
  /** Lets media-heavy sections use the full grid width. */
  wide?: boolean;
  children: ReactNode;
}

function CaseSection({ id, number, title, wide, children }: CaseSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section aria-labelledby={headingId} className="border-t border-border">
      <Container className="grid gap-8 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="flex items-baseline gap-3 lg:col-span-3">
          <span
            aria-hidden
            className="font-mono text-xs tabular-nums text-primary"
          >
            {number}
          </span>
          <h2
            id={headingId}
            className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            {title}
          </h2>
        </div>

        <div
          className={
            wide ? "lg:col-span-9" : "lg:col-span-8 lg:col-start-5 xl:col-span-7"
          }
        >
          {children}
        </div>
      </Container>
    </section>
  );
}
