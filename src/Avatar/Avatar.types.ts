import React from 'react';

export interface IAvatar extends React.PropsWithChildren {
  size?: string;
  color?: string;
  style?: React.CSSProperties;
  className?: string;
}
