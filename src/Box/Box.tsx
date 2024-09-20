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
  className,
}) => {
  return (
    <BoxStyles
      $background={background}
      $width={width}
      $height={height}
      $scrollX={scrollX}
      $scrollY={scrollY}
      style={style}
      className={className}
    >
      {children}
    </BoxStyles>
  );
};

export default AmBox;
