import IRepo from "./IRepo";

export default interface IRepoProvider {
  repo: IRepo,
  setRepo: React.Dispatch<React.SetStateAction<IRepo>>;
}