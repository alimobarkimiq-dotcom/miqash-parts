import type { Metadata } from "next";
import type { ReactNode } from "react";
import SeoJsonLd from "@/components/SeoJsonLd";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { panasonicFullKitSeo } from "./seo";

export const metadata: Metadata = buildMetadata(panasonicFullKitSeo);

export default function PanasonicFullKitLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SeoJsonLd seo={panasonicFullKitSeo} />
      {children}
    </>
  );
}
