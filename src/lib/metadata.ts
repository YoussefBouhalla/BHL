import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  imagePath?: string;
  imageAlt?: string;
  noIndex?: boolean;
}

const defaultImage = {
  path: "/images/social-preview.png",
  alt: `${siteConfig.name} — ${siteConfig.role}`,
  width: 1200,
  height: 630,
};

export function absoluteUrl(path: string) {
  return new URL(path, siteConfig.url).toString();
}

/**
 * Shared metadata factory for canonical, Open Graph and Twitter fields.
 * The root layout provides metadataBase so relative URLs remain portable.
 */
export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  imagePath = defaultImage.path,
  imageAlt = defaultImage.alt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const shouldNoIndex = noIndex || !siteConfig.indexingEnabled;
  const image = {
    url: imagePath,
    width: defaultImage.width,
    height: defaultImage.height,
    alt: imageAlt,
  };

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: "en_US",
      url: path,
      siteName: siteConfig.name,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
    robots: shouldNoIndex
      ? {
          index: false,
          follow: true,
          nocache: true,
          googleBot: {
            index: false,
            follow: true,
            noimageindex: true,
          },
        }
      : {
          index: true,
          follow: true,
        },
  };
}
