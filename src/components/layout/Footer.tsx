import React from "react";

import RowCol from "../wrappers/RowCol";
import "../../assets/css/layout/Footer.css";

import { faJedi, faPodcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const Footer: React.FC<{}> = (props) => {
  return (
    <footer className="container-fluid footer">
      <RowCol
        rowClasses="row justify-content-center align-items-center footer"
        colClasses="col-12 col-sm-8 col-md-6"
      >
        <div className="row gy-5">
          <div className="col-12 col-sm-6 order-2 order-sm-1">
            <div className="d-flex flex-column gap-4 align-items-center">
              <span className="footer-podcast-title d-flex align-items-center gap-3">
                <FontAwesomeIcon
                  icon={faJedi}
                  className="footer-podcast-icon"
                />
                3 Idiots SW
              </span>
              <div className="d-flex align-items-center gap-4">
                <FontAwesomeIcon
                  icon={faFacebookF as IconProp}
                  className="footer-podcast-icon"
                />
                <FontAwesomeIcon
                  icon={faTwitter as IconProp}
                  className="footer-podcast-icon"
                />
                <FontAwesomeIcon
                  icon={faSpotify as IconProp}
                  className="footer-podcast-icon"
                />
                <FontAwesomeIcon
                  icon={faPodcast}
                  className="footer-podcast-icon"
                />
              </div>
              <span className="d-flex flex-column flex-lg-row justify-content-start gap-1 footer-contact">
                Contact us: <strong>3idiotssw@gmail.com</strong>
              </span>
              <span className="footer-contact">
                &copy; 3 Idiots Star Wars Podcast, 2022
              </span>
            </div>
          </div>
          <div className="col-12 col-sm-6 order-1 order-sm-2">
            <ul className="nav-footer">
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="#listen-now">Listen Now</a>
              </li>
              <li>
                <a href="#meet-the-hosts">Meet the Hosts</a>
              </li>
            </ul>
          </div>
        </div>
      </RowCol>
    </footer>
  );
};

export default Footer;
