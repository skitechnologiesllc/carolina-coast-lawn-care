import Image from "next/image";
import Link from "next/link";
import { servicesConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import type { ServiceOffering } from "@/lib/services";

const PRIMARY_SLUGS = [
  "lawn-mowing",
  "fertilization-weed-control",
  "landscaping",
  "mulch-rock-installation",
  "landscape-lighting",
  "pressure-soft-washing",
] as const;

function ServiceCard({ service }: { service: ServiceOffering }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden border border-border bg-white transition-all duration-300 hover:border-forest/35 hover:shadow-[0_10px_28px_rgba(20,24,22,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-forest">
        {service.image ? (
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
            style={{ objectPosition: service.image.objectPosition }}
          />
        ) : (
          <div className="absolute inset-0 flex items-end bg-[linear-gradient(160deg,#103c28_0%,#141816_100%)] p-5">
            <span className="font-display text-lg font-bold text-white/90">
              {service.name}
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-extrabold tracking-tight text-charcoal">
          {service.name}
        </h3>
        <p className="mt-2 min-h-[4.5rem] flex-1 text-[0.95rem] leading-relaxed text-slate">
          {service.cardDescription}
        </p>
        <span className="mt-5 text-sm font-semibold text-forest transition-colors group-hover:text-lime-dark">
          Learn more →
        </span>
      </div>
    </Link>
  );
}

export function Services() {
  const bySlug = new Map(
    servicesConfig.services.map((service) => [service.slug, service])
  );
  const primary = PRIMARY_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (service): service is ServiceOffering => Boolean(service)
  );
  const secondary = servicesConfig.services.filter(
    (service) => !PRIMARY_SLUGS.includes(service.slug as (typeof PRIMARY_SLUGS)[number])
  );

  return (
    <Section id="services" className="bg-mist">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          headline={servicesConfig.headline}
          subheadline={servicesConfig.subheadline}
          compact
        />
      </Reveal>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {primary.map((service, index) => (
          <li key={service.slug} className="h-full">
            <Reveal delayMs={index * 60} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-12 sm:mt-14">
        <div className="border-t border-border pt-8 sm:pt-10">
          <p className="text-sm font-semibold text-forest">Also available</p>
          <h3 className="mt-1 font-display text-xl font-extrabold tracking-tight text-charcoal sm:text-2xl">
            Additional services
          </h3>
          <ul className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {secondary.map((service) => (
              <li key={service.slug} className="bg-white">
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex h-full items-center justify-between gap-3 px-5 py-5 transition-colors hover:bg-mist"
                >
                  <span className="font-display text-base font-bold text-charcoal group-hover:text-forest">
                    {service.name}
                  </span>
                  <span
                    className="text-sm font-semibold text-lime transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-10 flex justify-start lg:hidden">
        <EstimateButton className="w-full sm:w-auto">Get a free estimate</EstimateButton>
      </div>
    </Section>
  );
}
