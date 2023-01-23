import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 113px);
`;

export const HomeSection = styled.div`
  width: 100%;
  height: 100%;

  padding: 50px 106px 60px 123px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 40px;
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  height: calc(100% - 60px);
  padding-right: 8px;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 999px;
    background-color: ${({ theme }) => theme.COLORS.PINK};
  }
`;