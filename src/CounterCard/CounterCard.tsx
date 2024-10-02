import {
  AmCounterCardDataStyles,
  CounterCardDataContentStyles,
  CounterCardIcon,
  CounterCardStyles,
  CounterCardSummaryStyles,
  CounterCardTitleStyles,
} from './CounterCard.styles';
import React, { useEffect, useState } from 'react';
import {
  CounterCardTypes,
  ICounterCardData,
  ICounterCardIcon,
} from './CounterCard.types';

const AmCounterCard: React.FC<CounterCardTypes> = ({
  color = 'netral',
  className,
  children,
}) => {
  const [colorState, setColorState] = useState<string>();
  useEffect(() => {
    setColorState(color);
  }, [color]);
  return (
    <CounterCardStyles $color={color} className={className}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { colorState })
          : child;
      })}
    </CounterCardStyles>
  );
};

export const AmCounterCardIcon: React.FC<ICounterCardIcon> = ({
  colorState,
  className,
  children,
}) => {
  return <CounterCardIcon $color={colorState} className={className}>{children}</CounterCardIcon>;
};

export default AmCounterCard;

export const AmCounterCardData: React.FC<ICounterCardData> = ({
  children,
  className,
  colorState,
}) => {
  return (
    <AmCounterCardDataStyles className={className}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { colorState })
          : child;
      })}
    </AmCounterCardDataStyles>
  );
};

export const AmCounterCardTitle: React.FC<ICounterCardData> = ({
  className,
  children,
}) => {
  return <CounterCardTitleStyles className={className}>{children}</CounterCardTitleStyles>;
};

export const AmCounterCardDataContent: React.FC<ICounterCardData> = ({
  children,
  className,
  colorState,
}) => {
  return (
    <CounterCardDataContentStyles $color={colorState} className={className}>
      {children}
    </CounterCardDataContentStyles>
  );
};

export const AmCounterCardDataSummary: React.FC<ICounterCardData> = ({
  className,
  children,
}) => {
  return <CounterCardSummaryStyles className={className}>{children}</CounterCardSummaryStyles>;
};
