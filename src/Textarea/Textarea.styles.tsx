import styled from 'styled-components';
import {blueColorLib, neutralColorLib} from '../color';

export const TextareaStyles = styled.textarea<{}>`
  width: 100%;
  outline: none;
  border: 1px solid ${neutralColorLib.stroke};
  border-radius: 6px;
  font-size: 12px;
  line-height: 16px;
  padding: 8px 10px 8px 12px;
  resize: none;
  color: ${neutralColorLib.black};
  &::placeholder {
    color: ${neutralColorLib.textField};
  }
    &:focus {
        border-color: ${blueColorLib.border};
    }
`;
