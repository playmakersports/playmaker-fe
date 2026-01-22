import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useRouter, useParams, useSearch, Outlet } from "@tanstack/react-router";
import React, { useState, useRef, useImperativeHandle, useEffect } from "react";
import clsx from "clsx";
import { getMinutes, getHours, isPast } from "date-fns";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { useForm } from "react-hook-form";
import { u as useToast } from "./useToast-hwetiz13.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { c as flexColumnGap16, d as flexColumnGap4, n as flexRowGap8, l as flexAlignCenter, a as flexColumnGap20, f as flexColumnGap12, m as flexSpaceBetween, k as flexRowGap4, w as flexColumnGap30, r as flexRowGap12, g as flexColumnGap10, p as flexRowGap10 } from "./container.css-C2ezn6CH.js";
import { D as DropdownInput } from "./DropdownInput-18dVrCGm.js";
import { T as ToggleSwitch } from "./ToggleSwitch-BI6P-uHJ.js";
import { a as DateKeypadInput, D as DateInput } from "./DateInput-V2smxG23.js";
import styled from "styled-components";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { I as InputStyledWrapper } from "./Wrapper-DpW65hF8.js";
import { t as timeInputModalContainer, c as commentContainer, a as commentInput } from "./container.css-DZr6lpKA.js";
import { D as DownArrowIcon } from "./DownArrow-CJuEPh4T.js";
import { style } from "@vanilla-extract/css";
import { C as CalendarIcon } from "./Calendar-CZ4mMM-F.js";
import { L as LocationPinIcon } from "./LocationPin-DegDBbH0.js";
import { C as ClockIcon } from "./Clock-Bj0T6dbi.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { s as scheduleDetailCommentsWrapper } from "./calendar.css-Bk7G7yYG.js";
import { D as DropdownAction } from "./DropdownAction-Cx0eD5A0.js";
import { S as SelectVoteOption } from "./RecentVoteCard-BOrv2so7.js";
import { B as Badge } from "./Badge-CVtyNCaL.js";
import { C as CheckIcon } from "./Check-xgghRidd.js";
import { S as SendIcon } from "./Send-CIkiv51_.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "@floating-ui/react";
import "./InputWrapper-CgYCSwII.js";
import "./container-B0RuEqwG.js";
import "./Minus-Dzq7_5JU.js";
import "./useCalendar-DZwp9ZF5.js";
import "./LeftArrow-BtJmGAG9.js";
import "./Search-DrxoJQ2v.js";
import "./common-BU27Mq6v.js";
import "./RightDirection-DCcZ277n.js";
function TimeInputModal(props) {
  const { mode, title, children } = props;
  if (mode === "bottom-sheet") {
    const { BottomSheetContainer, onClickConfirm, bottomSheetTitle, bottomSheetDescription } = props;
    return /* @__PURE__ */ jsx(
      BottomSheetContainer,
      {
        draggable: "all",
        title: bottomSheetTitle ?? title,
        description: bottomSheetDescription,
        buttons: [
          {
            name: "확인",
            onClick: (close) => {
              onClickConfirm();
              close();
            },
            mode: "primary"
          }
        ],
        children: /* @__PURE__ */ jsx("div", { style: { margin: "28px 0 12px" }, children })
      }
    );
  } else {
    const { position, showTimeModal } = props;
    if (showTimeModal) {
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: timeInputModalContainer,
          style: {
            left: position.x === "left" ? 0 : "auto",
            right: position.x === "right" ? 0 : "auto",
            top: position.y === "top" ? "100%" : "auto",
            bottom: position.y === "bottom" ? "100%" : "auto"
          },
          children
        }
      );
    }
  }
}
const TimeInput = React.forwardRef((props, ref) => {
  const { ModalComponents, showModal: showBottomSheet } = useModal();
  const { plainStyle = false, mode = "modal", error, description, defaultValue, title } = props;
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: "left", y: "top" });
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  const getHourMinute = (target) => {
    const [hour, minute] = target.split(":");
    const am = +hour < 12;
    const calculateHour = am ? hour : `${+hour - 12}`;
    return { hour: calculateHour, minute, am };
  };
  const initialTime = defaultValue ? getHourMinute(defaultValue) : null;
  const [timeValue, setTimeValue] = useState(
    () => initialTime ? {
      am: initialTime.am,
      hour: initialTime.hour,
      minute: initialTime.minute
    } : {
      am: getHours(/* @__PURE__ */ new Date()) < 12,
      hour: getHours(/* @__PURE__ */ new Date()) < 12 ? String(getHours(/* @__PURE__ */ new Date())).padStart(2, "0") : String(getHours(/* @__PURE__ */ new Date()) - 12).padStart(2, "0"),
      minute: String(getMinutes(/* @__PURE__ */ new Date())).padStart(2, "0")
    }
  );
  const handleModalView = () => {
    if (mode === "bottom-sheet") {
      showBottomSheet();
    } else {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        if (rect.left > window.innerWidth / 2) {
          setModalPosition((prev) => ({ ...prev, x: "right" }));
        } else {
          setModalPosition((prev) => ({ ...prev, x: "left" }));
        }
        if (rect.top > window.innerHeight / 2) {
          setModalPosition((prev) => ({ ...prev, y: "bottom" }));
        } else {
          setModalPosition((prev) => ({ ...prev, y: "top" }));
        }
      }
    }
    setShowTimeModal(true);
  };
  const onClickResetInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setShowTimeModal((prev) => !prev);
  };
  const onClickUpdateInput = () => {
    if (inputRef.current) {
      const newValue = `${String(
        +timeValue.hour + (!timeValue.am && +timeValue.hour < 12 ? 12 : 0) - (timeValue.am && +timeValue.hour === 12 ? 12 : 0)
      ).padStart(2, "0")}:${timeValue.minute.padStart(2, "0")}`;
      inputRef.current.value = newValue;
      if (inputRef.current) {
        inputRef.current.value = newValue;
        props.onChange?.({
          target: {
            name: props.name,
            value: newValue
          }
        });
      }
    }
    if (mode === "modal") {
      setShowTimeModal(false);
    } else {
      return;
    }
  };
  useEffect(() => {
    const outSideClick = (e) => {
      if (showTimeModal && containerRef.current && !containerRef.current.contains(e.target)) {
        setShowTimeModal(false);
      }
    };
    document.addEventListener("mouseup", outSideClick);
    return () => {
      document.removeEventListener("mouseup", outSideClick);
    };
  }, [showTimeModal]);
  const bottomSheetProps = () => {
    if (props.mode === "bottom-sheet") {
      return { bottomSheetTitle: props.bottomSheetTitle, bottomSheetDescription: props.bottomSheetDescription };
    } else {
      return {};
    }
  };
  const bottomSheetRest = () => {
    if (props.mode === "bottom-sheet") {
      const { bottomSheetTitle, bottomSheetDescription, plainStyle: plainStyle2, ...bottomSheetRest2 } = props;
      return { ...bottomSheetRest2 };
    } else {
      const { plainStyle: plainStyle2, ...modalRest } = props;
      return modalRest;
    }
  };
  return /* @__PURE__ */ jsxs(Container, { ref: containerRef, children: [
    plainStyle ? /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        name: props.name,
        id: props.id,
        ref: inputRef,
        onClick: !props.disabled ? handleModalView : () => {
        },
        readOnly: true,
        ...bottomSheetRest()
      }
    ) : /* @__PURE__ */ jsxs("div", { style: { position: "relative" }, className: "input-wrapper", children: [
      /* @__PURE__ */ jsx(
        BasicInput,
        {
          type: "text",
          error,
          name: props.name,
          id: props.id,
          description,
          ref: inputRef,
          title,
          onButtonWrapClick: !props.disabled ? handleModalView : () => {
          },
          ...bottomSheetRest()
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "dropdown-icon",
          style: { top: title ? "28px" : "0" },
          "aria-disabled": props.disabled,
          onClick: !props.disabled ? handleModalView : () => {
          },
          children: /* @__PURE__ */ jsx(DownArrowIcon, {})
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      TimeInputModal,
      {
        mode,
        title,
        BottomSheetContainer: ModalComponents,
        onClickConfirm: onClickUpdateInput,
        position: modalPosition,
        showTimeModal,
        ...bottomSheetProps(),
        children: [
          /* @__PURE__ */ jsxs(TimeSelector, { "data-view-mode": mode, children: [
            /* @__PURE__ */ jsxs(HourMinute, { children: [
              /* @__PURE__ */ jsxs("div", { className: "input-wrapper", children: [
                /* @__PURE__ */ jsx("label", { className: "modal-input-label", htmlFor: `${props.id}-hourInput`, children: "시" }),
                /* @__PURE__ */ jsx(ModalInput, { children: /* @__PURE__ */ jsx(
                  DateKeypadInput,
                  {
                    type: "text",
                    id: `${props.id}-hourInput`,
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    disabled: props.disabled,
                    value: timeValue.hour,
                    onFocus: (e) => e.target.select(),
                    onChange: (event) => {
                      const value = event.target.value;
                      if (+value > 23) return null;
                      setTimeValue((prev) => ({ ...prev, hour: value }));
                    },
                    onBlur: (event) => {
                      const value = event.target.value;
                      if (+value > 12) {
                        setTimeValue((prev) => ({ ...prev, am: false, hour: String(+value - 12).padStart(2, "0") }));
                      } else if (+value === 0) {
                        setTimeValue((prev) => ({ ...prev, am: true, hour: "12" }));
                      } else {
                        setTimeValue((prev) => ({ ...prev, hour: value.padStart(2, "0") }));
                      }
                    }
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsx("span", { className: "cologne", "data-view-mode": mode, children: ":" }),
              /* @__PURE__ */ jsxs("div", { className: "input-wrapper", children: [
                /* @__PURE__ */ jsx("label", { className: "modal-input-label", htmlFor: `${props.id}-minuteInput`, children: "분" }),
                /* @__PURE__ */ jsx(ModalInput, { children: /* @__PURE__ */ jsx(
                  DateKeypadInput,
                  {
                    type: "text",
                    id: `${props.id}-minuteInput`,
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    value: timeValue.minute,
                    disabled: props.disabled,
                    onFocus: (e) => e.target.select(),
                    onChange: (event) => {
                      if (+event.target.value > 59) return null;
                      setTimeValue((prev) => ({ ...prev, minute: event.target.value }));
                    },
                    onBlur: (event) => setTimeValue((prev) => ({ ...prev, minute: event.target.value.padStart(2, "0") }))
                  }
                ) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              ButtonAMPM,
              {
                type: "button",
                "data-view-mode": mode,
                disabled: props.disabled,
                onClick: () => {
                  if (timeValue.hour === "12") {
                    setTimeValue((prev) => ({ ...prev, am: !prev.am }));
                  } else if (timeValue.hour === "00") {
                    setTimeValue((prev) => ({ ...prev, am: false, hour: "12" }));
                  } else {
                    setTimeValue((prev) => ({ ...prev, am: !prev.am }));
                  }
                },
                children: [
                  /* @__PURE__ */ jsx("span", { "data-active": timeValue.am, children: "오전" }),
                  /* @__PURE__ */ jsx("span", { "data-active": !timeValue.am, children: "오후" }),
                  /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: "active-background",
                      style: {
                        transform: mode === "modal" ? `translateY(${timeValue.am ? "0" : "32px"})` : `translateX(${timeValue.am ? "0" : "calc(100% + 8px)"})`
                      }
                    }
                  )
                ]
              }
            )
          ] }),
          mode === "modal" && /* @__PURE__ */ jsxs(Buttons, { children: [
            /* @__PURE__ */ jsx("button", { type: "button", className: "reset-button", onClick: onClickResetInput, children: "초기화" }),
            /* @__PURE__ */ jsx(Button, { type: "button", mode: "primary", fillType: "default", onClick: onClickUpdateInput, children: "확인" })
          ] })
        ]
      }
    )
  ] });
});
TimeInput.displayName = "TimeInput";
const Container = styled.div`
  position: relative;
  div.dropdown-icon {
    position: absolute;
    height: 40px;
    display: flex;
    align-items: center;
    right: 12px;
    top: 0;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--gray700);
    }
    &[aria-disabled="true"] {
      svg {
        fill: var(--gray300);
      }
    }
  }

  button.am-pm-button {
    margin-right: 2px;
    border-radius: 2px;
    &:hover {
      background-color: var(--gray100);
      outline: 3px solid var(--gray100);
    }
    &:disabled {
      color: var(--gray400);
    }
  }
`;
const HourMinute = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  color: var(--gray700);
  gap: 12px;

  div.input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  label.modal-input-label {
    ${FONTS.body4("medium")}
  }
  span.cologne {
    display: inline-flex;
    align-items: center;
    &[data-view-mode="bottom-sheet"] {
      height: 72px;
    }
    &[data-view-mode="modal"] {
      height: 40px;
    }
  }
`;
const ModalInput = styled(InputStyledWrapper)`
  width: 90px;

  ${DateKeypadInput} {
    padding: 0;
    text-align: left;
    ${FONTS.body4("regular")};
  }
`;
const ButtonAMPM = styled.button`
  position: relative;
  display: flex;
  padding: 4px;
  flex-direction: column;
  width: 60px;
  height: 100%;
  background-color: var(--gray50);
  border-radius: 10px;
  & > span {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    z-index: 1;

    &[data-active="true"] {
      color: var(--gray700);
      ${FONTS.body4("medium")};
    }
    &[data-active="false"] {
      color: var(--gray500);
      ${FONTS.body4("regular")};
    }
  }

  span.active-background {
    position: absolute;
    margin: 4px;
    top: 0;
    left: 0;
    width: calc(100% - 8px);
    height: 32px;
    border-radius: 6px;
    background-color: var(--white);
    z-index: 0;
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s;
  }

  &[data-view-mode="bottom-sheet"] {
    flex-direction: row;
    gap: 8px;
    width: 100%;
    height: 44px;
    & > span {
      flex: 1;
      height: 36px;

      &[data-active="true"] {
        ${FONTS.body3("medium")};
      }
      &[data-active="false"] {
        ${FONTS.body3("regular")};
      }
    }
    span.active-background {
      width: calc(50% - 8px);
    }
  }
`;
const TimeSelector = styled.div`
  display: flex;

  &[data-view-mode="modal"] {
    height: 72px;
    gap: 20px;
    align-items: flex-end;
    justify-content: space-between;
  }
  &[data-view-mode="bottom-sheet"] {
    flex-direction: column;
    height: auto;
    gap: 24px;

    ${ButtonAMPM} {
      order: 1;
    }
    ${HourMinute} {
      order: 2;
    }

    ${HourMinute} {
      ${FONTS.head6("medium")};
    }
    ${ModalInput} {
      width: 100%;
      height: 72px;
    }
    ${DateKeypadInput} {
      padding: 20px 12px;
      text-align: center;
      ${FONTS.head6("medium")};
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  button.reset-button {
    ${FONTS.body3("medium")};
    color: var(--primary600);
  }
`;
const teamFindListItem = style({
  userSelect: "none",
  paddingBottom: "16px",
  paddingRight: "4px",
  marginBottom: "16px",
  borderBottom: "1px solid var(--gray200)",
  selectors: {
    "&:last-child": {
      borderBottom: "none"
    }
  }
});
const teamFindListSelectButton = style([
  fonts.body4.medium,
  {
    padding: "8px 14px",
    border: "1px solid var(--gray200)",
    borderRadius: "8px",
    color: "var(--gray700)",
    selectors: {
      "&:active": {
        backgroundColor: "var(--gray50)"
      }
    }
  }
]);
const scheduleDetailDelEditButton = style({
  width: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  transition: "background-color 0.2s, box-shadow 0.2s",
  selectors: {
    "&:active": {
      backgroundColor: "var(--gray100)",
      boxShadow: "0 0 0 6px var(--gray100)"
    }
  }
});
function HighlightKeyword({ text, keyword }) {
  if (!keyword) return text;
  const parts = text.split(new RegExp(`(${keyword})`, "gi"));
  return /* @__PURE__ */ jsx(Fragment, { children: parts.map(
    (part, index) => part.toLowerCase() === keyword.toLowerCase() ? /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          display: "inline-block",
          color: "var(--primary500)"
        },
        children: part
      },
      index
    ) : part
  ) });
}
function TeamFindList(props) {
  const { onChange, closeModal } = props;
  const [search, setSearch] = useState("");
  const data = [
    { teamName: "서울대학교 농구동아리", leader: "김이프", teamId: "1232" },
    { teamName: "어반농구", leader: "김이프", teamId: "654" },
    { teamName: "SPABA", leader: "김이프", teamId: "745" },
    { teamName: "SPAPA", leader: "김이프", teamId: "7475" },
    { teamName: "BALL", leader: "김이프", teamId: "23423423" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      BasicInput,
      {
        iconType: "search",
        type: "text",
        placeholder: "팀 이름 입력",
        value: search,
        onChange: (e) => setSearch(e.target.value)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, style: { height: "360px" }, children: [
      /* @__PURE__ */ jsxs("p", { className: fonts.body4.regular, style: { color: "var(--gray400)" }, children: [
        "검색결과 ",
        `(${data.length}건)`
      ] }),
      /* @__PURE__ */ jsx("ul", { style: { overflowY: "auto" }, children: data.map((team) => /* @__PURE__ */ jsxs("li", { className: clsx(flexRowGap8, flexAlignCenter, teamFindListItem), children: [
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { flex: 1 }, children: [
          /* @__PURE__ */ jsx("span", { className: fonts.body3.medium, children: /* @__PURE__ */ jsx(HighlightKeyword, { text: team.teamName, keyword: search }) }),
          /* @__PURE__ */ jsxs("span", { className: fonts.caption1.regular, style: { color: "var(--gray400)" }, children: [
            "팀 리더: ",
            team.leader
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: teamFindListSelectButton,
            onClick: () => {
              onChange({ teamId: team.teamId, teamName: team.teamName });
              closeModal();
            },
            children: "선택"
          }
        )
      ] }, team.teamId)) })
    ] })
  ] });
}
function NewSchedule() {
  const router = useRouter();
  const teamId = useParams({ strict: false })["teamId"];
  const { ModalComponents, showModal } = useModal();
  const { ModalComponents: TeamListModalComponents, showModal: showTeamListModal } = useModal();
  const { register, watch, setValue } = useForm();
  const toast = useToast();
  const isOpenRef = useRef(false);
  const [category, setCategory] = useState("훈련");
  const [selectedTeam, setSelectedTeam] = useState({ teamId: "", teamName: "" });
  const formDate = watch("date");
  const formActiveVote = watch("activeVote");
  useEffect(() => {
    if (!isOpenRef.current) {
      showModal();
      isOpenRef.current = true;
    }
  }, []);
  useEffect(() => {
    if (isPast(formDate) && formActiveVote) {
      toast.trigger("과거 일정으로 참석 투표를 할 수 없습니다.", { type: "error" });
      setTimeout(() => {
        setValue("activeVote", false);
      }, 0);
    }
  }, [formDate, formActiveVote]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        onClose: () => {
          router.navigate({ to: `/team/${teamId}/schedule`, replace: true });
        },
        draggable: "all",
        buttons: [
          { name: "취소", onClick: (close) => close(), mode: "gray", fillType: "outline" },
          {
            name: "저장",
            onClick: (close) => {
              close();
              toast.trigger("일정이 저장되었습니다.", { type: "success" });
            },
            mode: "primary",
            fillType: "default"
          }
        ],
        children: /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
            /* @__PURE__ */ jsx(
              DropdownInput,
              {
                size: "small",
                placeholder: "카테고리",
                value: category,
                onChange: setCategory,
                options: [
                  { value: "훈련", name: "훈련" },
                  { value: "교류전", name: "교류전" },
                  { value: "팀 이벤트", name: "팀 이벤트" }
                  // { value: "대회", name: "대회" },
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { gap: "8px", color: "var(--gray700)" }, children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: fonts.body1.semibold,
                  ...register("title"),
                  placeholder: "일정 제목을 입력해 주세요"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: fonts.body4.regular,
                  ...register("description"),
                  placeholder: "일정 내용을 입력해 주세요"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
              /* @__PURE__ */ jsx(CalendarIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
              " ",
              /* @__PURE__ */ jsx(
                DateInput,
                {
                  bottomSheetHeader: { title: "날짜 선택", description: "해당 날짜에 일정이 생성됩니다." },
                  plainStyle: true,
                  className: fonts.body4.regular,
                  placeholder: "날짜 선택",
                  ...register("date")
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
              /* @__PURE__ */ jsx(LocationPinIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
              /* @__PURE__ */ jsx("input", { type: "text", className: fonts.body4.regular, ...register("location"), placeholder: "장소 선택" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
              /* @__PURE__ */ jsx(ClockIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
              /* @__PURE__ */ jsx(
                TimeInput,
                {
                  bottomSheetTitle: "시간 선택",
                  bottomSheetDescription: "일정이 시작될 시간을 입력해 주세요.",
                  placeholder: "시간 선택",
                  mode: "bottom-sheet",
                  ...register("time"),
                  plainStyle: true
                }
              )
            ] })
          ] }),
          category === "교류전" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "100%",
                  height: "1px",
                  backgroundColor: "var(--gray200)"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexSpaceBetween, flexRowGap4), children: [
              /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "대결 상대팀" }),
              /* @__PURE__ */ jsxs("span", { className: flexAlignCenter, onClick: () => showTeamListModal(), children: [
                /* @__PURE__ */ jsx("span", { className: fonts.body4.regular, children: selectedTeam.teamName }),
                /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                width: "100%",
                height: "1px",
                backgroundColor: "var(--gray200)"
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: [
              /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "참석 여부 투표" }),
              /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", ...register("activeVote") })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: clsx(flexAlignCenter, flexSpaceBetween),
                style: { display: watch("activeVote") ? "flex" : "none" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "투표 마감 날짜" }),
                  /* @__PURE__ */ jsxs("span", { className: flexAlignCenter, children: [
                    /* @__PURE__ */ jsx(
                      DateInput,
                      {
                        pickType: "ONLY_FUTURE",
                        plainStyle: true,
                        className: fonts.body4.regular,
                        style: {
                          cursor: "pointer",
                          width: "108px",
                          paddingRight: "28px",
                          marginRight: "-24px",
                          zIndex: 1
                        },
                        placeholder: "",
                        ...register("voteEndDate")
                      }
                    ),
                    /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" })
                  ] })
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      TeamListModalComponents,
      {
        draggable: "bar",
        title: "대결 상대팀 검색",
        description: "대결하고 싶은 상대팀을 검색하고, 선택해 주세요.",
        children: ({ closeModal }) => /* @__PURE__ */ jsx("div", { className: flexColumnGap30, style: { gap: "32px", marginTop: "-12px" }, children: /* @__PURE__ */ jsx(TeamFindList, { onChange: setSelectedTeam, closeModal }) })
      }
    )
  ] });
}
const DeleteIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2774'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2774)'%3e%3cpath%20d='M7.30775%2020.5C6.80908%2020.5%206.38308%2020.3234%206.02975%2019.9702C5.67658%2019.6169%205.5%2019.1909%205.5%2018.6922V6.49998C5.5%206.22384%205.27614%205.99998%205%205.99998C4.72386%205.99998%204.5%205.77612%204.5%205.49998V5.24998C4.5%204.83577%204.83579%204.49998%205.25%204.49998H9C9%204.01148%209.396%203.61548%209.8845%203.61548H14.1155C14.604%203.61548%2015%204.01148%2015%204.49998H18.75C19.1642%204.49998%2019.5%204.83577%2019.5%205.24998C19.5%205.66419%2019.1642%205.99998%2018.75%205.99998H18.5V18.6922C18.5%2019.1974%2018.325%2019.625%2017.975%2019.975C17.625%2020.325%2017.1974%2020.5%2016.6923%2020.5H7.30775ZM17%205.99998H7V18.6922C7%2018.7821%207.02883%2018.8558%207.0865%2018.9135C7.14417%2018.9711%207.21792%2019%207.30775%2019H16.6923C16.7692%2019%2016.8398%2018.9679%2016.9038%2018.9037C16.9679%2018.8397%2017%2018.7692%2017%2018.6922V5.99998ZM9.404%2016.2501C9.404%2016.6642%209.73973%2017%2010.1539%2017C10.568%2017%2010.9037%2016.6642%2010.9037%2016.2501V8.74985C10.9037%208.33571%2010.568%207.99998%2010.1539%207.99998C9.73973%207.99998%209.404%208.33571%209.404%208.74985V16.2501ZM13.0962%2016.2501C13.0962%2016.6642%2013.432%2017%2013.8461%2017C14.2603%2017%2014.596%2016.6642%2014.596%2016.2501V8.74985C14.596%208.33571%2014.2603%207.99998%2013.8461%207.99998C13.432%207.99998%2013.0962%208.33571%2013.0962%208.74985V16.2501Z'%20/%3e%3c/g%3e%3c/svg%3e";
const PencilIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_411_6209'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_411_6209)'%3e%3cpath%20d='M5%2018.4C5%2018.7314%205.26863%2019%205.6%2019H6.01297C6.1721%2019%206.32471%2018.9368%206.43724%2018.8243L16.498%208.7635L15.2365%207.502L5.17574%2017.5628C5.06321%2017.6753%205%2017.8279%205%2017.987V18.4ZM4.5%2020.5C3.94772%2020.5%203.5%2020.0523%203.5%2019.5V17.5298C3.5%2017.2646%203.60542%2017.0101%203.79305%2016.8226L16.6905%203.93075C16.8417%203.79342%2017.0086%203.68733%2017.1913%203.6125C17.3741%203.5375%2017.5658%203.5%2017.7663%203.5C17.9668%203.5%2018.1609%203.53558%2018.3488%203.60675C18.5367%203.67792%2018.7032%203.79108%2018.848%203.94625L20.0693%205.18275C20.2244%205.32758%2020.335%205.49425%2020.401%205.68275C20.467%205.87125%2020.5%206.05975%2020.5%206.24825C20.5%206.44942%2020.4657%206.64133%2020.397%206.824C20.3283%207.00683%2020.2191%207.17383%2020.0693%207.325L7.17735%2020.2074C6.98983%2020.3947%206.73559%2020.5%206.4705%2020.5H4.5ZM15.8562%208.14375L15.2365%207.502L16.498%208.7635L15.8562%208.14375Z'%20/%3e%3c/g%3e%3c/svg%3e";
function ViewSchedule({ scheduleId }) {
  const router = useRouter();
  const teamId = useParams({ strict: false })["teamId"];
  const { ModalComponents, showModal } = useModal();
  const [foldComments, setFoldComments] = useState(true);
  const isOpenRef = useRef(false);
  const categoryColor = {
    훈련: "gray",
    교류전: "primary",
    팀: "info",
    대회: "purple"
  };
  useEffect(() => {
    if (!isOpenRef.current) {
      showModal();
      isOpenRef.current = true;
    }
  }, []);
  const data = {
    category: "훈련",
    title: "훈련 1",
    place: "장소 1",
    date: "2025-05-26",
    time: "15:00",
    people: [
      { userId: "1", username: "홍길동", img: "https://picsum.photos/seed/picsum/300" },
      { userId: "2", username: "김철수", img: "https://picsum.photos/seed/picsum/300" }
    ],
    comments: [
      {
        commentsId: "1245",
        profileImg: "https://picsum.photos/seed/picsum/100",
        name: "홍길동",
        date: "2025-05-20 22:50",
        text: "서초 종합 운동장 입구에서 만나나요? 서초역에서 만나서 같이 가실분?"
      },
      {
        commentsId: "16245",
        profileImg: "https://picsum.photos/seed/picsum/40",
        name: "김영희",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "616245",
        profileImg: "https://picsum.photos/seed/picsum/40",
        name: "김영희",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "1025",
        profileImg: "https://picsum.photos/seed/picsum/10",
        name: "김영희",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "87975",
        profileImg: "https://picsum.photos/seed/picsum/40",
        name: "김이프",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "17055",
        profileImg: "https://picsum.photos/seed/picsum/10",
        name: "김영희",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "9875",
        profileImg: "https://picsum.photos/seed/picsum/40",
        name: "김이프",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "19905",
        profileImg: "https://picsum.photos/seed/picsum/10",
        name: "김영희",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      },
      {
        commentsId: "41975",
        profileImg: "https://picsum.photos/seed/picsum/40",
        name: "김이프",
        date: "2025-05-20 22:57",
        text: "저 나중에 그 근처에서 같이 가니깐요~"
      }
    ]
  };
  return /* @__PURE__ */ jsx(
    ModalComponents,
    {
      onClose: () => {
        setFoldComments(true);
        router.navigate({ to: `/team/${teamId}/schedule`, replace: true });
      },
      draggable: "all",
      buttons: foldComments ? [{ name: "경기 내용 보러가기", onClick: () => {
      }, mode: "primary" }] : void 0,
      children: /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: flexColumnGap20,
            style: {
              display: foldComments ? "flex" : "none"
            },
            children: [
              /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
                /* @__PURE__ */ jsxs("div", { className: clsx(flexSpaceBetween, flexAlignCenter), children: [
                  /* @__PURE__ */ jsx(Badge, { size: "medium", type: categoryColor[data?.category], fillType: "light", children: data?.category }),
                  /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap12, flexAlignCenter), children: [
                    /* @__PURE__ */ jsx(
                      "button",
                      {
                        type: "button",
                        className: scheduleDetailDelEditButton,
                        onClick: () => {
                          router.navigate({ to: `/team/${teamId}/schedule?feat=edit|${scheduleId}` });
                        },
                        children: /* @__PURE__ */ jsx(PencilIcon, { width: 24, height: 24, fill: "var(--gray700)" })
                      }
                    ),
                    /* @__PURE__ */ jsx("button", { type: "button", className: scheduleDetailDelEditButton, children: /* @__PURE__ */ jsx(DeleteIcon, { width: 24, height: 24, fill: "var(--gray700)" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { gap: "8px", color: "var(--gray700)" }, children: [
                  /* @__PURE__ */ jsx("div", { className: fonts.body2.semibold, children: data?.title }),
                  /* @__PURE__ */ jsx("div", { className: fonts.body4.regular, children: "부원들끼리 서초구 종합 운동장에 모여 리그 챔피언 배구 경기를 관전합니다. 어떻게 경기가 진행되는지 잘 살펴봅시다!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
                /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
                  /* @__PURE__ */ jsx(CalendarIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
                  " ",
                  data?.date
                ] }),
                /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
                  /* @__PURE__ */ jsx(LocationPinIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
                  " ",
                  data?.place
                ] }),
                /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
                  /* @__PURE__ */ jsx(ClockIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
                  " ",
                  data?.time
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--gray200)"
                  }
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: flexColumnGap10, children: [
                /* @__PURE__ */ jsxs("div", { className: flexSpaceBetween, children: [
                  /* @__PURE__ */ jsx("p", { className: fonts.body4.medium, style: { color: "var(--gray700)" }, children: "참석 여부" }),
                  /* @__PURE__ */ jsxs("div", { className: flexRowGap12, style: { color: "var(--gray700)" }, children: [
                    /* @__PURE__ */ jsx(
                      DropdownAction,
                      {
                        maxHeight: "200px",
                        options: data?.people.map((person) => ({
                          name: /* @__PURE__ */ jsxs("p", { className: flexAlignCenter, children: [
                            /* @__PURE__ */ jsx(
                              "img",
                              {
                                src: person.img,
                                alt: person.username,
                                style: { width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }
                              }
                            ),
                            person.username
                          ] }),
                          action: () => {
                          }
                        })),
                        children: /* @__PURE__ */ jsxs("div", { className: flexAlignCenter, style: { cursor: "pointer" }, children: [
                          /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
                            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "참석" }),
                            " ",
                            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, style: { color: "var(--primary500)" }, children: "18" })
                          ] }),
                          /* @__PURE__ */ jsx(DownArrowIcon, { width: 24, height: 24, fill: "var(--gray600)" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      DropdownAction,
                      {
                        maxHeight: "200px",
                        options: data?.people.map((person) => ({
                          name: /* @__PURE__ */ jsxs("p", { className: flexAlignCenter, children: [
                            /* @__PURE__ */ jsx(
                              "img",
                              {
                                src: person.img,
                                alt: person.username,
                                style: { width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }
                              }
                            ),
                            person.username
                          ] }),
                          action: () => {
                          }
                        })),
                        children: /* @__PURE__ */ jsxs("div", { className: flexAlignCenter, style: { cursor: "pointer" }, children: [
                          /* @__PURE__ */ jsxs("span", { className: flexRowGap4, children: [
                            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "불참석" }),
                            " ",
                            /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, style: { color: "var(--primary500)" }, children: "8" })
                          ] }),
                          /* @__PURE__ */ jsx(DownArrowIcon, { width: 24, height: 24, fill: "var(--gray600)" })
                        ] })
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: flexRowGap8, children: [
                  /* @__PURE__ */ jsxs(SelectVoteOption, { children: [
                    /* @__PURE__ */ jsx("input", { style: { visibility: "hidden" }, type: "radio", name: "vote" }),
                    /* @__PURE__ */ jsx("div", { className: "checkbox", children: /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20 }) }),
                    /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "참석" })
                  ] }),
                  /* @__PURE__ */ jsxs(SelectVoteOption, { children: [
                    /* @__PURE__ */ jsx("input", { style: { visibility: "hidden" }, type: "radio", name: "vote" }),
                    /* @__PURE__ */ jsx("div", { className: "checkbox", children: /* @__PURE__ */ jsx(CheckIcon, { width: 20, height: 20 }) }),
                    /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "불참석" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                "div",
                {
                  style: {
                    width: "100%",
                    height: "1px",
                    backgroundColor: "var(--gray200)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
          /* @__PURE__ */ jsxs("div", { className: flexSpaceBetween, children: [
            /* @__PURE__ */ jsxs("p", { className: fonts.body4.medium, style: { color: "var(--gray700)" }, children: [
              "댓글 ",
              /* @__PURE__ */ jsxs("span", { style: { color: "var(--gray400)" }, children: [
                "(",
                data?.comments.length,
                "개)"
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                className: fonts.body4.regular,
                style: { color: "var(--gray700)", textDecoration: "underline" },
                onClick: () => setFoldComments((prev) => !prev),
                children: foldComments ? "펼쳐보기" : "간략히"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: clsx(flexColumnGap20, scheduleDetailCommentsWrapper, "scrollable-container"),
              "data-fold": foldComments,
              children: data?.comments.map((comment) => /* @__PURE__ */ jsxs("div", { className: flexRowGap10, children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: comment.profileImg,
                    alt: "",
                    width: 28,
                    height: 28,
                    style: { borderRadius: "50%" }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { gap: "6px", flex: 1, color: "var(--gray700)" }, children: [
                  /* @__PURE__ */ jsxs("div", { className: flexSpaceBetween, children: [
                    /* @__PURE__ */ jsx("div", { className: fonts.body4.semibold, children: comment.name }),
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: clsx(fonts.caption1.regular, flexRowGap4, flexAlignCenter),
                        style: { color: "var(--gray400)" },
                        children: [
                          /* @__PURE__ */ jsx("span", { children: comment.date }),
                          /* @__PURE__ */ jsx(
                            DropdownAction,
                            {
                              icon: true,
                              options: [
                                { name: "수정", action: () => {
                                } },
                                { name: "삭제", action: () => {
                                } }
                              ]
                            }
                          )
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: fonts.body4.regular, children: comment.text })
                ] })
              ] }, comment.commentsId))
            }
          ),
          !foldComments && /* @__PURE__ */ jsxs("div", { className: commentContainer, style: { marginBottom: "-20px" }, children: [
            /* @__PURE__ */ jsx("input", { type: "text", className: commentInput, placeholder: "댓글을 입력해 주세요" }),
            /* @__PURE__ */ jsx(SendIcon, { fill: "var(--gray300)", width: 24, height: 24 })
          ] })
        ] })
      ] })
    }
  );
}
function EditSchedule({ scheduleId }) {
  const router = useRouter();
  const popup = usePopup();
  const teamId = useParams({ strict: false })["teamId"];
  const { ModalComponents, showModal } = useModal();
  const { ModalComponents: TeamListModalComponents, showModal: showTeamListModal } = useModal();
  const { register, watch, setValue } = useForm();
  const toast = useToast();
  const isOpenRef = useRef(false);
  const [category, setCategory] = useState("훈련");
  const [selectedTeam, setSelectedTeam] = useState({ teamId: "", teamName: "" });
  const formDate = watch("date");
  const formActiveVote = watch("activeVote");
  useEffect(() => {
    if (!isOpenRef.current) {
      showModal();
      isOpenRef.current = true;
    }
  }, []);
  useEffect(() => {
    if (isPast(formDate) && formActiveVote) {
      toast.trigger("과거 일정으로 참석 투표를 할 수 없습니다.", { type: "error" });
      setTimeout(() => {
        setValue("activeVote", false);
      }, 0);
    }
  }, [formDate, formActiveVote]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        onClose: () => {
          router.navigate({ to: `/team/${teamId}/schedule`, replace: true });
        },
        draggable: "all",
        buttons: [
          { name: "취소", onClick: (close) => close(), mode: "gray", fillType: "outline" },
          {
            name: "수정",
            onClick: async (close) => {
              const isEdit = await popup?.confirm(
                `해당 내용으로 일정을 수정하시겠어요?
수정 일정 적용 시, 팀원에게 알림이 전송됩니다.`,
                {
                  title: "일정 수정",
                  buttonText: {
                    yes: "네, 수정할게요",
                    no: "취소"
                  }
                }
              );
              if (!isEdit) return;
              close();
              toast.trigger("일정이 저장되었습니다.", { type: "success" });
            },
            mode: "primary",
            fillType: "default"
          }
        ],
        children: /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
            /* @__PURE__ */ jsx(
              DropdownInput,
              {
                size: "small",
                placeholder: "카테고리",
                value: category,
                onChange: setCategory,
                options: [
                  { value: "훈련", name: "훈련" },
                  { value: "교류전", name: "교류전" },
                  { value: "팀 이벤트", name: "팀 이벤트" }
                  // { value: "대회", name: "대회" },
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, style: { gap: "8px", color: "var(--gray700)" }, children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: fonts.body1.semibold,
                  ...register("title"),
                  placeholder: "일정 제목을 입력해 주세요"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: fonts.body4.regular,
                  ...register("description"),
                  placeholder: "일정 내용을 입력해 주세요"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
              /* @__PURE__ */ jsx(CalendarIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
              " ",
              /* @__PURE__ */ jsx(
                DateInput,
                {
                  bottomSheetHeader: { title: "날짜 선택", description: "해당 날짜에 일정이 생성됩니다." },
                  plainStyle: true,
                  className: fonts.body4.regular,
                  placeholder: "날짜 선택",
                  ...register("date")
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
              /* @__PURE__ */ jsx(LocationPinIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
              /* @__PURE__ */ jsx("input", { type: "text", className: fonts.body4.regular, ...register("location"), placeholder: "장소 선택" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: clsx(flexRowGap8, fonts.body4.regular), style: { color: "var(--gray500)" }, children: [
              /* @__PURE__ */ jsx(ClockIcon, { width: 20, height: 20, fill: "var(--gray500)" }),
              /* @__PURE__ */ jsx(
                TimeInput,
                {
                  bottomSheetTitle: "시간 선택",
                  bottomSheetDescription: "일정이 시작될 시간을 입력해 주세요.",
                  placeholder: "시간 선택",
                  mode: "bottom-sheet",
                  ...register("time"),
                  plainStyle: true
                }
              )
            ] })
          ] }),
          category === "교류전" && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "100%",
                  height: "1px",
                  backgroundColor: "var(--gray200)"
                }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexSpaceBetween, flexRowGap4), children: [
              /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "대결 상대팀" }),
              /* @__PURE__ */ jsxs("span", { className: flexAlignCenter, onClick: () => showTeamListModal(), children: [
                /* @__PURE__ */ jsx("span", { className: fonts.body4.regular, children: selectedTeam.teamName }),
                /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                width: "100%",
                height: "1px",
                backgroundColor: "var(--gray200)"
              }
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
            /* @__PURE__ */ jsxs("div", { className: clsx(flexAlignCenter, flexSpaceBetween), children: [
              /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "참석 여부 투표" }),
              /* @__PURE__ */ jsx(ToggleSwitch, { size: "large", ...register("activeVote") })
            ] }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: clsx(flexAlignCenter, flexSpaceBetween),
                style: { display: watch("activeVote") ? "flex" : "none" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: fonts.body4.medium, children: "투표 마감 날짜" }),
                  /* @__PURE__ */ jsxs("span", { className: flexAlignCenter, children: [
                    /* @__PURE__ */ jsx(
                      DateInput,
                      {
                        pickType: "ONLY_FUTURE",
                        plainStyle: true,
                        className: fonts.body4.regular,
                        style: {
                          cursor: "pointer",
                          width: "108px",
                          paddingRight: "28px",
                          marginRight: "-24px",
                          zIndex: 1
                        },
                        placeholder: "",
                        ...register("voteEndDate")
                      }
                    ),
                    /* @__PURE__ */ jsx(RightArrowIcon, { width: 24, height: 24, fill: "var(--gray700)" })
                  ] })
                ]
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      TeamListModalComponents,
      {
        draggable: "bar",
        title: "대결 상대팀 검색",
        description: "대결하고 싶은 상대팀을 검색하고, 선택해 주세요.",
        children: ({ closeModal }) => /* @__PURE__ */ jsx("div", { className: flexColumnGap30, style: { gap: "32px", marginTop: "-12px" }, children: /* @__PURE__ */ jsx(TeamFindList, { onChange: setSelectedTeam, closeModal }) })
      }
    )
  ] });
}
function ScheduleLayout() {
  const {
    feat
  } = useSearch({
    from: "/team/$teamId/schedule"
  });
  const scheduleId = feat?.startsWith("view") || feat?.startsWith("edit") ? feat.split("|")[1] : null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    feat === "new" && /* @__PURE__ */ jsx(NewSchedule, {}),
    feat?.startsWith("view") && /* @__PURE__ */ jsx(ViewSchedule, { scheduleId }),
    feat?.startsWith("edit") && /* @__PURE__ */ jsx(EditSchedule, { scheduleId }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
export {
  ScheduleLayout as component
};
