import React from "react";
import { NavLink } from "../../models/interfaces/nav-interfaces";
import NavLinkItem from "./NavLinkItem";
import '../../assets/css/navigation/NavLinkList.css';

const NavLinkList: React.FC<{ classes: string; navItems: NavLink[] }> = (
  props
) => {
  return (
    <ul className={`${props.classes} navList`}>
      {props.navItems.map((item) => {
        return (
          <li key={item.id}>
            <NavLinkItem navLink={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinkList;
