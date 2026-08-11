import { cn } from "@/lib/utils";
import type { ProcessStep as ProcessStepData } from "@/types/content";

interface ProcessStepProps {
  step: ProcessStepData;
  index: number;
  total: number;
}

export function ProcessStep({ step, index, total }: ProcessStepProps) {
  const titleId = `process-step-${step.number}`;

  return (
    <li
      className={cn(
        "group relative flex min-w-0 flex-col py-8 md:px-7 md:py-9 lg:min-h-[25rem] lg:px-6 lg:py-8",
        index > 0 && "border-t border-border",
        index % 2 === 1 && "md:border-l",
        index >= 2 && "md:border-t",
        index === total - 1 && "md:col-span-2 lg:col-span-1",
        "lg:border-t-0",
        index > 0 && "lg:border-l",
      )}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-x-100"
      />

      <span
        aria-hidden
        className="font-display text-[clamp(3.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.06em] text-foreground/[0.07] transition-colors duration-[var(--duration-base)] group-hover:text-primary/20"
      >
        {step.number}
      </span>

      <h3 id={titleId} className="mt-6 text-xl font-semibold">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">
        {step.description}
      </p>

      <div className="mt-8 border-t border-border pt-5 lg:mt-auto">
        <p className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
          Output
        </p>
        <p className="mt-2 text-sm font-medium text-foreground">
          {step.outcome}
        </p>

        <ul
          aria-label={`${step.title} priorities`}
          className="mt-4 flex flex-wrap gap-x-4 gap-y-2"
        >
          {step.reinforces.map((principle) => (
            <li
              key={principle}
              className="flex items-center gap-2 font-mono text-[0.6875rem] text-muted-foreground"
            >
              <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
