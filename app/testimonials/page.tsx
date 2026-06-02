import { generateMetadata } from "@/lib/seo";
import { SchemaOrg } from "@/components/schema-org";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/sections/testimonials";
import Link from "next/link";
import { Star, Quote, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "@/lib/constants";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { getTestimonialAvatar } from "@/lib/site-images";

export const metadata = generateMetadata({
  title: "Testimonials",
  description: "Read reviews from patients who found relief at Rettay Chiropractic in Florence, KY. See why our patients trust us for their chiropractic care.",
});

const allTestimonials = [
  {
    name: "Sarah M.",
    location: "Florence, KY",
    rating: 5,
    text: "After months of debilitating back pain, Dr. Mikkelson gave me my life back. I can finally play with my kids again without pain. The entire team is professional and caring.",
    condition: "Back Pain Relief",
    date: "March 2025",
  },
  {
    name: "James R.",
    location: "Burlington, KY",
    rating: 5,
    text: "I was in a car accident and thought I'd never feel normal again. The auto injury care at Rettay Chiropractic was incredible. They worked with my insurance and got me back on my feet.",
    condition: "Auto Injury Recovery",
    date: "February 2025",
  },
  {
    name: "Emily T.",
    location: "Union, KY",
    rating: 5,
    text: "I had chronic headaches for years. Since starting chiropractic care here, my headaches have significantly reduced. I wish I had come sooner! Highly recommend.",
    condition: "Headache Relief",
    date: "January 2025",
  },
  {
    name: "Michael D.",
    location: "Florence, KY",
    rating: 5,
    text: "As an athlete, I need my body to perform. Sports injury recovery at Rettay was top-notch. The personalized treatment plan got me back to training faster than I expected.",
    condition: "Sports Medicine",
    date: "December 2024",
  },
  {
    name: "Linda K.",
    location: "Erlanger, KY",
    rating: 5,
    text: "Dr. Mikkelson takes the time to explain everything and truly listens to your concerns. The care is personalized and effective. My neck pain is completely gone.",
    condition: "Neck Pain Relief",
    date: "November 2024",
  },
  {
    name: "Robert P.",
    location: "Florence, KY",
    rating: 5,
    text: "I've been seeing Dr. Mikkelson for wellness care for over a year now. The difference in my overall health and energy levels is remarkable. I recommend him to everyone I know.",
    condition: "Wellness Care",
    date: "October 2024",
  },
  {
    name: "Patricia W.",
    location: "Walton, KY",
    rating: 5,
    text: "I was skeptical about chiropractic care at first, but Dr. Mikkelson explained everything thoroughly. My sciatica pain has dramatically improved. So grateful!",
    condition: "Sciatica Treatment",
    date: "September 2024",
  },
  {
    name: "David L.",
    location: "Florence, KY",
    rating: 5,
    text: "The posture correction program changed my life. I no longer have constant shoulder pain from sitting at a desk all day. Professional, effective, and caring team.",
    condition: "Posture Correction",
    date: "August 2024",
  },
  {
    name: "Amanda J.",
    location: "Independence, KY",
    rating: 5,
    text: "From the moment I walked in, I felt welcomed. The office is clean and calming. Dr. Mikkelson is knowledgeable and genuinely cares about his patients' well-being.",
    condition: "General Care",
    date: "July 2024",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-accent fill-accent" : "text-muted-foreground/20"}`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden" aria-labelledby="testimonials-hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Patient Reviews
            </span>
            <h1 id="testimonials-hero-title" className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mt-3">
              What Our Patients Say
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-primary-200 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Read reviews from real patients who have
              experienced relief and recovery at Rettay Chiropractic.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2 text-white/90">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-semibold">{BUSINESS_INFO.rating}</span>
                <span className="text-primary-300">({BUSINESS_INFO.reviewCount} reviews)</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding" aria-labelledby="reviews-title">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allTestimonials.map((review, index) => (
              <AnimatedSection
                key={review.name}
                as="div"
                delay={index * 0.05}
                className="bg-white rounded-2xl border border-border/60 p-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <Quote className="h-6 w-6 text-primary-200 mb-3" />
                <StarRating rating={review.rating} />
                <p className="mt-4 text-sm text-foreground/85 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary-50 overflow-hidden shrink-0">
                      <OptimizedImage
                        src={getTestimonialAvatar(index)}
                        alt={`${review.name} patient avatar`}
                        className="w-full h-full object-cover"
                        width={36}
                        height={36}
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary-50 px-2.5 py-1 rounded-full">
                    {review.condition}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-8 sm:p-10 border border-primary-100/60">
              <MessageSquare className="h-8 w-8 text-primary mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-3">
                Share Your Experience
              </h2>
              <p className="text-primary-700 mb-6 max-w-md mx-auto">
                We&apos;d love to hear about your experience at Rettay Chiropractic. Your review
                helps others find the care they need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <a
                    href={BUSINESS_INFO.social.google}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leave a Google Review
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <TestimonialsSection />
      <SchemaOrg type="LocalBusiness" />
    </>
  );
}
