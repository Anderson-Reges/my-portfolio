import { makeListFeaturedProjects } from "~/core/application/list-featured-projects";
import { withTtlCache } from "~/core/infrastructure/cache";
import {
  FEATURED_PROJECTS,
  GITHUB_OWNER,
} from "~/core/infrastructure/config/featured-projects";
import { GithubProjectRepository } from "~/core/infrastructure/github/github-project-repository";

/**
 * Composition root — SERVER ONLY (`.server` file, never bundled to the client).
 *
 * The single place that wires concrete implementations. Reading the token from
 * `process.env.GITHUB_TOKEN` (not a `VITE_`-prefixed var) keeps it on the
 * server: it raises the GitHub rate limit without ever reaching the browser.
 */

/** How long a fetched project list is reused before revalidating. */
const PROJECTS_TTL_MS = 10 * 60 * 1000; // 10 minutes

const projectRepository = new GithubProjectRepository(
  GITHUB_OWNER,
  process.env.GITHUB_TOKEN,
);

const loadFeaturedProjects = makeListFeaturedProjects(
  projectRepository,
  FEATURED_PROJECTS,
  (name) => `https://github.com/${GITHUB_OWNER}/${name}`,
);

// Cached at the composition root so the use case stays pure: hitting GitHub at
// most once per TTL per server process instead of on every request.
export const listFeaturedProjects = withTtlCache(
  loadFeaturedProjects,
  PROJECTS_TTL_MS,
);
