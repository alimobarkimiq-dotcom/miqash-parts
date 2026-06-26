// lib/seo/buildMetadata.ts
import type { Metadata } from "next";
import type { LandingPageSEO } from "./types";

export function buildMetadata(seo: LandingPageSEO): Metadata {
  const canonicalUrl = `${seo.baseUrl}/${seo.slug}`;
  const ogImage = seo.images[0];
  const locale = seo.locale ?? "ar_SA";
  const twitterHandle = seo.twitterHandle ?? "@miqash_shop";
  const fullTitle = `${seo.title} | متجر مِقَشّة`;

  return {
    title: fullTitle,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: "مِقَشّة", url: "https://miqash.shop/ar" }],
    creator: "مِقَشّة",
    publisher: "مِقَشّة",

    metadataBase: new URL(seo.baseUrl),
    alternates: { canonical: canonicalUrl },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: fullTitle,
      description: seo.description,
      siteName: "مِقَشّة",
      locale,
      images: seo.images.map((img) => ({
        url: img.url,
        width: img.width,
        height: img.height,
        alt: img.alt,
      })),
    },

    twitter: {
      card: "summary_large_image",
      site: twitterHandle,
      creator: twitterHandle,
      title: fullTitle,
      description: seo.description,
      images: [ogImage.url],
    },
  };
}