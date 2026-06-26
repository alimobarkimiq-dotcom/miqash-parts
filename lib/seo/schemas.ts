// lib/seo/schemas.ts
import type { LandingPageSEO } from "./types";

// ─── ثابت — بيانات المتجر لا تتغير بين الصفحات ───
const ORG_SCHEMA = {
  "@type": "Organization" as const,
  name: "مِقَشّة",
  url: "https://miqash.shop/ar",
  logo: {
    "@type": "ImageObject" as const,
    url: "https://cdn.salla.sa/Wzrln/2tiiGhb6KmkwN31exgPiQjQPz9GWulZ8YUM1lbHg.jpg",
  },
  contactPoint: {
    "@type": "ContactPoint" as const,
    contactType: "customer service",
    availableLanguage: "Arabic",
    telephone: "+966554670717",
  },
  sameAs: [
    "https://instagram.com/miqash.shop",
    "https://x.com/miqash_shop",
  ],
};

function productSchema(seo: LandingPageSEO): object {
  const canonicalUrl = `${seo.baseUrl}/${seo.slug}`;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: seo.title,
    description: seo.description,
    brand: { "@type": "Brand", name: seo.brand },
    image: seo.images.map((img) => img.url),
    url: canonicalUrl,
    offers: {
      "@type": "Offer",
      url: seo.productUrl,
      priceCurrency: seo.currency,
      price: seo.price,
      availability: `https://schema.org/${seo.availability}`,
      seller: ORG_SCHEMA,
    },
  };

  // aggregateRating — فقط إذا موجودة في البيانات
  if (seo.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: seo.aggregateRating.ratingValue.toString(),
      reviewCount: seo.aggregateRating.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    };
  }

  // reviews — فقط إذا موجودة
  if (seo.reviews && seo.reviews.length > 0) {
    schema.review = seo.reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.ratingValue.toString(),
        bestRating: "5",
      },
      datePublished: r.datePublished,
      reviewBody: r.reviewBody,
    }));
  }

  return schema;
}

function faqSchema(seo: LandingPageSEO): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seo.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function breadcrumbSchema(seo: LandingPageSEO): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: seo.breadcrumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

function organizationSchema(): object {
  return { "@context": "https://schema.org", ...ORG_SCHEMA };
}

function webSiteSchema(): object {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "مِقَشّة",
    url: "https://miqash.shop/ar",
    inLanguage: "ar",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        // يشير لمحرك البحث في متجر مقشة الرئيسي
        urlTemplate: "https://miqash.shop/ar/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildAllSchemas(seo: LandingPageSEO): object[] {
  return [
    productSchema(seo),
    faqSchema(seo),
    breadcrumbSchema(seo),
    organizationSchema(),
    webSiteSchema(),
  ];
}