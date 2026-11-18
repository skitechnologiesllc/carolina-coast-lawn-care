import { Star } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { testimonialsConfig, siteConfig } from "@/config/site";
import { Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

function StarRow() {
  return (
    <div className="flex gap-0.5" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className="h-4 w-4 fill-[#FBBC04] text-[#FBBC04]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  const featured = testimonialsConfig.reviews.slice(0, 3);
  const hasMore = testimonialsConfig.reviews.length > 3;

  return (
    <Section id="testimonials" className="bg-white">
      <Reveal>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-forest">Google reviews</p>
            <h2 className="mt-3 font-display text-[1.9rem] font-extrabold tracking-tight text-charcoal sm:text-[2.35rem]">
              {testimonialsConfig.headline}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
              {testimonialsConfig.subheadline}
            </p>
          </div>
          <GoogleReviewsBadge variant="featured" />
        </div>
      </Reveal>

      <ul className="mt-10 grid gap-5 lg:grid-cols-3 lg:gap-6">
        {featured.map((review, index) => (
          <li key={review.author}>
            <Reveal delayMs={index * 70}>
              <article className="flex h-full flex-col bg-mist p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <StarRow />
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate">
                    Google
                  </span>
                </div>
                <blockquote className="mt-5 flex-1">
                  <p className="text-[0.95rem] leading-relaxed text-charcoal">
                    “{review.quote}”
                  </p>
                </blockquote>
                <footer className="mt-6 border-t border-border pt-4">
                  <p className="font-display text-sm font-bold text-charcoal">
                    {review.author}
                  </p>
                  {review.source && (
                    <p className="mt-0.5 text-sm text-slate">{review.source}</p>
                  )}
                </footer>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-8">
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-forest underline-offset-4 hover:underline"
          >
            Read more reviews on Google →
          </a>
        </div>
      )}
    </Section>
  );
}
