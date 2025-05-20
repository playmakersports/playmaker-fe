import { style } from "@vanilla-extract/css";
import { fonts } from "@/styles/fonts.css";
import { innerChildContainer } from "@/styles/container.css";

export const teamFindLocationButton = style([
  fonts.body4.medium,
  {
    padding: "10px 16px",
    border: "1px solid var(--gray200)",
    color: "var(--gray400)",
    borderRadius: "8px",
    selectors: {
      "&[data-active='true']": {
        backgroundColor: "var(--primary500)",
        color: "var(--white)",
        border: "1px solid transparent",
      },
    },
  },
]);

export const teamFindSearchContainer = style({
  display: "flex",
  height: "40px",
  alignItems: "center",
  margin: "0 16px",
  padding: "0 12px",
  borderRadius: "8px",
  border: "1px solid var(--primary500)",
});
export const teamFindSearchInput = style([
  fonts.body4.regular,
  {
    flex: 1,
    padding: "10px 0px 10px 8px",
    color: "var(--gray700)",
    selectors: {
      "&::placeholder": {
        color: "var(--gray400)",
      },
    },
  },
]);
export const teamFindAllBanner = style({
  display: "flex",
  height: "100%",
  padding: "16px",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "flex-end",
  backgroundPosition: "center",
  color: "var(--white)",
});
export const teamFindAllBannerIndex = style([
  fonts.caption1.medium,
  {
    width: "fit-content",
    display: "flex",
    gap: "2px",
    padding: "3px 10px",
    color: "var(--gray700)",
    borderRadius: "999px",
    backgroundColor: "var(--white)",
    boxShadow: "0 1px 3px 0 rgba(51, 65, 85, 0.08)",
  },
]);
export const teamFindAllBgGroupContainer = style([
  innerChildContainer,
  {
    padding: "20px var(--global-lr-padding) 30px",
    backgroundColor: "var(--gray50)",
    borderTop: "1px solid var(--gray200)",
    borderBottom: "1px solid var(--gray200)",
  },
]);
export const teamFindAllGroupContainer = style({
  padding: "20px 0 30px",
});
