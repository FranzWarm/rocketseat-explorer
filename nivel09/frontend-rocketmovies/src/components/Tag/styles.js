import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  padding: 5px 16px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 12px;

  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BG_500};
`;
