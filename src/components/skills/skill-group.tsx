import { TechnologyItem } from "@/components/skills/technology-item";
import type { TechnologyGroup } from "@/types/content";

export function SkillGroup({
  group,
  index,
}: {
  group: TechnologyGroup;
  index: number;
}) {
  const headingId = `skill-group-${group.id}`;

  return (
    <article
      aria-labelledby={headingId}
      className="group grid gap-6 border-t border-border py-8 md:grid-cols-12 md:gap-8 md:py-10"
    >
      <div className="md:col-span-4">
        <div className="flex items-baseline gap-3">
          <span
            aria-hidden
            className="font-mono text-[0.6875rem] tabular-nums text-muted-foreground transition-colors duration-[var(--duration-base)] group-hover:text-primary"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 id={headingId} className="text-xl font-semibold">
            {group.name}
          </h3>
        </div>
        <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground md:pl-8">
          {group.description}
        </p>
      </div>

      <ul className="flex flex-wrap content-start gap-2.5 md:col-span-8">
        {group.technologies.map((technology) => (
          <TechnologyItem key={technology.name} technology={technology} />
        ))}
      </ul>
    </article>
  );
}
