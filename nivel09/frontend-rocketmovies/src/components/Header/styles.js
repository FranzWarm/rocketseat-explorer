import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 24px 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_999};
  background-color: ${({ theme }) => theme.COLORS.BG_800};

  h3 {
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > div:first-of-type {
    flex-direction: row-reverse;
    width: 100%;

    input {
      padding-left: 24px;
      font-size: 14px;

      color: ${({ theme }) => theme.COLORS.GRAY_500};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
      }
    }

    svg {
      height: 20px;
      width: 20px;
      margin-right: 24px;
    }
  }

  > div {
    display: flex;
    gap: 8px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      
      font-size: 14px;
    }

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    img {
      width: 64px;
      height: 64px;
  
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.COLORS.GRAY_999};
    }
  }
`;
