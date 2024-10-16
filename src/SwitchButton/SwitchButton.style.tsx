import styled, { keyframes } from 'styled-components';
import { greenColorLib, neutralColorLib } from '../color';

const slideRight = keyframes`
    from {
        transform: translateX(-7px);
    }
    to {
        transform: translateX(0px);
    }
`;

const slideLeft = keyframes`
    from {
        transform: translateX(7px);
    }
    to {
        transform: translateX(0px);
    }
`;

export const SwitchButtonStyle = styled.div<{
  $isActive: boolean;
}>`
  width: 28px;
  height: 16px;
  background: ${(props) =>
    props.$isActive ? greenColorLib.main : neutralColorLib.stroke};
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const SwitchButtonCircleStyle = styled.div<{
  $isActive: boolean;
}>`
  width: 12px;
  height: 12px;
  background: ${neutralColorLib.white};
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${(props) => (props.$isActive ? 13 : 3)}px;
  animation: ${(props) => (props.$isActive ? slideRight : slideLeft)} 0.3s ease;
`;
