import type { Project } from "~/core/domain/entities/project";
import type { ProjectRepository } from "~/core/domain/repositories/project-repository";

/** Use case: resolve the curated set of featured projects, in order. */
export type ListFeaturedProjects = () => Promise<Project[]>;

/**
 * Build the {@link ListFeaturedProjects} use case.
 *
 * Each repository is fetched independently and resilient to failure: if one
 * lookup fails (rate limit, renamed repo…), it degrades to a minimal project
 * pointing at its repo URL rather than failing the whole list.
 */
export function makeListFeaturedProjects(
  projects: ProjectRepository,
  names: readonly string[],
  repoUrlFor: (name: string) => string,
): ListFeaturedProjects {
  return () =>
    Promise.all(
      names.map((name) =>
        projects.findByName(name).catch(
          (): Project => ({
            name,
            topics: [],
            language: null,
            repoUrl: repoUrlFor(name),
            homepageUrl: null,
          }),
        ),
      ),
    );
}
