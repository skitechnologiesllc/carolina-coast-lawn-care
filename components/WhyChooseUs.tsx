import { whyChooseUsConfig } from "@/config/site";
import { Section } from "@/components/ui";

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-[#eef3ee]">
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            The difference
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
            {whyChooseUsConfig.headline}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-body">
            {whyChooseUsConfig.subheadline}
          </p>
        </div>

        <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
          {whyChooseUsConfig.points.map((point, index) => (
            <li
              key={point.title}
              className="group flex h-full flex-col border border-forest/15 bg-ivory px-5 py-5 transition-colors duration-200 hover:border-forest/40 sm:px-6 sm:py-6"
            >
              <p className="inline-flex h-8 w-8 items-center justify-center bg-forest font-display text-sm font-semibold text-ivory">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold text-charcoal">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body sm:text-[0.95rem]">
                {point.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
