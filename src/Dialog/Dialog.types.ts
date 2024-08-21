import React from 'react';

export interface IDialog extends React.PropsWithChildren {
  width?: number;
  height?: number;
  expandable?: boolean;
  isShow?: boolean;
}

export interface IDialogTitle extends React.PropsWithChildren {
  style?: React.CSSProperties;
  onClose?: () => void;
}

export interface IDialogContent extends IDialog {
  style?: React.CSSProperties;
  expandable?: boolean;
}
