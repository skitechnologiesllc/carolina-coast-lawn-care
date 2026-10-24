import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return createPageMetadata({
    title: `${service.name} in Longs & Horry County, SC`,
    description: `${service.description} Free estimates from Carolina Coast Lawn Care.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServicePage service={service} />;
}
