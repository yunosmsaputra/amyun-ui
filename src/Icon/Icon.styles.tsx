import styled from 'styled-components';

export const IconStyles = styled.div<{
  $name: string;
  $size: number;
  $color: string;
  $isBox?: boolean;
  $boxColor?: string;
  $boxSize?: string;
  additionalClass?: string;
}>`
  width: ${(props) => (props.$isBox ? props.$boxSize : 'auto')};
  height: ${(props) => (props.$isBox ? props.$boxSize : 'auto')};
  border-radius: ${(props) => (props.$isBox ? '8px' : '0')};
  background: ${(props) => (props.$isBox ? props.$boxColor : 'unset')};
  display: flex;
  align-items: center;
  justify-content: center;
`;
