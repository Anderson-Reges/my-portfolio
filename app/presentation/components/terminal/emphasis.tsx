import { Fragment } from "react";

/** Render text with `*…*` spans turned into bold, no raw HTML injection. */
export function Emphasis({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <b key={index}>{part}</b>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
