import React from 'react';

export interface IFlex extends React.PropsWithChildren {
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
