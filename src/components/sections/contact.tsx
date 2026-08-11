import { ArrowRight, Download, Mail } from "lucide-react";
import { SocialLinks } from "@/components/contact/social-links";
import { buttonStyles } from "@/components/primitives/button";
import { Container } from "@/components/primitives/container";
import { contactContent } from "@/content/contact";
import { siteConfig } from "@/content/site";

/**
 * A form is intentionally omitted until a real mail transport is configured.
 * A future form should post to a server-only handler with schema validation,
 * a honeypot, rate limiting, origin checks and provider error mapping. Keeping
 * that boundary server-side lets the visual states be added without exposing
 * credentials or replacing this contact layout.
 */
export function Contact() {
  const emailHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    contactContent.emailSubject,
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden border-t border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_65%_at_75%_55%,black,transparent)]"
      />

      <Container className="relative py-[var(--section-padding)]">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="font-mono text-xs tabular-nums text-primary"
              >
                08
              </span>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {contactContent.eyebrow}
              </p>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 font-mono text-[0.6875rem] leading-5 text-muted-foreground">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary" />
              {siteConfig.availability.note}
            </p>
          </div>

          <div className="lg:col-span-8 lg:col-start-5">
            <h2
              id="contact-heading"
              className="text-balance text-[clamp(2.5rem,6vw,4.75rem)] font-bold leading-[1.02] tracking-[-0.045em]"
            >
              {contactContent.heading}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {contactContent.description}
            </p>

            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={emailHref}
                className={buttonStyles({
                  size: "lg",
                  className: "group min-w-44",
                })}
              >
                <Mail aria-hidden className="mr-2 h-4 w-4" />
                {contactContent.emailLabel}
                <ArrowRight
                  aria-hidden
                  className="ml-2 h-4 w-4 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={emailHref}
                className="rounded-sm font-mono text-sm text-muted-foreground underline decoration-border underline-offset-4 transition-colors duration-[var(--duration-base)] hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-10 lg:mt-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 lg:col-start-5">
            <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
              {contactContent.contextHeading}
            </h3>
            <ol className="mt-6 grid gap-5">
              {contactContent.contextItems.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-7"
                >
                  <span
                    aria-hidden
                    className="font-mono text-xs tabular-nums text-primary"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-3 lg:col-start-10">
            <h3 className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
              {contactContent.channelsHeading}
            </h3>
            <SocialLinks links={siteConfig.socialLinks} className="mt-5" />

            {siteConfig.resumeUrl ? (
              <a
                href={siteConfig.resumeUrl}
                download
                className={buttonStyles({
                  variant: "outline",
                  className: "mt-5 w-full",
                })}
              >
                <Download aria-hidden className="mr-2 h-4 w-4" />
                Download CV
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-12 border-t border-border pt-5 font-mono text-[0.6875rem] leading-6 text-muted-foreground lg:ml-[33.333333%]">
          <span aria-hidden className="text-primary">
            {"//"}
          </span>{" "}
          {contactContent.privacyNote}
        </p>
      </Container>
    </section>
  );
}
