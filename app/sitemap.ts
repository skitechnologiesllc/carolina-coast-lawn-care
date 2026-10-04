import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const serviceEntries = getAllServiceSlugs().map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...serviceEntries,
  ];
}
