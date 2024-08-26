import { BoxStyles } from './Box.styles';
import { BoxTypes } from './Box.types';
import React from 'react';

const AmBox: React.FC<BoxTypes> = ({
  children,
  background,
  style,
  width,
  height,
  scrollX,
  scrollY,
}) => {
  return (
    <BoxStyles
      $background={background}
      $width={width}
      $height={height}
      $scrollX={scrollX}
      $scrollY={scrollY}
      style={style}
    >
      {children}
    </BoxStyles>
  );
};

export default AmBox;
