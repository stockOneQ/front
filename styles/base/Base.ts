import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    background: url('/background-img.png') no-repeat center center;
    background-attachment: fixed;
    background-size: cover;
  }
  
  #root {
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    font-weight: 400;
    color: var(--primary-color);
  }
`;

export default Base;
