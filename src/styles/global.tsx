import { Global, css } from "@emotion/react";
import { useAtomValue } from "jotai";
import { atomBackgroundBluely } from "@/atom/common";

const baseTheme = (bluely?: boolean) => css`
  body {
    color: var(--gray900);
    background: #fff;
  }
  #mobile_Wrapper {
    background: ${bluely ? "var(--background)" : "var(--background-light)"};
  }
`;

const GlobalStyle = () => {
  const isBgBluely = useAtomValue(atomBackgroundBluely);
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

  return <Global styles={baseTheme(isBgBluely)} />;
};

export default GlobalStyle;
