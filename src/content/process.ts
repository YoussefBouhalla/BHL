import type { ProcessContent } from "@/types/content";

export const processContent = {
  eyebrow: "Development process",
  heading: "A clear path from first conversation to launch.",
  description:
    "The process keeps decisions, progress and trade-offs visible. You know what is being built, why it matters and what happens next.",
  steps: [
    {
      number: "01",
      title: "Understand",
      description: "Understand the business, users and requirements.",
      outcome: "Shared context",
      reinforces: ["Communication", "User experience"],
    },
    {
      number: "02",
      title: "Plan",
      description:
        "Define architecture, features and the technical approach.",
      outcome: "Visible roadmap",
      reinforces: ["Transparency", "Maintainability"],
    },
    {
      number: "03",
      title: "Build",
      description:
        "Implement the product using modern, maintainable technologies.",
      outcome: "Reviewable increments",
      reinforces: ["Communication", "Maintainability"],
    },
    {
      number: "04",
      title: "Refine",
      description:
        "Test, optimize, improve UX and resolve edge cases.",
      outcome: "Release confidence",
      reinforces: ["Quality", "Performance", "User experience"],
    },
    {
      number: "05",
      title: "Launch",
      description:
        "Deploy, monitor and prepare the project for continued development.",
      outcome: "Supported handover",
      reinforces: ["Transparency", "Quality"],
    },
  ],
  note:
    "Communication does not happen only at milestones. Decisions, risks and changes stay visible throughout the build.",
} satisfies ProcessContent;
