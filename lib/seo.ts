import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

const PRODUCTION_SITE_URL = "https://carolinacoastlawncare.com";

/**
 * Public site origin for canonical, OG, and sitemap URLs.
 * Prefer NEXT_PUBLIC_SITE_URL; fall back to production domain in production builds
 * and localhost during local development.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  (process.env.NODE_ENV === "production"
    ? PRODUCTION_SITE_URL
    : "http://localhost:3003")
).replace(/\/$/, "");

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "/",
  image = "/lawn1.jpeg",
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: siteConfig.companyName,
      title,
      description,
      images: [
        {
          url: ogImage,
          alt: `${siteConfig.companyName} — lawn care in ${siteConfig.location}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

/** Organization / local service JSON-LD — only verified fields from site config */
export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.companyName,
    description:
      "Owner-operated lawn care and landscaping serving Longs and all of Horry County, SC.",
    url: absoluteUrl("/"),
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl("/logo.jpg"),
    areaServed: [
      {
        "@type": "City",
        name: "Longs",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Horry County",
        },
      },
      {
        "@type": "AdministrativeArea",
        name: "Horry County",
        containedInPlace: { "@type": "State", name: "South Carolina" },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Longs",
      addressRegion: "SC",
      addressCountry: "US",
    },
    sameAs: [siteConfig.facebook, siteConfig.googleReviewsUrl],
    priceRange: "$$",
  };
}

export function serviceJsonLd(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.companyName,
      telephone: siteConfig.phone,
      url: absoluteUrl("/"),
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Horry County",
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
