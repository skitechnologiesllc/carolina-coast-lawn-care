import Image from "next/image";
import Link from "next/link";
import { navLinks, serviceAreaConfig, siteConfig } from "@/config/site";
import { serviceOfferings } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-charcoal pb-24 text-white lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Image
              src="/carolina-coast-logo-light.png"
              alt="Carolina Coast Lawn Care"
              width={400}
              height={80}
              className="h-14 w-auto sm:h-16"
              unoptimized
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Owner-operated lawn care and landscaping based in {siteConfig.location}.{" "}
              {siteConfig.serviceArea}.
            </p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-sm font-bold text-lime">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-bold text-lime">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceOfferings.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-bold text-lime">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={siteConfig.phoneHref} className="transition-colors hover:text-white">
                  Call {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.smsHref} className="transition-colors hover:text-white">
                  Text {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="pt-2 text-white/45">{siteConfig.location}</li>
              <li className="text-white/45">{serviceAreaConfig.areas.join(" · ")}</li>
              <li className="flex gap-4 pt-2">
                <Link
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Facebook
                </Link>
                <Link
                  href={siteConfig.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Google Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between"
          suppressHydrationWarning
        >
          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
          </p>
          <div className="flex flex-col gap-2 sm:items-end">
            <p>Licensed &amp; insured · Longs, SC</p>
            <p>
              Website designed by{" "}
              <a
                href="https://www.skitechco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime/80 transition-colors hover:text-lime"
              >
                Ski Technologies LLC
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
