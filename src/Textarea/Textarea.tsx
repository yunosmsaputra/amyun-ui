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
}) => {
  return (
    <TextareaStyles
      rows={row}
      placeholder={placeholder}
      value={value}
      name={name}
      style={style}
      onChange={onChange}
    ></TextareaStyles>
  );
};
export default TextAreaComponent;
