import styled from "styled-components";

interface IProps {
  borderSize: number;
  borderStyle: string;
  translateProps: [number, number];
  size?: number;
  borderColor?: string;
  backgroundColor?: string;
  backgroundImage?: string;
}

const CircleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props: IProps) => props.size}px;
  width: ${(props: IProps) => props.size}px;
  background-color: ${(props) => props.backgroundColor};
  background: url(${(props) => props.backgroundImage});
  border-color: ${(props) => props.borderColor};
  background-size: cover;
  border-style: ${(props) => props.borderStyle};
  border-width: ${(props) => props.borderSize}px;
  border-radius: 50%;
  transform: translate(
    ${(props) => props.translateProps[0]}vw,
    ${(props) => props.translateProps[1]}vw
  );
`;

export default CircleStyle;
