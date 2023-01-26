import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
      height: 100%;
    }
    html {
      font-size: 10px;
    }
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      background: papayawhip;
      background-image: linear-gradient(100deg, #575656, #062e3f);
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    li {
      list-style-type: none;
    }
    div.toast-message{
      font-size: 2rem;
      color: rgb(247, 226, 223);
    }
`;

export default GlobalStyles;