import styled from 'styled-components';
import { neutralColorLib } from '../color';

export const BoxStyles = styled.div<{
  $background?: string;
  $width?: number;
  $height?: number;
  $scrollX?: boolean;
  $scrollY?: boolean;
}>`
  background: ${(props) => props.$background ?? neutralColorLib.white};
  width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
  height: ${(props) => (props.$height ? `${props.$height}px` : '100%')};
  overflow-y: ${(props) => (props.$scrollY ? 'auto' : 'unset')};
  overflow-x: ${(props) => (props.$scrollX ? 'auto' : 'unset')};
`;
