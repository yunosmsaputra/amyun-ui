import React from 'react';

export interface ITextarea {
  row?: number;
  placeholder?: string;
  value?: string | undefined;
  name?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  className?: string;
  disabled?: boolean;
  defaultValue?: string | undefined;
}
