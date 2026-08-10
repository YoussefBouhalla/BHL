import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({
  id,
  number,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <header className={cn("grid gap-6 lg:grid-cols-12", className)}>
      <div className="flex items-baseline gap-3 lg:col-span-3">
        <span
          aria-hidden
          className="font-mono text-xs tabular-nums text-primary"
        >
          {number}
        </span>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </p>
      </div>

      <div className="lg:col-span-8 lg:col-start-5">
        <h2
          id={id}
          className="text-balance text-[clamp(2rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.035em]"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </header>
  );
}
