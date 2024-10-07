import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const TableContainer = styled.div<{
  $fixedHeader?: boolean;
  $tableHeight?: number;
  additionalClass?: string;
  $stickyColumn?: boolean;
  $horizontalScroll?: boolean;
}>`
  border-radius: 8px;
  border: 1px solid #f0f3f7;
  width: 100%;
  height: ${(props) =>
    props.$fixedHeader ? `${props.$tableHeight}px` : 'auto'};
  overflow-x: ${(props) =>
    props.$stickyColumn || props.$horizontalScroll ? 'auto' : 'unset'};
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    border-radius: 8px;
    thead {
      position: ${(props) => (props.$fixedHeader ? 'sticky' : 'unset')};
      top: ${(props) => (props.$fixedHeader ? '0' : 'unset')};
      border-bottom: 2px solid #f0f3f7;
      background: #ffffff;
      th {
        padding: 16px 12px;
        & .th-cell-text {
          &:hover {
            cursor: pointer;
          }
        }
        &:first-child {
          border-top-left-radius: 8px;
        }
        &:last-child {
          border-top-right-radius: 8px;
        }
      }
    }
    tbody {
      overflow-y: ${(props) => (props.$fixedHeader ? 'auto' : 'unset')};
      tr {
        border-bottom: 1px solid #f0f3f7;
        td {
          padding: 12px;
          font-size: 12px;
          color: #333;
          background: #ffffff;
          &.no-data {
            font-size: 14px;
            font-width: 600;
            text-align: center;
          }
        }
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          background: #e9f1fb;
        }
        &:last-child {
          td {
            &:first-child {
              border-bottom-left-radius: 8px;
            }
            &:last-child {
              border-bottom-right-radius: 8px;
            }
          }
        }
      }
    }
  }
  &.${(props) => props.additionalClass} {
  }
`;

export const TableThStyle = styled.th<{
  $width?: number;
  $position?: string;
  $left?: string;
  $right?: string;
  $sticky?: boolean;
  $horizontalScroll?: boolean;
}>`
  ${(props) =>
    props.$sticky || props.$horizontalScroll
      ? `
      min-width: ${props.$width}px;
    `
      : `
    width: ${props.$width}px`}
  position: ${(props) => props.$position};
  left: ${(props) => props.$left};
  right: ${(props) => props.$right};
  background-color: ${neutralColorLib.white};
`;

export const TableSearchStyles = styled.div<{}>`
  display: flex;
  align-items: center;
  border: 1px solid ${neutralColorLib.stroke};
  border-radius: 6px;
  background: ${neutralColorLib.white};
  margin-bottom: 12px;
  padding-right: 10px;
  width: fit-content;
`;

export const TableSearchOptions = styled.div`
  padding: 8px;
  display: flex;
  border-right: 1px solid ${neutralColorLib.stroke};
  gap: 6px;
  align-items: center;
  line-height: 16px;
  cursor: pointer;
  width: max-content;
`;

export const TableSearchInput = styled.input`
  outline: none;
  padding: 8px 4px 8px 12px;
  font-size: 12px;
  line-height: 16px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  width: 106px;
`;

export const TableSearchPopupStyles = styled.div<{
  $popupWidth?: string;
}>`
  position: absolute;
  z-index: 20;
  top: 38px;
  left: 0;
  background-color: ${neutralColorLib.white};
  border-radius: 8px;
  border: 1px solid ${neutralColorLib.stroke};
  box-shadow: 0 12px 19px 0 rgba(143, 143, 143, 0.32);
  width: ${(props) => props.$popupWidth};
`;

export const TableSearchPopupListStyles = styled.div`
  font-size: 12px;
  padding: 4px 8px;
  color: ${neutralColorLib.black};
  text-transform: capitalize;
  border-bottom: 1px solid ${neutralColorLib.stroke};
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: ${blueColorLib.surface};
    cursor: pointer;
  }
`;
