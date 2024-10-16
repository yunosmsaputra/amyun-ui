import React from 'react';

export interface IButton extends React.PropsWithChildren {
  type?: string;
  color?: string;
  size?: string;
  prependIcon?: string;
  appendIcon?: string;
  iconSize?: number;
  iconColor?: string;
  btnIcon?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}
