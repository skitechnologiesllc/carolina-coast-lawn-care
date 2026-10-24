"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageSquare, FileText } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileStickyBar() {
  const pathname = usePathname();
  const estimateHref = pathname?.startsWith("/services/")
    ? siteConfig.estimateHash
    : siteConfig.estimateAnchor;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-charcoal/15 bg-charcoal/95 text-ivory backdrop-blur-sm lg:hidden">
      <nav
        aria-label="Quick contact"
        className="mx-auto grid max-w-lg grid-cols-3 gap-px bg-charcoal/40 pb-[env(safe-area-inset-bottom)]"
      >
        <a
          href={siteConfig.phoneHref}
          className="flex flex-col items-center gap-1 bg-charcoal px-2 py-3 text-[11px] font-semibold uppercase tracking-wide transition-colors hover:bg-forest"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          Call
        </a>
        <a
          href={siteConfig.smsHref}
          className="flex flex-col items-center gap-1 bg-charcoal px-2 py-3 text-[11px] font-semibold uppercase tracking-wide transition-colors hover:bg-forest"
        >
          <MessageSquare className="h-5 w-5" aria-hidden="true" />
          Text
        </a>
        <a
          href={estimateHref}
          className="flex flex-col items-center gap-1 bg-forest px-2 py-3 text-[11px] font-semibold uppercase tracking-wide transition-colors hover:bg-forest-hover"
        >
          <FileText className="h-5 w-5" aria-hidden="true" />
          Estimate
        </a>
      </nav>
    </div>
  );
}
