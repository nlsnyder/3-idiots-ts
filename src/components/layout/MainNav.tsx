import React from "react";
import styles from "./MainNav.module.css";
import logo from "../../img/logoipsum-logo-27.svg";

const MainNav: React.FC<{}> = (props) => {
  return (
    <div className={`container-fluid container-lg my-3 ${styles.containerStyle}`}>
      <div className="row">
        <div className="col-12 col-xl-10 m-auto">
          <div className="d-flex justify-content-between align-items-md-center">
            <a href="/">
              <img src={logo} alt="3 idiots logo" />
            </a>
            <div className={styles.list}>
              <a href="/">Listen Now</a>
              <a href="/">The Hosts</a>
              <a href="/contact-us">Contact Us</a>
            </div>
            <div className={styles.list}>
              <button type="button" className={styles.secondaryButton}>Log In</button>
              <button type="button" className={styles.primaryButton}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
