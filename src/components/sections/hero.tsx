import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/primitives/button";
import { Container } from "@/components/primitives/container";
import { CornerMarks } from "@/components/primitives/corner-marks";
import { heroContent } from "@/content/hero";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const enterDelay = (ms: number) =>
  ({ "--enter-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  const { headline, supporting, primaryCta, secondaryCta, stack, manifest } =
    heroContent;

  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-70 [mask-image:radial-gradient(ellipse_75%_55%_at_25%_0%,black,transparent)]"
      />

      <Container className="relative">
        <div className="grid min-h-[calc(100svh-var(--header-height))] items-center gap-14 py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <div className="lg:col-span-7">
            <p
              className="animate-enter inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground"
              style={enterDelay(0)}
            >
              <span aria-hidden className="relative flex h-1.5 w-1.5">
                {siteConfig.availability.open ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                ) : null}
                <span
                  className={cn(
                    "relative inline-flex h-1.5 w-1.5 rounded-full",
                    siteConfig.availability.open
                      ? "bg-primary"
                      : "bg-muted-foreground",
                  )}
                />
              </span>
              {siteConfig.availability.note}
            </p>

            <p
              className="animate-enter mt-7 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground"
              style={enterDelay(40)}
            >
              {siteConfig.name}
            </p>

            <h1
              id="hero-heading"
              className="animate-enter mt-4 text-balance font-display text-[clamp(2.5rem,6.2vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.035em]"
              style={enterDelay(80)}
            >
              {headline.lead}
              <span className="text-primary">{headline.emphasis}</span>
              {headline.trail}
            </h1>

            <p
              className="animate-enter mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground md:text-lg"
              style={enterDelay(140)}
            >
              {supporting}
            </p>

            <div
              className="animate-enter mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={enterDelay(200)}
            >
              <a
                href={primaryCta.href}
                className={buttonStyles({ size: "lg", className: "group" })}
              >
                {primaryCta.label}
                <ArrowRight
                  aria-hidden
                  className="ml-2 h-4 w-4 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={secondaryCta.href}
                className={buttonStyles({ variant: "outline", size: "lg" })}
              >
                {secondaryCta.label}
              </a>
            </div>

            <div className="animate-enter mt-12" style={enterDelay(260)}>
              <p
                id="hero-stack-label"
                className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-muted-foreground"
              >
                Core stack
              </p>
              <ul
                aria-labelledby="hero-stack-label"
                className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5"
              >
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 font-mono text-sm text-foreground/80"
                  >
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-primary"
                    />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="animate-enter relative lg:col-span-5"
            style={enterDelay(300)}
          >
            <CornerMarks />

            <div className="rounded-lg border border-border bg-card/70 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
                <span className="font-mono text-xs text-muted-foreground">
                  {manifest.filename}
                </span>
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {manifest.rows.length} entries
                </span>
              </div>

              <dl className="manifest divide-y divide-border">
                {manifest.rows.map((row) => (
                  <div
                    key={row.label}
                    className="manifest-row grid gap-x-4 gap-y-1 px-4 py-3.5 sm:grid-cols-[7.5rem_1fr]"
                  >
                    <dt className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="pl-7 font-mono text-sm leading-relaxed text-foreground sm:pl-0">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
