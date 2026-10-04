import { EstimateButton } from "@/components/EstimateButton";

export { EstimateButton };

type SectionHeadingProps = {
  headline: string;
  subheadline?: string;
  centered?: boolean;
  light?: boolean;
  eyebrow?: string;
  compact?: boolean;
};

export function SectionHeading({
  headline,
  subheadline,
  centered = false,
  light = false,
  eyebrow,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`${compact ? "mb-6 md:mb-8" : "mb-8 md:mb-10 lg:mb-12"} ${
        centered ? "text-center" : ""
      }`}
    >
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.18em] sm:mb-3 ${
            light ? "text-ivory/70" : "text-forest"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`mt-3 max-w-2xl text-base leading-relaxed sm:mt-4 sm:text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-ivory/80" : "text-body"}`}
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
    <section id={id} className={`py-10 sm:py-14 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
