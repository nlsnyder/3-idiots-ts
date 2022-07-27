import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC<{}> = (props) => {
  return <div className={`${styles.heroSection} container-fluid`}>
    <div className={`${styles.heroOverlay}`}>
      
    </div>
  </div>;
};

export default HeroSection;
