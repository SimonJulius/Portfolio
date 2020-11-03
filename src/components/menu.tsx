import React from "react";
import MenuStyle from "./menu.style";
import MenuItem from "./menu-item";

const Menu = () => {
  return (
    <MenuStyle>
      <MenuItem fontSize={14} fontColor="#000" fontWeight="normal">
        Home
      </MenuItem>
      <MenuItem fontSize={14} fontColor="#000" fontWeight="normal">
        About
      </MenuItem>
      <MenuItem fontSize={14} fontColor="#000" fontWeight="normal">
        Contact
      </MenuItem>
      <MenuItem fontSize={14} fontColor="#000" fontWeight="normal">
        Portfolio
      </MenuItem>
    </MenuStyle>
  );
};

export default Menu;
