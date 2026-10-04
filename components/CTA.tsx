import { ctaConfig, siteConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";

export function CTA() {
  return (
    <section className="bg-forest py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-ivory sm:text-3xl lg:text-4xl">
          {ctaConfig.headline}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-ivory/80 sm:mt-4 sm:text-lg">
          {ctaConfig.subheadline}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <EstimateButton variant="light" className="px-8 py-3.5 text-base">
            {ctaConfig.buttonText}
          </EstimateButton>
          <a
            href={siteConfig.phoneHref}
            className="text-sm font-semibold text-ivory underline-offset-4 hover:underline"
          >
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
