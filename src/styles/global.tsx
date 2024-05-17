import { Global, css } from "@emotion/react";
import { useEffect } from "react";

const baseTheme = css`
  html {
    background: var(--background);
  }
  body {
    color: var(--text);
    background: var(--background);
  }
`;

const GlobalStyle = () => {
  const updateThemeMode = () => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.getElementsByTagName("html")[0].setAttribute("data-dark", "true");
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("data-dark");
    }
  };

  useEffect(() => {
    updateThemeMode();
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeMode);
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateThemeMode);
    };
  }, []);

  return <Global styles={baseTheme} />;
};

export default GlobalStyle;
