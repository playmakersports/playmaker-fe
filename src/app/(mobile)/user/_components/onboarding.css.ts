import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const onboardingLoginButton = style([
  fonts.body3.medium,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    color: "var(--gray900)",
    gap: "8px",
    padding: "12px 0",
    boxSizing: "border-box",
    border: "1px solid transparent",
    selectors: {
      "&[data-provider='kakao']": {
        backgroundColor: "#FEE500",
      },
      "&[data-provider='google']": {
        backgroundColor: "#FFF",
        border: "1px solid var(--gray200)",
      },
      "&[data-provider='apple']": {
        backgroundColor: "#000",
        color: "#FFF",
      },
    },
  },
]);
