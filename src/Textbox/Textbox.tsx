import {
  TextBoxAppendInner,
  TextboxContainer,
  TextboxStyle,
} from './Textbox.style';
import React from 'react';
import { ITextbox, ITextboxPrependInner } from './Textbox.types';

const TextBoxComponent: React.FC<ITextbox> = ({
  placeholder = 'Masukkan text',
  value,
  name,
  onChange,
  style,
  children,
  className,
}) => {
  return (
    <TextboxContainer style={style} className={className}>
      <TextboxStyle
        type={'text'}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
      ></TextboxStyle>
      {children}
    </TextboxContainer>
  );
};

TextBoxComponent.displayName = 'AmTextbox';
export default TextBoxComponent;

export const AmTextBoxPrependInner: React.FC<ITextboxPrependInner> = ({
  children,
  onClick,
}) => {
  return <TextBoxAppendInner onClick={onClick}>{children}</TextBoxAppendInner>;
};
