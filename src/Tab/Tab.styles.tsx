import styled from 'styled-components';

export const TabStyle = styled.div`
  width: 100%;
`;

export const TabTitle = styled.div`
  display: flex;
  gap: 6px;
  padding: 4px 18px 0 16px;
  border-bottom: 1px solid #f0f3f7;
  background: #fff;
`;

export const TabTitleList = styled.div`
  position: relative;
  padding: 6px 8px 8px;
  font-size: 14px;
  line-height: 18px;
  color: #9c9c9c;
  &:hover {
    cursor: pointer;
    font-weight: 600;
    color: #2671d9;
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      border-radius: 8px 8px 0 0;
      background: #2671d9;
      bottom: 0;
      left: 0;
    }
  }
`;

export const TabTitleListActive = styled.div`
  position: relative;
  padding: 6px 8px 8px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: #2671d9;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 8px 8px 0 0;
    background: #2671d9;
    bottom: 0;
    left: 0;
  }
`;

export const TabContent = styled.div`
  padding: 12px 12px 32px 12px;
`;
