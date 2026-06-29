import type { LandingPageSEO } from "@/lib/seo/types";
import { STORE } from "@/lib/store/constants";
import { HITACHI_HOSE_KIT_PRODUCT as product } from "@/lib/store/products";

export const hitachiSeo: LandingPageSEO = {
  slug: product.slug,
  baseUrl: STORE.partsUrl,
  productUrl: product.url,

  title: "طقم لي مكنسة هيتاشي كامل",
  description:
    "طقم قطع غيار مكنسة هيتاشي يشمل: اللي، الفرشة، وزوج العصا. متوافق مع موديلات CV-975F وغيرها. توصيل سريع لجميع مناطق المملكة.",
  brand: product.brand,
  keywords: [
    "طقم لي مكنسة هيتاشي",
    "قطع غيار مكنسة هيتاشي",
    "لي مكنسة هيتاشي",
    "فرشة مكنسة هيتاشي",
    "خرطوم مكنسة هيتاشي",
    "CV-975F",
    "CV-970Y",
    "CV-960F",
    "CV-950F",
    "مقشة",
    "مكنسة كهربائية قطع غيار",
  ],

  images: product.images.slice(0, 3).map((image) => ({
    url: image.url,
    width: image.width,
    height: image.height,
    alt: image.alt,
  })),

  currency: "SAR",
  price: product.price,
  availability: "InStock",
  merchantReturnPolicy: STORE.returnPolicy,

  aggregateRating: {
    ratingValue: 4.9,
    reviewCount: 18,
  },
  reviews: [
    {
      author: "خالد",
      ratingValue: 5,
      datePublished: "2026-06-15",
      reviewBody: "ممتاز جدا وأنصح فيه",
    },
    {
      author: "ناذر الخليل",
      ratingValue: 5,
      datePublished: "2024-06-30",
      reviewBody: "كما طلبته .. رائع",
    },
    {
      author: "أمل بنت محمد",
      ratingValue: 5,
      datePublished: "2023-01-30",
      reviewBody:
        "للأمانة طلبت من عندكم لي مكنسة هيتاشي كامل، منجد أتكلم لكم عن الجودة — مرا ممتازة",
    },
  ],

  faqs: [
    {
      question: "هل الطقم يناسب كل موديلات هيتاشي؟",
      answer:
        "لا، الطقم مخصص لموديلات محددة مذكورة في الصفحة. إذا كنت غير متأكد، تواصل معنا على واتساب قبل الطلب.",
    },
    {
      question: "كم قطعة تشمل الطقم؟",
      answer:
        "الطقم يتكون من 3 قطع: اللي (الخرطوم المرن)، الفرشة (رأس التنظيف)، وزوج العصا الممتدة.",
    },
    {
      question: "كيف أعرف رقم موديل مكنستي؟",
      answer:
        "رقم الموديل موجود على لافتة صغيرة أسفل الجهاز أو على الجانب. ابحث عن رقم يبدأ بـ CV- أو SS.",
    },
    {
      question: "كم يستغرق التوصيل؟",
      answer: "التوصيل خلال 2-4 أيام عمل لمعظم مناطق المملكة.",
    },
    {
      question: "هل يمكن الإرجاع إذا لم تناسب مكنستي؟",
      answer: "نعم، تواصل معنا عبر واتساب وسنحل المسألة معك.",
    },
  ],

  breadcrumbs: [
    { name: "الرئيسية", url: STORE.url },
    { name: "قطع غيار مكانس", url: STORE.partsUrl },
    {
      name: "طقم لي مكنسة هيتاشي كامل",
      url: `${STORE.partsUrl}/${product.slug}`,
    },
  ],

  locale: "ar_SA",
  twitterHandle: STORE.twitterHandle,
};
