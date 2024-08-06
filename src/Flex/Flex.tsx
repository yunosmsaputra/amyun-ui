import React from 'react';
import { IFlex } from './Flex.types';
import { FlexStyles } from './Flex.styles';

const FlexComponent: React.FC<IFlex> = ({
  justifyContent,
  alignItems,
  gap,
  children,
    className
}) => {
  return (
    <FlexStyles $justify={justifyContent} $align={alignItems} $gap={gap} className={className}>
      {React.Children.toArray(children)}
    </FlexStyles>
  );
};

FlexComponent.displayName = 'AmFlex';
export default FlexComponent;
