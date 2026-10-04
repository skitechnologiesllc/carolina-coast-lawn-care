import Link from "next/link";
import { trustBarConfig } from "@/config/site";

export function TrustBar() {
  return (
    <section aria-label="Trust signals" className="bg-forest">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ivory/15 sm:grid-cols-4 sm:divide-y-0">
        {trustBarConfig.map((item) => {
          const content = (
            <span className="flex h-full items-center justify-center px-3 py-3.5 text-center text-sm font-semibold tracking-wide text-ivory sm:py-4 sm:text-[0.9rem]">
              {item.label}
            </span>
          );

          if (item.href) {
            return (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:bg-forest-hover"
              >
                {content}
              </Link>
            );
          }

          return (
            <div key={item.label} className="bg-forest">
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
