import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const CreateSection = styled.div`
  width: 100%;
  height: calc(100% - 113px);

  padding: 40px 106px 0 123px;

  > a {
    button {
    margin-bottom: 24px;
    }
  }
`;

export const CreateForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  height: 100%;

  > h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 47px;
  }

  h3 {
    margin-bottom: 24px;
  }

  > div:first-of-type {
    display: flex;
    gap: 40px;
  }

  > div:last-of-type {
    display: flex;
    gap: 40px;

    button {
      width: 100%;

      font-size: 16px;
      font-weight: 400;
    }
  }
`;