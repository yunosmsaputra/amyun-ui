import styled from 'styled-components';
import { blueColorLib, neutralColorLib, redColorLib } from '../color';

export const DatePickerStyle = styled.div`
  position: relative;
`;

export const DatePickerContainer = styled.div<{
  $noValue: boolean;
}>`
  border: 1px solid ${neutralColorLib.stroke};
  font-size: 12px;
  padding: 8px 10px 8px 12px;
  border-radius: 8px;
  line-height: 16px;
  color: ${(props) =>
    props.$noValue ? neutralColorLib.textField : neutralColorLib.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const DatePickerPopup = styled.div<{
  $isShow: boolean;
}>`
  position: absolute;
  z-index: 10;
  background-color: ${neutralColorLib.white};
  border: 1px solid ${neutralColorLib.stroke};
  border-radius: 8px;
  top: 42px;
  width: 314px;
  display: ${(props) => (props.$isShow ? 'block' : 'none')};
`;

export const DatePickerYearMonthInfo = styled.div`
  padding: 16px 16px 12px;
  border-bottom: 1px solid ${neutralColorLib.stroke};
`;

export const DatePickerSelection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${neutralColorLib.stroke};
`;

export const DatePickerSelectionMonthYear = styled.div`
  display: flex;
  gap: 16px;
`;

export const DatePickerSelectbox = styled.div`
  color: ${neutralColorLib.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const DatePickerSelectionButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DatePickerSelectionButton = styled.button`
  height: 24px;
  width: 24px;
  background-color: ${neutralColorLib.stroke};
  border-radius: 4px;
  outline: none;
  border: 0;
`;

export const DatePickerList = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 8px;
  flex-wrap: wrap;
`;

export const DatePickerListDay = styled.div<{
  $isSunday?: boolean;
  $isNow?: boolean;
  $isDate?: boolean;
  $isSelected?: boolean;
}>`
  width: 40px;
  height: 40px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$isSelected
      ? neutralColorLib.white
      : props.$isSunday
        ? redColorLib.main
        : props.$isNow
          ? blueColorLib.main
          : neutralColorLib.black};
  font-weight: ${(props) =>
    props.$isNow || props.$isSelected ? 600 : 'normal'};
  background-color: ${(props) =>
    props.$isSelected ? blueColorLib.main : neutralColorLib.white};
  border-radius: 8px;
  &:hover {
    cursor: ${(props) => (props.$isDate ? 'pointer' : 'unset')};
    background: ${(props) =>
      props.$isSelected
        ? blueColorLib.main
        : props.$isDate
          ? blueColorLib.surface
          : 'unset'};
    border-radius: 8px;
  }
`;

export const DatePickerActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 12px 16px;
  border-top: 1px solid ${neutralColorLib.stroke};
`;
