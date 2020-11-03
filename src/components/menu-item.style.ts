import styled from "styled-components";

interface IMenuItemProps {
    fontColor: string;
    fontSize: number;
    fontWeight: string;
    backgroundColor?: string;
}

const MenuItemStyle = styled.a`
background-color: ${(props: IMenuItemProps) => props.backgroundColor}
font-color: ${(props) => props.fontColor}
font-size: ${(props) => props.fontSize}px
font-weight: ${(props) => props.fontWeight}
background-color: ${(props) => props.backgroundColor}
`

export default MenuItemStyle