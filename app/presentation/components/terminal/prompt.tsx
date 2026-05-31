import { prompt } from "~/config/site";
import { cn } from "~/lib/cn";

interface PromptProps {
  /** Progressively-typed command text. */
  command: string;
  /** Whether the block cursor should blink here. */
  cursorOn: boolean;
}

/** The `anderson@reges:~$ <cmd>` shell prompt line with a block cursor. */
export function Prompt({ command, cursorOn }: PromptProps) {
  return (
    <div className="prompt">
      <span className="user">{prompt.user}</span>
      <span className="sep">:</span>
      <span className="path">{prompt.path}</span>
      <span className="sign">{prompt.sign}</span>
      <span className="cmd">{command}</span>
      <span className={cn("cur", cursorOn && "on")} aria-hidden />
    </div>
  );
}
