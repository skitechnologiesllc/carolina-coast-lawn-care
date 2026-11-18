import Image from "next/image";
import Link from "next/link";
import { heroConfig, siteConfig } from "@/config/site";

export function Hero() {
  const [lineOne, lineTwo] = heroConfig.headline.split(". ");

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
          <p className="text-sm font-medium text-white/75">
            {heroConfig.placeLine}
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-[2.45rem] font-extrabold leading-[1.05] tracking-tight sm:mt-5 sm:text-[3.25rem] lg:text-[3.85rem]">
            <span className="block text-white">{lineOne}.</span>
            <span className="block text-lime">{lineTwo}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
            {heroConfig.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={siteConfig.estimateAnchor}
              className="inline-flex h-12 items-center justify-center rounded-sm bg-lime px-7 text-sm font-bold text-charcoal transition-colors hover:bg-lime-dark hover:text-white"
            >
              Get a Free Estimate
            </Link>
            <Link
              href="/#gallery"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-white/80 px-7 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              View Our Work
            </Link>
          </div>

          <p className="mt-5 text-sm text-white/75">
            <a
              href={siteConfig.phoneHref}
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Call {siteConfig.phone}
            </a>
            <span aria-hidden="true"> · </span>
            <a
              href={siteConfig.smsHref}
              className="font-semibold text-white underline-offset-4 hover:underline"
            >
              Text us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
