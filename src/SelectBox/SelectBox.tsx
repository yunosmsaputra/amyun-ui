import React, { useState } from 'react';
import {
  OptionBoxContainer,
  OptionBoxList,
  SelectboxContainer,
  SelectBoxStyles,
} from './Selectbox.styles';
import { ISelectBox } from './Selectbox.types';
import Text from '../Text/Text';

const SelectBoxComponent: React.FC<ISelectBox> = ({
  size = 'md',
  placeholder = 'Pilih salah satu',
  options = [],
  position = 'bottom',
  style,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const handleChange = (val: string) => {
    setValue(val);
    setIsOpen(false);
  };

  return (
    <SelectBoxStyles className={className} style={style}>
      <SelectboxContainer
        $size={size}
        $open={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {value ? (
          <Text color={'#333'} size={size === 'md' ? 14 : 12}>
            {value}
          </Text>
        ) : (
          <Text color={'#9C9C9C'} size={size === 'md' ? 14 : 12}>
            {placeholder}
          </Text>
        )}
      </SelectboxContainer>
      <OptionBoxContainer $size={size} $open={isOpen} $position={position}>
        {options.length > 0 ? (
          options.map((value: any, index: number) => (
            <OptionBoxList
              $size={size}
              onClick={() => {
                handleChange(value);
              }}
              key={`option${index}`}
            >
              {value}
            </OptionBoxList>
          ))
        ) : (
          <OptionBoxList $size={size} $nodata>
            Tidak ada data
          </OptionBoxList>
        )}
      </OptionBoxContainer>
    </SelectBoxStyles>
  );
};

SelectBoxComponent.displayName = 'AmSelectbox';
export default SelectBoxComponent;
