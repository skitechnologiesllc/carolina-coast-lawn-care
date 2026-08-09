import { trustBarConfig } from "@/config/site";

export function TrustBar() {
  return (
    <section className="bg-secondary py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4">
          {trustBarConfig.map((item) => (
            <div key={item.stat} className="text-center">
              <p className="text-base font-bold tracking-tight text-white sm:text-lg">
                {item.stat}
              </p>
              <p className="mt-0.5 text-xs text-white/70 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
