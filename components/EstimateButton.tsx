"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

type EstimateButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light" | "lime";
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
    "inline-flex items-center justify-center rounded-sm px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest";

  const variants = {
    primary: "bg-forest text-white hover:bg-forest-hover",
    lime: "bg-lime text-charcoal hover:bg-lime-dark hover:text-white",
    outline:
      "border border-border bg-transparent text-charcoal hover:border-forest hover:text-forest",
    light: "bg-white text-charcoal hover:bg-mist",
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
