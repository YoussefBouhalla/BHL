import type { TechnologyGroup } from "@/types/content";

export const technologyGroups = [
  {
    id: "frontend",
    name: "Frontend",
    description: "Product interfaces with strong interaction and rendering fundamentals.",
    technologies: [
      { name: "React", level: "primary" },
      { name: "Next.js", level: "primary" },
      { name: "TypeScript", level: "primary" },
      { name: "JavaScript", level: "secondary" },
      { name: "Tailwind CSS", level: "secondary" },
      { name: "shadcn/ui", level: "supporting" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    description: "Clear application boundaries, contracts and server-side workflows.",
    technologies: [
      { name: "Node.js", level: "primary" },
      { name: "REST APIs", level: "primary" },
      { name: "Express", level: "secondary" },
    ],
  },
  {
    id: "database",
    name: "Database",
    description: "Relational models designed around integrity and useful query paths.",
    technologies: [
      { name: "Prisma", level: "primary" },
      { name: "MySQL", level: "secondary" },
      { name: "SQLite", level: "supporting" },
    ],
  },
  {
    id: "desktop",
    name: "Desktop",
    description: "Web technology delivered as focused cross-platform software.",
    technologies: [{ name: "Electron", level: "supporting" }],
  },
  {
    id: "engineering",
    name: "Engineering",
    description: "Capabilities that make features secure, maintainable and fast.",
    technologies: [
      { name: "API architecture", level: "primary" },
      { name: "Database design", level: "primary" },
      { name: "Authentication", level: "secondary" },
      { name: "Responsive UI", level: "secondary" },
      { name: "Performance optimization", level: "secondary" },
    ],
  },
] as const satisfies readonly TechnologyGroup[];

export const technologyLegend = [
  { label: "Primary", level: "primary" },
  { label: "Secondary", level: "secondary" },
  { label: "Supporting", level: "supporting" },
] as const;
