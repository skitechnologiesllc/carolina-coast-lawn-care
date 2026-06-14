import Link from "next/link";
import { Phone } from "lucide-react";
import { heroConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-[#2d5016]">
      <div className="absolute inset-0 bg-secondary/70" />

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
