import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const SidebarStyles = styled.div`
  background: #fff;
  padding: 24px 24px 24px 16px;
  width: 336px;
  height: 100vh;
  box-shadow: 2px 0px 25px 0px rgba(0, 67, 101, 0.1);
  border-right: 1px solid ${neutralColorLib.disbled};
`;

export const SidebarAppIcon = styled.div`
  margin-bottom: 40px;
`;

export const SidebarMenu = styled.div<{
  $isActive?: boolean;
}>`
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${(props) => (props.$isActive ? blueColorLib.main : '#697586')};
  margin-top: 8px;
  background: ${(props) =>
    props.$isActive ? blueColorLib.surface : neutralColorLib.white};
  border-radius: 8px;
  &:hover {
    background: #e9f1fb;
    color: ${blueColorLib.main};
    cursor: pointer;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;
