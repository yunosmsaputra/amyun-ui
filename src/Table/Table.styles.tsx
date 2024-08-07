import styled from 'styled-components';

export const TableContainer = styled.div<{
  additionalClass?: string;
}>`
  border-radius: 8px;
  border: 1px solid #f0f3f7;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    background-color: #ffffff;
    border-radius: 8px;
    th {
      padding: 16px 12px;
      text-transform: capitalize;
      border-bottom: 2px solid #f0f3f7;
      & .th-cell-text {
        &:hover {
          cursor: pointer;
        }
      }
      &:first-child {
        border-top-left-radius: 8px;
      }
    }
    tbody {
      tr {
        border-bottom: 1px solid #f0f3f7;
        td {
          padding: 12px;
          font-size: 12px;
          color: #333;
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
