import React from 'react';

export interface ISidebar extends React.PropsWithChildren {
  activeMenu?: string;
  style?: React.CSSProperties;
}

export interface ISidebarAppIcon extends ISidebar {}
export interface ISidebarMenu extends ISidebar {
  menuIndex: string;
}
