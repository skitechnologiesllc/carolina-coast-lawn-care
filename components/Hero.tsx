import Link from "next/link";
import { heroConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";
import { HeroBackground } from "@/components/HeroBackground";

const HERO_IMAGE = {
  src: "/lawn4.jpeg",
  alt: "Carolina Coast Lawn Care — front yard landscaping with concrete walkway",
  objectPosition: "center 28%",
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <HeroBackground
        src={HERO_IMAGE.src}
        alt={HERO_IMAGE.alt}
        objectPosition={HERO_IMAGE.objectPosition}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroConfig.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
            {heroConfig.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <EstimateButton variant="primary" className="px-8 py-4 text-base">
              Get Your Free Estimate
            </EstimateButton>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-white/10"
            >
              See Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
