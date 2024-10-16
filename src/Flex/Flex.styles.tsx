import styled from 'styled-components';

export const FlexStyles = styled.div<{
  $justify?: string;
  $align?: string;
  $gap?: number;
  $wrap?: boolean;
  additionalClass?: string;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify || 'normal'};
  align-items: ${(props) => props.$align || 'normal'};
  gap: ${(props) => props.$gap || 0}px;
  flex-wrap: ${(props) => (props.$wrap ? 'wrap' : 'nowrap')};
  &.${(props) => props.additionalClass} {
  }
`;
