import { SITE_CONFIG, BUSINESS_INFO } from "./constants";

type Meta = {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  noIndex?: boolean;
};

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = "website",
  publishedTime,
  noIndex = false,
}: Meta) {
  const fullTitle = `${title} | ${SITE_CONFIG.shortName}`;
  const url = canonical || SITE_CONFIG.url;
  const image = ogImage || SITE_CONFIG.ogImage;

  return {
    title: fullTitle,
    description,
    keywords: keywords || SITE_CONFIG.keywords.join(", "),
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.shortName,
      locale: "en_US",
      type: ogType,
      ...(publishedTime && { publishedTime }),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.shortName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      maxSnippet: -1,
      maxImagePreview: "large" as const,
    },
    other: {
      "geo.region": "US-KY",
      "geo.placename": BUSINESS_INFO.address.city,
      "geo.position": `${BUSINESS_INFO.geo.latitude};${BUSINESS_INFO.geo.longitude}`,
      ICBM: `${BUSINESS_INFO.geo.latitude} ${BUSINESS_INFO.geo.longitude}`,
    },
  };
}
