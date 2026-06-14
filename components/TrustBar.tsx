import { trustBarConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";

export function TrustBar() {
  return (
    <section className="border-b border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustBarConfig.map((item) => (
              <div key={item.stat} className="text-center">
                <p className="text-xl font-bold text-heading sm:text-2xl">
                  {item.stat}
                </p>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
