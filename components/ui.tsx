import { EstimateButton } from "@/components/EstimateButton";

export { EstimateButton };

type SectionHeadingProps = {
  headline: string;
  subheadline?: string;
  centered?: boolean;
  light?: boolean;
  eyebrow?: string;
  accentHeadline?: boolean;
  compact?: boolean;
};

export function SectionHeading({
  headline,
  subheadline,
  centered = false,
  light = false,
  eyebrow,
  accentHeadline = false,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`${compact ? "mb-8 md:mb-10" : "mb-10 md:mb-12 lg:mb-14"} ${
        centered ? "text-center" : ""
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold ${
            light ? "text-lime" : "text-forest"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-[1.9rem] font-extrabold tracking-tight text-balance sm:text-[2.35rem] lg:text-[2.75rem] ${
          light
            ? "text-white"
            : accentHeadline
              ? "text-forest"
              : "text-charcoal"
        }`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-slate"}`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 py-14 sm:py-16 lg:py-24 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
