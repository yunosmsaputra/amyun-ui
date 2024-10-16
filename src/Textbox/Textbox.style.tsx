import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const TextboxContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;
export const TextboxStyle = styled.input<{
  $hasPrepend?: boolean;
  $hasAppend?: boolean;
  $disabled?: boolean;
}>`
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e5e7e9;
  padding: 8px ${(props) => (props.$hasAppend ? '30px' : '10px')} 8px
    ${(props) => (props.$hasPrepend ? '30px' : '12px')};
  border-radius: 6px;
  font-size: 12px;
  line-height: 16px;
  color: #333;
  background-color: ${(props) =>
    props.$disabled ? neutralColorLib.disbled : neutralColorLib.white};
  &::placeholder {
    color: #9c9c9c;
  }
  &:focus {
    border-color: ${blueColorLib.border};
  }
`;

export const TextBoxAppendInner = styled.div`
  position: absolute;
  right: 10px;
  top: 12px;
`;

export const TextBoxPrependInner = styled.div`
  position: absolute;
  left: 10px;
  top: 12px;
`;
