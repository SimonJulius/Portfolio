import React, { Fragment } from "react";
import CircleStyle from "./circle.style";

interface ICircle {
  size: number;
  borderSize: number;
  borderStyle: string;
  translateProps: [number, number];
  backgroundColor?: string;
  backgroundImage?: string;
  borderColor?: string;
  children?: any;
}

const Circle = ({
  size,
  backgroundColor,
  backgroundImage,
  borderSize,
  borderStyle,
  borderColor,
  translateProps,
  children,
}: ICircle) => {
  return (
    <Fragment>
      <CircleStyle
        size={size}
        backgroundColor={backgroundColor}
        borderSize={borderSize}
        borderStyle={borderStyle}
        borderColor={borderColor}
        translateProps={translateProps}
        backgroundImage={backgroundImage}
      >
        <div>{children}</div>
      </CircleStyle>
    </Fragment>
  );
};

export default Circle;
