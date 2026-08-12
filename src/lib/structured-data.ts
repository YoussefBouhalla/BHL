import { siteConfig } from "@/content/site";
import { technologyGroups } from "@/content/skills";
import { absoluteUrl } from "@/lib/metadata";
import type { Project } from "@/types/content";

const baseUrl = siteConfig.url.replace(/\/$/, "");
const personId = `${baseUrl}/#person`;
const websiteId = `${baseUrl}/#website`;
const profilePageId = `${baseUrl}/#profile-page`;

export function getPortfolioStructuredData() {
  const sameAs = siteConfig.socialLinks.flatMap((link) =>
    link.href ? [link.href] : [],
  );
  const knowsAbout = Array.from(
    new Set(
      technologyGroups.flatMap((group) =>
        group.technologies.map((technology) => technology.name),
      ),
    ),
  );

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteConfig.url,
        name: `${siteConfig.name} — ${siteConfig.role}`,
        description: siteConfig.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        url: siteConfig.url,
        knowsAbout,
        ...(sameAs.length > 0 ? { sameAs } : {}),
      },
    ],
  };
}

/**
 * Project schema is emitted only after its content is explicitly confirmed.
 * Placeholder case studies remain noindex and never become structured claims.
 */
export function getProjectStructuredData(project: Project) {
  if (project.contentStatus !== "confirmed") {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${absoluteUrl(`/projects/${project.slug}`)}#case-study`,
    url: absoluteUrl(`/projects/${project.slug}`),
    name: project.title,
    description: project.shortDescription,
    genre: project.category,
    keywords: project.technologies,
    author: { "@id": personId },
    isPartOf: { "@id": websiteId },
    ...(project.image.placeholder
      ? {}
      : { image: absoluteUrl(project.image.src) }),
  };
}
