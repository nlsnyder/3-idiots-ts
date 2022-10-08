import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "../../assets/css/navigation/Sidebar.css";

const SideBar: React.FC<{
  children: ReactNode;
  navOpen: boolean;
}> = (props) => {
  const bar = (
    <CSSTransition
      in={props.navOpen}
      timeout={200}
      classNames="slide-in-right"
      mountOnEnter
      unmountOnExit
    >
      <aside className="navbar-nav sidebar d-sm-none" id="mainNavbar">
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(
    bar,
    document.getElementById("sidebar") as HTMLElement
  );
};

export default SideBar;
