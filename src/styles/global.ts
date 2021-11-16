import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      font-family: 'Inter', sans-serif;
      font-size: ${theme.font.sizes.medium};
    }
  `}

  
`;

export default GlobalStyles;
