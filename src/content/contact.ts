import type { ContactContent } from "@/types/content";

export const contactContent = {
  eyebrow: "Contact",
  heading: "Have a project in mind?",
  description:
    "I’m available to build, improve or maintain web applications — from a focused product interface to the API and data model behind it.",
  emailLabel: "Email me",
  emailSubject: "Project enquiry",
  contextHeading: "Useful context to include",
  contextItems: [
    "What you need to build or improve",
    "What exists today and where it is getting stuck",
    "Any important timeline, users or technical constraints",
  ],
  channelsHeading: "Other channels",
  privacyNote:
    "This site does not collect or store contact information. The email link opens your preferred mail application.",
} satisfies ContactContent;
