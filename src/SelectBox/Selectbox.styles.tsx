import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const SelectBoxStyles = styled.div<{
  additionalClass?: string;
}>`
  position: relative;
`;

export const SelectboxContainer = styled.div<{
  $size: string;
  $open: boolean;
  $disabled?: boolean;
}>`
  border: 1px solid
    ${(props) => (props.$open ? blueColorLib.border : neutralColorLib.stroke)};
  padding: ${(props) =>
    props.$size === 'md' ? '8px 10px 8px 12px' : '4px 6px 4px 8px'};
  border-radius: 6px;
  background-color: ${(props) =>
    props.$disabled ? neutralColorLib.disbled : neutralColorLib.white};
  line-height: 16px;

  &::after {
    content: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDEzIDEyIiBmaWxsPSJub25lIj4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuODQyNDIgNC4zNzU4QzMuOTU0OTQgNC4yNjMzMiA0LjEwNzUyIDQuMjAwMTMgNC4yNjY2MiA0LjIwMDEzQzQuNDI1NzIgNC4yMDAxMyA0LjU3ODMgNC4yNjMzMiA0LjY5MDgyIDQuMzc1OEw2LjY2NjYyIDYuMzUxNkw4LjY0MjQyIDQuMzc1OEM4LjY5Nzc3IDQuMzE4NDkgOC43NjM5OCA0LjI3Mjc4IDguODM3MTggNC4yNDEzNEM4LjkxMDM4IDQuMjA5ODkgOC45ODkxMSA0LjE5MzM0IDkuMDY4NzggNC4xOTI2NUM5LjE0ODQ1IDQuMTkxOTYgOS4yMjc0NSA0LjIwNzE0IDkuMzAxMTkgNC4yMzczMUM5LjM3NDkzIDQuMjY3NDggOS40NDE5MiA0LjMxMjAzIDkuNDk4MjYgNC4zNjgzNkM5LjU1NDU5IDQuNDI0NyA5LjU5OTE0IDQuNDkxNjkgOS42MjkzMSA0LjU2NTQzQzkuNjU5NDggNC42MzkxNyA5LjY3NDY2IDQuNzE4MTcgOS42NzM5NyA0Ljc5Nzg0QzkuNjczMjggNC44Nzc1MSA5LjY1NjczIDQuOTU2MjQgOS42MjUyOCA1LjAyOTQ0QzkuNTkzODQgNS4xMDI2NCA5LjU0ODEzIDUuMTY4ODUgOS40OTA4MiA1LjIyNDJMNy4wOTA4MiA3LjYyNDJDNi45NzgzIDcuNzM2NjggNi44MjU3MiA3Ljc5OTg3IDYuNjY2NjIgNy43OTk4N0M2LjUwNzUyIDcuNzk5ODcgNi4zNTQ5NCA3LjczNjY4IDYuMjQyNDIgNy42MjQyTDMuODQyNDIgNS4yMjQyQzMuNzI5OTQgNS4xMTE2OCAzLjY2Njc1IDQuOTU5MSAzLjY2Njc1IDQuOEMzLjY2Njc1IDQuNjQwOSAzLjcyOTk0IDQuNDg4MzIgMy44NDI0MiA0LjM3NThaIiBmaWxsPSIjMjY3MUQ5Ii8+Cjwvc3ZnPg==');
    position: absolute;
    right: ${(props) => (props.$size === 'md' ? '8px' : '6px')};
    top: ${(props) => (props.$size === 'md' ? '10px' : '5px')};
    transform: rotate(${(props) => (props.$open ? '180deg' : '0deg')});
  }
`;

export const OptionBoxContainer = styled.div<{
  $size: string;
  $open: boolean;
  $position: string;
}>`
  width: 100%;
  display: ${(props) => !props.$open && 'none'};
  position: ${(props) => (props.$open ? 'absolute' : 'unset')};
  top: ${(props) =>
    props.$position === 'bottom'
      ? props.$size === 'md'
        ? '34px'
        : '26px'
      : 'unset'};
  bottom: ${(props) =>
    props.$position === 'top'
      ? props.$size === 'md'
        ? '34px'
        : '26px'
      : 'unset'};
  background-color: #ffffff;
  border: 1px solid #e5e7e9;
  box-shadow: 0px
    ${(props) => (props.$position === 'bottom' ? '12px' : '-12px')} 19px 0px
    rgba(143, 143, 143, 0.32);
  -webkit-box-shadow: 0px
    ${(props) => (props.$position === 'bottom' ? '12px' : '-12px')} 19px 0px
    rgba(143, 143, 143, 0.32);
  -moz-box-shadow: 0px
    ${(props) => (props.$position === 'bottom' ? '12px' : '-12px')} 19px 0px
    rgba(143, 143, 143, 0.32);
  border-radius: 8px;
  z-index: 100;
  margin: ${(props) => (props.$position === 'top' ? '0 0 4px 0' : '4px 0')};
  max-height: 150px;
  overflow-y: auto;
`;

export const OptionBoxList = styled.div<{
  $size: string;
  $nodata?: boolean;
  $active?: boolean;
}>`
  padding: 6px 12px;
  color: ${(props) =>
    props.$nodata ? '#656565' : props.$active ? '#FFF' : '#333'};
  text-align: ${(props) => (props.$nodata ? 'center' : 'left')};
  font-size: 12px;
  border-top: 1px solid #e5e7e9;
  background: ${(props) => (props.$active ? '#2671D9' : 'unset')};
  font-weight: ${(props) => (props.$active ? '600' : 'normal')};
  &:hover {
    background-color: ${(props) => (props.$active ? '#2671D9' : '#e9f1fb')};
    color: ${(props) => (props.$active ? '#FFF' : '#333')};
    cursor: pointer;
  }
  &:first-child {
    border: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
