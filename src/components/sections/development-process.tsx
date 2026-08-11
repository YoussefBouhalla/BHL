import { Container } from "@/components/primitives/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { ProcessStep } from "@/components/process/process-step";
import { processContent } from "@/content/process";

export function DevelopmentProcess() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="border-t border-border bg-card/35"
    >
      <Container className="py-[var(--section-padding)]">
        <SectionHeading
          id="process-heading"
          number="07"
          eyebrow={processContent.eyebrow}
          title={processContent.heading}
          description={processContent.description}
        />

        <div className="mt-14 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground lg:mt-20">
          <span>
            <span aria-hidden className="text-primary">
              {"//"}
            </span>{" "}
            process.sequence
          </span>
          <span aria-hidden>discovery → release</span>
        </div>

        <ol className="grid border-b border-border md:grid-cols-2 lg:grid-cols-5">
          {processContent.steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              total={processContent.steps.length}
            />
          ))}
        </ol>

        <div className="grid gap-4 border-b border-border py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-muted-foreground">
            Operating principle
          </p>
          <p className="max-w-2xl text-sm leading-7 text-foreground/85">
            {processContent.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
