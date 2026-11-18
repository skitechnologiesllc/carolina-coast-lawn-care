import { MapPin } from "lucide-react";
import { serviceAreaConfig, siteConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function ServiceArea() {
  return (
    <Section id="service-area" className="bg-white">
      <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Service area"
              headline={serviceAreaConfig.headline}
              subheadline={serviceAreaConfig.subheadline}
              compact
            />
            <p className="max-w-md text-sm leading-relaxed text-slate">
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
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delayMs={80}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-5">
              {serviceAreaConfig.areas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-charcoal sm:text-lg"
                >
                  <MapPin
                    className="h-4 w-4 shrink-0 text-lime"
                    strokeWidth={2.25}
                    aria-hidden="true"
                  />
                  {area}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
