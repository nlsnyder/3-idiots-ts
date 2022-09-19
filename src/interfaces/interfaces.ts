import { IconDefinition as Definition } from "@fortawesome/fontawesome-svg-core";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

export interface NavLink {
  link: string;
  id?: number;
  href: string;
  icon?: Definition;
  classes?: string;
}

export interface FeatureImage {
  id: number;
  icon: IconDefinition;
  alt: string;
  label: string;
}

export interface HostImage {
  src: string;
  alt: string;
}

export interface HostCharacteristics {
  primary: string;
  secondary: string;
  tertiary: string;
}

export interface HostHobbie {
  icon: IconDefinition;
  label: string;
}

export interface HostProfile {
  id: number;
  image: HostImage;
  name: string;
  characteristics: HostCharacteristics;
  hobbies: HostHobbie[];
}

export interface SelectOption {
  name: string;
  value: string;
}
