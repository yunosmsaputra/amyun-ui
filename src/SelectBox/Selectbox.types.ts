import React from 'react';

export interface ISelectBox {
  size?: string;
  placeholder?: string;
  options?: any[];
  position?: string;
  value?: any;
  text?: string;
  name?: string;
  onChange?: (value: any) => void;
  style?: React.CSSProperties;
  className?: string;
}
