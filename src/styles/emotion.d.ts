import "@emotion/react";
import { LightTheme } from "./theme";

type ThemeType = typeof LightTheme;

declare module "@emotion/react" {
    export interface Theme extends ThemeType {}
}
