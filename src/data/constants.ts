import AlexPicture from "../img/filler-photo-landscape.jpeg";
import LandonPicture from "../img/filler-photo-landon.jpeg";
import {
  faGamepad,
  faDumbbell,
  faBasketball,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { HostProfile, SelectOption } from "../interfaces/interfaces";

export const hostProfiles: HostProfile[] = [
  {
    id: 1,
    image: { src: LandonPicture, alt: "One of the hosts, Landon" },
    name: "Landon",
    characteristics: {
      primary: "22",
      secondary: "Madison",
      tertiary: "UW LaCrosse",
    },
    hobbies: [
      {
        icon: faGamepad,
        label: "Plays 2k and Minecraft",
      },
      {
        icon: faBasketball,
        label: "Milwaukee Bucks fan",
      },
      {
        icon: faDumbbell,
        label: "Weighlifting and fitness",
      },
      {
        icon: faMusic,
        label: "Only listens to rap",
      },
    ],
  },
  {
    id: 2,
    image: { src: LandonPicture, alt: "One of the hosts, Nathan" },
    name: "Nathan",
    characteristics: {
      primary: "23",
      secondary: "Madison",
      tertiary: "UW Madison",
    },
    hobbies: [
      {
        icon: faGamepad,
        label: "Plays 2k and Minecraft",
      },
      {
        icon: faBasketball,
        label: "Milwaukee Bucks fan",
      },
      {
        icon: faDumbbell,
        label: "Weighlifting and fitness",
      },
      {
        icon: faMusic,
        label: "Only listens to rap",
      },
    ],
  },
  {
    id: 3,
    image: { src: AlexPicture, alt: "One of the hosts, Alex" },
    name: "Alex",
    characteristics: {
      primary: "23",
      secondary: "Madison",
      tertiary: "Iowa State",
    },
    hobbies: [
      {
        icon: faGamepad,
        label: "Plays 2k and Minecraft",
      },
      {
        icon: faBasketball,
        label: "Milwaukee Bucks fan",
      },
      {
        icon: faDumbbell,
        label: "Weighlifting and fitness",
      },
      {
        icon: faMusic,
        label: "Only listens to rap",
      },
    ],
  },
];

export const HeardFromOptions: SelectOption[] = [
  { name: "-- Select --", value: "Default Option" },
  { name: "Spotify", value: "SPO" },
  { name: "Apple Podcasts", value: "AP" },
  { name: "Twitter", value: "TWI" },
  { name: "Web Browser", value: "BROW" },
  { name: "Other", value: "OTH" },
];

export const WhereFromOptions: SelectOption[] = [
  { name: "-- Select --", value: "Default Option" },
  { name: "United States", value: "US" },
  { name: "Canada", value: "CAN" },
  { name: "Mexico", value: "MEX" },
  { name: "United Kingdom", value: "UK" },
  { name: "Germany", value: "GER" },
  { name: "France", value: "FRA" },
  { name: "Spain", value: "SPA" },
  { name: "Other", value: "OTH" },
];
