/**
 * HeroOverlay — the single source of truth for hero section overlays.
 *
 * Renders the exact two-layer gradient treatment used by the Home page hero so
 * every hero across the site shares identical overlay color, opacity, gradient
 * direction, and text contrast. Place directly after the hero background image
 * and before the hero content (which should sit at `relative z-10`).
 *
 * Do not add per-page overlay variations — adjust here to update every hero.
 */
export function HeroOverlay() {
  return (
    <>
      {/* Primary directional overlay — anchors text legibility on the left */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/92 to-primary-800/80" />
      {/* Vertical lift — deepens the base for stronger visual hierarchy */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
    </>
  );
}
