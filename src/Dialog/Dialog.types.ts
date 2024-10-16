import React from 'react';

export interface IDialog extends React.PropsWithChildren {
  width?: string;
  height?: string;
  expandable?: boolean;
  isShow?: boolean;
  type?: string;
  zIndex?: number;
  onClose?: () => void;
  className?: string;
}

export interface IDialogTitle extends React.PropsWithChildren {
  style?: React.CSSProperties;
  onClose?: () => void;
  className?: string;
  withButtonEdit?: boolean;
  onEdit?: () => void;
}

export interface IDialogContent extends IDialog {
  style?: React.CSSProperties;
}
