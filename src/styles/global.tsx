import { Global, css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { atomBgWhite } from "@/atom/common";

const baseTheme = (white?: boolean) => css`
  body {
    color: var(--gray1);
    background: var(--white);
  }
  #mobile_Wrapper {
    background: ${white ? "var(--background-light)" : "var(--background)"};
  }
`;

const GlobalStyle = () => {
  const isWhiteBg = useAtomValue(atomBgWhite);
  // 다크모드 제거 NOTE: 추후 필요 시 다시 추가 예정
  // const updateThemeMode = () => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     document.getElementsByTagName("html")[0].setAttribute("data-dark", "true");
  //   } else {
  //     document.getElementsByTagName("html")[0].removeAttribute("data-dark");
  //   }
  // };

  // useEffect(() => {
  //   updateThemeMode();
  //   window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeMode);
  //   return () => {
  //     window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", updateThemeMode);
  //   };
  // }, []);

  return <Global styles={baseTheme(isWhiteBg)} />;
};

export default GlobalStyle;
