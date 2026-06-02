"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { cn } from "@/lib/utils";
import { getTestimonialAvatar } from "@/lib/site-images";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Florence, KY",
    rating: 5,
    text: "After months of debilitating back pain, Dr. Mikkelson gave me my life back. I can finally play with my kids again without pain. The entire team is professional and caring.",
    condition: "Back Pain Relief",
  },
  {
    name: "James R.",
    location: "Burlington, KY",
    rating: 5,
    text: "I was in a car accident and thought I'd never feel normal again. The auto injury care at Rettay Chiropractic was incredible. They worked with my insurance and got me back on my feet.",
    condition: "Auto Injury Recovery",
  },
  {
    name: "Emily T.",
    location: "Union, KY",
    rating: 5,
    text: "I had chronic headaches for years. Since starting chiropractic care here, my headaches have significantly reduced. I wish I had come sooner! Highly recommend.",
    condition: "Headache Relief",
  },
  {
    name: "Michael D.",
    location: "Florence, KY",
    rating: 5,
    text: "As an athlete, I need my body to perform. Sports injury recovery at Rettay was top-notch. The personalized treatment plan got me back to training faster than I expected.",
    condition: "Sports Medicine",
  },
  {
    name: "Linda K.",
    location: "Erlanger, KY",
    rating: 5,
    text: "Dr. Mikkelson takes the time to explain everything and truly listens to your concerns. The care is personalized and effective. My neck pain is completely gone.",
    condition: "Neck Pain Relief",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "text-accent fill-accent" : "text-muted-foreground/20",
          )}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideTo = useCallback(
    (newIndex: number) => {
      setDirection(newIndex > current ? 1 : -1);
      setCurrent(newIndex);
    },
    [current],
  );

  const next = useCallback(() => {
    slideTo((current + 1) % testimonials.length);
  }, [current, slideTo]);

  const prev = useCallback(() => {
    slideTo((current - 1 + testimonials.length) % testimonials.length);
  }, [current, slideTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <section className="section-padding" aria-labelledby="testimonials-title">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </span>
          <h2 id="testimonials-title" className="text-3xl sm:text-4xl font-display font-bold mt-3">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Hear from patients who found relief at
            Rettay Chiropractic.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border shadow-soft hover:shadow-medium transition-all hover:bg-primary-50 text-foreground/60 hover:text-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white border border-border shadow-soft hover:shadow-medium transition-all hover:bg-primary-50 text-foreground/60 hover:text-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white rounded-2xl border border-border/60 p-8 sm:p-10 shadow-soft"
                >
                  <Quote className="h-8 w-8 text-primary-200 mb-4" />
                  <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-50 overflow-hidden shrink-0">
                        <OptimizedImage
                          src={getTestimonialAvatar(current)}
                          alt={`${t.name} patient review`}
                          className="w-full h-full object-cover"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <StarRating rating={t.rating} />
                        </div>
                        <p className="font-semibold text-sm">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.location}</p>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-primary bg-primary-50 px-3 py-1.5 rounded-full">
                      {t.condition}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => slideTo(i)}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Testimonial ${i + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-primary-200 hover:bg-primary-300",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
