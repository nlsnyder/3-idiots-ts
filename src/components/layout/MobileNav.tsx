import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "../../interfaces/interfaces";
import './MobileNav.css';

const MobileNav: React.FC<{links: NavLink[]}> = (props) => {
  return (
    <React.Fragment>
      <nav id="sidebar">
        <div id="dismiss">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="sidebar-header">
          <h3>Navigate</h3>
        </div>
        <ul className="list-unstyled components">
          <p>Nav Heading</p>
          <li className="active">
            <a href="/">Listen</a>
          </li>
          <li className="active">
            <a href="/">Hosts</a>
          </li>
          <li className="active">
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div className="overlay"></div>
    </React.Fragment>
  );
};

export default MobileNav;
