import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/#top"
      aria-label={`${siteConfig.name} — home`}
      className={cn(
        "group inline-flex items-baseline gap-px rounded-sm font-display text-lg font-bold tracking-tight text-foreground",
        className,
      )}
    >
      {siteConfig.shortName}
      <span
        aria-hidden
        className="text-primary transition-opacity duration-[var(--duration-base)] group-hover:opacity-60"
      >
        .
      </span>
    </Link>
  );
}
