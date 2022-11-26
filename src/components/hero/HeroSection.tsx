import React from "react";

import Container from "../wrappers/Container";
import RowCol from "../wrappers/RowCol";

import "../../assets/css/hero-section/HeroSection.css";
import { FeatureImage } from "../../models/interfaces/interfaces";

import {
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

const featuredLogos: FeatureImage[] = [
  { id: 1, icon: faSpotify, alt: "Spotify logo", label: "Spotify" },
  {
    id: 2,
    icon: faPodcast,
    alt: "Apple Podcasts logo",
    label: "Apple Podcasts",
  },
  { id: 3, icon: faTwitter, alt: "Twitter logo", label: "Twitter" },
];

const HeroSection: React.FC<{}> = (props) => {
  return (
    <>
      <div className="container-fluid heroSection">
        <Container container="container fullHeight">
          <RowCol
            rowClasses="row fullHeight"
            colClasses="col col-lg-6 heroContainer fullHeight"
          >
            <h1 className="heroTitle">
              Hours of Star Wars content coming to you
            </h1>
            <p className="heroDescription">
              Welcome to 3 Idiots and a Star Wars Podcast! We release a new
              podcast every week. Join our hosts Landon, Alex, and Nathan as
              they stay up to date on all the new Star Wars content.
            </p>
            <div className="flex-column flex-sm-row heroButtons">
              <a href="#listen-now" className="primaryButton heroLink">
                Start Listening
              </a>
              <a href="#meet-the-hosts" className="secondaryButton heroLink">
                Meet the Hosts
              </a>
            </div>
          </RowCol>
        </Container>
      </div>
      <Container container="container-fluid container-md py-5">
        <RowCol
          rowClasses="row flex-column justify-content-center align-items-center"
          colClasses="col-10 col-sm-8 col-md-6 col-lg-4 gap"
        >
          <h2 className="featuredHeading">Find Us On</h2>
          <div className="featuredLogos">
            {featuredLogos.map((image) => {
              return (
                <div
                  key={image.id}
                  className="col-4 d-flex flex-column featuredSection"
                >
                  <FontAwesomeIcon
                    icon={image.icon as IconDefinition}
                    key={image.id}
                    className="featuredIcons"
                  />
                  <h3 className="featuredSubHeading">{image.label}</h3>
                </div>
              );
            })}
          </div>
        </RowCol>
      </Container>
    </>
  );
};

export default HeroSection;
