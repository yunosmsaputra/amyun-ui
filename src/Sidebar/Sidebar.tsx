import React, { useEffect, useState } from 'react';
import {
  ISidebar,
  ISidebarAppIcon,
  ISidebarAppIconMain,
  ISidebarAppIconMini,
  ISidebarMenu,
  ISideBarMenuChild,
  ISideBarMenuChildItem,
  ISidebarMenuIcon,
  ISidebarMenuIconState,
  ISidebarMenuText,
} from './Sidebar.types';
import {
  SidebarAppIcon,
  SidebarMenu,
  SideBarMenuChildItemStyle,
  SideBarMenuChildItemTextStyle,
  SideBarMenuChildStyle,
  SidebarMenuIcon,
  SidebarMenuIconContainer,
  SidebarMenuText,
  SidebarStyles,
} from './Sidebar.styles';

const SidebarComponent: React.FC<ISidebar> = ({
  children,
  activeMenu,
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
          ? React.cloneElement(child, {
              // @ts-ignore
              activeMenu,
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
  onMenuHover,
  children,
}) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <SidebarAppIcon $onMenuHover={onMenuHover}>
      {childrenArray.map((child, index) => {
        const childElement = child as React.ReactElement;
        // @ts-ignore
        const displayName =
          childElement.type.displayName || childElement.type.name || 'Unknown';
        if (onMenuHover) {
          if (displayName === 'AmSideBarAppIconMain') {
            return <div key={`appIcon${index}`}>{child}</div>;
          }
        } else {
          if (displayName === 'AmSidebarAppIconMini') {
            return <div key={`appIcon${index}`}>{child}</div>;
          }
        }
      })}
    </SidebarAppIcon>
  );
};

export const AmSidebarAppIconMini: React.FC<ISidebarAppIconMini> = ({
  children,
}) => {
  return <>{children}</>;
};

export const AmSideBarAppIconMain: React.FC<ISidebarAppIconMain> = ({
  children,
}) => {
  return <>{children}</>;
};

export const AmSidebarMenu: React.FC<ISidebarMenu> = ({
  menuIndex,
  children,
  activeMenu,
  onMenuHover,
  onClick,
}) => {
  const [onMenuItemHover, setOnMenuItemHover] = useState<boolean>(false);
  const [isActiveMenu, setOnIsActiveMenu] = useState<boolean>(false);
  const childrenArray = React.Children.toArray(children);
  const onMouseEnter = () => {
    setOnMenuItemHover(true);
  };
  const onMouseLeave = () => {
    setOnMenuItemHover(false);
  };
  useEffect(() => {
    if (activeMenu?.toLowerCase() === menuIndex?.toLowerCase()) {
      setOnIsActiveMenu(true);
    } else {
      setOnIsActiveMenu(false);
    }
  }, [activeMenu]);
  return (
    <SidebarMenu
      $isActive={activeMenu?.toLowerCase() === menuIndex?.toLowerCase()}
      $onMenuHover={onMenuHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {React.Children.map(children, (child) => {
        const childElement = child as React.ReactElement;
        const displayName =
            // @ts-ignore
          childElement.type.displayName || childElement.type.name || 'Unknown';
        return React.isValidElement(child)
          ? onMenuHover
            ? React.cloneElement(child, {
                // @ts-ignore
                onMenuHover,
                onMenuItemHover,
                isActiveMenu,
              })
            : displayName === 'AmSideBarMenuIcon' &&
              React.cloneElement(child, {
                // @ts-ignore
                onMenuHover,
                onMenuItemHover,
                isActiveMenu,
              })
          : child;
      })}
    </SidebarMenu>
  );
};

export const AmSideBarMenuIcon: React.FC<ISidebarMenuIcon> = ({
  children,
  onMenuItemHover,
  isActiveMenu,
  onMenuHover,
}) => {
  const childrenArray = React.Children.toArray(children);
  return (
    <SidebarMenuIconContainer
      $isActive={isActiveMenu}
      $onMenuHover={onMenuHover}
    >
      {childrenArray.map((child, index) => {
        const childElement = child as React.ReactElement;
        const displayName =
            // @ts-ignore
          childElement.type.displayName || childElement.type.name || 'Unknown';
        if (isActiveMenu) {
          if (displayName === 'AmSideBarMenuIconActive') {
            return (
              <SidebarMenuIcon key={`index${index}`}>{child}</SidebarMenuIcon>
            );
          }
        } else {
          if (onMenuItemHover) {
            if (displayName === 'AmSideBarMenuIconActive') {
              return (
                <SidebarMenuIcon key={`index${index}`}>{child}</SidebarMenuIcon>
              );
            }
          } else {
            if (displayName === 'AmSideBarMenuIconState') {
              return (
                <SidebarMenuIcon key={`index${index}`}>{child}</SidebarMenuIcon>
              );
            }
          }
        }
      })}
    </SidebarMenuIconContainer>
  );
};

export const AmSideBarMenuIconState: React.FC<ISidebarMenuIconState> = ({
  children,
}) => {
  return <SidebarMenuIcon>{children}</SidebarMenuIcon>;
};

export const AmSideBarMenuIconActive: React.FC<ISidebarMenuIconState> = ({
  children,
}) => {
  return <SidebarMenuIcon>{children}</SidebarMenuIcon>;
};

export const AmSideBarMenuText: React.FC<ISidebarMenuText> = ({
  children,
  isActiveMenu,
}) => {
  return <SidebarMenuText $isActive={isActiveMenu}>{children}</SidebarMenuText>;
};

export const AmSideBarMenuChild: React.FC<ISideBarMenuChild> = ({
  children,
}) => {
  return <SideBarMenuChildStyle>{children}</SideBarMenuChildStyle>;
};

export const AmSideBarMenuChildItem: React.FC<ISideBarMenuChildItem> = ({
  children,
  onClick,
}) => {
  return (
    <SideBarMenuChildItemStyle>
      <SideBarMenuChildItemTextStyle>{children}</SideBarMenuChildItemTextStyle>
    </SideBarMenuChildItemStyle>
  );
};
