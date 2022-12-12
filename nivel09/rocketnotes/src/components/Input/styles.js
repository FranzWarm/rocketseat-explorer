import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 8px;
  border-radius: 10px;

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > input {
    width: 100%;
    height: 56px;
    padding: 12px;

    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      font-style: italic;
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
