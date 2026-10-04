"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { EstimateButton } from "@/components/ui";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const estimateHref = pathname?.startsWith("/services/")
    ? siteConfig.estimateHash
    : siteConfig.estimateAnchor;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`border-b border-border/80 bg-ivory/97 backdrop-blur-sm transition-shadow duration-200 ${
        scrolled ? "shadow-[0_1px_0_rgba(26,28,25,0.06)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6 sm:py-2 lg:px-8 lg:py-2.5">
        <Link href="/" className="shrink-0" aria-label="Carolina Coast Lawn Care home">
          <Image
            src="/logo.jpg"
            alt="Carolina Coast Lawn Care"
            width={320}
            height={104}
            className="h-[3.75rem] w-auto sm:h-[4.25rem] lg:h-[4.75rem]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.9rem] font-medium tracking-wide text-charcoal transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
          <EstimateButton href={estimateHref} className="px-5 py-2.5">
            Get Free Estimate
          </EstimateButton>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={siteConfig.phoneHref}
            className="px-2.5 py-2 text-sm font-semibold text-forest"
          >
            Call
          </a>
          <a
            href={siteConfig.smsHref}
            className="hidden px-2.5 py-2 text-sm font-semibold text-forest sm:inline"
          >
            Text
          </a>
          <button
            type="button"
            className="p-2 text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-ivory px-4 py-5 lg:hidden">
          <nav className="flex flex-col gap-3.5" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.smsHref}
              className="text-base font-medium text-charcoal"
              onClick={() => setMobileOpen(false)}
            >
              Text {siteConfig.phone}
            </a>
            <EstimateButton
              className="mt-1 w-full text-center"
              href={estimateHref}
              onNavigate={() => setMobileOpen(false)}
            >
              Get Free Estimate
            </EstimateButton>
          </nav>
        </div>
      )}
    </header>
  );
}
