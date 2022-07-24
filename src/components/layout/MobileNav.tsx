import React from "react";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "../../interfaces/interfaces";
import styles from './MainNav.module.css';
import "./MobileNav.css";

const MobileNav: React.FC<{ links: NavLink[], toggleNav: () => void }> = (props) => {
  return (
    <div className="d-md-none navbar-nav collapse sidebar white" id="mainNavbar">
      <div
        id="dismiss"
        data-bs-toggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls="mainNavbar"
        onClick={props.toggleNav}
      >
        <FontAwesomeIcon className={styles.closeNav} icon={faArrowTurnUp} />
      </div>
      <div className={styles.fixedNav}>
        {props.links.map((nav: NavLink) => {
          return (
            <a key={nav.id} className={styles.mobileLink} href={nav.href}>
              <FontAwesomeIcon className={styles.mobileIcon} icon={nav.icon} />
              <div>
                {nav.link}
              </div>
            </a>
          );
        })}
      </div>
      <div className={styles.mobileNavFooter}>
        <p>3 Idiots and a Star Wars Podcast &copy; 2022</p>
      </div>
    </div>
  );
};

export default MobileNav;
