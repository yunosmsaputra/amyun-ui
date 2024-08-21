import { TextboxContainer, TextboxStyle } from './Textbox.style';
import React from 'react';
import { ITextbox } from './Textbox.types';

const TextBoxComponent: React.FC<ITextbox> = ({
  placeholder = 'Masukkan text',
  style,
}) => {
  return (
    <TextboxContainer style={style}>
      <TextboxStyle placeholder={placeholder}></TextboxStyle>
    </TextboxContainer>
  );
};

TextBoxComponent.displayName = 'AmTextbox';
export default TextBoxComponent;
