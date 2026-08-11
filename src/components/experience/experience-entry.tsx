import type { ExperienceEntry as ExperienceEntryData } from "@/types/content";

interface ExperienceEntryProps {
  entry: ExperienceEntryData;
  index: number;
}

export function ExperienceEntry({ entry, index }: ExperienceEntryProps) {
  const titleId = `experience-entry-${index + 1}`;

  return (
    <li className="relative grid gap-7 border-t border-border py-10 first:border-t-0 lg:grid-cols-12 lg:gap-8 lg:py-14">
      <div className="lg:col-span-3">
        <p className="font-mono text-xs leading-6 text-muted-foreground">
          {entry.period}
        </p>
        {entry.contentStatus === "placeholder" ? (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-border px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-muted-foreground">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
            Details pending
          </p>
        ) : null}
      </div>

      <article
        aria-labelledby={titleId}
        className="lg:col-span-8 lg:col-start-5"
      >
        <div className="flex items-start gap-4">
          <span
            aria-hidden
            className="mt-1 font-mono text-xs tabular-nums text-primary"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3
              id={titleId}
              className="text-xl font-semibold leading-snug md:text-2xl"
            >
              {entry.role}
            </h3>
            <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {entry.company}
            </p>
          </div>
        </div>

        <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
          {entry.description}
        </p>

        <div className="mt-9 grid gap-9 md:grid-cols-2 md:gap-8">
          <EntryList
            label="Responsibilities"
            items={entry.responsibilities}
            ordered
          />
          <EntryList label="Achievements" items={entry.achievements} />
        </div>

        <div className="mt-9 border-t border-border pt-6">
          <h4 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
            Technologies
          </h4>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5">
            {entry.technologies.map((technology) => (
              <li
                key={technology}
                className="flex items-center gap-2 font-mono text-xs text-foreground/80"
              >
                <span aria-hidden className="h-1 w-1 rounded-full bg-primary" />
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </li>
  );
}

interface EntryListProps {
  label: string;
  items: readonly string[];
  ordered?: boolean;
}

function EntryList({ label, items, ordered = false }: EntryListProps) {
  const List = ordered ? "ol" : "ul";

  return (
    <div>
      <h4 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </h4>
      <List className="mt-4 space-y-3">
        {items.map((item, index) => (
          <li key={item} className="flex items-start gap-3 text-sm leading-6">
            <span
              aria-hidden
              className="mt-0.5 shrink-0 font-mono text-[0.6875rem] tabular-nums text-primary"
            >
              {ordered ? String(index + 1).padStart(2, "0") : "—"}
            </span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </List>
    </div>
  );
}
