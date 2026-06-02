"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Bone,
  Headphones,
  Activity,
  Accessibility,
  Zap,
  Car,
  Heart,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const conditions = [
  { icon: Bone, title: "Back Pain", desc: "Lower back, mid-back, and upper back pain relief" },
  { icon: Heart, title: "Neck Pain", desc: "Chronic and acute neck pain treatment" },
  { icon: Brain, title: "Headaches", desc: "Tension headaches and migraine relief" },
  { icon: Activity, title: "Sciatica", desc: "Sciatic nerve pain treatment and relief" },
  { icon: Accessibility, title: "Joint Pain", desc: "Shoulder, knee, and hip joint pain" },
  { icon: Zap, title: "Sports Injuries", desc: "Sports-related injury recovery" },
  { icon: Car, title: "Whiplash", desc: "Auto accident whiplash treatment" },
  { icon: Headphones, title: "Poor Posture", desc: "Postural correction and ergonomics" },
];

export function ConditionsGridSection() {
  return (
    <section className="section-padding bg-secondary/50" aria-labelledby="conditions-title">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Conditions We Treat
          </span>
          <h2
            id="conditions-title"
            className="text-3xl sm:text-4xl font-display font-bold mt-3"
          >
            Find Relief from Pain
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We treat a wide range of conditions. If you&apos;re suffering, we&apos;re here to help
            you find lasting relief.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {conditions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="group"
              >
                <Link
                  href="/conditions"
                  className="flex flex-col items-center text-center bg-white rounded-2xl border border-border/60 p-6 sm:p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 text-primary mb-4 group-hover:from-primary group-hover:to-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
