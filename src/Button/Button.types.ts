import React from 'react';

export interface IButton {
  label?: string;
  color?: string;
  variant?: string;
  prependIcon?: string;
  appendIcon?: string;
  iconSize?: number;
  iconColor?: string;
  btnIcon?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
