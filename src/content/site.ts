import type { SiteConfig } from "@/types/content";

/**
 * Single source of truth for personal details.
 * Replace the placeholder name, email and URL before deploying.
 */
export const siteConfig = {
  name: "BHL",
  shortName: "BHL",
  role: "Full-Stack Developer",
  location: "Remote / Europe",
  email: "hello@example.com",
  url: "https://example.com",
  availability: {
    open: true,
    note: "Available for new projects — September 2026",
  },
} satisfies SiteConfig;
