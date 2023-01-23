import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 247px;
  padding: 19px 16px;

  border: none;
  outline: none;
  resize: none;

  font-family: 'Roboto';
  font-size: 16px;

  border-radius: 10px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BG_600};

  &::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  }

  &::-webkit-scrollbar {
    width: 8px;    
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_999};
  }
`;
