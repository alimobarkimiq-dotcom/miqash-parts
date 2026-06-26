// app/hitachi-hose-kit/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/build-metadata";
import SeoJsonLd from "@/components/SeoJsonLd";
import { hitachiSeo } from "./seo";

export const metadata: Metadata = buildMetadata(hitachiSeo);

export default function HitachiLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SeoJsonLd seo={hitachiSeo} />
      {children}
    </>
  );
}