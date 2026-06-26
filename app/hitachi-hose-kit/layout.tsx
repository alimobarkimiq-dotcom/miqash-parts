// app/hitachi-hose-kit/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo/build-metadata";
import { hitachiSeo } from "./seo";

export const metadata: Metadata = buildMetadata(hitachiSeo);

export default function HitachiLayout({ children }: { children: ReactNode }) {
  return children;
}