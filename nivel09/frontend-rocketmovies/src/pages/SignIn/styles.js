import styled from "styled-components";
import BackgroundImg from "../../assets/auth-bg.webp";

export const Container = styled.div`
  height: 100vh;

  display: flex;
`;

export const SignInSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Background = styled.section`
  flex: 1;

  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
  opacity: 0.6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 48px;
    font-weight: bold;

    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > h2 {
    margin: 48px 0;

    font-size: 24;
    font-weight: medium;
  }

  > p {
    font-size: 14px;
    font-weight: 400;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > div {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  > a {
    width: fit-content;
    align-self: center;

    &:last-of-type {
      margin-top: 42px;
    }
  }
`;
