import { faqConfig, siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function FAQ() {
  return (
    <Section id="faq" className="bg-mist">
      <JsonLd data={faqJsonLd(faqConfig.items)} />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="FAQ"
              headline={faqConfig.headline}
              subheadline={faqConfig.subheadline}
              compact
            />
            <p className="text-sm leading-relaxed text-slate">
              Prefer to talk it through?{" "}
              <a
                href={siteConfig.phoneHref}
                className="font-semibold text-forest underline-offset-4 hover:underline"
              >
                Call {siteConfig.phone}
              </a>{" "}
              or{" "}
              <a
                href={siteConfig.smsHref}
                className="font-semibold text-forest underline-offset-4 hover:underline"
              >
                text us
              </a>
              .
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-8">
          <Reveal delayMs={60}>
            <div className="divide-y divide-border border-y border-border">
              {faqConfig.items.map((item) => (
                <details key={item.question} className="group">
                  <summary className="cursor-pointer list-none py-4 marker:content-none transition-colors hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-6">
                      <span className="font-display text-lg font-bold tracking-tight text-charcoal group-open:text-forest sm:text-xl">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-lg leading-none text-lime transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <div>
                      <p className="max-w-2xl pb-4 text-sm leading-relaxed text-slate sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
