import React from 'react';

export interface ISelectBox {
  size?: string;
  placeholder?: string;
  options?: any[];
  position?: string;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
  className?: string;
}
