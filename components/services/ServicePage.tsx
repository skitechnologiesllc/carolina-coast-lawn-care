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
                  className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/72 to-charcoal/40"
                  aria-hidden="true"
                />
              </>
            ) : (
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,#141816_0%,#103c28_55%,#141816_100%)]"
                aria-hidden="true"
              />
            )}
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold text-lime">Service</p>
            <h1 className="mt-3 max-w-3xl font-display text-3xl font-extrabold tracking-tight text-white sm:text-[2.75rem]">
              {service.name} in Longs &amp; Horry County
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              {service.description}
            </p>
            {service.imageCaption && (
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/60">
                {service.imageCaption}
              </p>
            )}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <EstimateButton variant="lime" href={siteConfig.estimateHash}>
                Get a free estimate
              </EstimateButton>
              <a
                href={siteConfig.phoneHref}
                className="text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.smsHref}
                className="text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                Text us
              </a>
            </div>
          </div>
        </section>

        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-charcoal sm:text-3xl">
              What you can expect
            </h2>
            <ul className="mt-6 space-y-0 border-t border-border sm:mt-8">
              {service.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border py-3.5 text-base text-slate sm:py-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-mist py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-charcoal">
              Related services
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/services/${item.slug}`}
                    className="group relative block overflow-hidden border border-border bg-white transition-all hover:border-forest/35 hover:shadow-[0_10px_24px_rgba(20,24,22,0.07)]"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden bg-forest">
                      {item.image ? (
                        <Image
                          src={item.image.src}
                          alt={item.image.alt}
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                          style={{ objectPosition: item.image.objectPosition }}
                        />
                      ) : null}
                    </div>
                    <span className="block px-4 py-3 text-sm font-bold text-charcoal transition-colors group-hover:text-forest">
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
