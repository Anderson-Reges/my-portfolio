import { useEffect } from "react";

import { scrollToSection } from "~/presentation/lib/scroll-to-section";

/**
 * Keyboard shortcuts: press `1`–`N` to jump to the matching section, mirroring
 * the right-side index nav (1 → whoami, 2 → stack, …). Ignored while typing in
 * a field or with a modifier held.
 */
export function useSectionShortcuts(ids: readonly string[]): void {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }

      const position = Number(event.key);
      if (!Number.isInteger(position) || position < 1 || position > ids.length) {
        return;
      }

      event.preventDefault();
      scrollToSection(ids[position - 1]);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ids]);
}
