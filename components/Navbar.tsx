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
      className={`border-b border-white/10 bg-charcoal transition-shadow duration-200 ${
        scrolled ? "shadow-[0_8px_24px_rgba(0,0,0,0.28)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-2 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-10 block shrink-0"
          aria-label="Carolina Coast Lawn Care home"
        >
          <Image
            src="/carolina-coast-logo-light.png"
            alt="Carolina Coast Lawn Care"
            width={404}
            height={78}
            className="h-11 w-auto sm:h-12 lg:h-[3.35rem]"
            priority
            unoptimized
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.95rem] font-semibold text-white/90 transition-colors hover:text-lime"
            >
              {link.label}
            </Link>
          ))}
          <EstimateButton variant="lime" href={estimateHref} className="px-5 py-2.5">
            Get Free Estimate
          </EstimateButton>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={siteConfig.phoneHref}
            className="px-2.5 py-2 text-sm font-semibold text-lime"
          >
            Call
          </a>
          <button
            type="button"
            className="p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-charcoal px-4 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-3.5 text-lg font-semibold text-white transition-colors hover:text-lime"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="pt-3 text-base font-semibold text-lime"
              onClick={() => setMobileOpen(false)}
            >
              Call {siteConfig.phone}
            </a>
            <a
              href={siteConfig.smsHref}
              className="pb-2 text-base font-semibold text-lime"
              onClick={() => setMobileOpen(false)}
            >
              Text {siteConfig.phone}
            </a>
            <EstimateButton
              variant="lime"
              className="mt-2 w-full text-center"
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
