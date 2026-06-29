import type { Metadata } from "next";
import type { ReactNode } from "react";
import SeoJsonLd from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { panasonicSeo } from "./seo";

export const metadata: Metadata = buildMetadata(panasonicSeo);

export default function PanasonicBrushLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SeoJsonLd seo={panasonicSeo} />
      {children}
    </>
  );
}
