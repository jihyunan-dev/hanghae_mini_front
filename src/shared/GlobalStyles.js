import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
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
