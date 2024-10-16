import React from 'react';
import { INavbar } from './Navbar.types';
import { NavbarStyles } from './Navbar.styles';

const NavbarComponent: React.FC<INavbar> = ({ children, style }) => {
  return <NavbarStyles style={style}>{children}</NavbarStyles>;
};

NavbarComponent.displayName = 'AmSidebar';
export default NavbarComponent;
