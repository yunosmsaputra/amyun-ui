import React from 'react';

export interface BoxTypes extends React.PropsWithChildren {
  background?: string;
  width?: number;
  height?: number;
  scrollX?: boolean;
  scrollY?: boolean;
  style?: React.CSSProperties;
  className?: string;
}
