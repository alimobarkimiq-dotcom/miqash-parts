import type { LandingPageSEO } from "@/lib/seo/types";
import { STORE } from "@/lib/store/constants";
import { PANASONIC_FULL_KIT_PRODUCT as product } from "@/lib/store/products";

export const panasonicFullKitSeo: LandingPageSEO = {
  slug: product.slug,
  baseUrl: STORE.partsUrl,
  productUrl: product.url,

  title: product.name,
  description:
    "بكج لي مكنسة باناسونيك كامل يشمل لي مكنسة، فرشة شفط، زوج عصا، كيس فلتر، شبك، وأداة تنظيف الشبابيك في طلب واحد.",
  brand: product.brand,
  keywords: [
    "بكج لي مكنسة باناسونيك",
    "طقم لي مكنسة باناسونيك كامل",
    "قطع غيار مكنسة باناسونيك",
    "كيس فلتر باناسونيك",
    "شبك مكنسة باناسونيك",
    "أداة تنظيف الشبابيك باناسونيك",
    "مقشة",
  ],

  images: product.images.map((image) => ({
    url: image.url,
    width: image.width,
    height: image.height,
    alt: image.alt,
  })),

  currency: "SAR",
  price: product.numericPrice,
  availability: "InStock",
  merchantReturnPolicy: STORE.returnPolicy,

  faqs: [
    {
      question: "ماذا يشمل بكج لي مكنسة باناسونيك؟",
      answer:
        "يشمل لي مكنسة باناسونيك، فرشة شفط، زوج عصا، كيس فلتر، شبك، وأداة تنظيف الشبابيك.",
    },
    {
      question: "هل عنوان الصفحة مختلف عن اسم المنتج الرسمي؟",
      answer:
        "نعم، عنوان الصفحة تسويقي ومختصر، بينما الاسم الرسمي في البيانات المنظمة مطابق لاسم المنتج في المتجر.",
    },
    {
      question: "ما الموديلات المتوافقة؟",
      answer: `الموديلات المتوافقة: ${product.compatibleModels.join("، ")}.`,
    },
    {
      question: "أين يتم شراء المنتج؟",
      answer: "الطلب يتم من متجر مِقَشّة الرئيسي عبر رابط المنتج في متجر سلة.",
    },
  ],

  breadcrumbs: [
    { name: "الرئيسية", url: STORE.url },
    { name: "قطع غيار مكانس", url: STORE.partsUrl },
    {
      name: product.name,
      url: `${STORE.partsUrl}/${product.slug}`,
    },
  ],

  locale: "ar_SA",
  twitterHandle: STORE.twitterHandle,
};
