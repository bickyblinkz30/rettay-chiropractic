"use client";

import { motion } from "framer-motion";
import { Stethoscope, Heart, Zap, Smile } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";

const reasons = [
  {
    icon: Stethoscope,
    title: "Experienced Care",
    description:
      "With 25+ years of experience, Dr. Lawrence Mikkelson provides expert chiropractic care you can trust.",
    color: "from-primary-400 to-primary-600",
  },
  {
    icon: Heart,
    title: "Personalized Treatment",
    description:
      "Every patient receives a customized treatment plan designed for their unique needs and health goals.",
    color: "from-accent to-accent/80",
  },
  {
    icon: Zap,
    title: "Modern Techniques",
    description:
      "We use the latest evidence-based techniques and technology for optimal results and faster recovery.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Smile,
    title: "Friendly Environment",
    description:
      "From the moment you walk in, you'll be treated like family in our welcoming, comfortable office.",
    color: "from-violet-400 to-violet-600",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-secondary/50" aria-labelledby="why-choose-us-title">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2
            id="why-choose-us-title"
            className="text-3xl sm:text-4xl font-display font-bold mt-3"
          >
            Why Florence Trusts Rettay Chiropractic
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We combine experience, compassion, and advanced techniques to deliver the highest
            standard of chiropractic care.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="group relative bg-white rounded-2xl border border-border/60 p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${reason.color} text-white mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-lg font-semibold mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
