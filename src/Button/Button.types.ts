import React from 'react';

export interface IButton {
  label?: string;
  color?: string;
  variant?: string;
  prependIcon?: string;
  appendIcon?: string;
  iconSize?: number;
  iconColor?: string;
  iconGap?: number;
  onClick?: () => void;
  style?: React.CSSProperties;
}
