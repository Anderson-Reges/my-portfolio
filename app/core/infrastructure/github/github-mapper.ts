import type { Project } from "~/core/domain/entities/project";

/** The subset of the GitHub "get a repository" response we depend on. */
export interface GithubRepoResponse {
  name: string;
  topics?: string[];
  language: string | null;
  html_url: string;
  homepage: string | null;
}

/** Translate a raw GitHub repository payload into a domain {@link Project}. */
export function toProject(data: GithubRepoResponse): Project {
  return {
    name: data.name,
    topics: data.topics ?? [],
    language: data.language,
    repoUrl: data.html_url,
    homepageUrl: data.homepage ? data.homepage : null,
  };
}
