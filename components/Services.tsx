import { servicesConfig } from "@/config/site";
import { EstimateButton, SectionHeading } from "@/components/ui";

/**
 * Plan: services as a type-led list / 2-column text rail —
 * not identical icon cards.
 */
export function Services() {
  return (
    <section
      id="services"
      className="bg-light-secondary py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          headline={servicesConfig.headline}
          subheadline={servicesConfig.subheadline}
          centered
        />

        <ul className="grid gap-x-16 sm:grid-cols-2">
          {servicesConfig.services.map((service) => (
            <li key={service.name} className="border-t border-border py-7">
              <h3 className="font-display text-xl font-semibold text-dock">
                {service.name}
              </h3>
              <p className="mt-2 max-w-md text-base leading-relaxed text-body">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <EstimateButton className="px-8 py-4 text-base">
            Request an estimate
          </EstimateButton>
        </div>
      </div>
    </section>
  );
}
