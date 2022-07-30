import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface NavLink {
  link: string,
  id: number,
  href: string,
  icon: IconDefinition
}

export interface FeatureImage {
  id: number,
  img: string,
  alt: string
}