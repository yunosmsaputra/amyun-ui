import React, { useEffect, useRef, useState } from 'react';
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
  value = 'Option 1',
  onChange,
  style,
  className,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valueSelect, setValue] = useState<string>('');

  const handleChange = (val: string) => {
    setValue(val);
    setIsOpen(false);
    onChange && onChange(val);
  };

  useEffect(() => {
    setValue(value);
  }, [value]);

  const useClickOutside = (handler: any) => {
    const domNode = useRef();

    useEffect(() => {
      const maybeHandler = (event: any) => {
        // @ts-ignore
        if (!domNode.current.contains(event.target)) {
          handler();
        }
      };

      document.addEventListener('mousedown', maybeHandler);

      return () => {
        document.removeEventListener('mousedown', maybeHandler);
      };
    });

    return domNode;
  };
  const domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <SelectBoxStyles
      className={className}
      style={style}
      // @ts-ignore
      ref={domNode}
    >
      <SelectboxContainer
        $size={size}
        $open={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {valueSelect ? (
          <Text color={'#333'} size={12}>
            {valueSelect}
          </Text>
        ) : (
          <Text color={'#9C9C9C'} size={12}>
            {placeholder}
          </Text>
        )}
      </SelectboxContainer>
      <OptionBoxContainer $size={size} $open={isOpen} $position={position}>
        {options.length > 0 ? (
          options.map((value: any, index: number) => (
            <OptionBoxList
              $size={size}
              $active={value === valueSelect}
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
