import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC<{}> = (props) => {
  return (
    <div className={`container-fluid ${styles.heroSection}`}>
      <div className={`row ${styles.heightOverride}`}>
        <div className="col-10 col-xs-10 col-sm-7 col-lg-5 justify-content-center justify-content-sm-start">
          <div className={styles.heroContainer}>
            <h1 className={styles.heroTitle}>Hours of Star Wars content coming to you</h1>
            <p className={styles.heroDescription}>
              Welcome to 3 Idiots and a Star Wars Podcast! We release a new podcast every week. Join our hosts Landon, Alex, and Nathan as they stay up to date on all the new Star Wars content while still discussing the classics.
            </p>
            <div className={`flex-column flex-sm-row ${styles.heroButtons}`}>
              <button className="primaryButton" type="button">Listen Now</button>
              <button className="secondaryButton" type="button">Meet the Hosts</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
