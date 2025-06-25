import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const articleDetailHeader = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    color: "var(--gray700)",
  }),
  title: style([
    fonts.body3.semibold,
    {
      marginBottom: "12px",
    },
  ]),
  info: style([
    fonts.body4.regular,
    {
      display: "flex",
      gap: "8px",
      alignItems: "center",
      padding: "8px 0",
    },
  ]),
};

export const articleDetailComment = style({});

export const boardListFixedSection = style({
  display: "flex",
  flexDirection: "column",
});
export const boardListFixedSectionTitle = style({
  display: "flex",
  padding: "10px 16px",
  gap: "10px",
  color: "var(--gray700)",
  borderBottom: "1px solid var(--gray200)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none",
    },
  },
});

export const boardListPaginationButton = style([
  fonts.body3.medium,
  {
    display: "block",
    width: "32px",
    height: "32px",
    color: "var(--gray700)",
    borderRadius: "6px",
    selectors: {
      "&[data-active=true]": {
        fontWeight: 600,
        color: "var(--white)",
        backgroundColor: "var(--primary500)",
      },
    },
  },
]);
