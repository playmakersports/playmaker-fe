import { fonts } from "@/styles/fonts.css";
import { globalStyle, style } from "@vanilla-extract/css";

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

export const commentListWrapper = style({
  flex: 1,
  position: "relative",
  marginTop: "24px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
export const commentItemWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
export const commentInputBottomWrapper = style({
  position: "sticky",
  margin: "0 -16px",
  padding: "12px 16px calc(var(--safe-bottom) + 16px)",
  width: "calc(100% + 32px)",
  bottom: 0,
  left: 0,
  backgroundColor: "var(--background-light)",
  borderTop: "1px solid var(--gray200)",
});
export const commentItemUserAvatar = style({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "var(--gray200)",
  flexShrink: 0,
});
export const commentItemHasReply = style({
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  width: "24px",
  selectors: {
    '&[data-reply="true"]:after': {
      content: "",
      display: "block",
      width: "1px",
      height: "100%",
      backgroundColor: "var(--gray200)",
    },
  },
});
export const commentInputContainer = style({
  display: "flex",
  padding: "10px 12px",
  width: "100%",
  backgroundColor: "var(--gray100)",
  borderRadius: "8px",
  gap: "8px",
  color: "var(--primary500)",
});
export const commentInputStyle = style([
  fonts.body3.regular,
  {
    flex: 1,
    color: "var(--gray700)",
    selectors: {
      "&::placeholder": {
        color: "var(--gray400)",
      },
    },
  },
]);
globalStyle(`${commentInputContainer}:has(${commentInputStyle}:placeholder-shown)`, {
  color: "var(--gray400)",
});
