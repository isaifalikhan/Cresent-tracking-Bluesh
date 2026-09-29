import type { Metadata } from "next";

export const SITE_URL = "https://crescenttracking.com";
export const SITE_NAME = "Crescent Tracking";
export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Crescent Tracking - GPS Vehicle Tracking & Fleet Management in Pakistan",
};

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article";
}

/**
 * Builds per-page metadata with a canonical URL and matching Open Graph / Twitter tags,
 * so pages don't inherit the homepage's og:url or social text.
 */
export function pageMetadata({
  title,
  description,
  path,
  keywords,
  type = "website",
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: "en_US",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
