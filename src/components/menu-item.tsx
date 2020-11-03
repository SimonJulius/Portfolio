import React from "react";
import MenuItemStyle from "./menu-item.style";

interface IMenuProps {
  fontSize: number;
  fontColor: string;
  fontWeight: string;
  children: any;
  backgroundColor?: string;
}

const MenuItem = ({ fontSize, fontColor, fontWeight, children }: IMenuProps) => {
  return (
    <MenuItemStyle
      fontSize={fontSize}
      fontColor={fontColor}
      fontWeight={fontWeight}
    >
      {children}
    </MenuItemStyle>
  );
};

export default MenuItem;
