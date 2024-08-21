import styled from 'styled-components';

export const SelectBoxStyles = styled.div<{
  additionalClass?: string;
}>`
  position: relative;
`;

export const SelectboxContainer = styled.div<{
  $size: string;
  $open: boolean;
}>`
  border: 1px solid #e5e7e9;
  padding: ${(props) =>
    props.$size === 'md' ? '8px 10px 8px 12px' : '4px 6px 4px 8px'};
  border-radius: 8px;
  background-color: #ffffff;

  &::after {
    content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMy4xNzU4IDQuMzc1OEMzLjI4ODMyIDQuMjYzMzIgMy40NDA5IDQuMjAwMTMgMy42IDQuMjAwMTNDMy43NTkxIDQuMjAwMTMgMy45MTE2OCA0LjI2MzMyIDQuMDI0MiA0LjM3NThMNiA2LjM1MTZMNy45NzU4IDQuMzc1OEM4LjAzMTE1IDQuMzE4NDkgOC4wOTczNiA0LjI3Mjc4IDguMTcwNTYgNC4yNDEzNEM4LjI0Mzc2IDQuMjA5ODkgOC4zMjI0OSA0LjE5MzM0IDguNDAyMTYgNC4xOTI2NUM4LjQ4MTgzIDQuMTkxOTYgOC41NjA4NCA0LjIwNzE0IDguNjM0NTcgNC4yMzczMUM4LjcwODMxIDQuMjY3NDggOC43NzUzIDQuMzEyMDMgOC44MzE2NCA0LjM2ODM2QzguODg3OTcgNC40MjQ3IDguOTMyNTMgNC40OTE2OSA4Ljk2MjY5IDQuNTY1NDNDOC45OTI4NiA0LjYzOTE3IDkuMDA4MDQgNC43MTgxNyA5LjAwNzM1IDQuNzk3ODRDOS4wMDY2NiA0Ljg3NzUxIDguOTkwMTEgNC45NTYyNCA4Ljk1ODY2IDUuMDI5NDRDOC45MjcyMiA1LjEwMjY0IDguODgxNTEgNS4xNjg4NSA4LjgyNDIgNS4yMjQyTDYuNDI0MiA3LjYyNDJDNi4zMTE2OCA3LjczNjY4IDYuMTU5MSA3Ljc5OTg3IDYgNy43OTk4N0M1Ljg0MDkgNy43OTk4NyA1LjY4ODMyIDcuNzM2NjggNS41NzU4IDcuNjI0MkwzLjE3NTggNS4yMjQyQzMuMDYzMzIgNS4xMTE2OCAzLjAwMDEzIDQuOTU5MSAzLjAwMDEzIDQuOEMzLjAwMDEzIDQuNjQwOSAzLjA2MzMyIDQuNDg4MzIgMy4xNzU4IDQuMzc1OFoiIGZpbGw9IiMyNjcxRDkiLz4NCjwvc3ZnPg0K');
    position: absolute;
    right: ${(props) => (props.$size === 'md' ? '8px' : '6px')};
    top: ${(props) => (props.$size === 'md' ? '8px' : '4px')};
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
  top: ${(props) => (props.$position === 'bottom' ? '38px' : 'unset')};
  bottom: ${(props) => (props.$position === 'top' ? '38px' : 'unset')};
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
  z-index: 2;
  margin: ${(props) => (props.$position === 'top' ? '0 0 4px 0' : '4px 0')};
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
  font-size: ${(props) => (props.$size === 'md' ? 14 : 12)}px;
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
