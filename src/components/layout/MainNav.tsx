import React from "react";
import styles from "./MainNav.module.css";
import logo from "../../img/logoipsum-logo-27.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHeadphones,
  faUserGroup,
  faEnvelopeOpenText,
  faUnlock,
  faClipboardCheck,
  faArrowTurnUp,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "../../interfaces/interfaces";
import "./MobileNav.css";

const navLinks: NavLink[] = [
  { link: "Listen Now", id: 1, href: "/", icon: faHeadphones },
  { link: "The Hosts", id: 2, href: "/", icon: faUserGroup },
  { link: "Contact Us", id: 3, href: "/", icon: faEnvelopeOpenText },
  { link: "Log In", id: 4, href: "/", icon: faUnlock },
  { link: "Sign Up", id: 5, href: "/", icon: faClipboardCheck },
];

const MainNav: React.FC<{}> = (props) => {
  return (
    <div className={`container-lg my-2 ${styles.containerStyle}`}>
      <nav className="navbar navbar-expand-lg pt-3 pb-4">
        <div
          className={`col-6 col-md-3 justify-content-start ${styles.justify}`}
        >
          <a href="/">
            <img src={logo} alt="3 idiots logo" />
          </a>
        </div>
        <div
          className={`d-none d-md-flex col-md-6 justify-content-md-center ${styles.list}`}
        >
          <a href="/" className="active nav-link">
            Listen Now
          </a>
          <a href="/" className="nav-link">
            The Hosts
          </a>
          <a href="/contact-us" className="nav-link">
            Contact Us
          </a>
        </div>
        <div
          className={`d-none d-md-flex col-md-3 justify-content-md-end ${styles.list}`}
        >
          <button type="button" className={styles.secondaryButton}>
            Log In
          </button>
          <button type="button" className={styles.primaryButton}>
            Sign Up
          </button>
        </div>
        <div className="d-flex d-md-none col-6 justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon className={styles.icon} icon={faBars} />
          </button>
        </div>
      </nav>

      <div className="d-md-none navbar-nav collapse sidebar" id="mainNavbar">
        <div
          id="dismiss"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
        >
          <FontAwesomeIcon className={styles.closeNav} icon={faArrowTurnUp} />
        </div>
        <div className={styles.fixedNav}>
          {navLinks.map((nav: NavLink) => {
            return (
              <div key={nav.id} className={`py-3 px-5 ${styles.navElement}`}>
                <FontAwesomeIcon className={styles.closeNav} icon={nav.icon} />
                <a className={styles.mobileLink} href={nav.href}>
                  {nav.link}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
