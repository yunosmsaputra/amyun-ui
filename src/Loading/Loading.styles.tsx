import styled, { keyframes } from 'styled-components';
import { neutralColorLib } from '../color';

const keyFramesDefault = keyframes`
    100% {
        transform: rotate(1turn);
    }
`;

export const LoadingStyles = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const LoadingContainerStyles = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: ${neutralColorLib.black};
  box-shadow:
    22px 0 0 0,
    calc(0.707 * 22px) calc(0.707 * 22px) 0 1px,
    0 22px 0 2px,
    calc(-0.707 * 22px) calc(0.707 * 22px) 0 3px,
    -22px 0 0 4px,
    calc(-0.707 * 22px) calc(-0.707 * 22px) 0 5px,
    0 -22px 0 6px;
  animation: ${keyFramesDefault} 1s infinite steps(8);
`;
