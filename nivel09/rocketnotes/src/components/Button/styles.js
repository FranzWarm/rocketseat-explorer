import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;

  border: 0;
  border-radius: 10px;
  font-weight: 500;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  &:disabled {
    opacity: 0.5;
  }
`;