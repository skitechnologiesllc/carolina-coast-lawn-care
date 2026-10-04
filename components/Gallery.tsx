import Image from "next/image";
import { galleryConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";

export function Gallery() {
  const featured =
    galleryConfig.images.find((image) => image.featured) ?? galleryConfig.images[0];
  const supporting = galleryConfig.images.filter((image) => image.src !== featured.src);

  return (
    <Section id="gallery" className="bg-charcoal">
      <SectionHeading
        eyebrow="Our work"
        headline={galleryConfig.headline}
        subheadline={galleryConfig.subheadline}
        light
        compact
      />

      <div className="grid gap-3 lg:grid-cols-12 lg:gap-4">
        {/* Featured project */}
        <figure className="group relative aspect-[4/3] overflow-hidden sm:aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
          <Image
            src={featured.src}
            alt={featured.alt}
            fill
            quality={85}
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ objectPosition: featured.objectPosition }}
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent px-4 pb-4 pt-16 sm:px-5">
            <p className="text-sm font-semibold text-ivory sm:text-base">
              {featured.caption}
            </p>
          </figcaption>
        </figure>

        {/* Supporting grid */}
        <div className="grid grid-cols-2 gap-3 lg:col-span-5 lg:grid-cols-2 lg:gap-4">
          {supporting.map((image) => (
            <figure
              key={image.src}
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={80}
                sizes="(max-width: 1024px) 50vw, 22vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                style={{ objectPosition: image.objectPosition }}
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 to-transparent px-3 pb-3 pt-10">
                <p className="text-xs font-medium leading-snug text-ivory/95 sm:text-sm">
                  {image.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {galleryConfig.beforeAfterPairs.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {galleryConfig.beforeAfterPairs.map((pair, index) => (
            <div
              key={`${pair.before.src}-${index}`}
              className="grid grid-cols-2 gap-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pair.before.src}
                  alt={pair.before.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: pair.before.objectPosition }}
                  sizes="50vw"
                />
                <span className="absolute bottom-2 left-2 bg-charcoal/80 px-2 py-0.5 text-xs font-semibold text-ivory">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={pair.after.src}
                  alt={pair.after.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: pair.after.objectPosition }}
                  sizes="50vw"
                />
                <span className="absolute bottom-2 left-2 bg-forest/90 px-2 py-0.5 text-xs font-semibold text-ivory">
                  After
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
