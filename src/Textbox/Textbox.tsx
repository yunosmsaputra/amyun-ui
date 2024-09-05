import { TextboxContainer, TextboxStyle } from './Textbox.style';
import React from 'react';
import { ITextbox } from './Textbox.types';

const TextBoxComponent: React.FC<ITextbox> = ({
  placeholder = 'Masukkan text',
  value,
  name,
  onChange,
  style,
}) => {
  return (
    <TextboxContainer style={style}>
      <TextboxStyle
        type={'text'}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      ></TextboxStyle>
    </TextboxContainer>
  );
};

TextBoxComponent.displayName = 'AmTextbox';
export default TextBoxComponent;
