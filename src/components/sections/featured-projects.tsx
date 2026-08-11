import { Container } from "@/components/primitives/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { FeaturedProject } from "@/components/projects/featured-project";
import { ProjectCard } from "@/components/projects/project-card";
import { projectsSection } from "@/content/projects";
import { getFeaturedProject, getSecondaryProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProject();
  const secondary = getSecondaryProjects();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-border"
    >
      <Container className="py-[var(--section-padding)]">
        <SectionHeading
          id="projects-heading"
          number="04"
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.heading}
          description={projectsSection.description}
        />

        {featured ? (
          <div className="mt-16 lg:mt-20">
            <FeaturedProject project={featured} />
          </div>
        ) : null}

        {secondary.length > 0 ? (
          <div className="mt-20 border-t border-border pt-14 lg:mt-24">
            <h3
              id="more-projects-heading"
              className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground"
            >
              More projects
            </h3>

            <ul
              aria-labelledby="more-projects-heading"
              className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {secondary.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
