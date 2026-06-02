"use client";

import { AnimatedSection, AnimatedCounter } from "@/components/animated-section";
import { TRUST_STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden" aria-label="Practice statistics">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-800" />
      <div className="absolute inset-0 bg-dots opacity-10" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {TRUST_STATS.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              className="text-center"
              delay={index * 0.1}
              as="div"
            >
              <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-2">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  decimals={"decimals" in stat ? stat.decimals ?? 0 : 0}
                />
              </div>
              <p className="text-primary-200 text-sm sm:text-base font-medium">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
