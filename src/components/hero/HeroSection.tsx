import React from "react";

import styles from "../../assets/css/hero-section/HeroSection.module.css";
import { FeatureImage } from "../../interfaces/interfaces";

import {
  faFacebook,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";

const featuredLogos: FeatureImage[] = [
  { id: 1, icon: faSpotify, alt: "Spotify logo", label: "Spotify" },
  { id: 2, icon: faPodcast, alt: "Apple Podcasts logo", label: "Apple Podcasts" },
  { id: 3, icon: faTwitter, alt: "Twitter logo", label: "Twitter" },
  { id: 4, icon: faFacebook, alt: "Facebook logo", label: "Facebook" },
];

const HeroSection: React.FC<{}> = (props) => {
  return (
    <>
      <div className={`container-fluid ${styles.heroSection}`}>
        <div className={`row ${styles.heightOverride}`}>
          <div className="col-10 col-xs-10 col-sm-7 col-lg-5">
            <div className={styles.heroContainer}>
              <h1 className={styles.heroTitle}>
                Hours of Star Wars content coming to you
              </h1>
              <p className={styles.heroDescription}>
                Welcome to 3 Idiots and a Star Wars Podcast! We release a new
                podcast every week. Join our hosts Landon, Alex, and Nathan as
                they stay up to date on all the new Star Wars content while
                still discussing the classics.
              </p>
              <div className={`flex-column flex-sm-row ${styles.heroButtons}`}>
                <button className="primaryButton" type="button">
                  Start Listening
                </button>
                <button className="secondaryButton" type="button">
                  Meet the Hosts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid container-md py-5">
        <div className="row flex-column justify-content-center align-items-center">
          <div className={`col-12 col-lg-6 ${styles.gap}`}>
            <h2 className={styles.featuredHeading}>Find Us On</h2>
            <div className={styles.featuredLogos}>
              {featuredLogos.map((image) => {
                return (
                  <div key={image.id} className={`col-3 d-flex flex-column ${styles.featuredSection}`}>
                    <FontAwesomeIcon
                      icon={image.icon as IconDefinition}
                      key={image.id}
                      className={styles.featuredIcons}
                    />
                    <h3 className={styles.featuredSubHeading}>{image.label}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
