import Image from "next/image";
import Link from "next/link";
import type { ServiceOffering } from "@/lib/services";
import { serviceOfferings } from "@/lib/services";
import { siteConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { serviceJsonLd } from "@/lib/seo";
import { Navbar } from "@/components/Navbar";
import { TopContactBar } from "@/components/TopContactBar";
import { Footer } from "@/components/Footer";
import { QuoteForm } from "@/components/QuoteForm";

type ServicePageProps = {
  service: ServiceOffering;
};

export function ServicePage({ service }: ServicePageProps) {
  const related = serviceOfferings
    .filter((item) => item.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      <JsonLd data={serviceJsonLd(service)} />
      <div className="sticky top-0 z-50">
        <TopContactBar />
        <Navbar />
      </div>

      <main>
        <section className="relative overflow-hidden bg-charcoal">
          <div className="absolute inset-0">
            {service.image ? (
              <>
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  priority
                  quality={80}
                  sizes="100vw"
                  className="object-cover"
                  style={{ objectPosition: service.image.objectPosition }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-r from-charcoal/92 via-charcoal/78 to-charcoal/45"
                  aria-hidden="true"
                />
              </>
            ) : (
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#1a1c19_0%,#12291f_55%,#1a1c19_100%)]"
                aria-hidden="true"
              />
            )}
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ivory/55">
              Service
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ivory sm:text-5xl">
              {service.name} in Longs &amp; Horry County
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/85">
              {service.description}
            </p>
            {service.imageCaption && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory/65">
                {service.imageCaption}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <EstimateButton variant="light" href={siteConfig.estimateHash}>
                Get a free estimate
              </EstimateButton>
              <a
                href={siteConfig.phoneHref}
                className="text-sm font-semibold text-ivory underline-offset-4 hover:underline"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.smsHref}
                className="text-sm font-semibold text-ivory/80 underline-offset-4 hover:text-ivory hover:underline"
              >
                Text us
              </a>
            </div>
          </div>
        </section>

        <section className="bg-ivory py-12 sm:py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal sm:text-3xl">
              What you can expect
            </h2>
            <ul className="mt-6 space-y-0 border-t border-border sm:mt-8">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-3.5 text-base text-body sm:py-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-ivory-deep py-12 sm:py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-charcoal">
              Related services
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group relative block overflow-hidden border border-border bg-ivory transition-colors hover:border-forest/50"
                  >
                    <div className="relative aspect-[16/9] bg-forest-hover">
                      {item.image ? (
                        <>
                          <Image
                            src={item.image.src}
                            alt={item.image.alt}
                            fill
                            sizes="(max-width: 1024px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                            style={{ objectPosition: item.image.objectPosition }}
                          />
                          <div
                            className="absolute inset-0 bg-charcoal/25 transition-colors group-hover:bg-charcoal/15"
                            aria-hidden="true"
                          />
                        </>
                      ) : null}
                    </div>
                    <span className="block px-4 py-3 text-sm font-semibold text-charcoal transition-colors group-hover:text-forest">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <QuoteForm />
      </main>

      <Footer />
    </>
  );
}
