import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'ubuntu', sans-serif;
    font-size: 62.5%;
  }
 `;
