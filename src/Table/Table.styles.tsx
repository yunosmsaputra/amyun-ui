import styled from 'styled-components';

export const TableContainer = styled.div<{
  $fixedHeader?: boolean;
  $tableHeight?: number;
  additionalClass?: string;
}>`
  border-radius: 8px;
  border: 1px solid #f0f3f7;
  width: 100%;
  height: ${(props) =>
    props.$fixedHeader ? `${props.$tableHeight}px` : 'auto'};
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
        text-transform: capitalize;
        & .th-cell-text {
          &:hover {
            cursor: pointer;
          }
        }
        &:first-child {
          border-top-left-radius: 8px;
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
      }
    }
  }
  &.${(props) => props.additionalClass} {
  }
`;
