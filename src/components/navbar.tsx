import React from "react";

import NavbarStyles from "./navbar.style";
import Menu from "./menu";
import Logo from "./logo";

const Navbar = () => {
    return (
        <NavbarStyles>
            <Logo />
            <Menu />
        </NavbarStyles>
    )
};

export default Navbar;
