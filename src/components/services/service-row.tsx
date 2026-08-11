import type { Service } from "@/types/content";

interface ServiceRowProps {
  service: Service;
  index: number;
}

export function ServiceRow({ service, index }: ServiceRowProps) {
  const titleId = `service-${service.id}-title`;

  return (
    <li className="group grid gap-6 border-t border-border py-9 first:border-t-0 lg:grid-cols-12 lg:gap-8 lg:py-12">
      <span
        aria-hidden
        className="font-mono text-xs tabular-nums text-primary lg:col-span-1"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <h3
        id={titleId}
        className="max-w-sm text-xl font-semibold leading-snug transition-colors duration-[var(--duration-base)] group-hover:text-primary lg:col-span-3"
      >
        {service.title}
      </h3>

      <div
        aria-labelledby={titleId}
        className="grid gap-7 md:grid-cols-2 lg:col-span-8"
      >
        <ServiceDetail label="The problem" value={service.problem} />
        <ServiceDetail label="What I deliver" value={service.deliverable} />

        <div className="border-t border-border pt-5 md:col-span-2">
          <h4 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
            Relevant technologies
          </h4>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {service.technologies.map((technology) => (
              <li
                key={technology}
                className="flex items-center gap-2 font-mono text-xs text-foreground/80"
              >
                <span
                  aria-hidden
                  className="h-1 w-1 rounded-full bg-primary"
                />
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function ServiceDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h4 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </h4>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{value}</p>
    </div>
  );
}
