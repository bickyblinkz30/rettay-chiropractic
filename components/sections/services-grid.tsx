"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bone,
  ArrowRight,
  ArrowUpDown,
  Activity,
  Heart,
  Zap,
  Car,
  Accessibility,
  Shield,
} from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { SERVICE_IMAGES } from "@/lib/site-images";

const services = [
  {
    icon: Bone,
    title: "Chiropractic Adjustments",
    description:
      "Precise, gentle spinal adjustments to restore alignment and optimize nervous system function.",
    href: "/services/chiropractic-adjustments",
  },
  {
    icon: ArrowUpDown,
    title: "Spinal Alignment",
    description:
      "Comprehensive spinal correction techniques to improve posture and alleviate pain.",
    href: "/services/spinal-alignment",
  },
  {
    icon: Activity,
    title: "Sciatica Treatment",
    description:
      "Targeted relief for sciatic nerve pain with proven, non-invasive treatment methods.",
    href: "/services/sciatica-treatment",
  },
  {
    icon: Zap,
    title: "Sports Injury Recovery",
    description:
      "Accelerate healing and return to peak performance with specialized sports rehabilitation.",
    href: "/services/sports-injury-recovery",
  },
  {
    icon: Heart,
    title: "Neck & Back Pain",
    description:
      "Effective relief for chronic and acute neck and back pain through personalized care plans.",
    href: "/services/neck-back-pain-treatment",
  },
  {
    icon: Car,
    title: "Auto Injury Care",
    description:
      "Expert treatment for whiplash and auto accident injuries to facilitate full recovery.",
    href: "/services/auto-injury-care",
  },
  {
    icon: Accessibility,
    title: "Posture Correction",
    description:
      "Improve your posture and prevent future pain with our posture correction programs.",
    href: "/services/posture-correction",
  },
  {
    icon: Shield,
    title: "Wellness Care",
    description:
      "Maintain optimal health and prevent injuries with ongoing chiropractic wellness care.",
    href: "/services/wellness-care",
  },
];

export function ServicesGridSection() {
  return (
    <section className="section-padding" aria-labelledby="services-title">
      <div className="container-wide">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2
            id="services-title"
            className="text-3xl sm:text-4xl font-display font-bold mt-3"
          >
            Comprehensive Chiropractic Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            From pain relief to wellness care, we offer a full range of chiropractic services
            to help you live your healthiest life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="group block h-full bg-white rounded-2xl border border-border/60 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="relative h-40 bg-primary-50 overflow-hidden">
                    <OptimizedImage
                      src={SERVICE_IMAGES[service.href.replace("/services/", "")] || SERVICE_IMAGES["chiropractic-adjustments"]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      containerClassName="absolute inset-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-50 text-primary mb-3 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-10" delay={0.2}>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
