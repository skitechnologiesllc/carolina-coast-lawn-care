import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export function HeroBackground({
  src,
  alt,
  objectPosition = "center 28%",
}: HeroBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-kenburns absolute inset-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>

      {/* Left-weighted dark gradient keeps white headline readable */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.15))",
        }}
      />
    </div>
  );
}
