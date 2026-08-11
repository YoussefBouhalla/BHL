import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/primitives/button";
import { Container } from "@/components/primitives/container";
import { CornerMarks } from "@/components/primitives/corner-marks";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ServiceRow } from "@/components/services/service-row";
import { servicesContent } from "@/content/services";

export function Services() {
  const { cta } = servicesContent;

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-t border-border"
    >
      <Container className="py-[var(--section-padding)]">
        <SectionHeading
          id="services-heading"
          number="06"
          eyebrow={servicesContent.eyebrow}
          title={servicesContent.heading}
          description={servicesContent.description}
        />

        <ol className="mt-16 border-y border-border lg:mt-20">
          {servicesContent.services.map((service, index) => (
            <ServiceRow key={service.id} service={service} index={index} />
          ))}
        </ol>

        <div className="relative mt-16 lg:mt-20">
          <CornerMarks />
          <div className="relative overflow-hidden rounded-lg border border-border bg-card px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50 [mask-image:linear-gradient(90deg,transparent,black)]"
            />

            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="font-mono text-[0.6875rem] uppercase tracking-[0.22em] text-primary">
                  {cta.eyebrow}
                </p>
                <h3 className="mt-4 text-balance text-[clamp(1.75rem,3.2vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                  {cta.heading}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground md:text-base">
                  {cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
                <Link
                  href={cta.primary.href}
                  className={buttonStyles({
                    size: "lg",
                    className: "group",
                  })}
                >
                  {cta.primary.label}
                  <ArrowRight
                    aria-hidden
                    className="ml-2 h-4 w-4 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href={cta.secondary.href}
                  className={buttonStyles({ variant: "outline", size: "lg" })}
                >
                  {cta.secondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
