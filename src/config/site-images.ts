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
  /** Hero section — chiropractor treating patient, bright clinic, wide shot */
  hero: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80&auto=format&fit=crop",

  /** Doctor portrait — male doctor in white coat, smiling, neutral background */
  doctor: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80&auto=format&fit=crop",

  /** Clinic environment — modern treatment room interior */
  clinic: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",

  /** Secondary clinic / bright medical office interior */
  clinicInterior: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop",

  /** Service-specific images */
  services: {
    /** Spinal adjustment / hands-on chiropractic treatment */
    adjustment: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop",

    /** Spinal alignment / back treatment in clinic */
    spinalAlignment: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop",

    /** Back pain patient / lower back treatment */
    backPain: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop",

    /** Neck pain / cervical treatment consultation */
    neckPain: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop",

    /** Sports injury rehabilitation / athlete treatment */
    sports: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80&auto=format&fit=crop",

    /** Auto injury / whiplash treatment */
    autoInjury: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=800&q=80&auto=format&fit=crop",

    /** Posture correction session */
    posture: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80&auto=format&fit=crop",

    /** Wellness / healthy lifestyle */
    wellness: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80&auto=format&fit=crop",
  },

  /** Condition-specific images */
  conditions: {
    backPain: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop",
    neckPain: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop",
    headaches: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop",
    sciatica: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80&auto=format&fit=crop",
    jointPain: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80&auto=format&fit=crop",
    sportsInjuries: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=800&q=80&auto=format&fit=crop",
    whiplash: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&auto=format&fit=crop",
    poorPosture: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80&auto=format&fit=crop",
  },

  /** Patient testimonial avatars — diverse professional headshots */
  testimonials: {
    patient1: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80&auto=format&fit=crop&crop=face",
    patient2: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80&auto=format&fit=crop&crop=face",
    patient3: "https://images.unsplash.com/photo-1494790108755-2616b612b1e0?w=200&q=80&auto=format&fit=crop&crop=face",
    patient4: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80&auto=format&fit=crop&crop=face",
    patient5: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80&auto=format&fit=crop&crop=face",
    patient6: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80&auto=format&fit=crop&crop=face",
    patient7: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80&auto=format&fit=crop&crop=face",
  },
} as const;

export type SiteImageKey = keyof typeof SITE_IMAGES;

/** Service slug → image path mapping — each service gets a unique photo */
export const SERVICE_IMAGES: Record<string, string> = {
  "chiropractic-adjustments": SITE_IMAGES.services.adjustment,
  "spinal-alignment": SITE_IMAGES.services.spinalAlignment,
  "sciatica-treatment": SITE_IMAGES.services.backPain,
  "sports-injury-recovery": SITE_IMAGES.services.sports,
  "neck-back-pain-treatment": SITE_IMAGES.services.neckPain,
  "auto-injury-care": SITE_IMAGES.services.autoInjury,
  "posture-correction": SITE_IMAGES.services.posture,
  "wellness-care": SITE_IMAGES.services.wellness,
};

/** Condition slug → image path mapping */
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

/** Testimonial avatar rotation — cycles through all 7 diverse headshots */
export function getTestimonialAvatar(index: number): string {
  const avatars = [
    SITE_IMAGES.testimonials.patient1,
    SITE_IMAGES.testimonials.patient2,
    SITE_IMAGES.testimonials.patient3,
    SITE_IMAGES.testimonials.patient4,
    SITE_IMAGES.testimonials.patient5,
    SITE_IMAGES.testimonials.patient6,
    SITE_IMAGES.testimonials.patient7,
  ];
  return avatars[index % avatars.length];
}
