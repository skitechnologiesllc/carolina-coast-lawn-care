import { whyChooseUsConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-forest-hover">
      <SectionHeading
        eyebrow="The difference"
        headline={whyChooseUsConfig.headline}
        subheadline={whyChooseUsConfig.subheadline}
        light
        compact
      />

      <ol className="grid gap-px bg-charcoal/35 sm:grid-cols-2">
        {whyChooseUsConfig.points.map((point, index) => (
          <li
            key={point.title}
            className="bg-forest-hover px-5 py-6 sm:px-7 sm:py-8"
          >
            <p className="font-display text-3xl font-semibold tabular-nums leading-none text-ivory/30 sm:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-display text-xl font-semibold text-ivory">
              {point.title}
            </h3>
            <p className="mt-2 max-w-md text-[0.95rem] leading-relaxed text-ivory/80">
              {point.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
