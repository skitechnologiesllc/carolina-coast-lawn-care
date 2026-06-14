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

        <div className="space-y-6">
          {ourPromiseConfig.promises.map((promise) => (
            <div
              key={promise.number}
              className="group flex flex-col gap-4 rounded-xl border-l-4 border-primary bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center sm:gap-8 sm:p-8"
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}
