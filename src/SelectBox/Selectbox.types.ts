import React from 'react';

export interface ISelectBox {
  size?: string;
  placeholder?: string;
  options?: any[];
  position?: string;
  value?: string;
  style?: React.CSSProperties;
  className?: string;
}
