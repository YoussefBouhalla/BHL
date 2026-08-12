import type { Metadata } from "next";
import { Inter, Poppins, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const homeMetadata = createPageMetadata({
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...homeMetadata,
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="site-top"
        className={cn(
          inter.variable,
          poppins.variable,
          geistMono.variable,
          "min-h-screen bg-background font-sans text-foreground antialiased",
        )}
      >
        <SkipLink />
        <SiteHeader />
        <main id="main" className="pt-[var(--header-height)]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
