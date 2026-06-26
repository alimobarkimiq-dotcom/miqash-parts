// components/SeoJsonLd.tsx
// Server Component — لا يحتاج "use client"

import type { LandingPageSEO } from "@/lib/seo/types";
import { buildAllSchemas } from "@/lib/seo/schemas";

interface Props {
  seo: LandingPageSEO;
}

export default function SeoJsonLd({ seo }: Props) {
  const schemas = buildAllSchemas(seo);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}