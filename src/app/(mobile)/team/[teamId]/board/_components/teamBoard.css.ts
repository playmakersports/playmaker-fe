import { flexAlignCenter, flexRowGap10 } from "@/styles/container.css";
import { fonts } from "@/styles/fonts.css";
import { style } from "@vanilla-extract/css";

export const articleDetailHeader = {
  container: style({
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    marginBottom: "20px",
    padding: "0 8px 12px",
    color: "var(--gray700)",
    borderBottom: "1px solid var(--gray200)",
  }),
  title: style([fonts.body3.semibold]),
  info: style([
    fonts.body4.regular,
    {
      display: "flex",
      justifyContent: "space-between",
    },
  ]),
};

export const articleDetailComment = style({});

export const boardListFixedSection = style({
  display: "flex",
  flexDirection: "column",
  padding: "0 20px",
});
export const boardListFixedSectionTitle = style({
  padding: "4px 0",
  color: "var(--gray700)",
  borderBottom: "1px solid var(--gray200)",
  selectors: {
    "&:last-of-type": {
      borderBottom: "none",
    },
  },
});
export const boardListFixedSectionTitleInner = style([
  flexRowGap10,
  flexAlignCenter,
  {
    padding: "10px 0",
    borderRadius: "6px",
    transition: "transform 0.1s ease-in-out",
    selectors: {
      [`${boardListFixedSectionTitle}:active > &`]: {
        margin: "0 -4px",
        padding: "10px 4px",
        backgroundColor: "var(--gray50)",
        transform: "scale(0.98)",
      },
    },
  },
]);

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
