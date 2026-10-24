import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { servicesConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";
import type { ServiceOffering } from "@/lib/services";

function ServicePhoto({
  service,
  sizes,
  className = "",
}: {
  service: ServiceOffering;
  sizes: string;
  className?: string;
}) {
  if (!service.image) return null;

  return (
    <Image
      src={service.image.src}
      alt={service.image.alt}
      fill
      sizes={sizes}
      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] ${className}`}
      style={{ objectPosition: service.image.objectPosition }}
    />
  );
}

function FeaturedServiceCard({ service }: { service: ServiceOffering }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex min-h-[300px] flex-col justify-end overflow-hidden bg-charcoal sm:min-h-[340px] lg:min-h-[460px]"
    >
      <ServicePhoto service={service} sizes="(max-width: 1024px) 100vw, 33vw" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(18,22,18,0.9)_0%,rgba(18,22,18,0.55)_24%,rgba(18,22,18,0.12)_48%,transparent_66%)] transition-opacity duration-500 group-hover:opacity-90"
        aria-hidden="true"
      />
      <div className="relative z-10 p-6 sm:p-7">
        <h3 className="font-display text-[1.65rem] font-semibold leading-tight text-ivory sm:text-3xl">
          {service.name}
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/85 sm:text-[0.95rem]">
          {service.cardDescription}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ivory">
          Learn more
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}

function SecondaryServiceCard({
  service,
  wide,
}: {
  service: ServiceOffering;
  wide?: boolean;
}) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-stone/70 bg-ivory transition-colors duration-300 hover:border-forest"
    >
      <div
        className={`relative overflow-hidden bg-charcoal ${
          wide ? "aspect-[16/8] sm:aspect-[16/7] lg:aspect-[16/10]" : "aspect-[16/10]"
        }`}
      >
        <ServicePhoto
          service={service}
          sizes={wide ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 640px) 100vw, 25vw"}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-tight text-charcoal">
            {service.name}
          </h3>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-forest"
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
          {service.cardDescription}
        </p>
        <span className="mt-4 text-sm font-semibold text-forest underline-offset-4 group-hover:underline">
          Learn more
        </span>
      </div>
    </Link>
  );
}

export function Services() {
  const featured = servicesConfig.services.filter((service) => service.featured);
  const rest = servicesConfig.services.filter((service) => !service.featured);

  return (
    <Section id="services" className="bg-ivory pt-10 sm:pt-12 lg:pt-16">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="What we do"
          headline={servicesConfig.headline}
          subheadline={servicesConfig.subheadline}
          compact
        />
        <EstimateButton className="mb-8 hidden shrink-0 lg:inline-flex">
          Get a free estimate
        </EstimateButton>
      </div>

      <ul className="grid gap-4 lg:grid-cols-3 lg:gap-5">
        {featured.map((service) => (
          <li key={service.slug}>
            <FeaturedServiceCard service={service} />
          </li>
        ))}
      </ul>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:mt-5 lg:grid-cols-12 lg:gap-5">
        {rest.map((service, index) => {
          const isClosingRow = index >= 4;
          const isLast = index === rest.length - 1;
          return (
            <li
              key={service.slug}
              className={
                isClosingRow
                  ? `lg:col-span-4 ${isLast ? "sm:col-span-2" : ""}`
                  : "lg:col-span-3"
              }
            >
              <SecondaryServiceCard service={service} wide={isLast} />
            </li>
          );
        })}
      </ul>

      <div className="mt-8 lg:hidden">
        <EstimateButton className="w-full sm:w-auto">Get a free estimate</EstimateButton>
      </div>
    </Section>
  );
}
