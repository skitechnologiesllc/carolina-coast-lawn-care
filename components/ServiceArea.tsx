import { serviceAreaConfig, siteConfig } from "@/config/site";
import { EstimateButton, Section } from "@/components/ui";

export function ServiceArea() {
  const communities = serviceAreaConfig.areas.filter((area) => area !== "Longs");

  return (
    <Section id="service-area" className="bg-ivory">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Service area
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
            {serviceAreaConfig.headline}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-body">
            {serviceAreaConfig.subheadline}
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
            {serviceAreaConfig.note}
          </p>
          <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <EstimateButton>Get a free estimate</EstimateButton>
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="border-l-2 border-forest pl-5 sm:pl-6">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-forest">
              Home base
            </p>
            <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Longs, South Carolina
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-body">
              Carolina Coast Lawn Care is based in Longs and works across Horry County from there.
            </p>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {communities.map((area) => (
              <li key={area} className="flex items-center gap-3 border-b border-stone/70 py-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-forest" aria-hidden="true" />
                <span className="font-display text-lg font-semibold text-charcoal">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
