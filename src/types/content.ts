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

export interface SectionIntro {
  eyebrow: string;
  heading: string;
  description: string;
}

export type ProjectCategory =
  | "Web application"
  | "API & backend"
  | "Desktop application"
  | "Developer tooling";

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * True while no real asset exists at `src`. The media component draws an
   * authored placeholder instead of routing a missing file through next/image.
   */
  placeholder: boolean;
}

export interface ProjectNote {
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  category: ProjectCategory;
  role: string;
  year: number;
  featured: boolean;
  order: number;
  technologies: readonly string[];
  image: ProjectImage;
  gallery: readonly ProjectImage[];
  challenges: readonly ProjectNote[];
  solutions: readonly ProjectNote[];
  results: readonly string[];
  githubUrl: string | null;
  liveUrl: string | null;
  /** "placeholder" until the copy has been reviewed and confirmed accurate. */
  contentStatus: "placeholder" | "confirmed";
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

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
  achievements: readonly string[];
  /** Placeholder entries must be replaced with verified employment details. */
  contentStatus: "placeholder" | "confirmed";
}

export interface ExperienceContent extends SectionIntro {
  entries: readonly ExperienceEntry[];
}

export interface Service {
  id: string;
  title: string;
  problem: string;
  deliverable: string;
  technologies: readonly string[];
}

export interface ServicesContent extends SectionIntro {
  services: readonly Service[];
  cta: {
    eyebrow: string;
    heading: string;
    description: string;
    primary: CallToAction;
    secondary: CallToAction;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  outcome: string;
  reinforces: readonly string[];
}

export interface ProcessContent extends SectionIntro {
  steps: readonly ProcessStep[];
  note: string;
}
