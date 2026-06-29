import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import Clarity from "@/components/analytics/Clarity";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "قطع غيار المكانس | متجر مِقَشّة",
  description:
    "صفحات منتجات مِقَشّة لقطع غيار المكانس الأصلية والمتوافقة مع التوصيل داخل المملكة.",
  openGraph: {
    title: "قطع غيار المكانس | متجر مِقَشّة",
    description:
      "اختر قطعة الغيار المناسبة لمكنستك وتأكد من التوافق قبل الطلب.",
    url: "https://parts.miqash.shop",
    siteName: "مِقَشّة",
    locale: "ar_SA",
    type: "website",
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
