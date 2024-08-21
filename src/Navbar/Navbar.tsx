import React from 'react';
import { INavbar } from './Navbar.types';
import { NavbarStyles } from './Navbar.styles';

const NavbarComponent: React.FC<INavbar> = ({ children }) => {
  return <NavbarStyles>{React.Children.toArray(children)}</NavbarStyles>;
};

NavbarComponent.displayName = 'AmSidebar';
export default NavbarComponent;
