import React from 'react';
import { IButton } from './Button.types';
import Icon from '../Icon/Icon';
import { ButtonStyles } from './Button.styles';

const ButtonComponent: React.FC<IButton> = ({
  label,
  color,
  variant,
  prependIcon,
  iconColor,
  iconSize,
  btnIcon,
  appendIcon,
  onClick,
  style,
}) => {
  return (
    // <button style={styles} onClick={onClick}>
    //   {prependIcon && (
    //     <div
    //       style={{
    //         margin: `0 ${iconGap ? `${iconGap}px` : 0} 0 0`,
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}
    //     >
    //       <Icon
    //         color={iconColor ? iconColor : '#FFF'}
    //         name={prependIcon}
    //         size={iconSize ? iconSize : 14}
    //       ></Icon>
    //     </div>
    //   )}
    //   {label}
    //   {appendIcon && (
    //     <div
    //       style={{
    //         margin: `0  0 0 ${iconGap ? `${iconGap}px` : 0}`,
    //         display: 'flex',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}
    //     >
    //       <Icon
    //         color={iconColor ? iconColor : '#FFF'}
    //         name={appendIcon}
    //         size={iconSize ? iconSize : 14}
    //       ></Icon>
    //     </div>
    //   )}
    // </button>
    <ButtonStyles
      $color={color}
      $variant={variant}
      style={style}
      onClick={onClick}
    >
      {prependIcon && (
        <Icon
          color={iconColor ? iconColor : '#FFF'}
          name={prependIcon}
          size={iconSize ? iconSize : 14}
          className={'icon-button'}
        ></Icon>
      )}
      {btnIcon ? (
        <Icon color={iconColor} name={btnIcon} size={8}></Icon>
      ) : (
        label
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
