import React from 'react';
import { IAvatar } from './Avatar.types';

const AvatarComponent: React.FC<IAvatar> = ({
  color,
  size,
  children,
  style,
  className,
}) => {
  const defaultStyle = {
    background: color ? color : '#FFF',
    width: size ? (size === 'small' ? 16 : size === 'medium' ? 24 : 32) : 24,
    height: size ? (size === 'small' ? 16 : size === 'medium' ? 24 : 32) : 24,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: size ? (size === 'small' ? 8 : size === 'medium' ? 10 : 18) : 10,
    fontWeight: 600,
  };
  const styles = {
    ...defaultStyle,
    ...style,
  };
  return (
    <div style={styles} className={className}>
      {children}
    </div>
  );
};

AvatarComponent.displayName = 'AmAvatar';
export default AvatarComponent;
