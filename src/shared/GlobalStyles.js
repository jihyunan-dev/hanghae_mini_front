import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    font-family: 'GmarketSansLight', sans-serif;
    font-weight: 600;
    box-sizing: border-box;
  }

  body { 
    padding-top: 70px;
    padding-bottom: 50px;
    font-family: 'GmarketSansLight', sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
  }

  button, 
  input,
  textarea {
    color: black;
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }
`;

export default GlobalStyles;
