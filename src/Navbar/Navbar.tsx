import React from 'react';
import { INavbar } from './Navbar.types';
import { NavbarStyles } from './Navbar.styles';

const NavbarComponent: React.FC<INavbar> = ({ children }) => {
  return <NavbarStyles>{children}</NavbarStyles>;
};

NavbarComponent.displayName = 'AmSidebar';
export default NavbarComponent;
