import React, { useState } from 'react';
import { IButton } from './Button.types';
import Icon from '../Icon/Icon';
import {
  ButtonContainer,
  ButtonPopup,
  ButtonPopupList,
  ButtonStyles,
} from './Button.styles';

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
  popup,
  popupWidth,
  popupActionList,
  style,
  children,
}) => {
  const [onShowPopup, setOnShowPopup] = useState<boolean>(false);
  const handleClick = () => {
    if (popup) {
      setOnShowPopup(true);
    }
    onClick && onClick();
  };
  return (
    <ButtonContainer
      onClick={() => {
        handleClick();
      }}
    >
      <ButtonStyles
        $type={type}
        $color={color}
        $size={size}
        $appendIcon={appendIcon ? true : false}
        $prependIcon={prependIcon ? true : false}
        $btnIcon={btnIcon}
        style={style}
        onClick={onClick}
        disabled={disabled}
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
      {popup && onShowPopup && (
        <ButtonPopup $width={popupWidth}>
          {popupActionList?.map((value, index) => (
            <ButtonPopupList key={`indexpopup${index}`}>
              {value}
            </ButtonPopupList>
          ))}
        </ButtonPopup>
      )}
    </ButtonContainer>
  );
};

ButtonComponent.displayName = 'AmButton';
export default ButtonComponent;
