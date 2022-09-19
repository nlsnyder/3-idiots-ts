import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import "./Sidebar.css";

const SideBar: React.FC<{ children: ReactNode }> = (props) => {
  const bar = (
    <div
      className="d-sm-none navbar-nav sidebar animate__animated"
      id="mainNavbar"
    >
      {props.children}
    </div>
  );

  return ReactDOM.createPortal(bar, document.getElementById("sidebar") as HTMLElement);
};

export default SideBar;
