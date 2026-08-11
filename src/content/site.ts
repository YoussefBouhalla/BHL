import type { SiteConfig } from "@/types/content";

/**
 * Single source of truth for personal details.
 * Replace the placeholder name, email, URL and profile links before deploying.
 * Null social or résumé URLs are rendered as unavailable, never as fake links.
 */
export const siteConfig = {
  name: "BHL",
  shortName: "BHL",
  role: "Full-Stack Developer",
  description:
    "Full-stack JavaScript and TypeScript developer building maintainable web applications, APIs and product interfaces.",
  location: "Remote / Europe",
  email: "hello@example.com",
  url: "https://example.com",
  socialLinks: [
    { label: "LinkedIn", href: null },
    { label: "GitHub", href: null },
  ],
  resumeUrl: null,
  availability: {
    open: true,
    note: "Available for new projects — September 2026",
  },
} satisfies SiteConfig;
