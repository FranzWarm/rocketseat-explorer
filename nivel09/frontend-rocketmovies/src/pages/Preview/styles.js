import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const PreviewSection = styled.div`
  width: 100%;
  height: calc(100% - 113px);
  padding: 40px 106px 156px 123px;

  button:first-of-type {
    margin-bottom: 24px;
  }
`;

export const MoviePreview = styled.div`
  width: 100%;
  height: 100%;

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

export const Title = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  > h1 {
    font-weight: 500;
    font-size: 36px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    height: 100%;
    margin-left: 20px;
    padding-top: 3px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-bottom: 40px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;    
  }

  > p:first-of-type {
    margin-right: 5px;
  }
`;

export const TagList = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 40px;
`;

export const Sinopsys = styled.div`
  > p {
    font-size: 16px;
    line-height: 23px;
    text-align: justify;
    text-indent: 1.8em;

    &:not(:last-of-type) {
      margin-bottom: 1.8em;
    }
  }
`;