import { ExternalLink, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/types/content";

interface SocialLinksProps {
  links: readonly SocialLink[];
  variant?: "rows" | "inline";
  className?: string;
}

const socialIcons = {
  LinkedIn: Linkedin,
  GitHub: Github,
} satisfies Record<SocialLink["label"], typeof Github>;

export function SocialLinks({
  links,
  variant = "rows",
  className,
}: SocialLinksProps) {
  return (
    <ul
      className={cn(
        variant === "rows"
          ? "divide-y divide-border border-y border-border"
          : "flex flex-wrap gap-x-5 gap-y-2",
        className,
      )}
    >
      {links.map((link) => {
        const Icon = socialIcons[link.label];

        return (
          <li key={link.label}>
            {link.href ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "group rounded-sm transition-colors duration-[var(--duration-base)] hover:text-primary",
                  variant === "rows"
                    ? "flex min-h-14 items-center gap-3 py-3 text-foreground"
                    : "inline-flex items-center gap-2 font-mono text-xs text-muted-foreground",
                )}
              >
                <Icon aria-hidden className="h-4 w-4" />
                <span>{link.label}</span>
                {variant === "rows" ? (
                  <ExternalLink
                    aria-hidden
                    className="ml-auto h-3.5 w-3.5 text-muted-foreground transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                ) : null}
                <span className="sr-only">, opens in a new tab</span>
              </a>
            ) : (
              <span
                aria-disabled="true"
                title={`${link.label} profile URL is not configured`}
                className={cn(
                  "text-muted-foreground",
                  variant === "rows"
                    ? "flex min-h-14 items-center gap-3 py-3"
                    : "inline-flex items-center gap-2 font-mono text-xs",
                )}
              >
                <Icon aria-hidden className="h-4 w-4" />
                <span>{link.label}</span>
                <span
                  className={cn(
                    "font-mono text-[0.625rem] uppercase tracking-[0.14em]",
                    variant === "rows" && "ml-auto",
                  )}
                >
                  URL pending
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
