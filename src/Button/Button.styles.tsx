import styled from 'styled-components';

export const ButtonStyles = styled.button<{
  $color?: string;
  $variant?: string;
  additionalClass?: string;
}>`
  padding: 8px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) =>
    props.$variant == 'solid'
      ? props.$color == 'primary'
        ? '#2671D9'
        : props.$color == 'danger'
          ? '#FF5656'
          : '#E5E7E9'
      : '#FFF'};
  color: ${(props) =>
    props.$variant == 'solid'
      ? props.$color == 'light-grey'
        ? '#7F7F80'
        : '#FFF'
      : props.$color == 'primary'
        ? '#2671D9'
        : props.$color == 'danger'
          ? '#FF5656'
          : '#E5E7E9'};
  border: 1px solid
    ${(props) =>
      props.$variant !== 'text'
        ? props.$color == 'primary'
          ? '#2671D9'
          : props.$color == 'danger'
            ? '#FF5656'
            : '#E5E7E9'
        : '#FFF'};
  border-radius: 6px;
  display: flex;
  align-items: center;
  .icon-button {
    margin-right: 6px;
  }
`;
