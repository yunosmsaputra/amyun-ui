import React from 'react';

export interface ISelectBox {
  size?: string;
  placeholder?: string;
  options?: any[];
  position?: string;
  value: any | undefined | null;
  text?: string;
  name?: string;
  onChange?: (value: any) => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  id?: string;
}
