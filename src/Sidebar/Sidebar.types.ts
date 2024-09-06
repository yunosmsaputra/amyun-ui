import React from 'react';

export interface ISidebar extends React.PropsWithChildren {
  activeMenu?: string;
  style?: React.CSSProperties;
}

export interface ISidebarAppIcon extends ISidebar {
  onMenuHover?: boolean;
}

export interface ISidebarAppIconMain extends ISidebarAppIcon {}
export interface ISidebarAppIconMini extends ISidebarAppIcon {}

export interface ISidebarMenu extends ISidebarAppIcon {
  menuIndex?: string;
  onMenuItemHover?: boolean;
  onClick?: () => void;
}

export interface ISidebarMenuIcon extends ISidebarMenu {
  isActiveMenu?: boolean;
}
export interface ISidebarMenuIconState extends React.PropsWithChildren {}
export interface ISidebarMenuText extends ISidebarMenuIcon {}

export interface ISideBarMenuChild extends React.PropsWithChildren {}
export interface ISideBarMenuChildItem extends React.PropsWithChildren {
  onClick?: () => void;
}
