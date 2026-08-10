import type { CallToAction, NavLink } from "@/types/content";

export const navLinks = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
] as const satisfies readonly NavLink[];

export const navSectionIds = navLinks.map((link) => link.sectionId);

export const primaryCta = {
  label: "Start a project",
  href: "#contact",
} satisfies CallToAction;
