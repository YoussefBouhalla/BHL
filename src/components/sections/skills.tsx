import { Container } from "@/components/primitives/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { SkillGroup } from "@/components/skills/skill-group";
import { technologyGroups, technologyLegend } from "@/content/skills";
import { cn } from "@/lib/utils";
import type { TechnologyLevel } from "@/types/content";

const legendMarkers: Record<TechnologyLevel, string> = {
  primary: "bg-primary",
  secondary: "bg-foreground/45",
  supporting: "border border-muted-foreground/60 bg-transparent",
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-border bg-card/35"
    >
      <Container className="py-[var(--section-padding)]">
        <SectionHeading
          id="skills-heading"
          number="03"
          eyebrow="Technical practice"
          title="A focused stack for complete product delivery."
          description="Primary tools lead the work. Secondary and supporting technologies complete the system where they provide a clear advantage."
        />

        <div
          aria-label="Technology proficiency key"
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-6 lg:ml-[33.333333%] lg:mt-16"
        >
          {technologyLegend.map((item) => (
            <div
              key={item.level}
              className="flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-muted-foreground"
            >
              <span
                aria-hidden
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  legendMarkers[item.level],
                )}
              />
              {item.label}
            </div>
          ))}
        </div>

        <div>
          {technologyGroups.map((group, index) => (
            <SkillGroup key={group.id} group={group} index={index} />
          ))}
        </div>

        <p className="border-t border-border pt-6 font-mono text-xs leading-6 text-muted-foreground">
          <span className="text-primary" aria-hidden>
            {"//"}
          </span>{" "}
          Proficiency is represented by hierarchy, never fabricated percentages.
        </p>
      </Container>
    </section>
  );
}
