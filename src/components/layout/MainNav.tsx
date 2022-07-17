import React from "react";
import styles from './MainNav.module.css';

const MainNav: React.FC<{}> = (props) => {
  return (
    <div className={`container my-3 ${styles.containerStyle}`}>
      <div className="row">
        <div className="col-md-12 col-lg-10 m-auto">
          <div className="d-flex justify-content-between align-items-md-center">
            <div>Testing</div>
            <div>
              <div className={styles.list}>
                <a href="/">
                  Listen Now
                </a>
                <a href="/">
                  The Hosts
                </a>
                <a href="/contact-us">
                  Contact Us
                </a>
              </div>
            </div>
            <div>Log In</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
