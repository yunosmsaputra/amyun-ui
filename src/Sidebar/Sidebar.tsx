import React, { forwardRef, useRef, useState } from 'react';
import {
  ISidebar,
  ISidebarAppIcon,
  ISidebarMenu,
  ISidebarMenuIcon,
  ISidebarMenuText,
} from './Sidebar.types';
import {
  SidebarAppIcon,
  SidebarMenu,
  SidebarMenuIcon,
  SidebarMenuText,
  SidebarStyles,
} from './Sidebar.styles';
import { AmIcon, AmText } from '../index';

const SidebarComponent: React.FC<ISidebar> = ({
  children,
  activeMenu,
  logoMain,
  logoMini,
  style,
}) => {
  const [onMenuHover, setOnMenuHover] = useState<boolean>(false);
  const onMouseEnter = () => {
    setOnMenuHover(true);
  };
  const onMouseLeave = () => {
    setOnMenuHover(false);
  };
  return (
    <SidebarStyles
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? // @ts-ignore
            React.cloneElement(child, {
              activeMenu,
              logoMini,
              logoMain,
              onMenuHover,
            })
          : child;
      })}
    </SidebarStyles>
  );
};

SidebarComponent.displayName = 'AmSidebar';
export default SidebarComponent;

export const AmSidebarAppIcon: React.FC<ISidebarAppIcon> = ({
  children,
  logoMain,
  logoMini,
  onMenuHover,
}) => {
  return (
    <SidebarAppIcon $onMenuHover={onMenuHover}>
      <img src={onMenuHover ? logoMain : logoMini} style={{ height: '46px' }} />
    </SidebarAppIcon>
  );
};

export const AmSidebarMenu: React.FC<ISidebarMenu> = ({
  menuIndex,
  children,
  activeMenu,
  onMenuHover,
}) => {
  return activeMenu?.toLowerCase() === menuIndex.toLowerCase() ? (
    <SidebarMenu $isActive $onMenuHover={onMenuHover}>
      {children}
    </SidebarMenu>
  ) : (
    <SidebarMenu $onMenuHover={onMenuHover}>{children}</SidebarMenu>
  );
};

export const AmSideBarMenuIcon: React.FC<ISidebarMenuIcon> = ({ children }) => {
  return <SidebarMenuIcon>{children}</SidebarMenuIcon>;
};

export const AmSideBarMenuText: React.FC<ISidebarMenuText> = ({ children }) => {
  return <SidebarMenuText>{children}</SidebarMenuText>;
};
