import React from 'react';

export interface IFlex extends React.PropsWithChildren {
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
  wrap?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}
