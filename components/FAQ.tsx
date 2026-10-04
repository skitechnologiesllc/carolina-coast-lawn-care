import { faqConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/ui";

export function FAQ() {
  return (
    <Section id="faq" className="bg-ivory-deep">
      <JsonLd data={faqJsonLd(faqConfig.items)} />
      <SectionHeading
        eyebrow="FAQ"
        headline={faqConfig.headline}
        subheadline={faqConfig.subheadline}
        compact
      />

      <div className="divide-y divide-border border border-border bg-ivory">
        {faqConfig.items.map((item) => (
          <details key={item.question} className="group">
            <summary className="cursor-pointer list-none px-4 py-4 marker:content-none transition-colors hover:bg-ivory-deep/60 group-open:bg-ivory-deep/40 sm:px-5 [&::-webkit-details-marker]:hidden">
              <span className="flex items-start justify-between gap-4">
                <span className="font-display text-base font-semibold text-charcoal sm:text-lg">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border border-forest/30 text-sm font-semibold text-forest transition-transform group-open:rotate-45 group-open:border-forest group-open:bg-forest group-open:text-ivory"
                >
                  +
                </span>
              </span>
            </summary>
            <p className="border-t border-border/60 px-4 pb-4 pt-3 text-sm leading-relaxed text-body sm:px-5 sm:pb-5 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
