import React from 'react';

export interface ITextbox {
  placeholder?: string;
  onChange: () => void;
  style?: React.CSSProperties;
}
