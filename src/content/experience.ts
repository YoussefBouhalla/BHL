import type { ExperienceContent } from "@/types/content";

/**
 * PLACEHOLDER CONTENT
 *
 * No employment history was provided for this phase. Replace every field
 * below with verified details before publishing, then change `contentStatus`
 * to "confirmed". Keep achievements factual and avoid unverified metrics.
 */
export const experienceContent = {
  eyebrow: "Experience",
  heading: "Professional history, with the context that matters.",
  description:
    "Roles should show the environment, the responsibility and the engineering decisions behind the work — not just a list of job titles.",
  entries: [
    {
      company: "Company name — placeholder",
      role: "Role title — placeholder",
      period: "Employment period — placeholder",
      description:
        "Verified employment details have not been provided. This entry preserves the final timeline structure without presenting fictional experience as fact.",
      responsibilities: [
        "Add a concise, verified responsibility and its product context.",
        "Add the system or workflow you owned, improved or maintained.",
        "Add how you collaborated, reviewed work or supported delivery.",
      ],
      technologies: [
        "Add verified technology",
        "Add verified platform",
        "Add verified tooling",
      ],
      achievements: [
        "Add a verified outcome. Include a metric only when it can be substantiated.",
        "Add a technical improvement and explain why it mattered.",
      ],
      contentStatus: "placeholder",
    },
  ],
} satisfies ExperienceContent;
