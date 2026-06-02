/**
 * Centralized Image Configuration
 *
 * Re-exports from the canonical source at src/config/site-images.ts
 * This file maintained for backward compatibility with existing imports.
 *
 * To replace any image across the entire site, update the path in:
 *   src/config/site-images.ts
 *
 * No component code changes needed.
 */

export {
  SITE_IMAGES,
  SERVICE_IMAGES,
  CONDITION_IMAGES,
  getTestimonialAvatar,
} from "@/src/config/site-images";

export type { SiteImageKey } from "@/src/config/site-images";
