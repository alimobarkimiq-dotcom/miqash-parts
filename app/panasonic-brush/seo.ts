import type { LandingPageSEO } from "@/lib/seo/types";
import { STORE } from "@/lib/store/constants";
import { PANASONIC_BRUSH_PRODUCT as product } from "@/lib/store/products";

export const panasonicSeo: LandingPageSEO = {
  slug: product.slug,
  baseUrl: STORE.partsUrl,
  productUrl: product.url,

  title: "فرشة مكنسة باناسونيك أصلية",
  description:
    "فرشة أصلية لمكانس باناسونيك تساعد على تحسين تنظيف الأرضيات والسجاد. ماليزية الصنع مع توصيل مجاني لجميع مناطق المملكة.",
  brand: product.brand,
  keywords: [
    "فرشة مكنسة باناسونيك",
    "فرشة باناسونيك أصلية",
    "قطع غيار مكنسة باناسونيك",
    "رأس مكنسة باناسونيك",
    "فرشة مكنسة كهربائية",
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
      question: "هل تناسب موديل مكنستي؟",
      answer:
        "تتوافق مع جميع موديلات باناسونيك. إذا كنت غير متأكد أرسل صورة مكنستك على واتساب ونتأكد لك مجاناً.",
    },
    {
      question: "متى أحتاج أبدل الفرشة؟",
      answer:
        "عند ضعف الشفط، أو ظهور صوت غريب، أو تآكل شعيرات الفرشة القديمة.",
    },
    {
      question: "ما هي مدة التوصيل؟",
      answer: "من يوم إلى ٤ أيام عمل حسب منطقتك.",
    },
    {
      question: "هل يمكن الإرجاع؟",
      answer: "نعم، ضمان الجودة أو الاسترجاع في حال وجود أي مشكلة في القطعة.",
    },
  ],

  breadcrumbs: [
    { name: "الرئيسية", url: STORE.url },
    { name: "قطع غيار مكانس", url: STORE.partsUrl },
    {
      name: "فرشة مكنسة باناسونيك أصلية",
      url: `${STORE.partsUrl}/${product.slug}`,
    },
  ],

  locale: "ar_SA",
  twitterHandle: STORE.twitterHandle,
};
