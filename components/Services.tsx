import type { LucideIcon } from "lucide-react";
import {
  BrickWall,
  Flower2,
  Layers,
  Leaf,
  MoreHorizontal,
  Mountain,
  Scissors,
  Sprout,
} from "lucide-react";
import { servicesConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";

const iconMap: Record<string, LucideIcon> = {
  "Lawn Mowing": Scissors,
  Fertilization: Sprout,
  Aeration: Leaf,
  "Sod Installation": Layers,
  "Rock Bed Installation": Mountain,
  "Landscaping & Design": Flower2,
  Hardscape: BrickWall,
  More: MoreHorizontal,
};

export function Services() {
  return (
    <Section id="services" className="bg-light-secondary">
      <ScrollReveal>
        <SectionHeading
          headline={servicesConfig.headline}
          subheadline={servicesConfig.subheadline}
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesConfig.services.map((service) => {
            const Icon = iconMap[service.name];
            return (
              <div
                key={service.name}
                className="flex h-full flex-col rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-heading">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <EstimateButton className="px-8 py-4 text-base">
            Get Your Free Estimate
          </EstimateButton>
        </div>
      </ScrollReveal>
    </Section>
  );
}
