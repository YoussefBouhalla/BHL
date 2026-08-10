import { Container } from "@/components/primitives/container";
import { SectionHeading } from "@/components/primitives/section-heading";
import { aboutContent } from "@/content/about";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-t border-border"
    >
      <Container className="py-[var(--section-padding)]">
        <SectionHeading
          id="about-heading"
          number="02"
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.heading}
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:mt-24">
          <div className="lg:col-span-3">
            <p className="max-w-xs text-lg font-medium leading-8 text-foreground">
              {aboutContent.introduction}
            </p>
          </div>

          <div className="space-y-7 lg:col-span-7 lg:col-start-5">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={
                  index === 0
                    ? "text-xl leading-8 text-foreground md:text-2xl md:leading-10"
                    : "max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <ol className="mt-16 grid border-y border-border md:grid-cols-3 lg:mt-24">
          {aboutContent.principles.map((principle, index) => (
            <li
              key={principle.number}
              className={[
                "group relative px-0 py-7 md:px-6 md:py-8",
                index > 0 ? "border-t border-border md:border-l md:border-t-0" : "",
                index === 0 ? "md:pl-0" : "",
                index === aboutContent.principles.length - 1 ? "md:pr-0" : "",
              ].join(" ")}
            >
              <span
                aria-hidden
                className="font-mono text-xs text-muted-foreground transition-colors duration-[var(--duration-base)] group-hover:text-primary"
              >
                {principle.number}
              </span>
              <h3 className="mt-5 text-lg font-semibold">{principle.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
