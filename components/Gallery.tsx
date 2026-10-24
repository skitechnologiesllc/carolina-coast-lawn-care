"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { galleryConfig, siteConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";

type GalleryImage = (typeof galleryConfig.images)[number];

export function Gallery() {
  const featured =
    galleryConfig.images.find((image) => image.featured) ?? galleryConfig.images[0];
  const supporting = galleryConfig.images.filter((image) => image.src !== featured.src);
  const ordered = [featured, ...supporting];
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) =>
          current === null ? current : (current + 1) % ordered.length
        );
      }
      if (event.key === "ArrowLeft") {
        setActive((current) =>
          current === null ? current : (current - 1 + ordered.length) % ordered.length
        );
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, ordered.length]);

  const open = ordered[active ?? -1];

  return (
    <Section id="gallery" className="bg-charcoal">
      <SectionHeading
        eyebrow="Portfolio"
        headline={galleryConfig.headline}
        subheadline={galleryConfig.subheadline}
        light
        compact
      />

      <div className="grid gap-3 lg:grid-cols-12 lg:grid-rows-2 lg:gap-4">
        <GalleryFigure
          image={featured}
          className="aspect-[4/3] sm:aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto lg:min-h-[540px]"
          sizes="(max-width: 1024px) 100vw, 58vw"
          onOpen={() => setActive(0)}
          featured
        />

        <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:col-span-5 lg:row-span-2 lg:h-full lg:gap-4">
          {supporting.map((image) => (
            <GalleryFigure
              key={image.src}
              image={image}
              className="aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-0"
              sizes="(max-width: 1024px) 50vw, 22vw"
              onOpen={() => setActive(ordered.findIndex((item) => item.src === image.src))}
            />
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-ivory/70">
        Select a photo to view it larger.{" "}
        <a
          href={siteConfig.estimateAnchor}
          className="font-semibold text-ivory underline-offset-4 hover:underline"
        >
          Request an estimate
        </a>{" "}
        for work like this.
      </p>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/3] bg-charcoal">
              <Image
                src={open.src}
                alt={open.alt}
                fill
                quality={90}
                sizes="100vw"
                className="object-contain"
                style={{ objectPosition: open.objectPosition }}
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-4 text-ivory">
              <p className="font-display text-lg font-semibold">{open.caption}</p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="border border-ivory/30 px-3 py-2 text-sm"
                  onClick={() =>
                    setActive((current) =>
                      current === null ? current : (current - 1 + ordered.length) % ordered.length
                    )
                  }
                >
                  Previous
                </button>
                <button
                  type="button"
                  className="border border-ivory/30 px-3 py-2 text-sm"
                  onClick={() =>
                    setActive((current) =>
                      current === null ? current : (current + 1) % ordered.length
                    )
                  }
                >
                  Next
                </button>
                <button
                  type="button"
                  className="bg-ivory px-3 py-2 text-sm font-semibold text-charcoal"
                  onClick={() => setActive(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}

function GalleryFigure({
  image,
  className,
  sizes,
  onOpen,
  featured = false,
}: {
  image: GalleryImage;
  className: string;
  sizes: string;
  onOpen: () => void;
  featured?: boolean;
}) {
  return (
    <figure className={`group relative overflow-hidden ${className}`}>
      <button
        type="button"
        className="absolute inset-0 z-10 cursor-zoom-in"
        onClick={onOpen}
        aria-label={`View larger: ${image.caption}`}
      />
      <Image
        src={image.src}
        alt={image.alt}
        fill
        quality={featured ? 85 : 80}
        sizes={sizes}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        style={{ objectPosition: image.objectPosition }}
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent px-4 pb-4 pt-16 sm:px-5">
        <p className={`font-semibold text-ivory ${featured ? "text-base sm:text-lg" : "text-xs sm:text-sm"}`}>
          {image.caption}
        </p>
      </figcaption>
    </figure>
  );
}
