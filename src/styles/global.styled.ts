import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #000;
    --frame-bg-color: rgba(255,255,255, 0.87);
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    scroll-behavior: smooth;
  }

  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

  [data-text-align="center"] {
    text-align: center;
  }

  [data-bg="frame"] {
    background-color: var(--frame-bg-color);
  }
`