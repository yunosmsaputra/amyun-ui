import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const MonthPickerStyles = styled.div`
  position: relative;
`;

export const MonthPickerContainerStyles = styled.div<{
  $emptyValue?: boolean;
  $disabled?: boolean;
  $onFocused?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px 8px 12px;
  line-height: 16px;
  font-size: 12px;
  border: 1px solid
    ${(props) =>
      props.$onFocused ? blueColorLib.border : neutralColorLib.stroke};
  border-radius: 6px;
  color: ${(props) =>
    props.$emptyValue ? neutralColorLib.textField : neutralColorLib.black};
  background-color: ${(props) =>
    props.$disabled ? neutralColorLib.disbled : neutralColorLib.white};
  cursor: ${(props) => (props.$disabled ? 'default' : 'pointer')};
`;

export const MonthPickerPopupStyles = styled.div<{
  $position?: string;
}>`
  z-index: 20;
  position: absolute;
  width: 306px;
  background-color: ${neutralColorLib.white};
  border: 1px solid ${neutralColorLib.stroke};
  border-radius: 8px;
  ${(props) =>
    (props.$position === 'top-left' || props.$position === 'bottom-left') &&
    `
  bottom: 38px;
      left: 0;
    `};
  ${(props) =>
    (props.$position === 'top-right' || props.$position === 'bottom-right') &&
    `
  top: 38px;
      right: 0;
    `};
  box-shadow: 0 12px 19px 0 rgba(143, 143, 143, 0.32);
`;

export const MonthPickerPoupTitleStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: ${neutralColorLib.black};
  font-weight: 600;
  padding: 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid ${neutralColorLib.stroke};
`;

export const MonthPickerPopupSelectionContainerStyles = styled.div`
  display: flex;
  gap: 4px;
`;

export const MonthPickerPopupSelectionButtonStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${neutralColorLib.stroke};
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
`;

export const MonthPickerPopupListMonthStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`;

export const MonthPickerPopupMonthStyles = styled.div<{
  $active?: boolean;
  $monthNow?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: ${neutralColorLib.black};
  width: 72px;
  height: 48px;
  background-color: ${(props) =>
    props.$active ? blueColorLib.main : neutralColorLib.white};
  color: ${(props) =>
    props.$active
      ? neutralColorLib.white
      : props.$monthNow
        ? blueColorLib.main
        : neutralColorLib.black};
  font-weight: ${(props) =>
    props.$active || props.$monthNow ? 600 : 'normal'};
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.$active ? blueColorLib.main : blueColorLib.surface};
    color: ${(props) =>
      props.$active ? neutralColorLib.white : blueColorLib.main};
    font-weight: 600;
  }
`;

export const MonthPickerPopupActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  border-top: 1px solid ${neutralColorLib.stroke};
`;
