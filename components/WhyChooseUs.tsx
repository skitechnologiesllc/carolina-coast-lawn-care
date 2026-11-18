import {
  CalendarCheck2,
  CheckCircle2,
  MapPinned,
  MessagesSquare,
} from "lucide-react";
import { whyChooseUsConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const icons = {
  calendar: CalendarCheck2,
  message: MessagesSquare,
  map: MapPinned,
  check: CheckCircle2,
};

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-forest">
      <Reveal>
        <SectionHeading
          eyebrow="The difference"
          headline={whyChooseUsConfig.headline}
          subheadline={whyChooseUsConfig.subheadline}
          light
          compact
        />
      </Reveal>

      <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {whyChooseUsConfig.points.map((point, index) => {
          const Icon = icons[point.icon];
          return (
            <li key={point.title}>
              <Reveal delayMs={index * 70}>
                <div className="flex flex-col">
                  <Icon
                    className="h-9 w-9 text-lime"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <h3 className="mt-5 font-display text-xl font-extrabold tracking-tight text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-white/70">
                    {point.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
