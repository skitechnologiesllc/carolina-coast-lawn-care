import { serviceAreaConfig, siteConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";

export function ServiceArea() {
  return (
    <Section id="service-area" className="bg-ivory">
      <SectionHeading
        eyebrow="Coverage"
        headline={serviceAreaConfig.headline}
        subheadline={serviceAreaConfig.subheadline}
        compact
      />

      <ul className="flex flex-wrap gap-2">
        {serviceAreaConfig.areas.map((area) => (
          <li
            key={area}
            className="border border-stone/80 bg-ivory-deep px-3.5 py-2 text-sm font-semibold tracking-wide text-charcoal"
          >
            {area}
          </li>
        ))}
      </ul>

      <p className="mt-5 max-w-2xl text-sm text-body sm:text-base">
        {serviceAreaConfig.note}
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <EstimateButton>Get a free estimate</EstimateButton>
        <a
          href={siteConfig.phoneHref}
          className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
        >
          Or call {siteConfig.phone}
        </a>
      </div>
    </Section>
  );
}
