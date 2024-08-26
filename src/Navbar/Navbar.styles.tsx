import styled from 'styled-components';
import { neutralColorLib } from '../color';

export const NavbarStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${neutralColorLib.divider};
  background: #fff;
  padding: 12px 24px 12px 16px;
`;
