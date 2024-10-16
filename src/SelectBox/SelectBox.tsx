import React, { useEffect, useRef, useState } from 'react';
import {
  OptionBoxContainer,
  OptionBoxList,
  SelectboxContainer,
  SelectBoxStyles,
} from './Selectbox.styles';
import { ISelectBox } from './Selectbox.types';
import Text from '../Text/Text';
import { neutralColorLib } from '../color';

const SelectBoxComponent: React.FC<ISelectBox> = ({
  size = 'md',
  placeholder = 'Pilih salah satu',
  options = [],
  position = 'bottom',
  value,
  text,
  name,
  onChange,
  style,
  className,
  disabled,
  id = 'id',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [valueSelect, setValueSelect] = useState<any | null>(null);

  const handleOpenPopup = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleChange = (val: any) => {
    setValueSelect(val);
    setIsOpen(false);
    const params = {
      target: {
        name: name,
        value: val,
      },
    };
    onChange && onChange(params);
  };

  useEffect(() => {
    if (value) {
      setValueSelect(value);
    } else {
      setValueSelect('');
    }
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
        $disabled={disabled}
        onClick={() => {
          handleOpenPopup();
        }}
      >
        {valueSelect === undefined ||
        valueSelect === null ||
        valueSelect === '' ? (
          <Text color={'#9C9C9C'} size={12}>
            {placeholder}
          </Text>
        ) : (
          <Text
            color={
              typeof valueSelect === 'object'
                ? valueSelect[id] === '' || valueSelect[id] === null
                  ? neutralColorLib.textField
                  : neutralColorLib.black
                : neutralColorLib.black
            }
            size={12}
          >
            {typeof valueSelect === 'object'
              ? valueSelect[id] === '' || valueSelect[id] === null
                ? placeholder
                : //@ts-ignore
                  valueSelect[text]
              : valueSelect
                ? valueSelect
                : placeholder}
          </Text>
        )}
      </SelectboxContainer>
      <OptionBoxContainer $size={size} $open={isOpen} $position={position}>
        {options.length > 0 ? (
          options.map((value: any, index: number) => (
            <OptionBoxList
              $size={size}
              $active={
                valueSelect !== null && typeof valueSelect === 'object'
                  ? value[id] === valueSelect[id]
                  : value === valueSelect
              }
              onClick={() => {
                handleChange(value);
              }}
              key={`option${index}`}
            >
              {typeof value === 'object'
                ? //@ts-ignore
                  value[text]
                : value}
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
