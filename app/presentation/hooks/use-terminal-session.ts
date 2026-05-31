import { useCallback, useEffect, useRef, useState } from "react";

const BASE_CPS = 26; // characters typed per second
const TYPE_JITTER_MS = 22;
const REVEAL_PAUSE_MS = 240;

export interface TerminalSession {
  /** Ref callback to register a section block by index. */
  registerBlock: (index: number) => (el: HTMLElement | null) => void;
  /** Per-section progressively-typed command text. */
  typed: string[];
  /** Per-section: whether the output has been revealed. */
  revealed: boolean[];
  /** Index of the section whose cursor is currently blinking, or null. */
  cursorAt: number | null;
  /** Section nearest the viewport centre (drives nav highlight). */
  activeIndex: number;
  /** Whether the scroll hint has been dismissed. */
  hintGone: boolean;
}

function setAt<T>(arr: T[], index: number, value: T): T[] {
  const next = arr.slice();
  next[index] = value;
  return next;
}

/**
 * Drives the scroll-as-terminal-session behaviour: as each section's centre
 * crosses the viewport it types its command character-by-character, then
 * reveals its output. Scroll-position based (not IntersectionObserver) so
 * full-height blocks fire reliably. Honours `prefers-reduced-motion`.
 */
export function useTerminalSession(commands: readonly string[]): TerminalSession {
  const count = commands.length;
  const blockRefs = useRef<Array<HTMLElement | null>>([]);

  const [typed, setTyped] = useState<string[]>(() => commands.map(() => ""));
  const [revealed, setRevealed] = useState<boolean[]>(() => commands.map(() => false));
  const [cursorAt, setCursorAt] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hintGone, setHintGone] = useState(false);

  const registerBlock = useCallback(
    (index: number) => (el: HTMLElement | null) => {
      blockRefs.current[index] = el;
    },
    [],
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = commands.map(() => false);
    const timers: ReturnType<typeof setTimeout>[] = [];
    let raf = 0;
    let ticking = false;

    const charMs = () => {
      const speed =
        parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--speed"),
        ) || 1;
      return 1000 / BASE_CPS / speed;
    };

    const typeCommand = (index: number) => {
      const text = commands[index] ?? "";
      setCursorAt(index);

      if (reduce) {
        setTyped((prev) => setAt(prev, index, text));
        setRevealed((prev) => setAt(prev, index, true));
        return;
      }

      let i = 0;
      const step = () => {
        if (i <= text.length) {
          setTyped((prev) => setAt(prev, index, text.slice(0, i)));
          i += 1;
          timers.push(setTimeout(step, charMs() + Math.random() * TYPE_JITTER_MS));
        } else {
          timers.push(
            setTimeout(() => setRevealed((prev) => setAt(prev, index, true)), REVEAL_PAUSE_MS),
          );
        }
      };
      step();
    };

    const onScroll = () => {
      const vh = window.innerHeight;
      let active = 0;
      blockRefs.current.forEach((block, index) => {
        if (!block) return;
        const rect = block.getBoundingClientRect();
        if (!started[index] && rect.top < vh * 0.58 && rect.bottom > vh * 0.2) {
          started[index] = true;
          typeCommand(index);
        }
        if (rect.top < vh * 0.5 && rect.bottom > vh * 0.5) active = index;
      });
      setActiveIndex(active);
      if (window.scrollY > 60) setHintGone(true);
      ticking = false;
    };

    const onEvent = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(onScroll);
      }
    };

    window.addEventListener("scroll", onEvent, { passive: true });
    window.addEventListener("resize", onEvent);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onEvent);
      window.removeEventListener("resize", onEvent);
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, [commands]);

  return { registerBlock, typed, revealed, cursorAt, activeIndex, hintGone };
}
