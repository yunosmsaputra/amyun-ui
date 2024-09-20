import {
  MenuPopupContentStyles,
  MenuPopupStyles,
  MenuPoupActivatorStyles,
} from './MenuPopup.styles';
import React, { useEffect, useRef, useState } from 'react';
import {
  IMenuPopupActivator,
  IMenuPopupContent,
  IMenuPoup,
} from './MenuPopup.types';

const AmMenuPopup: React.FC<IMenuPoup> = ({ children }) => {
  const [isShow, setShow] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleContent = () => {
    setShow(true);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <MenuPopupStyles ref={menuRef}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            // @ts-ignore
            toggleContent,
            isShow,
          });
        }
        return child;
      })}
    </MenuPopupStyles>
  );
};

export default AmMenuPopup;

export const AmMenuPopupActivator: React.FC<IMenuPopupActivator> = ({
  toggleContent,
  children,
  ref,
}) => {
  return (
    <MenuPoupActivatorStyles onClick={toggleContent} ref={ref}>
      {children}
    </MenuPoupActivatorStyles>
  );
};

export const AmMenuPopupContent: React.FC<IMenuPopupContent> = ({
  isShow,
  width,
  top,
  bottom,
  left,
  right,
  children,
}) => {
  return (
    <MenuPopupContentStyles
      $isShow={isShow}
      $width={width}
      $top={top}
      $bottom={bottom}
      $right={right}
      $left={left}
    >
      {children}
    </MenuPopupContentStyles>
  );
};
