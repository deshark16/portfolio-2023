import { StaticImageData } from "next/image";

export type SocialList = {
  id: number;
  alt: string;
  icon: StaticImageData;
  link: string;
}