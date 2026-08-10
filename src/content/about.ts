import type { AboutContent } from "@/types/content";

export const aboutContent = {
  eyebrow: "How I work",
  heading: "Engineering decisions that survive the first release.",
  introduction:
    "I’m a full-stack JavaScript and TypeScript developer focused on web products with real users, real data and real operational constraints.",
  paragraphs: [
    "I build product interfaces, application APIs and the data models connecting them. The work ranges from authenticated dashboards and internal tools to customer-facing platforms where reliability, speed and clarity directly affect the business.",
    "My approach starts with the problem rather than the framework. I reduce it to testable decisions, establish the boundaries between interface, domain logic and data, then choose the simplest architecture that can support the product’s likely next stage.",
    "A feature is not finished when it works once. I optimise for readable code, explicit contracts and predictable behaviour so the application remains safe to change. User experience is part of that engineering standard: responsive, accessible interfaces and fast feedback are product requirements, not polish added at the end.",
  ],
  principles: [
    {
      number: "01",
      title: "Product context first",
      description:
        "Technical choices are tied to user needs, delivery risk and measurable product outcomes.",
    },
    {
      number: "02",
      title: "Simple, explicit systems",
      description:
        "Clear boundaries and boring, proven patterns beat abstraction without a concrete payoff.",
    },
    {
      number: "03",
      title: "Built for the next change",
      description:
        "Maintainability, observability and accessible UX are designed in from the first release.",
    },
  ],
} satisfies AboutContent;
