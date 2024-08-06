import React from 'react';

export interface IText extends React.PropsWithChildren {
  size?: number;
  weight?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}
