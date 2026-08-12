import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/metadata";
import { orderedProjects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexingEnabled) {
    return [];
  }

  const confirmedProjects = orderedProjects
    .filter((project) => project.contentStatus === "confirmed")
    .map((project) => ({
      url: absoluteUrl(`/projects/${project.slug}`),
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.8,
    }));

  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...confirmedProjects,
  ];
}
