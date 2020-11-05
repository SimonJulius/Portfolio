import React from "react";

import ImageStyle from "./image.style";

interface IImage {
  src: string;
  width: number;
}

const Image = ({ src, width }: IImage) => {
  return <ImageStyle src={src} width={width} />;
};

export default Image;
