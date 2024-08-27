import styled from 'styled-components';

export const TextStyled = styled.div<{
  $size?: number;
  $color?: string;
  $fontWeight?: string;
  $block?: boolean;
  $align?: string;
  additionalClass?: string;
}>`
  font-size: ${(props) => props.$size || 12}px;
  font-weight: ${(props) => props.$fontWeight || 'normal'};
  color: ${(props) => props.$color || '#333'};
  width: ${(props) => (props.$block ? '100%' : 'auto')};
  text-align: ${(props) => props.$align ?? 'left'};
  &.${(props) => props.additionalClass} {
  }
`;
