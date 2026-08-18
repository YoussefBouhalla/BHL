import type { Project, ProjectImage, SectionIntro } from "@/types/content";

export const projectsSection = {
  eyebrow: "Selected work",
  heading: "Case studies, not screenshots.",
  description:
    "Each project below documents the problem it addresses, the constraints that shaped the build and what I implemented in response.",
} satisfies SectionIntro;

/**
 * PLACEHOLDER CONTENT — every entry below is marked `contentStatus: "placeholder"`.
 *
 * Titles, copy, challenges, solutions and results are illustrative scaffolding
 * written to match the stack, not descriptions of delivered work. No client
 * names, metrics or statistics are claimed anywhere in this file.
 *
 * To publish a project:
 *   1. Replace the copy and set `contentStatus: "confirmed"`.
 *   2. Add real screenshots at the `src` paths below and set
 *      `placeholder: false`. Pass the file's intrinsic width/height so the
 *      layout matches the PNG. Project media is served unoptimized so UI
 *      screenshots are not recompressed.
 *   3. Set `githubUrl` / `liveUrl`, or leave them null to hide the links.
 */

const placeholderImage = (
  slug: string,
  file: string,
  alt: string,
  placeholder: boolean = true,
  size?: { width: number; height: number },
): ProjectImage => ({
  src: `/images/projects/${slug}/${file}.png`,
  alt,
  width: size?.width ?? 1600,
  height: size?.height ?? 1000,
  placeholder,
});

export const projects = [
  {
    slug: "language-legends",
    title: "Language Legends",
    shortDescription:
      "A multilingual e-learning storefront for browsing courses, unlocking content via purchases or packs, and learning with protected video, quizzes, and PDFs.",
    description:
      "A Next.js storefront with JWT auth, cart/checkout without a payment gateway (order + admin confirm), Business English pack tiers, private Supabase video streaming behind access checks, and a companion Electron admin dashboard for catalog, lessons, orders and site settings.",
    problem:
      "Course sales and access lived in ad-hoc flows: public media URLs could leak lesson videos, pack membership and permanent ownership were easy to confuse, and admins needed a separate way to manage catalog, orders and content without shipping a full CMS.",
    category: "Web application",
    role: "Sole developer — architecture, database design, API and interface.",
    year: 2026,
    featured: true,
    order: 1,
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Drizzle ORM",
      "PostgreSQL (Supabase)",
      "Supabase Storage",
      "Tailwind CSS",
      "jose / bcrypt",
      "Electron (admin)",
    ],
    image: placeholderImage(
      "language-legends",
      "cover",
      "Landing page with a featured hero banner",
      false,
      { width: 1905, height: 951 },
    ),
    gallery: [
      placeholderImage(
        "language-legends",
        "details",
        "Course detail with access states (owned / pack / locked lessons)",
        false,
        { width: 1905, height: 948 },
      ),
      placeholderImage(
        "language-legends",
        "packs",
        "Packs section with Gold / Platinum / Diamond tiers",
        false,
        { width: 1904, height: 950 },
      ),
      placeholderImage(
        "language-legends",
        "lessons",
        "Lessons of a selected course with video, quiz and PDF revision",
        false,
        { width: 1906, height: 950 },
      ),
      placeholderImage(
        "language-legends",
        "dashboard_courses",
        "Admin dashboard: courses",
        false,
        { width: 1919, height: 1033 },
      ),
      placeholderImage(
        "language-legends",
        "dashboard_packs",
        "Admin dashboard: pack orders",
        false,
        { width: 1919, height: 1029 },
      ),
      placeholderImage(
        "language-legends",
        "dashboard_lessons",
        "Admin dashboard: lessons",
        false,
        { width: 1919, height: 1032 },
      ),
      placeholderImage(
        "language-legends",
        "dashboard_social",
        "Admin dashboard: social links",
        false,
        { width: 1919, height: 1032 },
      ),
    ],
    challenges: [
      {
        title: "Protecting video without full DRM",
        description:
          "Block casual download and hotlinking with private storage + access-gated proxy, while keeping HTML5 seeking (Range) and a usable player UX.",
      },
      {
        title: "Pack vs ownership edge cases",
        description:
          "Keep pack expiry, pack-exclusive flags, and permanent ownership consistent so UI locks and API access never disagree.",
      },
      {
        title: "Admin desktop ↔ hosted API",
        description:
          "Electron loads from file:// in production; CORS, env baking (VITE_API_URL), and Bearer auth had to work for both electron:dev and the installed build.",
      },
    ],
    solutions: [
      {
        title: "Access checks at the API boundary",
        description:
          "Course and lesson responses never expose private video storage paths. Playback goes through /api/lessons/[id]/video, which verifies free / owned / pack / per-lesson grants before streaming.",
      },
      {
        title: "Ownership vs subscription as separate models",
        description:
          "UserCourse is permanent purchase access. Active UserPack grants temporary access to pack-exclusive courses. Flipping a course to pack-exclusive does not revoke existing owners.",
      },
      {
        title: "Media split by sensitivity",
        description:
          "Public assets (images, PDFs) live in a public Supabase bucket. Lesson videos use a private bucket and short-lived server-side signed fetches so the browser only ever sees a same-origin stream URL.",
      },
    ],
    results: [
      "Lesson videos are not served as public permanent URLs.",
      "Pack membership and permanent ownership stay separate and predictable.",
      "Catalog, orders, packs and footer social links are manageable from the desktop admin app.",
      "Storefront UI is localized across four languages with RTL for Arabic.",
    ],
    githubUrl: null,
    liveUrl: "https://language-legends.vercel.app",
    contentStatus: "confirmed",
  },
  {
    slug: "inventory-orders-api",
    title: "Inventory & Orders API",
    shortDescription:
      "A REST service handling inventory levels and order lifecycle for a storefront, built around explicit contracts and safe retries.",
    description:
      "A Node.js and Express service exposing inventory and order endpoints to a storefront client. The design priority was predictable behaviour under retries and partial failure rather than raw throughput.",
    problem:
      "Order submission was tightly coupled to the storefront. A retried request could create duplicate orders, and stock counts drifted from reality whenever a request failed midway.",
    category: "API & backend",
    role: "Backend developer — API design, data model and integration tests",
    year: 2025,
    featured: false,
    order: 2,
    technologies: ["TypeScript", "Node.js", "Express", "Prisma", "MySQL"],
    image: placeholderImage(
      "inventory-orders-api",
      "cover",
      "API endpoint reference and schema documentation",
    ),
    gallery: [
      placeholderImage(
        "inventory-orders-api",
        "schema",
        "Relational schema for inventory and orders",
      ),
    ],
    challenges: [
      {
        title: "Duplicate orders from retried requests",
        description:
          "Network retries and impatient double submits both reached the service as two identical valid requests, with nothing to distinguish them from two genuine orders.",
      },
      {
        title: "Stock drift on partial failure",
        description:
          "Reserving stock and writing the order were separate steps, so a failure between them left inventory decremented for an order that did not exist.",
      },
    ],
    solutions: [
      {
        title: "Idempotency keys on write endpoints",
        description:
          "Clients send an idempotency key with each order. The key and its response are stored, so a repeat of the same request returns the original result instead of creating a second order.",
      },
      {
        title: "Transactional stock reservation",
        description:
          "Reservation and order creation execute in one database transaction with a row-level lock on the affected stock, so either both land or neither does.",
      },
    ],
    results: [
      "Repeated submissions resolve to a single order through stored idempotency keys.",
      "Inventory and orders cannot diverge, since both are written in one transaction.",
      "Endpoint behaviour is pinned by integration tests running against a real database.",
    ],
    githubUrl: null,
    liveUrl: null,
    contentStatus: "placeholder",
  },
  {
    slug: "desktop-log-viewer",
    title: "Desktop Log Viewer",
    shortDescription:
      "A cross-platform desktop tool for opening, filtering and searching large local log files without loading them into memory.",
    description:
      "An Electron application for inspecting log files that are too large for an editor to open comfortably. Reading and indexing happen in the main process so the interface stays responsive while a file streams.",
    problem:
      "Diagnosing an issue meant opening multi-gigabyte log files, which froze editors and made filtering by level or time range impractical.",
    category: "Desktop application",
    role: "Sole developer — process architecture and interface",
    year: 2025,
    featured: false,
    order: 3,
    technologies: ["TypeScript", "Electron", "React", "SQLite"],
    image: placeholderImage(
      "desktop-log-viewer",
      "cover",
      "Log viewer window with filter sidebar and results list",
    ),
    gallery: [
      placeholderImage(
        "desktop-log-viewer",
        "filters",
        "Level and time range filtering interface",
      ),
    ],
    challenges: [
      {
        title: "Files larger than available memory",
        description:
          "Reading a file into an array to render it was not viable at the sizes that actually needed inspecting, and naive streaming made search unusably slow.",
      },
      {
        title: "Keeping the window responsive",
        description:
          "Parsing on the renderer thread blocked painting, so the window stopped responding for the entire duration of a large read.",
      },
    ],
    solutions: [
      {
        title: "Streamed parsing with an on-disk index",
        description:
          "Files stream line by line while an SQLite index records byte offsets, levels and timestamps. Filtering queries the index and reads only the matching ranges back off disk.",
      },
      {
        title: "Work isolated in the main process",
        description:
          "Parsing and querying run in the main process and report progress over IPC. The renderer only draws a virtualised list, so the window stays interactive while indexing continues.",
      },
    ],
    results: [
      "File size is bounded by disk rather than memory.",
      "Filtering reads only matching byte ranges instead of rescanning the file.",
      "The window remains interactive while a file is still indexing.",
    ],
    githubUrl: null,
    liveUrl: null,
    contentStatus: "placeholder",
  },
  {
    slug: "design-system-toolkit",
    title: "Design System Toolkit",
    shortDescription:
      "A typed component library and token pipeline keeping design decisions in sync across several product interfaces.",
    description:
      "A shared component library built on React and Tailwind CSS, with design tokens defined once and generated into CSS custom properties and TypeScript types for consuming applications.",
    problem:
      "Colour, spacing and typography values were duplicated across applications. Each product drifted from the others, and updating a token meant hand-editing several codebases.",
    category: "Developer tooling",
    role: "Developer — token pipeline, component API and documentation",
    year: 2024,
    featured: false,
    order: 4,
    technologies: [
      "TypeScript",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Node.js",
    ],
    image: placeholderImage(
      "design-system-toolkit",
      "cover",
      "Component documentation with token reference",
    ),
    gallery: [
      placeholderImage(
        "design-system-toolkit",
        "tokens",
        "Generated token reference table",
      ),
    ],
    challenges: [
      {
        title: "Tokens drifting between applications",
        description:
          "Every product held its own copy of the same values, so the definitions diverged quietly and there was no single source to correct.",
      },
      {
        title: "Component APIs that resisted change",
        description:
          "Components exposed styling props that leaked internal structure, which meant consumers depended on implementation details and updates broke them.",
      },
    ],
    solutions: [
      {
        title: "One token source, generated outputs",
        description:
          "Tokens are declared once and a build step emits CSS custom properties plus TypeScript unions. Applications import the generated output, so an invalid token name fails at compile time.",
      },
      {
        title: "Variant-driven component contracts",
        description:
          "Components expose a closed set of variants rather than open styling props. Internals can be restructured without changing the public API consumers depend on.",
      },
    ],
    results: [
      "Token values are defined once and consumed as generated CSS and types.",
      "Invalid token or variant names are caught during typechecking.",
      "Component internals can change without breaking consuming applications.",
    ],
    githubUrl: null,
    liveUrl: null,
    contentStatus: "placeholder",
  },
] as const satisfies readonly Project[];
