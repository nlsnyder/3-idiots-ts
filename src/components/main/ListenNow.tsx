import React from "react";
import { useState } from "react";
import SubHeading from "../layout/SubHeading";
import styles from "./ListenNow.module.css";
import SpotifyLogo from "../../img/spotify-logo-image.png";
import ApplePodcastLogo from "../../img/apple-podcast-logo-image.png";

const ListenNow: React.FC = () => {
  const [showLatestEp, setShowLatestEp] = useState(false);

  const toggleShowLatestEp: () => void = () => {
    setShowLatestEp((prevState: boolean) => {
      return !prevState;
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
          <SubHeading
            sectionHeading={"Join Us"}
            title={"Listen now on Spotify and Apple Podcasts"}
          />
          <div className={styles["listen-now-section"]}>
            <div className={`row align-items-center ${styles.gap}`}>
              <div className="col-12 col-md-7 col-lg-9">
                <p className={styles["listen-now-description"]}>
                  3 Idiots and a Star Wars Podcast is currently available on
                  Spotify and Apple Podcasts. Join the hosts Landon, Alex, and
                  Nathan as they discuss all the latest Star Wars news.
                </p>
              </div>
              <div className={`col-12 col-md-5 col-lg-3 ${styles.listenLogos}`}>
                <div className={styles.logoImages}>
                  <img
                    src={SpotifyLogo}
                    alt="spotify logo"
                    className={styles.soloLogo}
                  />
                  <img
                    src={ApplePodcastLogo}
                    alt="apple podcasts logo"
                    className={styles.soloLogo}
                  />
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-12 d-flex justify-content-center align-items-center">
                <button onClick={toggleShowLatestEp} type="button" className="secondaryButton">
                  {showLatestEp ? "Hide Latest Episode" : "Show Latest Episode"}
                </button>
              </div>
            </div>

            {/* This will be hidden but its the latest episode of the podcast */}
            {showLatestEp && (
              <div className="row mt-5">
                <div className={`col-12 ${styles.iFrame}`}>
                  <iframe
                    title="podcast"
                    src="https://open.spotify.com/embed/episode/0VA9eVOXbzvjj83CQUzI1w?utm_source=generator&theme=0"
                    width="100%"
                    height="200"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListenNow;
