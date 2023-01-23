import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 16px;

  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, inverted }) => inverted ? theme.COLORS.PINK : theme.COLORS.BG_800};

  border: none;
  border-radius: 10px;
  background-color: ${({ theme, inverted }) => inverted ? theme.COLORS.BG_900 : theme.COLORS.PINK};

  > svg {
    margin-right: 4px;
  }
`;
