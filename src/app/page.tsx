import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { DevelopmentProcess } from "@/components/sections/development-process";
import { Experience } from "@/components/sections/experience";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { JsonLd } from "@/components/seo/json-ld";
import { getPortfolioStructuredData } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getPortfolioStructuredData()} />
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Services />
      <DevelopmentProcess />
      <Contact />
    </>
  );
}
