import styled from 'styled-components';

export const TableContainer = styled.div<{
    additionalClass?: string;
}>`
  border: 1px solid #f0f3f7;
  border-radius: 8px;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;
    th {
      padding: 16px 12px;
      text-transform: capitalize;
      border-bottom: 2px solid #f0f3f7;
        & .th-cell-text {
            &:hover {
                cursor: pointer;
            }
        }
    }
      tr {
          border-bottom: 1px solid #F0F3F7;
          td {
              padding: 12px;
              font-size: 12px;
              color: #333;
          }
          &:last-child {
              border-bottom: none;
          }
          &:hover {
              background: #E9F1FB;
          }
      }
  }
    &.${(props) => props.additionalClass} {
    }
`;
