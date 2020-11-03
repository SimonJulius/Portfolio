import React, { Fragment } from 'react';
import CircleStyle from "./circle.style"

interface ICircle {
    size: number;
    backgroundColor: string;
    borderSize: number;
    borderStyle: string;
    translateProps: [number, number];
    borderColor?: string;
    children?: any;
}

const Circle = ({
    size,
    backgroundColor,
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
            >
                <div>{children}</div>
            </CircleStyle>
        </Fragment>
    );
};