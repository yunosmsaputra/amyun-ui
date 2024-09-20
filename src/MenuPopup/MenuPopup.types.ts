import { LegacyRef } from 'react';

export interface IMenuPoup extends React.PropsWithChildren {}

export interface IMenuPopupActivator extends IMenuPoup {
  toggleContent?: () => void;
  ref?: LegacyRef<HTMLDivElement> | null;
}

export interface IMenuPopupContent extends IMenuPoup {
  isShow?: boolean;
  width?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}
