import Image from "next/image";
import Link from "next/link";
import { heroConfig, siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="hero-editorial" aria-label="Introduction">
      <div className="hero-editorial__photo">
        <Image
          src={heroConfig.image.src}
          alt={heroConfig.image.alt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="hero-editorial__photo-img object-cover object-[center_55%]"
        />
      </div>

      <div className="hero-editorial__overlay" aria-hidden="true" />

      <div className="hero-editorial__copy">
        <div className="hero-editorial__copy-scrim" aria-hidden="true" />
        <div className="relative z-10 w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          <p className="font-display text-base font-semibold tracking-wide text-ivory sm:text-lg">
            {heroConfig.brand}
          </p>

          <h1 className="mt-3 max-w-xl font-display text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-ivory sm:mt-4 sm:text-4xl lg:max-w-2xl lg:text-[2.65rem]">
            {heroConfig.headline}
          </h1>

          <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-ivory/90 sm:mt-4 sm:text-base lg:text-lg">
            {heroConfig.subheadline}
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:mt-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center bg-ivory px-5 py-3 text-sm font-semibold text-charcoal transition-colors hover:bg-ivory-deep sm:px-6 sm:py-3.5"
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={siteConfig.smsHref}
              className="inline-flex items-center justify-center border border-ivory/50 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:border-ivory hover:bg-ivory/10 sm:px-6 sm:py-3.5"
            >
              Text us
            </a>
            <Link
              href={siteConfig.estimateHash}
              className="hero-editorial__cta inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-ivory transition-colors sm:px-6 sm:py-3.5"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
