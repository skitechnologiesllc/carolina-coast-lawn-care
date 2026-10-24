import Image from "next/image";
import { ctaConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal">
      <Image
        src="/clean-front-lawn.jpeg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover object-[center_60%]"
      />
      <div className="absolute inset-0 bg-charcoal/78" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-ivory sm:text-5xl">
          {ctaConfig.headline}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ivory/85 sm:text-lg">
          {ctaConfig.subheadline}
        </p>
        <div className="mt-8">
          <EstimateButton variant="light" className="px-8 py-3.5 text-base">
            {ctaConfig.buttonText}
          </EstimateButton>
        </div>
      </div>
    </section>
  );
}
