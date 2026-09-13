import Image from "next/image";
import { Check } from "lucide-react";
import { aboutConfig } from "@/config/site";
import { EstimateButton, Section, SectionHeading } from "@/components/ui";

export function About() {
  return (
    <Section id="about" className="bg-salt">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading headline={aboutConfig.headline} />

          <div className="space-y-4 text-body leading-relaxed">
            {aboutConfig.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 space-y-3">
            {aboutConfig.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span className="text-body">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <EstimateButton className="px-8 py-4 text-base">
              Request an estimate
            </EstimateButton>
          </div>
        </div>

        {/* Fixed aspect + slight zoom so face/posture lead, not belt/pants */}
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden lg:mx-0 lg:max-w-none">
          <Image
            src="/tyler-lawn.jpg"
            alt="Tyler Malinski - Owner of Carolina Coast Lawn Care"
            fill
            className="origin-top object-cover object-top scale-[1.28]"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
        </div>
      </div>
    </Section>
  );
}
