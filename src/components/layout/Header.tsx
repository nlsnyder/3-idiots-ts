import React, { ReactNode } from "react";

const Header: React.FC<{ children: ReactNode }> = (props) => {
  return <header className="container-lg py-2">{props.children}</header>;
};

export default Header;
