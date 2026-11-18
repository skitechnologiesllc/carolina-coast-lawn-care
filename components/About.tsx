import Image from "next/image";
import { aboutConfig } from "@/config/site";
import { EstimateButton, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <Section id="about" className="bg-mist">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -bottom-3 -right-3 hidden h-full w-full border-2 border-lime/50 sm:block"
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
                <p className="absolute bottom-4 left-4 bg-white px-3 py-2 text-xs font-bold tracking-wide text-charcoal sm:bottom-5 sm:left-5">
                  Tyler Malinski · Owner
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delayMs={80}>
            <p className="text-sm font-semibold text-forest">About the owner</p>
            <h2 className="mt-3 max-w-xl font-display text-[1.9rem] font-extrabold tracking-tight text-charcoal sm:text-[2.35rem] lg:text-[2.75rem]">
              <span className="block">Your Property.</span>
              <span className="block text-forest">Our Reputation.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal">
              {aboutConfig.lead}
            </p>
            <div className="mt-4 max-w-xl space-y-3 text-base leading-relaxed text-slate">
              {aboutConfig.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 space-y-3">
              {aboutConfig.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-sm font-semibold text-charcoal sm:text-base"
                >
                  <span
                    className="h-2 w-2 shrink-0 bg-lime"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <EstimateButton className="px-7 py-3.5">
                Request an estimate
              </EstimateButton>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
