import type { Technology, TechnologyLevel } from "@/types/content";
import { cn } from "@/lib/utils";

const levelStyles: Record<TechnologyLevel, string> = {
  primary:
    "border-foreground/20 bg-foreground/[0.04] text-base font-semibold text-foreground hover:border-primary/60 hover:bg-primary/[0.06]",
  secondary:
    "border-border bg-transparent text-sm font-medium text-foreground/85 hover:border-foreground/25 hover:text-foreground",
  supporting:
    "border-transparent bg-secondary/50 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
};

const markerStyles: Record<TechnologyLevel, string> = {
  primary: "bg-primary",
  secondary: "bg-foreground/45",
  supporting: "border border-muted-foreground/60 bg-transparent",
};

export function TechnologyItem({ technology }: { technology: Technology }) {
  return (
    <li
      className={cn(
        "group/technology inline-flex min-h-9 items-center gap-2.5 rounded-md border px-3 py-2 transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5",
        levelStyles[technology.level],
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-1.5 w-1.5 shrink-0 rounded-full transition-transform duration-[var(--duration-base)] group-hover/technology:scale-125",
          markerStyles[technology.level],
        )}
      />
      <span>{technology.name}</span>
      <span className="sr-only">, {technology.level} technology</span>
    </li>
  );
}
