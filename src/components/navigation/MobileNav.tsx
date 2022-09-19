import React from "react";
import {
  faArrowTurnUp,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "../../interfaces/interfaces";
import "./MobileNav.css";

const MobileNav: React.FC<{ links: NavLink[]; toggleNav: () => void }> = (
  props
) => {
  return (
    <>
      <div id="dismiss" onClick={props.toggleNav}>
        <FontAwesomeIcon className="closeNav" icon={faArrowTurnUp} />
      </div>
      <div className="mobileNav">
        <h3>Side Menu</h3>
        <div>
          {props.links.map((nav: NavLink) => {
            return (
              <a key={nav.id} className="mobileLink" href={nav.href}>
                <FontAwesomeIcon
                  className="mobileIcon"
                  icon={nav.icon as IconDefinition}
                />
                <span>{nav.link}</span>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MobileNav;
