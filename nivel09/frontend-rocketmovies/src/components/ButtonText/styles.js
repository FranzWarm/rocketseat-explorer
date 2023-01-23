import styled from 'styled-components';

export const Container = styled.button`  
  display: flex;
  align-items: flex-end;
  font-size: 16px;

  border: none;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.PINK};

  > svg {
    margin-right: 4px;
  }
`;
