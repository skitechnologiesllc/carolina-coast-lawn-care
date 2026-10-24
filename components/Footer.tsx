import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceAreaConfig, siteConfig } from "@/config/site";
import { serviceOfferings } from "@/lib/services";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-charcoal pb-24 text-ivory lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Image
              src="/logo.jpg"
              alt="Carolina Coast Lawn Care"
              width={160}
              height={160}
              className="h-16 w-auto bg-ivory p-1.5"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory/70">
              Owner-operated lawn care and landscaping based in {siteConfig.location}.{" "}
              {siteConfig.serviceArea}.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ivory/80 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
              Services
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceOfferings.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-ivory/80 transition-colors hover:text-ivory"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ivory/45">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-ivory/80">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-ivory">
                  Call {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.smsHref} className="transition-colors hover:text-ivory">
                  Text {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-ivory"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-ivory/55">{siteConfig.location}</li>
              <li className="text-ivory/55">{serviceAreaConfig.areas.join(" · ")}</li>
              <li className="flex gap-4 pt-2">
                <Link
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ivory"
                >
                  Facebook
                </Link>
                <Link
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-ivory"
                >
                  Google Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-2 border-t border-ivory/15 pt-6 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between"
          suppressHydrationWarning
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <p>Licensed &amp; insured · Longs, SC</p>
        </div>
      </div>
    </footer>
  );
}
