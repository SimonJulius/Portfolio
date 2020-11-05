import styled from "styled-components";

const MenuStyle = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  right: 0px;
  background-color: #172a45;
  z-index: 1;
  width: 100%;
  height: 90%;
  font-size: 50px;
  align-items: center;
  justify-content: space-around;
  a {
    color: #64ffda;
  }
  .cancel {
    align-self: flex-start;
    font-size: 30px;
    transform: translate(10px, -15px);
  }
`;

export default MenuStyle;
