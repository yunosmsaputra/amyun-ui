import React from 'react';

export interface CounterCardTypes extends React.PropsWithChildren {
  color?: string;
  className?: string;
}

export interface ICounterCardIcon extends React.PropsWithChildren {
  colorState?: string;
  className?: string;
}

export interface ICounterCardData extends React.PropsWithChildren {
  colorState?: string;
  className?: string;
}
