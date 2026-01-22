import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { style } from "@vanilla-extract/css";
const weekLineWrapper = style({
  display: "flex"
});
const weekDayName = style([
  fonts.caption1.medium,
  {
    flex: 1,
    color: "var(--gray400)",
    textAlign: "center"
  }
]);
const weekDayButton = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid transparent",
  color: "var(--gray700)",
  selectors: {
    "&[data-active-month=false]": {
      color: "var(--gray300)"
    }
  }
});
const weekDayButtonDisplayValue = style([
  fonts.body3.medium,
  {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    transition: "scale 0.2s ease-in-out",
    selectors: {
      "&:active": {
        scale: 0.95,
        backgroundColor: "var(--gray50)"
      },
      "&[data-scheduled=true]": {
        backgroundColor: "var(--primary50)",
        color: "var(--primary600)"
      },
      "&[data-active=true]": {
        backgroundColor: "var(--primary500)",
        color: "var(--white)"
      }
    }
  }
]);
const weekDayButtonScheduledBullets = style({
  margin: "10px 0 12px",
  display: "flex",
  gap: "4px",
  justifyContent: "center",
  alignItems: "center",
  selectors: {
    "&[data-active-month=false]": {
      opacity: 0.35
    }
  }
});
const weekDayButtonScheduledBullet = style({
  display: "inline-block",
  borderRadius: "2px",
  width: "7px",
  height: "7px",
  selectors: {
    '&[data-type="훈련"]': {
      backgroundColor: "var(--gray500)"
    },
    '&[data-type="교류전"]': {
      backgroundColor: "var(--primary500)"
    },
    '&[data-type="팀"]': {
      backgroundColor: "var(--info500)"
    },
    '&[data-type="대회"]': {
      backgroundColor: "var(--purple500)"
    }
  }
});
const monthEventSummary = style({
  display: "flex",
  margin: "16px var(--global-lr-padding) 0",
  paddingBottom: "16px",
  borderBottom: "1px solid var(--gray100)"
});
const monthEventSummaryItems = style([
  fonts.caption1.medium,
  {
    display: "flex",
    alignItems: "center",
    padding: "4px 12px",
    borderRadius: "999px",
    selectors: {
      '&[data-type="훈련"]': {
        color: "var(--gray600)",
        backgroundColor: "var(--gray50)"
      },
      '&[data-type="교류전"]': {
        color: "var(--primary600)",
        backgroundColor: "var(--primary50)"
      },
      '&[data-type="팀"]': {
        color: "var(--info600)",
        backgroundColor: "var(--info50)"
      },
      '&[data-type="대회"]': {
        color: "var(--purple600)",
        backgroundColor: "var(--purple50)"
      },
      '&[data-type="훈련"]:before': {
        backgroundColor: "var(--gray600)"
      },
      '&[data-type="교류전"]:before': {
        backgroundColor: "var(--primary600)"
      },
      '&[data-type="팀"]:before': {
        backgroundColor: "var(--info600)"
      },
      '&[data-type="대회"]:before': {
        backgroundColor: "var(--purple600)"
      },
      "&:before": {
        content: '""',
        display: "inline-block",
        width: "7px",
        height: "7px",
        borderRadius: "2px",
        marginRight: "8px"
      }
    }
  }
]);
const scheduleListDayTitle = style([fonts.body4.regular, { color: "var(--gray400)" }]);
const scheduleListItemWrapper = style({
  cursor: "pointer",
  padding: "4px 0 3px 12px",
  borderLeft: "3px solid",
  transition: "scale 0.2s ease-in-out, background-color 0.2s ease-in-out",
  selectors: {
    '&[data-type="훈련"]': {
      borderColor: "var(--gray500)"
    },
    '&[data-type="훈련"]:active': {
      backgroundColor: "var(--gray50)"
    },
    '&[data-type="교류전"]': {
      borderColor: "var(--primary500)"
    },
    '&[data-type="교류전"]:active': {
      backgroundColor: "var(--primary50)"
    },
    '&[data-type="팀"]': {
      borderColor: "var(--info500)"
    },
    '&[data-type="팀"]:active': {
      backgroundColor: "var(--info50)"
    },
    '&[data-type="대회"]': {
      borderColor: "var(--purple500)"
    },
    '&[data-type="대회"]:active': {
      backgroundColor: "var(--purple50)"
    }
  }
});
const scheduleListItemProfile = style({
  marginLeft: "-8px",
  width: "28px",
  height: "28px",
  borderRadius: "50%",
  backgroundColor: "var(--gray50)",
  border: "2px solid var(--background-light)",
  selectors: {
    "&:first-child": {
      marginLeft: "0"
    }
  }
});
const scheduleDetailCommentsWrapper = style({
  paddingRight: "2px",
  maxHeight: "120px",
  overflowY: "auto",
  selectors: {
    "&[data-fold='false']": {
      height: "80vh",
      maxHeight: "500px"
    }
  }
});
const calendarViewTypeSwitch = style({
  display: "flex",
  padding: "4px",
  backgroundColor: "var(--gray50)",
  borderRadius: "8px",
  gap: "8px"
});
const calendarViewTypeSwitchInner = style([
  fonts.body4.medium,
  {
    padding: "5px 12px",
    borderRadius: "6px",
    color: "var(--gray500)",
    selectors: {
      '&[data-active="true"]': {
        backgroundColor: "var(--white)",
        boxShadow: "var(--shadow-xs)",
        color: "var(--gray700)"
      }
    }
  }
]);
export {
  scheduleListItemProfile as a,
  scheduleListItemWrapper as b,
  scheduleListDayTitle as c,
  calendarViewTypeSwitch as d,
  calendarViewTypeSwitchInner as e,
  weekDayButton as f,
  weekDayButtonDisplayValue as g,
  weekDayButtonScheduledBullets as h,
  weekDayButtonScheduledBullet as i,
  weekLineWrapper as j,
  monthEventSummary as k,
  monthEventSummaryItems as m,
  scheduleDetailCommentsWrapper as s,
  weekDayName as w
};
