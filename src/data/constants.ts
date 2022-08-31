import AlexPicture from "../img/filler-photo-landscape.jpeg";
import LandonPicture from '../img/filler-photo-landon.jpeg';
import { faGamepad, faDumbbell, faBasketball, faMusic } from "@fortawesome/free-solid-svg-icons";
import { HostProfile } from "../interfaces/interfaces";

export const hostProfiles: HostProfile[] = [
  {
    key: 1,
    image: { src: LandonPicture, alt: "One of the hosts, Landon"},
    name: 'Landon',
    characteristics: { primary: "22", secondary: "Madison", tertiary: "UW LaCrosse"},
    hobbies: [{
      icon: faGamepad, label: "Plays 2k and Minecraft"
    }, {
      icon: faBasketball, label: "Milwaukee Bucks fan"
    }, {
      icon: faDumbbell, label: "Weighlifting and fitness"
    }, {
      icon: faMusic, label: "Only listens to rap"
    }]
  },
  {
    key: 2,
    image: { src: LandonPicture, alt: "One of the hosts, Nathan"},
    name: 'Nathan',
    characteristics: { primary: "23", secondary: "Madison", tertiary: "UW Madison"},
    hobbies: [{
      icon: faGamepad, label: "Plays 2k and Minecraft"
    }, {
      icon: faBasketball, label: "Milwaukee Bucks fan"
    }, {
      icon: faDumbbell, label: "Weighlifting and fitness"
    }, {
      icon: faMusic, label: "Only listens to rap"
    }]
  },
  {
    key: 3,
    image: { src: AlexPicture, alt: "One of the hosts, Alex"},
    name: 'Alex',
    characteristics: { primary: "23", secondary: "Madison", tertiary: "Iowa State"},
    hobbies: [{
      icon: faGamepad, label: "Plays 2k and Minecraft"
    }, {
      icon: faBasketball, label: "Milwaukee Bucks fan"
    }, {
      icon: faDumbbell, label: "Weighlifting and fitness"
    }, {
      icon: faMusic, label: "Only listens to rap"
    }]
  }
];