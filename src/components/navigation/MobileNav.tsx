import React from "react";

import { IconDefinition, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavLink } from "../../models/interfaces/nav-interfaces";
import "../../assets/css/navigation/MobileNav.css";

const MobileNav: React.FC<{ links: NavLink[]; toggleNav: () => void }> = (
  props
) => {
  return (
    <>
      <div id="dismiss" onClick={props.toggleNav}>
        <FontAwesomeIcon className="fa-xl" icon={faXmark} />
      </div>
      <div className="mobileNav">
          {props.links.map((nav: NavLink) => {
            return (
              <a onClick={props.toggleNav} key={nav.id} className="mobileLink" href={nav.href}>
                <FontAwesomeIcon
                  className="mobileIcon"
                  icon={nav.icon as IconDefinition}
                />
                <span>{nav.link}</span>
              </a>
            );
          })}
      </div>
    </>
  );
};

export default MobileNav;
