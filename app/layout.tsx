import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { organizationJsonLd, siteUrl } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Carolina Coast Lawn Care | Lawn Care & Landscaping in Longs, SC",
    template: "%s | Carolina Coast Lawn Care",
  },
  description:
    "Owner-operated lawn care and landscaping in Longs, North Myrtle Beach, and Horry County, SC. Mowing, fertilization, landscaping, and more. Call, text, or request a free estimate.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Carolina Coast Lawn Care",
    title: "Carolina Coast Lawn Care | Lawn Care & Landscaping in Longs, SC",
    description:
      "Owner-operated lawn care and landscaping in Longs, North Myrtle Beach, and Horry County, SC. Free estimates.",
    images: [{ url: "/lawn1.jpeg", alt: "Carolina Coast Lawn Care project" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Coast Lawn Care | Longs & Horry County, SC",
    description:
      "Owner-operated lawn care and landscaping. Free estimates. Call or text today.",
    images: ["/lawn1.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${sourceSans.variable} has-mobile-cta font-sans antialiased`}
      >
        <JsonLd data={organizationJsonLd()} />
        {children}
        <MobileStickyBar />
      </body>
    </html>
  );
}
