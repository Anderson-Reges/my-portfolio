import type { Project } from "~/core/domain/entities/project";

/**
 * Port (dependency-inversion boundary) for reading projects.
 *
 * The application layer depends on this interface; concrete data sources
 * (GitHub, a CMS, a static file, a test double) live in `infrastructure` and
 * implement it. The domain never imports an implementation.
 */
export interface ProjectRepository {
  /** Resolve a single project by its repository name. */
  findByName(name: string): Promise<Project>;
}
