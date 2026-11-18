import Link from "next/link";
import { ClipboardCheck, Home, ShieldCheck, Star } from "lucide-react";
import { trustBarConfig } from "@/config/site";

const icons = {
  star: Star,
  shield: ShieldCheck,
  home: Home,
  clipboard: ClipboardCheck,
};

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-9 lg:px-8">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {trustBarConfig.map((item) => {
            const Icon = icons[item.icon];
            const content = (
              <span className="flex flex-col items-center gap-2.5 text-center">
                <Icon className="h-7 w-7 text-forest" strokeWidth={1.75} aria-hidden="true" />
                <span className="font-display text-[0.95rem] font-bold tracking-tight text-charcoal sm:text-base">
                  {item.label}
                </span>
              </span>
            );

            return (
              <li key={item.label} className="flex justify-center">
                {item.href ? (
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="transition-opacity hover:opacity-80"
                  >
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
