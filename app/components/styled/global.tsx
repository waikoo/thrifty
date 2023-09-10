import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    margin: 0;
  }

  :root {
    --primary-c: blue;
    --secondary-c: violet;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
`;
