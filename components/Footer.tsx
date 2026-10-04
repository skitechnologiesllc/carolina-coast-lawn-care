import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";
import { serviceOfferings } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal pb-20 text-ivory lg:pb-12">
      <div className="mx-auto max-w-7xl px-4 py-11 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Image
              src="/logo.jpg"
              alt="Carolina Coast Lawn Care"
              width={160}
              height={54}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">
              Owner-operated lawn care and landscaping based in{" "}
              {siteConfig.location}. {siteConfig.serviceArea}.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
              Explore
            </p>
            <ul className="mt-3.5 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/80 hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
              Services
            </p>
            <ul className="mt-3.5 space-y-2 text-sm">
              {serviceOfferings.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-ivory/80 hover:text-ivory"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
              Contact
            </p>
            <ul className="mt-3.5 space-y-2 text-sm text-ivory/80">
              <li>
                <a href={siteConfig.phoneHref} className="hover:text-ivory">
                  Call {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.smsHref} className="hover:text-ivory">
                  Text {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-ivory">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <Link
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory"
                >
                  Google Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 border-t border-ivory/15 pt-6 text-xs text-ivory/45"
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
