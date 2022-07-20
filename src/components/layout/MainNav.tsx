import React from "react";
import styles from "./MainNav.module.css";
import logo from "../../img/logoipsum-logo-27.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainNav: React.FC<{}> = (props) => {
  return (
    <div className="container-lg my-2">
      <nav
        className={`navbar navbar-expand-lg navbar-light py-3 ${styles.containerStyle}`}
      >
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
          <a href="/">Listen Now</a>
          <a href="/">The Hosts</a>
          <a href="/contact-us">Contact Us</a>
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
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon className={styles.icon} icon={faBars} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
