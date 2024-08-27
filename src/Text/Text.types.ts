import React from 'react';

export interface IText extends React.PropsWithChildren {
  size?: number;
  weight?: string;
  color?: string;
  block?: boolean;
  align?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}
