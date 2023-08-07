import { StaticImageData } from "next/image";

export default interface ICard {
  thumb: StaticImageData,
  name: string,
  stacks: Array<string>
}