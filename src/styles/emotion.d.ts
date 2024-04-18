import "@emotion/react";
import { BASIC_THEME } from "./theme";

type ThemeType = typeof BASIC_THEME;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {}
}
