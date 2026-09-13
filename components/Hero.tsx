import Image from "next/image";
import Link from "next/link";
import { heroConfig, siteConfig } from "@/config/site";

/**
 * Full-bleed photo hero with left-weighted gradient overlay for type.
 * No split panels / vertical divider.
 */
export function Hero() {
  return (
    <section className="hero-editorial" aria-label="Introduction">
      <div className="hero-editorial__photo">
        <Image
          src={heroConfig.image.src}
          alt={heroConfig.image.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="hero-editorial__photo-img object-cover object-[center_55%]"
        />
      </div>

      <div className="hero-editorial__overlay" aria-hidden="true" />

      <div className="hero-editorial__copy">
        <div className="w-full max-w-7xl px-6 py-16 sm:px-10 lg:px-14 xl:px-16">
          <p className="font-display text-xl font-semibold text-salt sm:text-2xl">
            {heroConfig.brand}
          </p>

          <h1 className="mt-5 max-w-xl font-display text-[1.85rem] font-semibold leading-[1.18] tracking-tight text-salt sm:text-4xl lg:text-[2.75rem]">
            {heroConfig.headline}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-salt/85 sm:text-lg">
            {heroConfig.subheadline}
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href={siteConfig.estimateAnchor}
              className="hero-editorial__cta inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-salt transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Get a free estimate
            </Link>
            <a
              href={siteConfig.phoneHref}
              className="text-sm font-medium text-salt/80 underline-offset-4 transition-colors hover:text-salt hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-green)]"
            >
              Or call {siteConfig.phone}
            </a>
          </div>

          <p className="mt-10 max-w-xl border-t border-salt/25 pt-5 text-sm text-salt/70">
            Licensed &amp; insured
            <span className="mx-2 text-salt/35" aria-hidden="true">
              ·
            </span>
            Free estimates
            <span className="mx-2 text-salt/35" aria-hidden="true">
              ·
            </span>
            <Link
              href={siteConfig.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-editorial__link text-salt/80 underline-offset-2 transition-colors hover:text-salt hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--hero-green)]"
            >
              5.0 on Google
            </Link>
            <span className="mx-2 text-salt/35" aria-hidden="true">
              ·
            </span>
            Longs &amp; all of Horry County
          </p>
        </div>
      </div>
    </section>
  );
}
