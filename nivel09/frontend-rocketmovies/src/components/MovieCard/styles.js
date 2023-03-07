import styled, { ThemeConsumer } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.BG_700};

  > h2 {
    font-family: "Roboto Slab";
    font-weight: 700;
    font-size: 24px;
  }
`;

export const Stars = styled.div`
  margin-top: 8px;
`;

export const PlotPreview = styled.div`
  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    margin-bottom: 17px;

    font-family: "Roboto";
    font-size: 16px;

    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`;

export const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;