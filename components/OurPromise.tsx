import { Check } from "lucide-react";
import { ourPromiseConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui";

export function OurPromise() {
  return (
    <Section className="bg-white">
      <ScrollReveal>
        <SectionHeading
          headline={ourPromiseConfig.headline}
          subheadline={ourPromiseConfig.subheadline}
          centered
        />

        <div className="space-y-12 sm:space-y-16">
          {ourPromiseConfig.promises.map((promise) => (
            <div
              key={promise.number}
              className="flex flex-col gap-4 border-l-4 border-primary pl-6 sm:flex-row sm:items-center sm:gap-10 sm:pl-8"
            >
              <div className="shrink-0">
                <span className="text-5xl font-bold text-primary sm:text-6xl">
                  {promise.number}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-heading sm:text-2xl">
                  {promise.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body sm:text-base">
                  {promise.description}
                </p>
              </div>

              <div className="shrink-0">
                <Check className="h-6 w-6 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
