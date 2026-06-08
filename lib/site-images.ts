// Centralized image configuration for the Rettay Chiropractic website.
// All image paths reference files in /public. Update paths here to swap images site-wide.

export const SITE_IMAGES = {
  // Home page hero background
  hero: "/images/photo_2026-06-08 18.25.38.jpeg",

  // Page hero backgrounds
  heroAbout: "/images/photo_2026-06-08 18.25.55.jpeg",
  heroServices: "/images/photo_2026-06-08 18.25.43.jpeg",
  heroConditions: "/images/photo_2026-06-08 18.25.38.jpeg",
  heroNewPatients: "/images/photo_2026-06-08 18.26.01.jpeg",
  heroTestimonials: "/images/photo_2026-06-08 18.25.43.jpeg",
  heroFaqs: "/images/photo_2026-06-08 18.25.55.jpeg",
  heroContact: "/images/photo_2026-06-08 18.26.01.jpeg",
  heroPolicy: "/images/photo_2026-06-08 18.25.55.jpeg",
  heroServiceDetail: "/images/photo_2026-06-08 18.25.38.jpeg",

  // Doctor / about portrait section — clinic skeleton & anatomy display
  doctor: "/images/skeleton.jpeg",

  // Clinic interior — actual treatment room
  clinic: "/images/photo_2026-06-08 18.25.55.jpeg",

  // Named service image references used by conditions page
  services: {
    backPain: "/images/photo_2026-06-08 18.25.43.jpeg",
    neckPain: "/images/photo_2026-06-08 18.25.38.jpeg",
    sports: "/images/photo_2026-06-08 18.25.43.jpeg",
    adjustment: "/images/photo_2026-06-08 18.25.38.jpeg",
  },
} as const;

// Per-service card images (services grid and service detail pages)
export const SERVICE_IMAGES: Record<string, string> = {
  "chiropractic-adjustments": "/images/photo_2026-06-08 18.25.38.jpeg",
  "spinal-alignment": "/images/photo_2026-06-08 18.25.55.jpeg",
  "sciatica-treatment": "/images/photo_2026-06-08 18.25.43.jpeg",
  "sports-injury-recovery": "/images/photo_2026-06-08 18.25.43.jpeg",
  "neck-back-pain-treatment": "/images/photo_2026-06-08 18.25.38.jpeg",
  "auto-injury-care": "/images/photo_2026-06-08 18.26.01.jpeg",
  "posture-correction": "/images/photo_2026-06-08 18.25.55.jpeg",
  "wellness-care": "/images/photo_2026-06-08 18.26.01.jpeg",
};

export const CONDITION_IMAGES: Record<string, string> = {
  "back-pain": "/images/photo_2026-06-08 18.25.43.jpeg",
  "neck-pain": "/images/photo_2026-06-08 18.25.38.jpeg",
  "sports-injuries": "/images/photo_2026-06-08 18.25.43.jpeg",
  "headaches-migraines": "/images/photo_2026-06-08 18.25.55.jpeg",
  sciatica: "/images/photo_2026-06-08 18.25.43.jpeg",
  "joint-pain": "/images/photo_2026-06-08 18.26.01.jpeg",
  whiplash: "/images/photo_2026-06-08 18.25.38.jpeg",
  "poor-posture": "/images/photo_2026-06-08 18.25.55.jpeg",
};

const TESTIMONIAL_AVATARS = [
  "/images/placeholders/patient-avatar-1.svg",
  "/images/placeholders/patient-avatar-2.svg",
  "/images/placeholders/patient-avatar-3.svg",
  "/images/placeholders/patient-avatar-4.svg",
];

export function getTestimonialAvatar(index: number): string {
  return TESTIMONIAL_AVATARS[index % TESTIMONIAL_AVATARS.length];
}

export type SiteImageKey = keyof typeof SITE_IMAGES;
