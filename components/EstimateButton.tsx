"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

type EstimateButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  className?: string;
  href?: string;
  onNavigate?: () => void;
};

export function EstimateButton({
  children,
  variant = "primary",
  className = "",
  href = siteConfig.estimateAnchor,
  onNavigate,
}: EstimateButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

  const variants = {
    primary: "bg-forest text-ivory hover:bg-forest-hover",
    outline:
      "border border-charcoal/30 bg-transparent text-charcoal hover:border-forest hover:text-forest",
    light: "bg-ivory text-charcoal hover:bg-ivory-deep",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onNavigate}
    >
      {children}
    </Link>
  );
}
