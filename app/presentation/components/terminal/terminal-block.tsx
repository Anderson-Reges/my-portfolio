import type { ReactNode } from "react";

import { cn } from "~/lib/cn";
import { Prompt } from "./prompt";

/** Per-section state supplied by the terminal session hook. */
export interface BlockState {
  /** Anchor id (e.g. `s0`). */
  id: string;
  /** Progressively-typed command for this block. */
  command: string;
  /** Whether this block's cursor is blinking. */
  cursorOn: boolean;
  /** Whether this block's output has been revealed. */
  revealed: boolean;
  /** Ref callback registering the block with the session hook. */
  registerRef: (el: HTMLElement | null) => void;
}

/** One revealable output line. */
export interface TerminalLine {
  className?: string;
  content: ReactNode;
}

type TerminalBlockProps = BlockState & { lines: TerminalLine[] };

/**
 * A full-height session block: the typed prompt followed by output lines that
 * fade up in sequence once `revealed` flips true (staggered via CSS delays).
 */
export function TerminalBlock({
  id,
  command,
  cursorOn,
  revealed,
  lines,
  registerRef,
}: TerminalBlockProps) {
  return (
    <section id={id} ref={registerRef} className={cn("blk", revealed && "show")}>
      <Prompt command={command} cursorOn={cursorOn} />
      <div className="out">
        {lines.map((line, index) => (
          <div
            key={index}
            className={cn("ln", line.className)}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            {line.content}
          </div>
        ))}
      </div>
    </section>
  );
}
