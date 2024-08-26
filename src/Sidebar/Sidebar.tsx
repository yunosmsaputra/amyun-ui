import React from 'react';
import { ISidebar, ISidebarAppIcon, ISidebarMenu } from './Sidebar.types';
import { SidebarAppIcon, SidebarMenu, SidebarStyles } from './Sidebar.styles';

const SidebarComponent: React.FC<ISidebar> = ({
  children,
  activeMenu,
  style,
}) => {
  return (
    <SidebarStyles style={style}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, { activeMenu })
          : child;
      })}
    </SidebarStyles>
  );
};

SidebarComponent.displayName = 'AmSidebar';
export default SidebarComponent;

export const AmSidebarAppIcon: React.FC<ISidebarAppIcon> = ({ children }) => {
  return <SidebarAppIcon>{children}</SidebarAppIcon>;
};

export const AmSidebarMenu: React.FC<ISidebarMenu> = ({
  menuIndex,
  children,
  activeMenu,
}) => {
  return activeMenu?.toLowerCase() === menuIndex.toLowerCase() ? (
    <SidebarMenu $isActive>{children}</SidebarMenu>
  ) : (
    <SidebarMenu>{children}</SidebarMenu>
  );
};
