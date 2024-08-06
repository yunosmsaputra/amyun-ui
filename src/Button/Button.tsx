import React from 'react';
import { IButton } from './Button.types';
import Icon from '../Icon/Icon';

const ButtonComponent: React.FC<IButton> = ({
  label,
  color,
  variant,
  prependIcon,
  iconColor,
  iconSize,
  iconGap,
  appendIcon,
  onClick,
  style,
}) => {
  const defaultStyle = {
    padding: '8px',
    fontSize: '12px',
    fontWeight: '600',
    background:
      variant === 'solid'
        ? color === 'primary'
          ? '#2671D9'
          : color === 'danger'
            ? '#FF5656'
            : '#E5E7E9'
        : '#FFFFFF',
    color:
      variant === 'solid'
        ? color === 'light-grey'
          ? '#7F7F80'
          : '#FFFFFF'
        : color === 'primary'
          ? '#2671D9'
          : '#FF5656',
    border: `${variant === 'text' ? 'none' : `1px solid ${color === 'primary' ? '#2671D9' : color === 'danger' ? '#FF5656' : '#E5E7E9'}`}`,
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
  };

  const styles: React.CSSProperties = {
    ...defaultStyle,
    ...style,
  };
  return (
    <button style={styles} onClick={onClick}>
      {prependIcon && (
        <div
          style={{
            margin: `0 ${iconGap ? `${iconGap}px` : 0} 0 0`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            color={iconColor ? iconColor : '#FFF'}
            name={prependIcon}
            size={iconSize ? iconSize : 14}
          ></Icon>
        </div>
      )}
      {label}
      {appendIcon && (
        <div
          style={{
            margin: `0  0 0 ${iconGap ? `${iconGap}px` : 0}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            color={iconColor ? iconColor : '#FFF'}
            name={appendIcon}
            size={iconSize ? iconSize : 14}
          ></Icon>
        </div>
      )}
    </button>
  );
};

ButtonComponent.displayName = 'AmButton';
export default ButtonComponent;
