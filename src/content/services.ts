import type { ServicesContent } from "@/types/content";

export const servicesContent = {
  eyebrow: "Services",
  heading: "Problems I can take from unclear to shipped.",
  description:
    "I work across interface, application logic and data. Engagements are shaped around the product problem, not a fixed package or a list of billable features.",
  services: [
    {
      id: "product-delivery",
      title: "Full-stack product delivery",
      problem:
        "You have a workflow, dashboard or product idea, but the interface, backend and data model still exist as separate decisions.",
      deliverable:
        "A cohesive web application: product flow, responsive interface, application logic, data model, authentication and deployment-ready implementation.",
      technologies: [
        "TypeScript",
        "Next.js",
        "React",
        "Node.js",
        "Prisma",
        "SQL",
      ],
    },
    {
      id: "interface-engineering",
      title: "Next.js & React engineering",
      problem:
        "The interface is slow, difficult to extend or inconsistent across screen sizes, and every new feature adds more client-side complexity.",
      deliverable:
        "A maintainable rendering architecture with accessible, responsive components, clear server/client boundaries and a reusable visual system.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
      ],
    },
    {
      id: "backend-architecture",
      title: "API, database & authentication architecture",
      problem:
        "Data rules are implicit, integrations fail unpredictably or permissions are spread across routes with no reliable boundary.",
      deliverable:
        "Typed API contracts, relational schemas, validation, authentication and explicit access-control paths designed around the product's real workflows.",
      technologies: [
        "Node.js",
        "Express",
        "REST APIs",
        "Prisma",
        "MySQL",
        "SQLite",
      ],
    },
    {
      id: "application-improvements",
      title: "Existing application improvements",
      problem:
        "A live application has recurring bugs, slow paths or fragile code that makes otherwise straightforward changes risky.",
      deliverable:
        "A focused technical assessment followed by targeted fixes: bottleneck removal, defect resolution, safer boundaries and maintainability improvements.",
      technologies: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Performance profiling",
      ],
    },
  ],
  cta: {
    eyebrow: "Have a product problem?",
    heading: "Bring the constraint, not a perfect brief.",
    description:
      "Share what is not working, what needs to exist and where the risk is. I can help define the technical path before committing to a build.",
    primary: {
      label: "Start a conversation",
      href: "/#contact",
    },
    secondary: {
      label: "Review selected work",
      href: "/#projects",
    },
  },
} satisfies ServicesContent;
