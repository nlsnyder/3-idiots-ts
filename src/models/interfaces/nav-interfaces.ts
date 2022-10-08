import { IconDefinition as Definition } from "@fortawesome/fontawesome-svg-core";

export interface NavLink {
  link: string;
  id?: number;
  href: string;
  icon?: Definition;
  classes?: string;
}