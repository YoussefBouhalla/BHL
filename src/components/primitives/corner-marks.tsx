import { cn } from "@/lib/utils";

const positions = [
  "-left-1.5 -top-1.5 border-l-2 border-t-2",
  "-right-1.5 -top-1.5 border-r-2 border-t-2",
  "-bottom-1.5 -left-1.5 border-b-2 border-l-2",
  "-bottom-1.5 -right-1.5 border-b-2 border-r-2",
];

/**
 * Technical crop marks framing a panel. Purely decorative — the parent needs
 * `relative` positioning and enough padding for the marks to sit outside it.
 */
export function CornerMarks({ className }: { className?: string }) {
  return (
    <>
      {positions.map((position) => (
        <span
          key={position}
          aria-hidden
          className={cn(
            "pointer-events-none absolute h-3 w-3 border-primary/70",
            position,
            className,
          )}
        />
      ))}
    </>
  );
}
