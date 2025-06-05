import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
