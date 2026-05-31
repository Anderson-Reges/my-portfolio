/**
 * Domain entity describing a portfolio project.
 *
 * Pure, framework-agnostic data. Only the fields the UI needs to render a
 * terminal `ls projects/` row are modelled.
 */
export interface Project {
  /** Repository name, e.g. `"blog-api"`. */
  readonly name: string;
  /** Topic tags (tech stack), possibly empty. */
  readonly topics: readonly string[];
  /** Primary language, used as a tech fallback when topics are empty. */
  readonly language: string | null;
  /** Canonical URL of the source repository. */
  readonly repoUrl: string;
  /** Live deployment URL, or `null` when the project is not deployed. */
  readonly homepageUrl: string | null;
}
