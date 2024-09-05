import React from 'react';

export interface ITextbox {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
}
