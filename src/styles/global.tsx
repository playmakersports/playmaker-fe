import { atomBackgroundGray } from "@/atom/common";
import { Global, css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { useEffect } from "react";

const baseTheme = (isBackgroundGray: boolean) => css`
  html {
    background: var(--white);
  }
  body {
    color: var(--text);
    background: var(--white);
    ${isBackgroundGray ? "background: linear-gradient(var(--white) 0%, var(--background) 6%)" : ""};
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
