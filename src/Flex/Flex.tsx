import React from 'react';
import { IFlex } from './Flex.types';
import { FlexStyles } from './Flex.styles';

const FlexComponent: React.FC<IFlex> = ({
  justifyContent,
  alignItems,
  gap,
  wrap,
  onClick,
  children,
  className,
  style,
}) => {
  return (
    <FlexStyles
      $justify={justifyContent}
      $align={alignItems}
      $gap={gap}
      $wrap={wrap}
      className={className}
      style={style}
      onClick={onClick}
    >
      {React.Children.toArray(children)}
    </FlexStyles>
  );
};

FlexComponent.displayName = 'AmFlex';
export default FlexComponent;
