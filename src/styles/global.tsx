import { atomBackgroundGray } from "@/atom/common";
import { Global, css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

const baseTheme = (isBackgroundGray: boolean) => css`
  html {
    background: var(--base-background);
  }
  body {
    color: var(--text);
    background: var(--base-background);
    ${isBackgroundGray ? "background: linear-gradient(var(--base-background) 1%, var(--background) 10%)" : ""};
  }
`;

const GlobalStyle = () => {
  const isBackgroundGray = useAtomValue(atomBackgroundGray);
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

  return <Global styles={baseTheme(isBackgroundGray)} />;
};

export default GlobalStyle;
