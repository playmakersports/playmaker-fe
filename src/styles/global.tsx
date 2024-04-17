import { Theme } from "@emotion/react";
import { Global, css } from "@emotion/react";

const baseStyle = (theme: Theme) => css`
  body {
    background: ${theme.background};
  }
`;
const GlobalStyle = () => <Global styles={baseStyle} />;

export default GlobalStyle;
