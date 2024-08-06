import styled from 'styled-components';

export const TextStyled = styled.div<{
  $size?: number;
  $color?: string;
  $fontWeight?: string;
  additionalClass?: string;
}>`
  font-size: ${(props) => props.$size || 12}px;
  font-weight: ${(props) => props.$fontWeight || 'normal'};
  color: ${(props) => props.$color || '#333'};
  &.${(props) => props.additionalClass} {
  }
`;
