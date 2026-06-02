"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { AppointmentForm } from "@/components/forms/appointment-form";
import { BUSINESS_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="section-padding bg-secondary/50" aria-labelledby="cta-title">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Info */}
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Take the First Step
            </span>
            <h2
              id="cta-title"
              className="text-3xl sm:text-4xl font-display font-bold mt-3"
            >
              Ready to Start Your Journey to Better Health?
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              You don&apos;t have to live with pain. Schedule an appointment today and discover
              how chiropractic care can transform your life.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border/60">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us directly</p>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneLink}`}
                    className="text-lg font-semibold hover:text-primary transition-colors"
                  >
                    {BUSINESS_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border/60">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office hours</p>
                  <p className="text-base font-semibold">
                    Mon–Thu: {BUSINESS_INFO.hours.monday} &bull; Fri: {BUSINESS_INFO.hours.friday}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Visit Our Office</Link>
              </Button>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-soft">
              <h3 className="text-xl font-semibold mb-6">Request an Appointment</h3>
              <AppointmentForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
