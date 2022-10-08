import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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