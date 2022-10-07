import { NavLink } from "../../interfaces/interfaces";
import "../../assets/css/navigation/NavLinkItem.css";

const NavLinkItem: React.FC<{ navLink: NavLink }> = (props) => {
  const { navLink } = props;

  return (
    <a href={navLink.href} className="navItem">
      {navLink.link}
    </a>
  );
};

export default NavLinkItem;
