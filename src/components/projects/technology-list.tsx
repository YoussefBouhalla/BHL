import { cn } from "@/lib/utils";

interface TechnologyListProps {
  technologies: readonly string[];
  /** Truncates the list and appends a remainder count. */
  limit?: number;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

export function TechnologyList({
  technologies,
  limit,
  className,
  ...labelling
}: TechnologyListProps) {
  const visible = limit ? technologies.slice(0, limit) : technologies;
  const remainder = technologies.length - visible.length;

  return (
    <ul
      {...labelling}
      className={cn("flex flex-wrap gap-x-5 gap-y-2", className)}
    >
      {visible.map((technology) => (
        <li
          key={technology}
          className="flex items-center gap-2 font-mono text-xs text-foreground/80"
        >
          <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
          {technology}
        </li>
      ))}

      {remainder > 0 ? (
        <li className="font-mono text-xs text-muted-foreground">
          +{remainder} more
        </li>
      ) : null}
    </ul>
  );
}
