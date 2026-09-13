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
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-marsh";

  const variants = {
    primary: "bg-marsh text-salt hover:bg-marsh-hover",
    outline: "border-2 border-dock text-dock hover:bg-dock/5",
    white: "bg-salt text-dock hover:bg-light-secondary",
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
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-dock"
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
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
