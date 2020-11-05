import React from "react";
import MenuStyle from "./menu.style";
import MenuItem from "./menu-item";
import { FaTimes } from "react-icons/fa";
interface IMenuProps {
  className: string;
  hideMenuOnClick: ()=> void;
}

const Menu = ({ className, hideMenuOnClick }: IMenuProps) => {
  return (
    <MenuStyle className={className}>
      <FaTimes className="cancel" onClick={hideMenuOnClick}/>
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
