/**
 * Centralized Image Configuration
 *
 * CANONICAL SOURCE OF TRUTH for all image paths.
 * To replace any image across the entire site, update the path in this file.
 * No component code changes needed.
 *
 * Usage:
 *   import { SITE_IMAGES } from "@/src/config/site-images"
 *
 * For services, use SERVICE_IMAGES with the slug:
 *   import { SERVICE_IMAGES } from "@/src/config/site-images"
 *   src={SERVICE_IMAGES["chiropractic-adjustments"]}
 *
 * For testimonials, use getTestimonialAvatar(index)
 */

export const SITE_IMAGES = {
  /** Hero section background — chiropractic consultation scene */
  hero: "/images/placeholders/hero-chiropractic.svg",

  /** Doctor portrait — "Meet Dr. Lawrence Mikkelson" */
  doctor: "/images/placeholders/doctor-placeholder.svg",

  /** Clinic environment / treatment room */
  clinic: "/images/placeholders/clinic-placeholder.svg",

  /** Service-specific images */
  services: {
    adjustment: "/images/placeholders/service-adjustment.svg",
    backPain: "/images/placeholders/service-back-pain.svg",
    neckPain: "/images/placeholders/service-neck-pain.svg",
    sports: "/images/placeholders/service-sports.svg",
  },

  /** Condition-specific images */
  conditions: {
    backPain: "/images/placeholders/service-back-pain.svg",
    neckPain: "/images/placeholders/service-neck-pain.svg",
    headaches: "/images/placeholders/service-neck-pain.svg",
    sciatica: "/images/placeholders/service-back-pain.svg",
    jointPain: "/images/placeholders/service-adjustment.svg",
    sportsInjuries: "/images/placeholders/service-sports.svg",
    whiplash: "/images/placeholders/service-neck-pain.svg",
    poorPosture: "/images/placeholders/service-adjustment.svg",
  },

  /** Patient testimonial avatars — for review cards */
  testimonials: {
    patient1: "/images/placeholders/patient-avatar-1.svg",
    patient2: "/images/placeholders/patient-avatar-2.svg",
    patient3: "/images/placeholders/patient-avatar-3.svg",
    patient4: "/images/placeholders/patient-avatar-4.svg",
  },
} as const;

export type SiteImageKey = keyof typeof SITE_IMAGES;

/** Service slug to image path mapping */
export const SERVICE_IMAGES: Record<string, string> = {
  "chiropractic-adjustments": SITE_IMAGES.services.adjustment,
  "spinal-alignment": SITE_IMAGES.services.adjustment,
  "sciatica-treatment": SITE_IMAGES.services.backPain,
  "sports-injury-recovery": SITE_IMAGES.services.sports,
  "neck-back-pain-treatment": SITE_IMAGES.services.neckPain,
  "auto-injury-care": SITE_IMAGES.services.backPain,
  "posture-correction": SITE_IMAGES.services.adjustment,
  "wellness-care": SITE_IMAGES.services.sports,
};

/** Condition slug to image path mapping */
export const CONDITION_IMAGES: Record<string, string> = {
  "back-pain": SITE_IMAGES.conditions.backPain,
  "neck-pain": SITE_IMAGES.conditions.neckPain,
  "headaches-migraines": SITE_IMAGES.conditions.headaches,
  sciatica: SITE_IMAGES.conditions.sciatica,
  "joint-pain": SITE_IMAGES.conditions.jointPain,
  "sports-injuries": SITE_IMAGES.conditions.sportsInjuries,
  whiplash: SITE_IMAGES.conditions.whiplash,
  "poor-posture": SITE_IMAGES.conditions.poorPosture,
};

/** Testimonial avatar rotation */
export function getTestimonialAvatar(index: number): string {
  const avatars = [
    SITE_IMAGES.testimonials.patient1,
    SITE_IMAGES.testimonials.patient2,
    SITE_IMAGES.testimonials.patient3,
    SITE_IMAGES.testimonials.patient4,
  ];
  return avatars[index % avatars.length];
}
