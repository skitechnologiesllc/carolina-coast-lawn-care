import Image from "next/image";
import { Check } from "lucide-react";
import { aboutConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";

export function About() {
  return (
    <Section id="about" className="relative overflow-hidden bg-ivory-deep">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[linear-gradient(135deg,rgba(27,67,50,0.08)_0%,rgba(196,184,165,0.22)_55%,rgba(235,228,216,0.9)_100%)] lg:block"
        aria-hidden="true"
      />

      <div className="relative grid items-stretch gap-8 lg:grid-cols-2 lg:gap-0">
        <div className="lg:pr-12 lg:py-2">
          <SectionHeading eyebrow="About" headline={aboutConfig.headline} compact />
          <p className="text-base leading-relaxed text-charcoal sm:text-lg">
            {aboutConfig.lead}
          </p>
          <div className="mt-4 space-y-3 text-body leading-relaxed">
            {aboutConfig.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
            {aboutConfig.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-forest" />
                <span className="text-body">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <EstimateButton className="px-8 py-3.5 text-base">
              Request an estimate
            </EstimateButton>
          </div>
        </div>

        <div className="relative -mx-4 overflow-hidden bg-[linear-gradient(160deg,#e3ddd0_0%,#d5d0c2_45%,#c9c4b4_100%)] sm:mx-0 lg:min-h-full">
          <div className="relative aspect-[5/4] sm:aspect-[4/5] lg:aspect-auto lg:min-h-full lg:h-full">
            <Image
              src="/tyler-lawn.jpg"
              alt="Tyler Malinski, owner of Carolina Coast Lawn Care"
              fill
              className="object-cover object-[center_18%] sm:object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={80}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-ivory-deep/25 lg:via-transparent lg:to-transparent"
              aria-hidden="true"
            />
            <p className="absolute bottom-4 left-4 bg-charcoal/85 px-3 py-1.5 text-xs font-semibold tracking-wide text-ivory sm:bottom-5 sm:left-5">
              Tyler Malinski · Owner
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
