import { Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function TopContactBar() {
  return (
    <div className="h-9 bg-secondary">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href={siteConfig.phoneHref}
          className="flex items-center gap-2 text-xs text-white transition-colors hover:text-primary sm:text-sm"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" />
          <span>{siteConfig.phone}</span>
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-2 text-xs text-white transition-colors hover:text-primary sm:text-sm"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span className="truncate">{siteConfig.email}</span>
        </a>
      </div>
    </div>
  );
}
