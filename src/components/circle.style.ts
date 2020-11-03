import styled from "styled-components"

interface IProps {
    borderSize: number;
    borderStyle: string;
    size?: number;
    borderColor?: string;
    backgroundColor?: string;
    translateProps: [number, number];
}

const CircleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props: IProps) => props.size}vw;
    width: ${(props: IProps) => props.size}vw;
    background-color: ${(props) => props.backgroundColor};
    border-color: ${(props) => props.borderColor};
    border-style: ${(props) => props.borderStyle};
    border-width: ${(props) => props.borderSize}px;
    border-radius: 50%;
    transform: translate(
        ${(props) => props.translateProps[0]}vw,
        ${(props) => props.translateProps[1]}vw
    );
`;


export default CircleStyle