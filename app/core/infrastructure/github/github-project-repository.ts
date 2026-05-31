import { Octokit } from "@octokit/core";

import type { Project } from "~/core/domain/entities/project";
import type { ProjectRepository } from "~/core/domain/repositories/project-repository";
import { toProject } from "~/core/infrastructure/github/github-mapper";

/**
 * {@link ProjectRepository} backed by the GitHub REST API.
 *
 * `token` is optional: without it the client uses the unauthenticated,
 * rate-limited public API (which is enough for a portfolio).
 */
export class GithubProjectRepository implements ProjectRepository {
  private readonly octokit: Octokit;

  constructor(
    private readonly owner: string,
    token?: string,
  ) {
    this.octokit = new Octokit(token ? { auth: token } : {});
  }

  async findByName(name: string): Promise<Project> {
    const { data } = await this.octokit.request("GET /repos/{owner}/{repo}", {
      owner: this.owner,
      repo: name,
      headers: { "X-GitHub-Api-Version": "2022-11-28" },
    });

    return toProject(data);
  }
}
