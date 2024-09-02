import styled from 'styled-components';

export const ChipStyles = styled.div<{
  $size: string;
  $color: string;
  additionalClass?: string;
}>`
  padding: ${(props) => (props.$size === 'sm' ? '4px 8px' : '4px 10px')};
  background: ${(props) =>
    props.$color === 'blue'
      ? '#E9F1FB'
      : props.$color === 'green'
        ? '#E7F6F1'
        : props.$color === 'orange'
          ? '#FEF3E5'
          : props.$color === 'red'
            ? '#FEE'
            : '#FFFFFF'};
  border: 1px solid
    ${(props) =>
      props.$color === 'blue'
        ? '#BAD1F3'
        : props.$color === 'green'
          ? '#BCE7D8'
          : props.$color === 'orange'
            ? '#FBDEB7'
            : props.$color === 'red'
              ? '#FFD0D0'
              : '#FFFFFF'};
  color: ${(props) =>
    props.$color === 'blue'
      ? '#2671D9'
      : props.$color === 'green'
        ? '#138A63'
        : props.$color === 'orange'
          ? '#F08800'
          : props.$color === 'red'
            ? '#FF5656'
            : '#333'};
  font-size: ${(props) => (props.$size === 'sm' ? '10px' : '12px')};
  border-radius: 100px;
  font-weight: 600;
  line-height: ${(props) => (props.$size === 'sm' ? '12px' : '16px')};
  text-transform: capitalize;
  display: inline-block;
  text-align: center;
`;
