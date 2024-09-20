import React from 'react';

export interface ITextbox extends React.PropsWithChildren {
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

export interface ITextboxPrependInner extends React.PropsWithChildren {
  onClick?: () => void;
}
