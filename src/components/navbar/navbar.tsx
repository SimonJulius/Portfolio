import React, { useState } from "react";
import { IconContext } from "react-icons";
import NavbarStyles from "./navbar.style";
import Menu from "../menu/menu";
import Logo from "../logo/logo";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [menuClass, setMenuClass] = useState("hidden");
  const [hamburgerClass, setHamburgerClass] = useState("shown");

  const showMenuOnClick = () => {
    setMenuClass((previousClass) => (previousClass = "shown"));
    setHamburgerClass((previousClass) => (previousClass = "hidden"));
  };

  const hideMenuOnClick = () => {
    setMenuClass((previousClass) => (previousClass = "hidden"));
    setHamburgerClass((previousClass) => (previousClass = "shown"));
  }

  return (
    <NavbarStyles>
      <Logo />
      <Menu className={menuClass} hideMenuOnClick={hideMenuOnClick}/>
      <IconContext.Provider
        value={{ color: "white", size: "25px", className: "react-icon" }}
      >
        <div className="menu-mobile">
          <GiHamburgerMenu
            onClick={showMenuOnClick}
            className={hamburgerClass}
          />
        </div>
      </IconContext.Provider>
    </NavbarStyles>
  );
};

export default Navbar;
