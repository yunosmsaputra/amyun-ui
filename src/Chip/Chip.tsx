import { IChip } from './Chip.types';
import React from 'react';
import { ChipStyles } from './Chip.styles';

const ChipComponent: React.FC<IChip> = ({
  color = 'blue',
  size = 'sm',
  className,
  style,
  children,
}) => {
  return (
    <ChipStyles $size={size} $color={color} className={className} style={style}>
      {children}
    </ChipStyles>
  );
};
ChipComponent.displayName = 'AmChip';
export default ChipComponent;
