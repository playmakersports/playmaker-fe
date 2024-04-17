import "@emotion/react";
import { LIGHT_THEME_WITH_BG } from "./theme";

type ThemeType = (typeof LIGHT_THEME_WITH_BG)["GRAY"];

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
