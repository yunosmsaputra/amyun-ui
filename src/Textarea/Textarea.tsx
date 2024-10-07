import { TextareaStyles } from './Textarea.styles';
import React from 'react';
import { ITextarea } from './Textarea.types';

const TextAreaComponent: React.FC<ITextarea> = ({
  row = 3,
  placeholder = 'Placeholder',
  value,
  name,
  style,
  onChange,
  className,
  disabled,
  defaultValue,
}) => {
  return (
    <TextareaStyles
      rows={row}
      placeholder={placeholder}
      value={value}
      name={name}
      style={style}
      onChange={onChange}
      className={className}
      disabled={disabled}
      defaultValue={defaultValue}
      $disabled={disabled}
    ></TextareaStyles>
  );
};
export default TextAreaComponent;
