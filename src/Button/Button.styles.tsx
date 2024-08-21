import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const ButtonContainer = styled.div`
  position: relative;
`;

export const ButtonStyles = styled.button<{
  $type?: string;
  $color?: string;
  $variant?: string;
  $size?: string;
  $appendIcon?: boolean;
  $prependIcon?: boolean;
  $btnIcon?: string;
  additionalClass?: string;
}>`
  padding: ${(props) =>
    props.$btnIcon
      ? '6px'
      : props.$appendIcon && props.$prependIcon
        ? props.$size === 'sm'
          ? '6px'
          : props.$size === 'md'
            ? '8px'
            : '8px 12px'
        : props.$appendIcon
          ? props.$size === 'sm'
            ? '6px 6px 6px 10px'
            : props.$size === 'md'
              ? '8px 8px 8px 12px'
              : '8px 12px 8px 16px'
          : props.$prependIcon
            ? props.$size === 'sm'
              ? '6px 10px 6px 6px'
              : props.$size === 'md'
                ? '8px 12px 8px 8px'
                : '8px 16px 8px 12px'
            : props.$size === 'sm'
              ? '6px 10px'
              : props.$size === 'md'
                ? '8px 12px'
                : '8px 16px'};
  font-size: ${(props) => (props.$size === 'lg' ? '14px' : '12px')};
  font-weight: 600;
  border-radius: 6px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.$btnIcon
      ? '#E5E7E9'
      : props.$type === 'fill'
        ? props.$color === 'blue'
          ? '#2671D9'
          : props.$color === 'red'
            ? '#FF5656'
            : props.$color === 'green'
              ? '#0EA976'
              : props.$color === 'yellow'
                ? '#F08800'
                : '#FFFFFF'
        : props.$type === 'ghost'
          ? '#FFFFFF'
          : 'transparent'};
  color: ${(props) =>
    props.$type === 'fill'
      ? props.$color
        ? '#FFFFFF'
        : '#7F7F80'
      : props.$color === 'blue'
        ? '#2671D9'
        : props.$color === 'red'
          ? '#FF5656'
          : props.$color === 'green'
            ? '#0EA976'
            : props.$color === 'yellow'
              ? '#F08800'
              : '#7F7F80'};
  border: 1px solid
    ${(props) =>
      props.$type === 'fill' || props.$type === 'ghost'
        ? props.$color === 'blue'
          ? '#2671D9'
          : props.$color === 'red'
            ? '#FF5656'
            : props.$color === 'green'
              ? '#0EA976'
              : props.$color === 'yellow'
                ? '#F08800'
                : 'transparent'
        : 'transparent'};
  line-height: ${(props) => (props.$size === 'lg' ? '18px' : '16px')};
  .icon-button {
    margin-right: 6px;
  }
  &:hover {
    background-color: ${(props) =>
      props.$btnIcon
        ? '#E5E7E9'
        : props.$type === 'fill'
          ? props.$color === 'blue'
            ? '#1D56A5'
            : props.$color === 'red'
              ? '#C24C4C'
              : props.$color === 'green'
                ? '#138A63'
                : props.$color === 'yellow'
                  ? '#D27600'
                  : 'transparent'
          : props.$type === 'ghost'
            ? props.$color === 'blue'
              ? '#E9F1FB'
              : props.$color === 'red'
                ? '#FFEEEE'
                : props.$color === 'green'
                  ? '#E7F6F1'
                  : props.$color === 'yellow'
                    ? '#FEF3E5'
                    : 'transparent'
            : 'transparent'};
    border: 1px solid
      ${(props) =>
        props.$btnIcon
          ? '#E5E7E9'
          : props.$type === 'fill'
            ? props.$color === 'blue'
              ? '#1D56A5'
              : props.$color === 'red'
                ? '#C24C4C'
                : props.$color === 'green'
                  ? '#138A63'
                  : props.$color === 'yellow'
                    ? '#D27600'
                    : 'transparent'
            : props.$type === 'ghost'
              ? props.$color === 'blue'
                ? '#2671D9'
                : props.$color === 'red'
                  ? '#FF5656'
                  : props.$color === 'green'
                    ? '#0EA976'
                    : props.$color === 'yellow'
                      ? '#F08800'
                      : 'transparent'
              : props.$type === 'nude'
                ? 'transparent'
                : '#BAD1F3'};
    color: ${(props) =>
      props.$type === 'nude'
        ? props.$color === 'blue'
          ? '#1D56A5'
          : props.$color === 'red'
            ? '#C24C4C'
            : props.$color === 'green'
              ? '#138A63'
              : props.$color === 'yellow'
                ? '#D27600'
                : '#333'
        : !props.$type
          ? '#2671D9'
          : ''};
  }
  &:disabled {
    background-color: ${(props) =>
      props.$type === 'ghost' || props.$type === 'nude'
        ? 'transparent'
        : '#7F7F80'};
    color: ${(props) =>
      props.$type === 'ghost' || props.$type === 'nude'
        ? '#7F7F80'
        : '#E0E0E0'};
    border-width: 1px;
    border-style: solid;
    border-color: ${(props) =>
      props.$type === 'nude'
        ? 'transparent'
        : props.$type === 'ghost'
          ? '#E0E0E0'
          : '#7F7F80'};
  }
`;

export const ButtonPopup = styled.div<{
  $width?: number;
  $position?: string;
}>`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.63);
  -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.63);
  position: absolute;
  margin-top: 4px;
  left: ${(props) => (props.$position === 'left' ? 0 : 'unset')};
  right: ${(props) => (props.$position === 'left' ? 0 : 'unset')};
  width: ${(props) => (props.$width ? `${props.$width}px` : '100%')};
`;

export const ButtonPopupList = styled.div`
  padding: 8px 12px;
  font-size: 12px;
  color: #333;
  border-top: 1px solid ${neutralColorLib.divider};
  &:first-of-type {
    border-top: none;
    border-radius: 8px 8px 0 0;
  }
  &:last-of-type {
    border-radius: 0 0 8px 8px;
  }
  &:hover {
    background-color: ${blueColorLib.surface};
    cursor: pointer;
  }
`;
