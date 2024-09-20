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
  children,
}) => {
  const [colorState, setColorState] = useState<string>();
  useEffect(() => {
    setColorState(color);
  }, [color]);
  return (
    <CounterCardStyles $color={color}>
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
  children,
}) => {
  return <CounterCardIcon $color={colorState}>{children}</CounterCardIcon>;
};

export default AmCounterCard;

export const AmCounterCardData: React.FC<ICounterCardData> = ({
  children,
  colorState,
}) => {
  return (
    <AmCounterCardDataStyles>
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
  children,
}) => {
  return <CounterCardTitleStyles>{children}</CounterCardTitleStyles>;
};

export const AmCounterCardDataContent: React.FC<ICounterCardData> = ({
  children,
  colorState,
}) => {
  return (
    <CounterCardDataContentStyles $color={colorState}>
      {children}
    </CounterCardDataContentStyles>
  );
};

export const AmCounterCardDataSummary: React.FC<ICounterCardData> = ({
  children,
}) => {
  return <CounterCardSummaryStyles>{children}</CounterCardSummaryStyles>;
};
