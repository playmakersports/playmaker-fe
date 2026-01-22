import { style } from "@vanilla-extract/css";
import { fonts } from "@/styles/fonts.css";

export const profileInfoItem = style([
  fonts.body3.medium,
  {
    flex: 1,
    color: "var(--gray700)",
  },
]);
