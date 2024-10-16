import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const AutocompleteStyles = styled.div`
  position: relative;
`;

export const AutocompleteMultiStyles = styled.div<{
  $isFocused?: boolean;
  $isEmpty?: boolean;
  $disabled?: boolean;
}>`
  display: flex;
  gap: 6px;
  width: 100%;
  border-radius: 8px;
  padding: ${(props) =>
    props.$isEmpty ? '4px 10px 5px 12px' : '8px 10px 8px 12px'};
  border: 1px solid
    ${(props) =>
      props.$isFocused ? blueColorLib.border : neutralColorLib.stroke};
  background-color: ${(props) =>
    props.$disabled ? neutralColorLib.disbled : neutralColorLib.white};
`;

export const AutocompleteMultiInputStyles = styled.input`
  outline: none;
  font-size: 12px;
  color: ${neutralColorLib.black};
  line-height: 16px;
`;

export const AutocompleteChipSelectedStyles = styled.div`
  font-size: 10px;
  background-color: ${blueColorLib.surface};
  border: 1px solid ${blueColorLib.border};
  color: ${blueColorLib.main};
  display: block;
  padding: 3px 16px 3px 6px;
  border-radius: 100px;
  position: relative;
`;

export const AutocompletePopupStyles = styled.div<{
  $isFocused?: boolean;
}>`
  background-color: ${neutralColorLib.white};
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 12px 19px 0 rgba(143, 143, 143, 0.32);
  border: 1px solid ${neutralColorLib.stroke};
  position: absolute;
  top: 38px;
  max-height: 160px;
  overflow-y: auto;
  z-index: 20;
`;

export const AutocompleteListStyles = styled.div<{
  $noHover?: boolean;
}>`
  font-size: 12px;
  color: ${neutralColorLib.black};
  padding: 4px 12px;
  ${(props) =>
    !props.$noHover
      ? `
      &:hover {
    background-color: ${blueColorLib.surface};
    cursor: pointer;
  }
    `
      : `
      cursor: pointer;
    `}
`;
