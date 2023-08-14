export default interface IProjectDetails {
  name: string,
  size: number,
  topics?: Array<string>,
  updated_at: string,
  created_at: string,
  repo_url: string,
  deploy_url: string | null,
}