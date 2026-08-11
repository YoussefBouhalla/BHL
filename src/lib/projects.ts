import { projects } from "@/content/projects";
import type { Project } from "@/types/content";

const byOrder = (a: Project, b: Project) => a.order - b.order;

/** Every project in display order. */
export const orderedProjects: readonly Project[] = [...projects].sort(byOrder);

/** The single project that leads the section, or null if none is flagged. */
export function getFeaturedProject(): Project | null {
  return orderedProjects.find((project) => project.featured) ?? null;
}

/** Everything shown in the secondary grid. */
export function getSecondaryProjects(): readonly Project[] {
  return orderedProjects.filter((project) => !project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  return orderedProjects.find((project) => project.slug === slug) ?? null;
}

/** The next project in order, wrapping to the first so the trail never dead-ends. */
export function getNextProject(slug: string): Project | null {
  const index = orderedProjects.findIndex((project) => project.slug === slug);

  if (index === -1 || orderedProjects.length < 2) {
    return null;
  }

  return orderedProjects[(index + 1) % orderedProjects.length];
}

export function getProjectSlugs(): readonly string[] {
  return orderedProjects.map((project) => project.slug);
}
