import { profile } from "~/config/site";

/** Fixed top-left brand mark, e.g. `~/anderson-reges` with an accented `~`. */
export function Brand() {
  const [head, ...rest] = profile.brand;
  return (
    <div className="brand">
      <span className="ac">{head}</span>
      {rest.join("")}
    </div>
  );
}
