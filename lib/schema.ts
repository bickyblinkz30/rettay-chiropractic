import { BUSINESS_INFO } from "./constants";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Chiropractic",
    "@id": `${BUSINESS_INFO.address.street.replace(/\s+/g, "-").toLowerCase()}-chiropractic`,
    name: BUSINESS_INFO.legalName,
    alternateName: BUSINESS_INFO.displayName,
    description:
      "Premier chiropractic care in Florence, KY specializing in back pain treatment, neck pain relief, sciatica treatment, sports injuries, and auto accident recovery.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://rettaychiropracticofficepsc.com",
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    founder: { "@type": "Person", name: BUSINESS_INFO.owner },
    owner: { "@type": "Person", name: BUSINESS_INFO.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: BUSINESS_INFO.hoursStructured.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [BUSINESS_INFO.social.google, BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
    image: "https://rettaychiropracticofficepsc.com/og-image.jpg",
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS_INFO.rating,
      reviewCount: BUSINESS_INFO.reviewCount,
      bestRating: 5,
    },
  };
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rettaychiropracticofficepsc.com";
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}
