import styled from 'styled-components';
import { blueColorLib, neutralColorLib } from '../color';

export const SidebarStyles = styled.div`
  background: #fff;
  padding: 24px 16px;
  width: 80px;
  height: 100vh;
  border-right: 1px solid ${neutralColorLib.disbled};
  transition: width 0.5s ease-in;
  &:hover {
    width: 336px;
    padding: 24px 24px 24px 16px;
    box-shadow: 2px 0px 25px 0px rgba(0, 67, 101, 0.1);
  }
`;

export const SidebarAppIcon = styled.div<{
  $onMenuHover?: boolean;
}>`
  width: ${(props) => (props.$onMenuHover ? '296px' : '32px')};
  display: flex;
  justify-content: ${(props) => (props.$onMenuHover ? 'flex-start' : 'center')};
  height: 46px;
  margin-bottom: 40px;
`;

export const SidebarMenu = styled.div<{
  $isActive?: boolean;
  $onMenuHover?: boolean;
}>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  color: ${(props) => (props.$isActive ? blueColorLib.main : '#697586')};
  margin-top: 8px;
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

export const SidebarMenuText = styled.div<{
  $isActive?: boolean;
}>`
  font-size: 12px;
  font-weight: 600;
  width: calc(100% - 48px);
  background: ${(props) =>
    props.$isActive ? blueColorLib.surface : neutralColorLib.white};
  padding: 16px 12px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const SidebarMenuIconContainer = styled.div<{
  $isActive?: boolean;
  $onMenuHover?: boolean;
}>`
  background: ${(props) =>
    props.$isActive ? blueColorLib.surface : neutralColorLib.white};
  padding: 12px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top-right-radius: ${(props) => (props.$onMenuHover ? '0' : '8px')};
  border-bottom-right-radius: ${(props) => (props.$onMenuHover ? '0' : '8px')};
`;

export const SidebarMenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
`;

export const SideBarMenuChildStyle = styled.div`
  width: 100%;
  padding-left: 24px;
`;

export const SideBarMenuChildItemStyle = styled.div`
  border-left: 2px solid ${blueColorLib.main};
  padding: 4px 0 4px 30px;
  background-color: ${neutralColorLib.white};
`;

export const SideBarMenuChildItemTextStyle = styled.div`
  padding: 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
`;
