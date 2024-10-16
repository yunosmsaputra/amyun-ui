import React from 'react';

export interface IChip extends React.PropsWithChildren {
  color?: string;
  size?: string;
  className?: string;
  style?: React.CSSProperties;
}
