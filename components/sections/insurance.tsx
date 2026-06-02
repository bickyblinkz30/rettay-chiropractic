"use client";

import { AnimatedSection } from "@/components/animated-section";
import { INSURANCE_PROVIDERS, BUSINESS_INFO } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export function InsuranceSection() {
  return (
    <section className="section-padding" aria-labelledby="insurance-title">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Insurance & Payment
          </span>
          <h2
            id="insurance-title"
            className="text-3xl sm:text-4xl font-display font-bold mt-3"
          >
            We Accept Most Major Insurance Plans
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We believe cost should never be a barrier to quality care. We work with most major
            insurance providers and offer flexible payment options.
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {INSURANCE_PROVIDERS.map((provider) => (
            <div
              key={provider}
              className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-border/60 shadow-soft text-sm font-medium text-foreground/80"
            >
              <ShieldCheck className="h-4 w-4 text-emerald-500 shrink-0" />
              {provider}
            </div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-8" delay={0.15}>
          <p className="text-sm text-muted-foreground">
            Don&apos;t see your insurance?{" "}
            <a href={`tel:${BUSINESS_INFO.phoneLink}`} className="text-primary font-medium underline hover:no-underline">
              Call us
            </a>{" "}
            and we&apos;ll verify your coverage.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
