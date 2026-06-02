"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Shield, Star, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_INFO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative gradient orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

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
