import styled from 'styled-components';

export const TextboxContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
export const TextboxStyle = styled.input`
  outline: none;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e5e7e9;
  padding: 8px 10px 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  line-height: 18px;
  color: #333;
  &::placeholder {
    color: #9c9c9c;
  }
`;
