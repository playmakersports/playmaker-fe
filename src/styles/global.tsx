import { useEffect } from "react";
import { Global, css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { atomBgWhite } from "@/atom/common";

const baseTheme = (white?: boolean) => css`
  html {
    background: ${white ? "var(--background-light)" : "var(--background)"};
  }
  body {
    color: var(--text);
    background: ${white ? "var(--background-light)" : "var(--background)"};
  }
`;

const GlobalStyle = () => {
  const isWhiteBg = useAtomValue(atomBgWhite);
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

  return <Global styles={baseTheme(isWhiteBg)} />;
};

export default GlobalStyle;
