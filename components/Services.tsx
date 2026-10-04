import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Droplets, SprayCan } from "lucide-react";
import { servicesConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";
import type { ServiceOffering } from "@/lib/services";

function ServiceMark({ slug }: { slug: string }) {
  if (slug === "irrigation") {
    return <Droplets className="h-6 w-6 text-ivory/85" strokeWidth={1.5} aria-hidden="true" />;
  }
  if (slug === "pressure-soft-washing") {
    return <SprayCan className="h-6 w-6 text-ivory/85" strokeWidth={1.5} aria-hidden="true" />;
  }
  return (
    <span className="font-display text-lg font-semibold text-ivory/70" aria-hidden="true">
      CC
    </span>
  );
}

function SecondaryServiceCard({ service }: { service: ServiceOffering }) {
  const hasPhoto = Boolean(service.image);

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full overflow-hidden border border-charcoal/10 bg-charcoal transition-colors hover:border-forest"
    >
      <div className="relative w-[34%] min-w-[92px] shrink-0 self-stretch overflow-hidden sm:min-w-[108px]">
        {hasPhoto && service.image ? (
          <>
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="140px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              style={{ objectPosition: service.image.objectPosition }}
            />
            <div
              className="absolute inset-0 bg-charcoal/25 transition-colors group-hover:bg-charcoal/10"
              aria-hidden="true"
            />
          </>
        ) : (
          <div className="flex h-full min-h-[112px] items-center justify-center bg-forest-hover">
            <ServiceMark slug={service.slug} />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col bg-ivory-deep p-4 transition-colors group-hover:bg-ivory sm:p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-charcoal">
            {service.name}
          </h3>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-forest"
            aria-hidden="true"
          />
        </div>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-body">
          {service.cardDescription}
        </p>
        <span className="mt-3 text-sm font-semibold text-forest underline-offset-4 group-hover:underline">
          Learn more
        </span>
      </div>
    </Link>
  );
}

export function Services() {
  const featured = servicesConfig.services.filter((s) => s.featured);
  const rest = servicesConfig.services.filter((s) => !s.featured);

  return (
    <Section id="services" className="bg-ivory">
      <SectionHeading
        eyebrow="What we do"
        headline={servicesConfig.headline}
        subheadline={servicesConfig.subheadline}
        compact
      />

      {/* Core services — stronger visual weight */}
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {featured.map((service) => (
          <li key={service.slug} className="sm:col-span-1">
            <Link
              href={`/services/${service.slug}`}
              className="group relative flex h-full min-h-[240px] flex-col justify-end overflow-hidden border border-charcoal/10 bg-charcoal sm:min-h-[280px]"
            >
              {service.image && (
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: service.image.objectPosition }}
                />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/45 to-charcoal/10"
                aria-hidden="true"
              />
              <div className="relative z-10 p-5 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold text-ivory sm:text-2xl">
                    {service.name}
                  </h3>
                  <ArrowUpRight
                    className="mt-1 h-4 w-4 shrink-0 text-ivory/70 transition-colors group-hover:text-ivory"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/80">
                  {service.cardDescription}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-ivory underline-offset-4 group-hover:underline">
                  Learn more
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Remaining services — compact, same system, secondary weight */}
      <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3">
        {rest.map((service) => (
          <li key={service.slug}>
            <SecondaryServiceCard service={service} />
          </li>
        ))}
      </ul>

      <div className="mt-8 lg:mt-10">
        <EstimateButton className="px-8 py-3.5 text-base">
          Get a free estimate
        </EstimateButton>
      </div>
    </Section>
  );
}
