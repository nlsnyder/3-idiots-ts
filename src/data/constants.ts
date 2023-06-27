import AlexPicture from "../assets/img/home/hosts/alex-profile-photo.png";
import LandonPicture from "../assets/img/home/hosts/landon-profile-photo.png";
import NathanPicture from '../assets/img/home/hosts/nathan-profile-photo.png';
import {
  faDumbbell,
  faBasketball,
  faMusic,
  faCompactDisc,
  faBaseball,
  faLandmarkDome,
  faRecordVinyl,
  faRoad,
  faGhost,
  faDog,
} from "@fortawesome/free-solid-svg-icons";
import { HostProfile } from "../models/interfaces/host-interfaces";
import { SelectOption } from "../models/interfaces/form-interfaces";
import { NavLink } from "../models/interfaces/nav-interfaces";
import {
  faHeadphones,
  faUserGroup,
  faEnvelopeOpenText
} from "@fortawesome/free-solid-svg-icons";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";

export const hostProfiles: HostProfile[] = [
  {
    id: 1,
    image: { src: LandonPicture, alt: "One of the hosts, Landon" },
    name: "Landon",
    characteristics: {
      primary: "23",
      secondary: "Madison",
      tertiary: "UW LaCrosse",
    },
    hobbies: [
      {
        icon: faTwitch,
        label: "Streams on Twitch",
      },
      {
        icon: faBaseball,
        label: "Huge suporter of Milwaukee Brewers",
      },
      {
        icon: faDumbbell,
        label: "Picks up heavy items for a living",
      },
      {
        icon: faRecordVinyl,
        label: "Olivia Rodrigo's biggest fan",
      },
    ],
  },
  {
    id: 2,
    image: { src: AlexPicture, alt: "One of the hosts, Alex" },
    name: "Alex",
    characteristics: {
      primary: "24",
      secondary: "Madison",
      tertiary: "Iowa State",
    },
    hobbies: [
      {
        icon: faCompactDisc,
        label: "Professional beat producer",
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
    image: { src: NathanPicture, alt: "One of the hosts, Nathan" },
    name: "Nathan",
    characteristics: {
      primary: "24",
      secondary: "Madison",
      tertiary: "UW Madison",
    },
    hobbies: [
      {
        icon: faLandmarkDome,
        label: "Town Hall 14 in Clash of Clans",
      },
      {
        icon: faRoad,
        label: "Designs roads as civil engineer",
      },
      {
        icon: faGhost,
        label: "Easily frightened by scary movies",
      },
      {
        icon: faDog,
        label: "Co-owner of Mabel the Golden Doodle",
      },
    ],
  }
];

export const HeardFromOptions: SelectOption[] = [
  { name: "Spotify", value: "SPOTIFY" },
  { name: "Apple Podcasts", value: "APPLE PODCASTS" },
  { name: "Twitter", value: "TWITTER" },
  { name: "Web Browser", value: "WEB BROWSER" },
  { name: "Other", value: "OTHER" },
];

export const WhereFromOptions: SelectOption[] = [
  { name: "United States", value: "US" },
  { name: "Canada", value: "CAN" },
  { name: "Mexico", value: "MEX" },
  { name: "United Kingdom", value: "UK" },
  { name: "Germany", value: "GER" },
  { name: "France", value: "FRA" },
  { name: "Spain", value: "SPA" },
  { name: "Other", value: "OTH" },
];

export const mobileNavLinks: NavLink[] = [
  { link: "Listen Now", id: 1, href: "#listen-now", icon: faHeadphones },
  { link: "The Hosts", id: 2, href: "#meet-the-hosts", icon: faUserGroup },
  { link: "Contact Us", id: 3, href: "#contact-us", icon: faEnvelopeOpenText }
];

export const desktopNavLinks: NavLink[] = [
  { link: "Listen Now", id: 100, href: "#listen-now" },
  { link: "The Hosts", id: 101, href: "#meet-the-hosts" },
  { link: "Contact Us", id: 102, href: "#contact-us" },
];