// lib/seo/schemas.ts
import { STORE } from "@/lib/store/constants";
import type { LandingPageSEO } from "./types";

const ORG_SCHEMA = {
  "@type": "Organization" as const,
  name: STORE.name,
  url: STORE.url,
  logo: {
    "@type": "ImageObject" as const,
    url: STORE.logo,
  },
  contactPoint: {
    "@type": "ContactPoint" as const,
    contactType: "customer service",
    availableLanguage: "Arabic",
    telephone: `+${STORE.whatsapp}`,
  },
  sameAs: [STORE.instagram, STORE.x],
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
      ...(seo.merchantReturnPolicy && {
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          returnPolicyCategory:
            "https://schema.org/MerchantReturnFiniteReturnWindow",
          applicableCountry: "SA",
          returnPolicyUrl: seo.merchantReturnPolicy,
        },
      }),
    },
  };

  if (seo.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: seo.aggregateRating.ratingValue.toString(),
      reviewCount: seo.aggregateRating.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1",
    };
  }

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
    name: STORE.name,
    url: STORE.url,
    inLanguage: "ar",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: STORE.searchUrl,
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
