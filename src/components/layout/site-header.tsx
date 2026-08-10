"use client";

import { Container } from "@/components/primitives/container";
import { buttonStyles } from "@/components/primitives/button";
import { navLinks, navSectionIds, primaryCta } from "@/content/navigation";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";

export function SiteHeader() {
  const scrolled = useScrolled();
  const activeId = useActiveSection(navSectionIds);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[var(--header-height)]">
      {/* The blur sits on a child so the header never becomes a containing
          block for the fixed mobile panel. */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 border-b transition-[background-color,border-color,backdrop-filter] duration-[var(--duration-base)]",
          scrolled
            ? "border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65"
            : "border-transparent bg-transparent",
        )}
      />

      <Container className="relative flex h-full items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeId === link.sectionId;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "group relative inline-block rounded-sm py-1 text-sm transition-colors duration-[var(--duration-base)]",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {link.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -bottom-px left-0 h-px w-full origin-left bg-primary transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)]",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href={primaryCta.href}
          className={buttonStyles({
            size: "sm",
            className: "hidden md:inline-flex",
          })}
        >
          {primaryCta.label}
        </a>

        <MobileNav className="md:hidden" />
      </Container>
    </header>
  );
}
