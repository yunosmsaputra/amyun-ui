import styled from 'styled-components';

export const FlexStyles = styled.div<{
  $justify?: string;
  $align?: string;
  $gap?: number;
  additionalClass?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify || 'normal'};
  align-items: ${(props) => props.$align || 'normal'};
  gap: ${(props) => props.$gap || 0}px;
  &.${(props) => props.additionalClass} {
  }
`;
