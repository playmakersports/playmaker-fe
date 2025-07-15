import { semantic } from "@/styles/color.css";
import { flexCenterJA } from "@/styles/container.css";
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
  minHeight: "12vh",
});
export const commentItemWrapper = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});
export const commentInputBottomWrapper = style({
  position: "sticky",
  margin: "0 -16px",
  padding: "12px 16px max(16px, var(--env-sab))",
  width: "calc(100% + 32px)",
  bottom: 0,
  left: 0,
  backgroundColor: "var(--background-light)",
  borderTop: "1px solid var(--gray200)",
});
globalStyle(`${commentInputBottomWrapper}[data-safe-area='true']:has(input[type='text']:focus)`, {
  paddingBottom: "0",
  marginBottom: "-4px",
});

export const commentItemUserAvatar = style({
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "var(--gray200)",
  flexShrink: 0,
  backgroundSize: "24px 24px",
  backgroundPosition: "center",
  objectFit: "cover",
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
  alignItems: "center",
  padding: "10px 12px",
  width: "100%",
  height: "48px",
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
      "&:disabled": {
        color: "var(--gray500)",
      },
    },
  },
]);
globalStyle(`${commentInputContainer}:has(${commentInputStyle}:placeholder-shown)`, {
  color: "var(--gray400)",
});

export const boardImagesGridContainer = style({
  display: "flex",
  margin: "0 -16px",
  flexWrap: "nowrap",
  marginTop: "24px",
  gap: "8px",
  overflowX: "auto",
});
export const boardImagesGridItem = style({
  flexShrink: 0,
  display: "flex",
  width: "80px",
  height: "80px",
  borderRadius: "10px",
  border: "1px solid var(--gray100)",
  overflow: "hidden",
  selectors: {
    "&:first-of-type": {
      marginLeft: "16px",
    },
    "&:last-of-type": {
      marginRight: "16px",
    },
  },
});
export const boardImageViewerContainer = style({
  position: "fixed",
  top: 0,
  display: "flex",
  alignItems: "center",
  left: "50%",
  width: "var(--mobile-max-width)",
  transform: "translateX(-50%)",
  height: "100vh",
  backgroundColor: "rgba(15, 23, 42, 0.6)",
  zIndex: 901,
});
export const boardImageViewerItemList = style([
  fonts.body4.regular,
  {
    position: "relative",
    width: "100%",
    height: "auto",
    minHeight: "55vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(4px)",
  },
]);
export const boardImageViewerBullet = style({
  position: "absolute",
  bottom: "-16px",
  display: "flex",
  justifyContent: "center",
  gap: "8px",
  width: "100%",
});
export const boardEmptyCommentArea = style([
  semantic.description,
  flexCenterJA,
  {
    flex: 1,
    paddingBottom: "28px",
    minHeight: "15vh",
    whiteSpace: "pre-wrap",
    textAlign: "center",
  },
]);
