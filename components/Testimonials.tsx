import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { testimonialsConfig } from "@/config/site";
import { Section } from "@/components/ui";

export function Testimonials() {
  const [featured, ...rest] = testimonialsConfig.reviews;

  return (
    <Section id="testimonials" className="bg-ivory">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest">
            Google reviews
          </p>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-4xl">
            {testimonialsConfig.headline}
          </h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-body">
            {testimonialsConfig.subheadline}
          </p>
        </div>
        <GoogleReviewsBadge variant="featured" />
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-12 lg:gap-6">
        <blockquote className="border border-stone/80 bg-ivory-deep px-6 py-8 sm:px-8 sm:py-10 lg:col-span-5">
          <p className="font-display text-5xl leading-none text-forest/30" aria-hidden="true">
            “
          </p>
          <p className="mt-2 font-display text-xl leading-relaxed text-charcoal sm:text-2xl">
            {featured.quote}
          </p>
          <footer className="mt-6 text-sm font-semibold text-charcoal">
            {featured.author}
            {featured.source && (
              <span className="mt-1 block font-normal text-muted">{featured.source}</span>
            )}
          </footer>
        </blockquote>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {rest.map((review) => (
            <li key={review.author} className="border border-stone/70 bg-ivory px-5 py-5">
              <p className="font-display text-2xl leading-none text-forest/25" aria-hidden="true">
                “
              </p>
              <p className="mt-2 text-sm leading-relaxed text-body">{review.quote}</p>
              <p className="mt-4 text-sm font-semibold text-charcoal">{review.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
