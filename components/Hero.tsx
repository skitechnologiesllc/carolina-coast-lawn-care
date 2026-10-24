import Image from "next/image";
import Link from "next/link";
import { heroConfig, siteConfig } from "@/config/site";

function headlineLines(headline: string) {
  const parts = headline.split(". ").filter(Boolean);
  return parts.map((part, index) =>
    index < parts.length - 1 && !part.endsWith(".") ? `${part}.` : part
  );
}

export function Hero() {
  const lines = headlineLines(heroConfig.headline);

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
          className="hero-editorial__photo-img object-cover"
        />
      </div>

      <div className="hero-editorial__overlay" aria-hidden="true" />

      <div className="hero-editorial__copy">
        <div className="relative z-10 w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-ivory/80 sm:text-xs sm:tracking-[0.22em]">
            {heroConfig.placeLine}
          </p>

          <h1 className="mt-4 max-w-xl font-display text-[2.35rem] font-semibold leading-[1.02] tracking-tight text-ivory sm:mt-5 sm:text-5xl sm:leading-[1.04] lg:max-w-2xl lg:text-[3.35rem]">
            {lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-ivory/90 sm:text-lg">
            {heroConfig.subheadline}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={siteConfig.estimateAnchor}
              className="inline-flex h-12 items-center justify-center bg-forest px-6 text-sm font-semibold tracking-wide text-ivory transition-colors hover:bg-forest-hover"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/#gallery"
              className="inline-flex h-12 items-center justify-center border border-ivory/80 px-6 text-sm font-semibold tracking-wide text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
            >
              Explore Our Work
            </Link>
          </div>

          <p className="mt-5 text-sm text-ivory/80">
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-ivory underline-offset-4 hover:underline"
            >
              Call {siteConfig.phone}
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href={siteConfig.smsHref}
              className="font-semibold text-ivory underline-offset-4 hover:underline"
            >
              Text us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
