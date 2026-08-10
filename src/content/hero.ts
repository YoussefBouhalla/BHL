import type { HeroContent } from "@/types/content";

export const heroContent = {
  headline: {
    lead: "Full-stack developer building ",
    emphasis: "production-grade",
    trail: " web applications.",
  },
  supporting:
    "I work across the whole stack — React and Next.js interfaces, TypeScript and Node.js APIs, and the relational data models underneath. From first commit to deployed release, I build software that ships on time and stays maintainable after launch.",
  primaryCta: {
    label: "Start a project",
    href: "#contact",
  },
  secondaryCta: {
    label: "View selected work",
    href: "#projects",
  },
  stack: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  manifest: {
    filename: "stack.config.ts",
    rows: [
      { label: "Focus", value: "Web applications, APIs & product interfaces" },
      { label: "Frontend", value: "React · Next.js · TypeScript · Tailwind" },
      { label: "Backend", value: "Node.js · Express · REST · tRPC" },
      { label: "Data", value: "PostgreSQL · Prisma · Redis" },
      { label: "Delivery", value: "Docker · CI/CD · Vercel · AWS" },
    ],
  },
} satisfies HeroContent;
