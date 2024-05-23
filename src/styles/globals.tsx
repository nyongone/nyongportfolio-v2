import { Global, css } from "@emotion/react";
import { reset } from "./reset";
import { suiteFont } from "./suite";

const styles = css`
  ${reset}
  ${suiteFont}
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #fffcfc;
    color: #5a5a5a;
    font-family: "SUITE", sans-serif;
  }

  &:link,
  &:visited {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  b {
    font-weight: 700;
  }
`;

export const GlobalStyles = () => <Global styles={styles} />;
