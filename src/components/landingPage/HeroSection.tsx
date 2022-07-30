import React from "react";
import styles from "./HeroSection.module.css";
import Facebook from '../../img/Facebook-logo.webp';
import Twitter from '../../img/Twitter-lettering.jpeg';
import Spotify from '../../img/Spotify-logo.webp';
import ApplePodcast from '../../img/Apple-Podcast-logo.webp';
import { FeatureImage } from "../../interfaces/interfaces";

const featuredLogos: FeatureImage[] = [
  {id: 1, img: Facebook, alt: 'Facebook logo'},
  {id: 2, img: Twitter, alt: 'Twitter logo'},
  {id: 3, img: Spotify, alt: 'Spotify logo'},
  {id: 4, img: ApplePodcast, alt: 'Apple Podcasts logo'}
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
                if (image.alt === 'Facebook logo') {
                  return <img key={image.id} src={image.img} alt={image.alt} className={styles.facebookLogo} />
                } else {
                  return <img key={image.id} src={image.img} alt={image.alt} />
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
