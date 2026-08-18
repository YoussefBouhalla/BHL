import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  // Keep Turbopack rooted on this app so a lockfile in a parent folder is ignored.
  turbopack: {
    root: path.dirname(fileURLToPath(import.meta.url)),
  },
  images: {
    // Next.js 16 only allows quality 75 unless extra values are listed.
    qualities: [75, 100],
  },
};

export default nextConfig;