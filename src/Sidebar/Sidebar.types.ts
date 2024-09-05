import React from 'react';

export interface ISidebar extends React.PropsWithChildren {
  activeMenu?: string;
  logoMain?: string;
  logoMini?: string;
  style?: React.CSSProperties;
}

export interface ISidebarAppIcon extends ISidebar {
  onMenuHover?: boolean;
}
export interface ISidebarMenu extends ISidebarAppIcon {
  menuIndex: string;
}
export interface ISidebarMenuIcon extends React.PropsWithChildren {}
export interface ISidebarMenuText extends React.PropsWithChildren {}
