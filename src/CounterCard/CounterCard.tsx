import { CounterCardIcon, CounterCardStyles } from './CounterCard.styles';
import React from 'react';
import { CounterCardTypes, ICounterCardIcon } from './CounterCard.types';

const AmCounterCard: React.FC<CounterCardTypes> = ({
  color = 'netral',
  children,
}) => {
  return (
    <CounterCardStyles $color={color}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { color })
          : child;
      })}
    </CounterCardStyles>
  );
};

export const AmCounterCardIcon: React.FC<ICounterCardIcon> = ({
  color,
  children,
}) => {
  return <CounterCardIcon $color={color}>{children}</CounterCardIcon>;
};

export default AmCounterCard;
