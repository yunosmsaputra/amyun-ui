import styled from 'styled-components';
import {
  blueColorLib,
  greenColorLib,
  neutralColorLib,
  redColorLib,
} from '../color';

export const CounterCardStyles = styled.div<{
  $color?: string;
}>`
  position: relative;
  padding: 12px 12px 8px;
  border-radius: 8px;
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
  padding: 12px;
  background-color: ${(props) =>
    props.$color === 'blue'
      ? blueColorLib.surface
      : props.$color === 'green'
        ? greenColorLib.surface
        : props.$color === 'red'
          ? redColorLib.surface
          : neutralColorLib.background};
  border-radius: 8px;
`;
