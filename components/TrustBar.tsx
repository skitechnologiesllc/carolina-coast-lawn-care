import Link from "next/link";
import { trustBarConfig } from "@/config/site";

const details = ["Verified rating", "For your protection", "Longs, SC", "No obligation"];

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="relative z-10 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:-mt-16 lg:px-8">
        <ul className="grid grid-cols-2 divide-x divide-y divide-stone/70 overflow-hidden border border-stone/80 bg-ivory shadow-[0_18px_50px_rgba(26,28,25,0.08)] lg:grid-cols-4 lg:divide-y-0">
          {trustBarConfig.map((item, index) => {
            const inner = (
              <span className="flex h-full flex-col justify-center gap-1 px-4 py-4 sm:px-6 sm:py-5">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-forest">
                  {details[index]}
                </span>
                <span className="font-display text-base font-semibold text-charcoal sm:text-lg">
                  {item.label}
                </span>
              </span>
            );

            return (
              <li key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="block h-full transition-colors hover:bg-ivory-deep"
                  >
                    {inner}
                  </Link>
                ) : (
                  inner
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
