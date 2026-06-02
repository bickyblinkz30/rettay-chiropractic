"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Shield, Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { BUSINESS_INFO } from "@/lib/constants";
import { SITE_IMAGES } from "@/lib/site-images";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Hero background image */}
      <OptimizedImage
        src={SITE_IMAGES.hero}
        alt="Chiropractor consulting with patient in modern clinic"
        fill
        priority
        className="object-cover object-center"
        containerClassName="absolute inset-0"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/92 to-primary-800/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />

      <div className="container-wide relative z-10 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Trust indicator chip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
          >
            <Star className="h-4 w-4 text-accent fill-accent" />
            <span className="text-sm text-white/90 font-medium">
              {BUSINESS_INFO.rating} Stars &bull; {BUSINESS_INFO.reviewCount}+ Reviews
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight"
          >
            Helping You Move Better, Feel Better,{" "}
            <span className="text-accent">and Live Pain-Free</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 text-lg sm:text-xl text-primary-200 max-w-xl leading-relaxed"
          >
            Professional chiropractic care tailored to your needs. Experience relief and recovery
            with Florence&apos;s trusted chiropractor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Button size="xl" variant="accent" asChild>
              <Link href="/contact">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Appointment
              </Link>
            </Button>
            <Button
              size="xl"
              variant="outline-light"
              asChild
            >
              <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                <Phone className="h-5 w-5 mr-2" />
                Call Now: {BUSINESS_INFO.phoneFormatted}
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-sm text-primary-300"
          >
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary-300" />
              {BUSINESS_INFO.yearsExperience}+ Years Experience
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary-300" />
              Evidence-Based Care
            </span>
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary-300" />
              Most Insurance Accepted
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-6 w-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
