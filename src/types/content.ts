export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  url: string;
  availability: {
    open: boolean;
    note: string;
  };
}

export interface ManifestRow {
  label: string;
  value: string;
}

export interface HeroContent {
  headline: {
    lead: string;
    emphasis: string;
    trail: string;
  };
  supporting: string;
  primaryCta: CallToAction;
  secondaryCta: CallToAction;
  stack: readonly string[];
  manifest: {
    filename: string;
    rows: readonly ManifestRow[];
  };
}

export type TechnologyLevel = "primary" | "secondary" | "supporting";

export interface Technology {
  name: string;
  level: TechnologyLevel;
}

export interface TechnologyGroup {
  id: string;
  name: string;
  description: string;
  technologies: readonly Technology[];
}

export interface AboutPrinciple {
  number: string;
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  heading: string;
  introduction: string;
  paragraphs: readonly string[];
  principles: readonly AboutPrinciple[];
}
