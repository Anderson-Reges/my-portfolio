/**
 * Smoothly scroll a section into view and sync the URL hash.
 *
 * Done imperatively (rather than relying on a plain `#hash` anchor) so a single
 * click works reliably — a native hash anchor competes with the router's
 * <ScrollRestoration> and can require a second click. Honours reduced motion.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });

  try {
    // Update the hash without triggering the browser's own jump.
    history.replaceState(null, "", `#${id}`);
  } catch {
    /* history unavailable — scrolling already happened */
  }
}
