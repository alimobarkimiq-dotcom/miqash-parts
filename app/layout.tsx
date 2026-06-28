import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Clarity from "@/components/analytics/Clarity";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "فرشة مكنسة باناسونيك أصلية | مقشة",
  description:
    "فرشة أصلية لمكانس باناسونيك تساعد على تحسين تنظيف الأرضيات والسجاد. توصيل مجاني لجميع مناطق المملكة.",
  openGraph: {
    title: "فرشة مكنسة باناسونيك أصلية | مقشة",
    description:
      "وفرنا لك فرشة أصلية ترجع قوة الأداء وتريح بالك. توصيل مجاني لجميع مناطق المملكة.",
    url: "https://miqash.shop/ar/dPRVOxo",
    siteName: "مقشة",
    images: [
      {
        url: "https://cdn.salla.sa/Wzrln/dad3c51d-90c0-4c99-9347-c02f68775347-1000x838.88888888889-DKhlGSHz6CFz23XLPxwPHR5QAN3AMdm2DA1Nplc8.jpg",
        width: 1000,
        height: 839,
        alt: "فرشة مكنسة باناسونيك أصلية",
      },
    ],
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "فرشة مكنسة باناسونيك أصلية | مقشة",
    description:
      "وفرنا لك فرشة أصلية ترجع قوة الأداء وتريح بالك. توصيل مجاني لجميع مناطق المملكة.",
    images: [
      "https://cdn.salla.sa/Wzrln/dad3c51d-90c0-4c99-9347-c02f68775347-1000x838.88888888889-DKhlGSHz6CFz23XLPxwPHR5QAN3AMdm2DA1Nplc8.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <Clarity />
      </body>
    </html>
  );
}
