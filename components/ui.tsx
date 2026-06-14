import Link from "next/link";
import { siteConfig } from "@/config/site";

type EstimateButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "white";
  className?: string;
};

export function EstimateButton({
  children,
  variant = "primary",
  className = "",
}: EstimateButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover",
    outline: "border-2 border-white text-white hover:bg-white/10",
    white: "bg-white text-secondary hover:bg-light-secondary",
  };

  return (
    <Link
      href={siteConfig.estimateAnchor}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

type SectionHeadingProps = {
  headline: string;
  subheadline?: string;
  centered?: boolean;
  light?: boolean;
};

export function SectionHeading({
  headline,
  subheadline,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-heading"
        }`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`mt-4 max-w-2xl text-lg ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary" : "text-body"}`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
