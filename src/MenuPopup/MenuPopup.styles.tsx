import styled from 'styled-components';
import { neutralColorLib } from '../color';

export const MenuPopupStyles = styled.div`
  position: relative;
`;

export const MenuPoupActivatorStyles = styled.div``;

export const MenuPopupContentStyles = styled.div<{
  $isShow?: boolean;
  $width?: string;
  $top?: string;
  $bottom?: string;
  $left?: string;
  $right?: string;
}>`
  display: ${(props) => (props.$isShow ? 'block' : 'none')};
  background: ${neutralColorLib.white};
  border: 1px solid ${neutralColorLib.stroke};
  border-radius: 8px;
  position: absolute;
  width: ${(props) => props.$width ?? 'auto'};
  top: ${(props) => (props.$top ? props.$top : 'unset')};
  bottom: ${(props) => (props.$bottom ? props.$bottom : 'unset')};
  right: ${(props) => (props.$right ? props.$right : 'unset')};
  left: ${(props) => (props.$left ? props.$left : 'unset')};
  z-index: 5;
`;
