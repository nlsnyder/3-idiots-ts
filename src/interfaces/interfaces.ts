import { IconDefinition as Definition} from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface NavLink {
  link: string,
  id: number,
  href: string,
  icon: Definition
}

export interface FeatureImage {
  id: number,
  icon: IconDefinition,
  alt: string,
  label: string
}