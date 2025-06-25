import { style } from "@vanilla-extract/css";

export const matchMainTeamListLogo = style({
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "1px solid var(--gray200)",
  backgroundColor: "var(--white)",
  selectors: {
    "&[data-selected='true']": {
      border: "3px solid var(--primary500)",
    },
  },
});
export const matchMainTeamListItem = style({
  padding: "8px 12px",
  borderRadius: "8px",
  textAlign: "center",
  selectors: {
    "&[data-selected='true']": {
      backgroundColor: "var(--primary50)",
    },
  },
});

export const matchMainUpcomingContainer = style({
  padding: "20px 0",
  backgroundColor: "var(--gray50)",
});
export const matchMainUpcomingCard = style({
  userSelect: "none",
  width: "280px !important",
  borderRadius: "10px",
  padding: "16px",
  backgroundColor: "var(--white)",
  border: "1px solid var(--gray200)",
  marginRight: "var(--global-lr-padding)",
  selectors: {
    "&:first-of-type": {
      marginLeft: "var(--global-lr-padding)",
    },
  },
});
export const matchMainUpcomingCardTeamLogo = style({
  flexShrink: 0,
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "1px solid var(--gray200)",
  backgroundColor: "var(--white)",
});
export const matchMainUpcomingCardTeamName = style({
  display: "block",
  width: "calc(280px - 32px - 40px - 8px)",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
export const matchMainUpcomingCardDetail = style({
  display: "flex",
  flexDirection: "column",
  gap: "4px",
  padding: "8px",
  borderRadius: "8px",
  backgroundColor: "var(--gray50)",
});
