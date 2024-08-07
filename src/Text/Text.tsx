import React from 'react';
import { IText } from './Text.types';
import { TextStyled } from './Text.style';

const TextComponent: React.FC<IText> = ({
  size,
  color,
  weight,
  children,
  style,
  className,
}) => {
  return (
    <TextStyled
      $size={size}
      $color={color}
      $fontWeight={weight === 'semibold' ? '600' : weight}
      style={style}
      className={className}
    >
      {children}
    </TextStyled>
  );
};

TextComponent.displayName = 'AmText';
export default TextComponent;
