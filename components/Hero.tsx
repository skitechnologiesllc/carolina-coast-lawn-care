import Link from "next/link";
import { ShieldCheck, Star } from "lucide-react";
import { heroConfig, siteConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #1f3a14 0%, #2d5016 45%, #4a7c2f 100%)",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {heroConfig.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
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

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 shrink-0 text-white/80" />
              Licensed &amp; Insured
            </span>
            <Link
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <span className="inline-flex gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[#FBBC04] text-[#FBBC04]"
                  />
                ))}
              </span>
              <span className="font-medium text-white/85">5.0</span>
              <span>Google Reviews</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
