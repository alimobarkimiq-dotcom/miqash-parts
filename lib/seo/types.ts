// lib/seo/types.ts

export interface SeoImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface SeoReview {
  author: string;
  ratingValue: number;
  datePublished: string; // YYYY-MM-DD
  reviewBody: string;
}

export interface SeoFaqItem {
  question: string;
  answer: string;
}

export interface LandingPageSEO {
  // ─── Core ───
  slug: string;
  baseUrl: string;
  productUrl: string;

  // ─── Content ───
  title: string;
  description: string;
  brand: string;
  keywords: string[];

  // ─── Images ───
  images: SeoImage[];

  // ─── Pricing & Availability ───
  currency: string;
  price: string;                   // مطلوب — يجب أن يكون حقيقياً
  availability: "InStock" | "OutOfStock" | "PreOrder";

  // ─── Ratings (اختيارية — أضفها فقط إذا كانت البيانات حقيقية) ───
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  reviews?: SeoReview[];

  // ─── FAQ ───
  faqs: SeoFaqItem[];

  // ─── Breadcrumb ───
  breadcrumbs: Array<{ name: string; url: string }>;

  // ─── Locale ───
  locale?: string;
  twitterHandle?: string;
}