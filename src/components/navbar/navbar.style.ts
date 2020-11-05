import styled from "styled-components";

const NavbarStyles = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  height: 50px;
  margin-bottom: 10px;
  margin-top: 0px;
  .menu-mobile {
    margin-right: 20px;
  }

  .hidden {
      display: none;
  }
`;

export default NavbarStyles;
