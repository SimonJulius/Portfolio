import styled from "styled-components";

const ImageStyle = styled.img.attrs((props) => ({src: props.src}))`
    width: ${(props)=> props.width}px
`;

export default ImageStyle;
