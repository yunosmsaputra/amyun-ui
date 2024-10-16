import styled from 'styled-components';

export const PaginationItems = styled.div`
  font-size: 12px;
  color: #9c9c9c;
  font-weight: 600;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  &:hover {
    border-bottom: 1.5px solid #2671d9;
    color: #2671d9;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const PaginationItemsThreeDot = styled.div`
  font-size: 12px;
  color: #9c9c9c;
  font-weight: 600;
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  letter-spacing: 1.8px;
  &:hover {
    cursor: default;
  }
`;

export const PaginationIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
`;

export const PaginationIconDisabled = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PaginationItemsActive = styled.div`
  font-size: 12px;
  color: #2671d9;
  font-weight: 600;
  width: 24px;
  height: 24px;
  border-bottom: 1.5px solid #2671d9;
  text-align: center;
  line-height: 24px;
  &:hover {
    cursor: default;
  }
`;
