import React from 'react';

export interface ITextbox extends React.PropsWithChildren {
  placeholder?: string;
  value?: string | readonly string[] | number | undefined;
  name?: string;
  onChange?: (e: any) => void;
  style?: React.CSSProperties;
  className?: string;
  type?: React.HTMLInputTypeAttribute;
  defaultValue?: string | readonly string[] | number | undefined;
  disabled?: boolean;
}

export interface ITextboxPrependInner extends React.PropsWithChildren {
  onClick?: () => void;
}
