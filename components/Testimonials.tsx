import { Quote, Star } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/GoogleReviewsBadge";
import { testimonialsConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section, SectionHeading } from "@/components/ui";

function TestimonialCard({
  quote,
  author,
  source,
}: {
  quote: string;
  author: string;
  source?: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <Quote className="mb-4 h-8 w-8 text-primary" />
      <div className="mb-4 flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
        ))}
      </div>
      <p className="flex-1 text-sm leading-relaxed text-body">&ldquo;{quote}&rdquo;</p>
      <p className="mt-4 text-sm font-semibold text-heading">
        — {author}
        {source && (
          <span className="font-normal text-muted">, {source}</span>
        )}
      </p>
    </div>
  );
}

export function Testimonials() {
  const [firstRow, secondRow, fifth] = [
    testimonialsConfig.reviews.slice(0, 2),
    testimonialsConfig.reviews.slice(2, 4),
    testimonialsConfig.reviews[4],
  ];

  return (
    <Section id="testimonials" className="bg-white">
      <ScrollReveal>
        <SectionHeading headline={testimonialsConfig.headline} centered />

        <div className="mb-10 flex justify-center">
          <GoogleReviewsBadge variant="featured" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {firstRow.map((review) => (
            <TestimonialCard key={review.author} {...review} />
          ))}
          {secondRow.map((review) => (
            <TestimonialCard key={review.author} {...review} />
          ))}
        </div>

        {fifth && (
          <div className="mt-6 flex justify-center">
            <div className="w-full md:max-w-[calc(50%-0.75rem)]">
              <TestimonialCard {...fifth} />
            </div>
          </div>
        )}
      </ScrollReveal>
    </Section>
  );
}
