"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonStyles } from "@/components/primitives/button";
import { navLinks, primaryCta } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function MobileNav({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const panelId = React.useId();
  const panelRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLButtonElement>(null);

  const close = React.useCallback(() => setOpen(false), []);

  // A resize to desktop would otherwise leave the panel open but hidden.
  React.useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Escape to close, Tab cycles inside the panel, focus returns to the trigger.
  React.useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const trigger = triggerRef.current;
    if (!panel) return;

    const getFocusable = () =>
      Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );

    getFocusable()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  // Lock the page behind the panel, compensating for the scrollbar so the
  // underlying layout does not shift.
  React.useEffect(() => {
    if (!open) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className={cn(buttonStyles({ variant: "ghost", size: "icon" }), className)}
      >
        <Menu className="h-5 w-5" aria-hidden />
        <span className="sr-only">Open navigation menu</span>
      </button>

      <div
        aria-hidden
        onClick={close}
        className={cn(
          "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm transition-opacity duration-[var(--duration-base)] lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div
        id={panelId}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!open}
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[min(22rem,86vw)] flex-col border-l border-border bg-card transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] lg:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-[var(--header-height)] shrink-0 items-center justify-between border-b border-border px-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Menu
          </span>
          <button
            type="button"
            onClick={close}
            className={buttonStyles({ variant: "ghost", size: "icon" })}
          >
            <X className="h-5 w-5" aria-hidden />
            <span className="sr-only">Close navigation menu</span>
          </button>
        </div>

        <nav
          aria-label="Mobile"
          className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="flex items-baseline gap-4 rounded-md px-2 py-3 text-lg font-medium text-foreground transition-colors duration-[var(--duration-base)] hover:bg-secondary"
                >
                  <span
                    aria-hidden
                    className="font-mono text-xs text-muted-foreground"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="shrink-0 border-t border-border p-5">
          <Link
            href={primaryCta.href}
            onClick={close}
            className={buttonStyles({ size: "lg", className: "w-full" })}
          >
            {primaryCta.label}
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 block rounded-sm text-center font-mono text-xs text-muted-foreground transition-colors duration-[var(--duration-base)] hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </>
  );
}
