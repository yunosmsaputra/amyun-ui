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
  activeMenuChild,
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
              activeMenuChild,
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
        const displayName =
          // @ts-ignore
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
  activeMenuChild,
}) => {
  const [onMenuItemHover, setOnMenuItemHover] = useState<boolean>(false);
  const [isActiveMenu, setOnIsActiveMenu] = useState<boolean>(false);
  const [openChild, setOpenChild] = useState<boolean>(false);
  const onMouseEnter = () => {
    setOnMenuItemHover(true);
  };
  const onMouseLeave = () => {
    setOnMenuItemHover(false);
  };
  useEffect(() => {
    if (activeMenu?.toLowerCase() === menuIndex?.toLowerCase()) {
      setOnIsActiveMenu(true);
      const childrenArray = React.Children.toArray(children);
      const haveChild = childrenArray.some(
        (child) =>
          // @ts-ignore
          child.type.displayName === 'AmSideBarMenuChild' ||
          // @ts-ignore
          child.type.name === 'AmSideBarMenuChild',
      );
      if (haveChild) {
        setOpenChild(true);
      } else {
        setOpenChild(false);
      }
    } else {
      setOnIsActiveMenu(false);
      setOpenChild(false);
    }
  }, [activeMenu]);
  const handleClick = () => {
    const childrenArray = React.Children.toArray(children);
    const haveChild = childrenArray.some(
      (child) =>
        // @ts-ignore
        child.type.displayName === 'AmSideBarMenuChild' ||
        // @ts-ignore
        child.type.name === 'AmSideBarMenuChild',
    );
    if (haveChild) {
      setOpenChild(!openChild);
    } else {
      onClick && onClick();
    }
  };
  return (
    <SidebarMenu
      $isActive={activeMenu?.toLowerCase() === menuIndex?.toLowerCase()}
      $onMenuHover={onMenuHover}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        handleClick();
      }}
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
                activeMenuChild,
                openChild,
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
  onMenuHover,
}) => {
  return (
    <SidebarMenuText
      $isActive={isActiveMenu}
      $onMenuHover={onMenuHover}
      className={'menuText'}
    >
      {children}
    </SidebarMenuText>
  );
};

export const AmSideBarMenuChild: React.FC<ISideBarMenuChild> = ({
  children,
  openChild,
  activeMenuChild,
}) => {
  return (
    <SideBarMenuChildStyle $show={openChild}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, {
              // @ts-ignore
              activeMenuChild,
            })
          : child;
      })}
    </SideBarMenuChildStyle>
  );
};

export const AmSideBarMenuChildItem: React.FC<ISideBarMenuChildItem> = ({
  children,
  onClick,
  menuIndex,
  activeMenuChild,
}) => {
  return (
    <SideBarMenuChildItemStyle
      $isActive={menuIndex?.toLowerCase() === activeMenuChild?.toLowerCase()}
    >
      <SideBarMenuChildItemTextStyle
        $isActive={menuIndex?.toLowerCase() === activeMenuChild?.toLowerCase()}
        onClick={onClick}
      >
        {children}
      </SideBarMenuChildItemTextStyle>
    </SideBarMenuChildItemStyle>
  );
};
