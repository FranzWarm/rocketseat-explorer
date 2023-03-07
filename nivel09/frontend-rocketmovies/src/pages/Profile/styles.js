import styled from "styled-components";

export const Container = styled.div`
  > button:first-of-type {
    font-family: "Roboto Slab";
    font-size: 16px;
  }

  > div:first-of-type {
    padding: 64px 0 59px 144px;

    background-color: ${({ theme }) => theme.COLORS.BG_500};
  }
`;

export const ProfileForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 340px;
  margin: -93px auto 0;

  > div:first-of-type {
    width: 186px;
    height: 186px;
    margin-bottom: 64px;
    position: relative;

    img {
      width: 186px;
      height: 186px;

      border-radius: 999px;
    }

    button {
      position: absolute;
      bottom: 4px;
      right: 10px;

      padding: 16px;
      border-radius: 999px;

      svg {
        margin: 0;
      }
    }
  }

  > div:nth-child(1n + 2) {
    width: 100%;
    margin-bottom: 10px;
  }

  > div:nth-child(2n + 3) {
    margin-bottom: 24px;
  }

  > button:last-of-type {
    width: 100%;
  }
`;
