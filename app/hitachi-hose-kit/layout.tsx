import type { Metadata } from "next";
import type { ReactNode } from "react";

const BASE_URL = "https://miqash.shop/ar/QEGbBx";
const OG_IMAGE = "https://cdn.salla.sa/Wzrln/q9rGmL84SZG1QMPUnHYbegzAzZRIXOTnHmg4N2EU.jpg";

export const metadata: Metadata = {
  title: "طقم لي مكنسة هيتاشي كامل | متجر مِقَشّة",
  description:
    "طقم قطع غيار مكنسة هيتاشي يشمل: اللي، الفرشة، وزوج العصا. متوافق مع موديلات CV-975F وغيرها. توصيل سريع لجميع مناطق المملكة.",
  keywords: [
    "طقم لي مكنسة هيتاشي",
    "قطع غيار مكنسة هيتاشي",
    "لي مكنسة هيتاشي",
    "فرشة مكنسة هيتاشي",
    "خرطوم مكنسة هيتاشي",
    "CV-975F",
    "CV-970Y",
    "CV-960F",
    "مقشة",
    "مكنسة كهربائية قطع غيار",
  ],
  authors: [{ name: "مِقَشّة", url: "https://miqash.shop/ar" }],
  creator: "مِقَشّة",
  publisher: "مِقَشّة",
  metadataBase: new URL("https://miqash.shop"),
  alternates: { canonical: BASE_URL },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "طقم لي مكنسة هيتاشي كامل — مِقَشّة",
    description:
      "طقم 3 قطع: اللي + الفرشة + زوج العصا. متوافق مع أكثر من 14 موديل هيتاشي. اطلب الآن وصله لباب بيتك.",
    siteName: "مِقَشّة",
    locale: "ar_SA",
    images: [{ url: OG_IMAGE, width: 1000, height: 1000, alt: "طقم لي مكنسة هيتاشي كامل" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@miqash_shop",
    creator: "@miqash_shop",
    title: "طقم لي مكنسة هيتاشي كامل — مِقَشّة",
    description: "طقم 3 قطع: اللي + الفرشة + زوج العصا. متوافق مع أكثر من 14 موديل هيتاشي.",
    images: [OG_IMAGE],
  },
};

export default function HitachiLayout({ children }: { children: ReactNode }) {
  return children;
}