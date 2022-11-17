import React, { useState } from "react";
import logo from "../../assets/img/navigation/logoipsum-logo-27.svg";
import styles from '../../assets/css/navigation/MainNav.module.css';
import "../../assets/css/navigation/MobileNav.css";

import MobileNav from "./MobileNav";
import NavLinkList from "./NavLinkList";
import Header from "../layout/Header";
import SideBar from "./Sidebar";
import Overlay from "./Overlay";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { mobileNavLinks, desktopNavLinks } from "../../data/constants";

const MainNav: React.FC<{}> = (props) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNavOpen = () => {
    setMobileNavOpen((prevState: boolean) => !prevState);
  };

  return (
    <>
      <SideBar navOpen={mobileNavOpen}>
        <MobileNav links={mobileNavLinks} toggleNav={toggleMobileNavOpen} />
      </SideBar>
      {mobileNavOpen && <Overlay toggle={toggleMobileNavOpen} isMobile />}
      <Header>
        <nav className={`navbar py-3`}>
          <a href="/">
            <img src={logo} alt="3 idiots logo" />
          </a>
          <NavLinkList classes="d-none d-sm-flex" navItems={desktopNavLinks} />
          <div className="d-flex d-sm-none">
            <button
              className="navbar-toggler transparent-border"
              type="button"
              aria-label="Toggle navigation"
              onClick={toggleMobileNavOpen}
            >
              <FontAwesomeIcon className={styles.icon} icon={faBars} />
            </button>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default MainNav;
