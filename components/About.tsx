import Image from "next/image";
import { aboutConfig } from "@/config/site";
import { EstimateButton, Section } from "@/components/ui";

export function About() {
  return (
    <Section id="about" className="bg-ivory-deep">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative">
            <div
              className="absolute -left-3 top-6 hidden h-[88%] w-full border border-forest/30 sm:block"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
              <Image
                src="/tyler-lawn.jpg"
                alt="Tyler Malinski, owner of Carolina Coast Lawn Care"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={80}
              />
            </div>
            <p className="absolute bottom-4 left-4 bg-ivory px-3 py-2 text-xs font-semibold tracking-wide text-charcoal sm:bottom-5 sm:left-5">
              Tyler Malinski · Owner
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            About the owner
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl lg:text-[2.6rem]">
            {aboutConfig.headline}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal">
            {aboutConfig.lead}
          </p>
          <div className="mt-4 max-w-xl space-y-3 text-base leading-relaxed text-body">
            {aboutConfig.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-7 max-w-xl divide-y divide-stone/80 border-y border-stone/80">
            {aboutConfig.bullets.map((bullet) => (
              <li key={bullet} className="py-3 text-sm font-medium text-charcoal sm:text-base">
                {bullet}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <EstimateButton className="px-7 py-3.5">Request an estimate</EstimateButton>
          </div>
        </div>
      </div>
    </Section>
  );
}
