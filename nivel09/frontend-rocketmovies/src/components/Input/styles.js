import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  width: 100%;
  height: 56px;
  
  border-radius: 10px;
  background-color: ${({ theme }) => theme.COLORS.BG_600};
  color: ${({ theme }) => theme.COLORS.GRAY_500};
  
  > input {
    width: 100%;
    height: 100%;
    padding-left: 16px;
    
    font-family: 'Roboto';
    font-size: 16px;

    border: none;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_600};
    }
  }
  
  > svg {
    margin-left: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;
