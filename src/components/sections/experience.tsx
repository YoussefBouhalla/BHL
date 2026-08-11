import { ExperienceEntry } from "@/components/experience/experience-entry";
import { Container } from "@/components/primitives/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { experienceContent } from "@/content/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-border bg-card/35"
    >
      <Container className="py-[var(--section-padding)]">
        <SectionHeading
          id="experience-heading"
          number="05"
          eyebrow={experienceContent.eyebrow}
          title={experienceContent.heading}
          description={experienceContent.description}
        />

        <ol className="mt-16 border-y border-border lg:mt-20">
          {experienceContent.entries.map((entry, index) => (
            <ExperienceEntry
              key={`${entry.company}-${entry.role}-${entry.period}`}
              entry={entry}
              index={index}
            />
          ))}
        </ol>

        <p className="mt-6 font-mono text-xs leading-6 text-muted-foreground">
          <span aria-hidden className="text-primary">
            {"//"}
          </span>{" "}
          Placeholder entries are intentionally explicit. Replace them only
          with verified employment details.
        </p>
      </Container>
    </section>
  );
}
