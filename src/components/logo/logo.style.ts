import styled from "styled-components";

const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #172a45;
    height: 40px;
    width: 40px;
    margin-left: 20px;
    margin-right: 10px;
    border-radius: 50%;
    font-size: 20px;
  }
  p:before {
    content: "Simon ";
    font-weight: bold;
    color: #64ffda;
  }
`;

export default LogoStyle;
