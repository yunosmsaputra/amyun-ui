import React from 'react';
import { IButton } from './Button.types';
import Icon from '../Icon/Icon';
import { ButtonStyles } from './Button.styles';

const ButtonComponent: React.FC<IButton> = ({
  type,
  color,
  size = 'md',
  prependIcon,
  iconColor,
  iconSize,
  btnIcon,
  appendIcon,
  disabled,
  onClick,
  style,
  children,
  className,
}) => {
  const handleClick = () => {
    onClick && onClick();
  };
  return (
    <ButtonStyles
      $type={type}
      $color={color}
      $size={size}
      $appendIcon={appendIcon ? true : false}
      $prependIcon={prependIcon ? true : false}
      $btnIcon={btnIcon}
      style={style}
      disabled={disabled}
      className={className}
      onClick={handleClick}
    >
      {prependIcon && (
        <Icon
          color={iconColor ? iconColor : '#FFF'}
          name={prependIcon}
          size={iconSize ? iconSize : 14}
          isBox={false}
          className={'icon-button'}
        ></Icon>
      )}
      {btnIcon ? (
        <Icon color={iconColor} name={btnIcon} size={iconSize}></Icon>
      ) : (
        children
      )}
      {appendIcon && (
        <Icon
          color={iconColor ? iconColor : '#FFF'}
          name={appendIcon}
          size={iconSize ? iconSize : 14}
          style={{ marginLeft: '6px' }}
        ></Icon>
      )}
    </ButtonStyles>
  );
};

ButtonComponent.displayName = 'AmButton';
export default ButtonComponent;
