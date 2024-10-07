import {
  TextBoxAppendInner,
  TextboxContainer,
  TextBoxPrependInner,
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
  type = 'text',
  disabled,
  defaultValue,
}) => {
  // @ts-ignore
  const hasPrepend = React.Children.toArray(children).some(
    (child) => (child as any)?.type?.name === 'AmTextBoxPrependInner',
  );
  // @ts-ignore
  const hasAppend = React.Children.toArray(children).some(
    (child) => (child as any)?.type?.name === 'AmTextBoxAppendInner',
  );
  console.log(hasPrepend);
  return (
    <TextboxContainer style={style} className={className}>
      <TextboxStyle
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        $hasPrepend={hasPrepend}
        $hasAppend={hasAppend}
        defaultValue={defaultValue}
        $disabled={disabled}
        disabled={disabled}
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
  return (
    <TextBoxPrependInner onClick={onClick}>{children}</TextBoxPrependInner>
  );
};

export const AmTextBoxAppendInner: React.FC<ITextboxPrependInner> = ({
  children,
  onClick,
}) => {
  return <TextBoxAppendInner onClick={onClick}>{children}</TextBoxAppendInner>;
};
