import styled from 'styled-components';
import {
  blueColorLib,
  greenColorLib,
  neutralColorLib,
  redColorLib,
  yellowColorLib,
} from '../color';

export const CounterCardStyles = styled.div<{
  $color?: string;
}>`
  position: relative;
  padding: 12px 12px 8px;
  border-radius: 8px;
  background-color: ${neutralColorLib.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:after {
    content: '';
    position: absolute;
    height: 4px;
    background-color: ${(props) =>
      props.$color === 'blue'
        ? blueColorLib.main
        : props.$color === 'green'
          ? greenColorLib.main
          : props.$color === 'red'
            ? redColorLib.main
            : props.$color === 'yellow'
              ? yellowColorLib.main
              : props.$color === 'purple'
                ? '#B73EF0'
                : '#4D5E80'};
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    bottom: -4px;
    left: 0;
  }
`;

export const CounterCardIcon = styled.div<{
  $color?: string;
}>`
  background-color: ${(props) =>
    props.$color === 'blue'
      ? blueColorLib.surface
      : props.$color === 'green'
        ? greenColorLib.surface
        : props.$color === 'red'
          ? redColorLib.surface
          : props.$color === 'yellow'
            ? yellowColorLib.surface
            : props.$color === 'purple'
              ? '#F7EDFC'
              : neutralColorLib.background};
  color: ${(props) =>
    props.$color === 'blue'
      ? blueColorLib.main
      : props.$color === 'green'
        ? greenColorLib.main
        : props.$color === 'red'
          ? redColorLib.main
          : props.$color === 'yellow'
            ? yellowColorLib.main
            : props.$color === 'purple'
              ? '#B73EF0'
              : neutralColorLib.label};
  font-weight: 600;
  font-size: 12px;
  border-radius: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AmCounterCardDataStyles = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  column-gap: 6px;
`;

export const CounterCardTitleStyles = styled.div`
  font-size: 12px;
  color: ${neutralColorLib.label};
  font-weight: 600;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const CounterCardDataContentStyles = styled.div<{
  $color?: string;
}>`
  font-size: 18px;
  color: ${neutralColorLib.label};
  font-weight: 600;
  color: ${(props) =>
    props.$color === 'blue'
      ? blueColorLib.main
      : props.$color === 'green'
        ? greenColorLib.main
        : props.$color === 'red'
          ? redColorLib.main
          : props.$color === 'yellow'
            ? yellowColorLib.main
            : props.$color === 'purple'
              ? '#B73EF0'
              : neutralColorLib.label};
`;

export const CounterCardSummaryStyles = styled.div`
  font-size: 14px;
  color: ${neutralColorLib.textField};
`;
