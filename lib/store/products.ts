import { STORE } from "./constants";

export function whatsappLink(text: string) {
  return `https://wa.me/${STORE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const PANASONIC_BRUSH_PRODUCT = {
  slug: "panasonic-brush",
  brand: "Panasonic",
  name: "فرشة مكنسة باناسونيك أصلي",
  hook: "ضعف تنظيف المكنسة يبدأ من الفرشة",
  sub: "وفرنا لك فرشة أصلية ترجع قوة الأداء وتريح بالك",
  price: "٧٥",
  numericPrice: "75",
  badge: "أصلي ١٠٠٪",
  origin: "ماليزي الصنع",
  compat: "يتوافق مع جميع موديلات باناسونيك",
  offer: "توصيل مجاني",
  url: "https://miqash.shop/ar/dPRVOxo",
  images: [
    {
      url: "https://cdn.salla.sa/Wzrln/dad3c51d-90c0-4c99-9347-c02f68775347-1000x838.88888888889-DKhlGSHz6CFz23XLPxwPHR5QAN3AMdm2DA1Nplc8.jpg",
      width: 1000,
      height: 839,
      alt: "فرشة مكنسة باناسونيك أصلية",
    },
    {
      url: "https://cdn.salla.sa/Wzrln/771a59cf-73a4-4c9d-88f8-66ea6eb7f5ae-1000x563.98104265403-qZYF2FvS4dUFlwsmemYO6KRrT5wDVrjO8C5qgGIa.jpg",
      width: 1000,
      height: 564,
      alt: "فرشة مكنسة باناسونيك من الجانب",
    },
    {
      url: "https://cdn.salla.sa/Wzrln/7039598a-d028-48d9-9d4d-f5a3f2244045-1000x1000-Q3qpIGwoNUVFUjDgrcGlNYeR2CqvH2LZcpQkHe2T.jpg",
      width: 1000,
      height: 1000,
      alt: "تفاصيل فرشة مكنسة باناسونيك",
    },
  ],
} as const;

export const PANASONIC_RELATED_PRODUCTS = [
  {
    name: "بكج باناسونيك كامل",
    price: "١٣٠",
    url: "https://miqash.shop/ar/vXvrZya",
    image: "https://cdn.salla.sa/Wzrln/a05cda71-1bbb-463e-86f3-d5e269647506-1000x1000-u6BKIdb0HMr9Ui2TiNNqVrXo5w8BIbdU8hdNl17e.png",
  },
  {
    name: "كيس وشبك باناسونيك",
    price: "٧٠",
    url: "https://miqash.shop/ar/KjVVbew",
    image: "https://cdn.salla.sa/Wzrln/1acbfe44-ccc2-4afd-8bc0-7e0c22f05df1-1000x1000-3Z0TVaZyjtTi5UCd8Y8nZExg2AqTbdjKWMA77WQ3.png",
  },
] as const;

export const HITACHI_HOSE_KIT_PRODUCT = {
  slug: "hitachi-hose-kit",
  brand: "Hitachi",
  name: "طقم لي مكنسة هيتاشي كامل",
  price: "60",
  url: "https://miqash.shop/ar/QEGbBx",
  images: [
    {
      url: "https://cdn.salla.sa/Wzrln/q9rGmL84SZG1QMPUnHYbegzAzZRIXOTnHmg4N2EU.jpg",
      width: 1000,
      height: 1000,
      alt: "طقم لي مكنسة هيتاشي كامل",
    },
    {
      url: "https://cdn.salla.sa/Wzrln/RTvpSsMJxeWh51vEzAIJIp6B1ZGs9eBxwneZJVjk.png",
      width: 1000,
      height: 1000,
      alt: "طقم لي مكنسة هيتاشي - الفرشة",
    },
    {
      url: "https://cdn.salla.sa/Wzrln/VMgxFzoF4U0Ln2zpoZdvqycETThpS33CT2h5FWmg.jpg",
      width: 1000,
      height: 1000,
      alt: "طقم لي مكنسة هيتاشي - زوج العصا",
    },
    {
      url: "https://cdn.salla.sa/Wzrln/9ca520f6-4b45-4be2-848d-d01a470c182e-1000x1000-lbzEw45QzwKc4hXZay2dpHzlSCAVchUWuRShPk6A.jpg",
      width: 1000,
      height: 1000,
      alt: "تفاصيل طقم لي مكنسة هيتاشي",
    },
  ],
  compatibleModels: [
    "CV-975F",
    "CV-970Y",
    "CV-960F",
    "CV-950F",
    "CV-945F",
    "CV-940Y",
    "CV-930F",
    "CV-100",
    "CV-980TJ",
    "CV-995HC",
    "CV-985HC",
    "CV-9800YJ",
    "CV-995DC",
    "SS220 BG",
  ],
} as const;
