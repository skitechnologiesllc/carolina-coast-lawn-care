import { ctaConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EstimateButton } from "@/components/ui";

export function CTA() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {ctaConfig.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-primary">
              {ctaConfig.subheadline}
            </p>
            <div className="mt-10">
              <EstimateButton className="px-10 py-4 text-base">
                {ctaConfig.buttonText}
              </EstimateButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
