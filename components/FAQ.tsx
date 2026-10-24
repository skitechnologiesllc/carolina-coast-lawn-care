import { faqConfig, siteConfig } from "@/config/site";
import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { Section } from "@/components/ui";

export function FAQ() {
  return (
    <Section id="faq" className="bg-ivory-deep">
      <JsonLd data={faqJsonLd(faqConfig.items)} />
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
            {faqConfig.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            {faqConfig.subheadline}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-body">
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
        </div>

        <div className="divide-y divide-stone/80 border-y border-stone/80 lg:col-span-8">
          {faqConfig.items.map((item) => (
            <details key={item.question} className="group">
              <summary className="cursor-pointer list-none py-5 marker:content-none transition-colors hover:text-forest [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-6">
                  <span className="font-display text-lg font-semibold text-charcoal group-open:text-forest sm:text-xl">
                    {item.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 text-lg leading-none text-forest transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <div className="faq-answer">
                <div>
                  <p className="max-w-2xl pb-5 text-sm leading-relaxed text-body sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
