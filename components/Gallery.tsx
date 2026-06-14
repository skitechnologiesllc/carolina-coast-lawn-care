import Image from "next/image";
import { galleryConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui";

export function Gallery() {
  return (
    <Section id="gallery" className="bg-light-secondary">
      <ScrollReveal>
        <SectionHeading
          headline={galleryConfig.headline}
          subheadline={galleryConfig.subheadline}
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryConfig.images.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square min-h-[350px] overflow-hidden rounded-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={100}
                unoptimized={true}
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
