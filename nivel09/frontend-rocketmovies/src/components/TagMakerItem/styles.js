import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  position: relative;

  width: fit-content;

  padding: 16px;
  padding-right: 52px;

  font-family: "Roboto";
  font-size: 16px;
  color: ${({ theme, newItem }) =>
    newItem ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE};

  box-sizing: border-box;
  outline: none;
  border-radius: 10px;
  border: ${({ theme, newItem }) =>
    newItem
      ? `2px dashed ${theme.COLORS.GRAY_500}`
      : `2px solid ${theme.COLORS.BG_600}`};
  background-color: ${({ theme, newItem }) =>
    newItem ? "transparent" : theme.COLORS.BG_600};

  cursor: ${({ newItem }) => (newItem ? "text" : "default")};

  &:not(:last-of-type) {
    margin-right: 24px;
  }

  > svg {
    position: absolute;

    width: 22px;
    height: 22px;

    right: 16px;

    color: ${({ theme }) => theme.COLORS.PINK};

    cursor: pointer;
  }
`;
