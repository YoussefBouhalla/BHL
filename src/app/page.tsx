import { Container } from "@/components/primitives/container";
import { About } from "@/components/sections/about";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";

/** Anchor targets for the navigation. Replaced section by section in later phases. */
const upcomingSections = [
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
      <FeaturedProjects />
      <Experience />
      <Services />
      <DevelopmentProcess />

      {upcomingSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className="border-t border-border"
        >
          <Container className="py-[var(--section-padding)]">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
              {String(index + 8).padStart(2, "0")}
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
