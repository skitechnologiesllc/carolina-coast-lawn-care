import { siteConfig } from "@/config/site";

/** Static inline icons — avoid Lucide SSR/client attribute mismatches */
function PhoneIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function TopContactBar() {
  return (
    <div className="bg-charcoal">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-3 px-4 text-xs text-ivory/90 sm:px-6 sm:text-sm lg:px-8">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <a
            href={siteConfig.phoneHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ivory"
          >
            <PhoneIcon />
            <span>Call {siteConfig.phone}</span>
          </a>
          <a
            href={siteConfig.smsHref}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-ivory"
          >
            <MessageIcon />
            <span>Text us</span>
          </a>
        </div>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex min-w-0 items-center gap-1.5 transition-colors hover:text-ivory"
        >
          <MailIcon />
          <span className="truncate">{siteConfig.email}</span>
        </a>
      </div>
    </div>
  );
}
