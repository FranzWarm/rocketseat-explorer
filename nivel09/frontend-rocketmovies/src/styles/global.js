import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }

  body {
    min-height: 100vh;
    outline: none;
    
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    background-color: ${({ theme }) => theme.COLORS.BG_800};
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  a:visited {
    color: inherit;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.1s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  h3 {
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_900};
  }
`;
