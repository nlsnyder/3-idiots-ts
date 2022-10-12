import React from "react";

import styles from "../../assets/css/home/Host.module.css";

import { HostProfile } from "../../models/interfaces/host-interfaces";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Host: React.FC<{ hostProfile: HostProfile }> = (props) => {
  const { characteristics, name, image, hobbies } = props.hostProfile;

  return (
    <div
      className={`col-12 col-sm-10 col-md-8 col-lg-4 ${styles.hostContainer}`}
    >
      <img src={image.src} className={styles.hostPicture} alt={image.alt} />
      <h3 className="mt-4">{name}</h3>
      <div className={styles.characteristics}>
        <span
          className={`${styles.characteristicTag} ${styles.characteristicPrimary}`}
        >
          {characteristics.primary}
        </span>
        <span
          className={`${styles.characteristicTag} ${styles.characteristicSecondary}`}
        >
          {characteristics.secondary}
        </span>
        <span
          className={`${styles.characteristicTag} ${styles.characteristicTertiary}`}
        >
          {characteristics.tertiary}
        </span>
      </div>
      <div className={styles.hobbies}>
        <h4>Hobbies</h4>
        <ul className={styles.hobbiesList}>
          {hobbies.map((hobbie, index) => {
            return (
              <li key={index}>
                <FontAwesomeIcon
                  icon={hobbie.icon as IconProp}
                  className={styles.hobbieIcon}
                />
                {hobbie.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Host;
