import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { testimonialsConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui";

export function Testimonials() {
  const [featured, ...rest] = testimonialsConfig.reviews;
  const secondary = rest;

  return (
    <Section id="testimonials" className="bg-charcoal">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Google reviews"
          headline={testimonialsConfig.headline}
          subheadline={testimonialsConfig.subheadline}
          light
          compact
        />
        <div className="shrink-0 sm:mb-8">
          <GoogleReviewsBadge variant="featured" />
        </div>
      </div>

      <blockquote className="mt-2 max-w-3xl border-l-2 border-forest pl-5 sm:pl-6">
        <p className="font-display text-lg leading-relaxed text-ivory sm:text-xl lg:text-[1.65rem]">
          “{featured.quote}”
        </p>
        <footer className="mt-4 text-sm font-semibold text-ivory/80">
          — {featured.author}
          {featured.source && (
            <span className="font-normal text-ivory/50"> · {featured.source}</span>
          )}
        </footer>
      </blockquote>

      <ul className="mt-8 grid gap-px bg-ivory/10 sm:grid-cols-3">
        {secondary.map((review) => (
          <li
            key={review.author}
            className="bg-charcoal px-0 py-5 sm:px-5 sm:py-6 sm:last:nth-[3n+1]:col-span-3 sm:last:nth-[3n+2]:col-span-2"
          >
            <p className="text-sm leading-relaxed text-ivory/80">
              “{review.quote}”
            </p>
            <p className="mt-3 text-sm font-semibold text-ivory">
              — {review.author}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
