import {
  SwitchButtonCircleStyle,
  SwitchButtonStyle,
} from './SwitchButton.style';
import React, { useEffect, useState } from 'react';
import { ISwitchButton } from './SwitchButton.types';

const SwitchButtonComponent: React.FC<ISwitchButton> = ({
  value,
  onChange,
  disabled,
  name,
  className,
  readonly,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleClick = () => {
    setIsActive(!isActive);
    let params = {
      target: {
        name: name,
        value: !isActive,
      },
    };
    onChange && onChange(params);
  };
  useEffect(() => {
    setIsActive(value ?? false);
  }, [value]);
  return (
    <SwitchButtonStyle
      $isActive={isActive}
      onClick={() => {
        handleClick();
      }}
    >
      <SwitchButtonCircleStyle $isActive={isActive}></SwitchButtonCircleStyle>
    </SwitchButtonStyle>
  );
};

SwitchButtonComponent.displayName = 'AmSwitchButton';
export default SwitchButtonComponent;
