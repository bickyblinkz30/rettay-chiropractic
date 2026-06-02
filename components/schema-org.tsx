import { localBusinessSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";

type SchemaOrgProps = {
  type: "LocalBusiness" | "BreadcrumbList" | "FAQPage";
  data?: Record<string, unknown>;
  breadcrumbs?: { name: string; url: string }[];
  faqs?: { question: string; answer: string }[];
};

export function SchemaOrg({ type, data, breadcrumbs, faqs }: SchemaOrgProps) {
  let schema: Record<string, unknown> = {};

  switch (type) {
    case "LocalBusiness":
      schema = localBusinessSchema();
      break;
    case "BreadcrumbList":
      if (breadcrumbs) schema = breadcrumbSchema(breadcrumbs);
      break;
    case "FAQPage":
      if (faqs) schema = faqSchema(faqs);
      break;
    default:
      schema = data || {};
  }

  if (Object.keys(schema).length === 0) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
