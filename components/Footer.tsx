import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-secondary py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Image
          src="/logo.jpg"
          alt="Carolina Coast Lawn Care"
          width={150}
          height={50}
          className="h-[50px] w-auto"
        />

        <div className="my-8 h-px w-full bg-primary" />

        <div className="flex flex-col gap-4 text-sm text-gray-300 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-6">
          <span>
            {siteConfig.location} — {siteConfig.serviceArea}
          </span>
          <a
            href={siteConfig.phoneHref}
            className="transition-colors hover:text-primary"
          >
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="transition-colors hover:text-primary"
          >
            {siteConfig.email}
          </a>
          <Link
            href={siteConfig.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Facebook
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-gray-500 sm:text-left">
          Copyright 2026 Carolina Coast Lawn Care
        </p>
      </div>
    </footer>
  );
}
