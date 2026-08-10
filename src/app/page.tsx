import { Container } from "@/components/primitives/container";
import { About } from "@/components/sections/about";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";

/** Anchor targets for the navigation. Replaced section by section in later phases. */
const upcomingSections = [
  {
    id: "projects",
    title: "Featured Projects",
    note: "Selected work with the problem, the approach and the outcome.",
  },
  {
    id: "experience",
    title: "Experience",
    note: "Roles, timeline and delivery highlights.",
  },
  {
    id: "contact",
    title: "Contact",
    note: "Project enquiries and direct contact details.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />

      {upcomingSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="border-t border-border"
        >
          <Container className="py-[var(--section-padding)]">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {String(index + 4).padStart(2, "0")}
            </p>
            <h2
              id={`${section.id}-heading`}
              className="mt-4 text-3xl font-bold md:text-4xl"
            >
              {section.title}
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              {section.note}
            </p>
          </Container>
        </section>
      ))}
    </>
  );
}
