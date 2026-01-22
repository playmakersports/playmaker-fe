import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useRef, useImperativeHandle, useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { F as FONTS, T as TEXT_ACTIVE } from "./common-6ceLbjxn.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { getYear, getMonth, isFuture, isPast, isToday, isSameMonth, isSameDay, subMonths, addMonths, format } from "date-fns";
import { u as useCalendar } from "./useCalendar-DZwp9ZF5.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { useFloating, hide, flip, offset } from "@floating-ui/react";
import { L as LeftArrowIcon } from "./LeftArrow-BtJmGAG9.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
import { D as DownArrowIcon } from "./DownArrow-CJuEPh4T.js";
import { N as NumberFlowInput } from "./NumberFlowInput-CIrknTNT.js";
import { S as SUPPORT_SPORTS } from "./SPORTS-C8KNL8RQ.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { a as InputRadio } from "./SelectInput-Dl1BIb6a.js";
import { T as TextArea } from "./TextArea-C-rWbjLd.js";
import { D as DropdownInput } from "./DropdownInput-18dVrCGm.js";
import "clsx";
import "./fonts.css-vMQm04zv.js";
import "@vanilla-extract/css";
import "./Wrapper-DpW65hF8.js";
import "./InputWrapper-CgYCSwII.js";
import "./container.css-DZr6lpKA.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "@number-flow/react";
import "./Check-xgghRidd.js";
import "./container-B0RuEqwG.js";
const DateCalendarInput = React.forwardRef((props, ref) => {
  const {
    children,
    error,
    description,
    defaultValue,
    title,
    delButton = false,
    value,
    pickType = "EVERYDAY",
    ...rest
  } = props;
  const { trigger } = useToast();
  const [showCalendar, setShowCalendar] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: "bottom-start",
    open: showCalendar,
    onOpenChange: setShowCalendar,
    middleware: [hide(), flip(), offset(8)]
  });
  const containerRef = useRef(null);
  const { dayList, weekCalendarList, currentDate, setCurrentDate } = useCalendar();
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  const [yearValue, setYearValue] = useState(
    () => value ? +value.split("-")[0] : defaultValue ? +defaultValue.split("-")[0] : +getYear(/* @__PURE__ */ new Date())
  );
  const [monthValue, setMonthValue] = useState(
    () => value ? +value.split("-")[1] : defaultValue ? +defaultValue.split("-")[1] : +getMonth(/* @__PURE__ */ new Date()) + 1
  );
  useEffect(() => {
    const targetValue = value || defaultValue || inputRef.current?.value;
    if (targetValue) {
      const [year, month, day] = targetValue.split("-");
      setCurrentDate(/* @__PURE__ */ new Date(`${year}/${month}/${day}`));
      setYearValue(+year);
      setMonthValue(+month);
    }
  }, [value, setCurrentDate]);
  const handleMonthMove = (direction) => {
    const targetDate = direction === "PREV" ? subMonths(currentDate, 1) : addMonths(currentDate, 1);
    if (direction === "NEXT" && pickType === "ONLY_PAST" && isSameMonth(targetDate, /* @__PURE__ */ new Date()) && isFuture(targetDate) || direction === "PREV" && pickType === "ONLY_FUTURE" && isSameMonth(targetDate, /* @__PURE__ */ new Date()) && isPast(targetDate)) {
      setCurrentDate(/* @__PURE__ */ new Date());
    } else {
      setCurrentDate(targetDate);
    }
    setYearValue(targetDate.getFullYear());
    setMonthValue(targetDate.getMonth() + 1);
  };
  const handleCalendarView = () => {
    setShowCalendar(true);
  };
  const onClickUpdateDateValue = (targetDate) => {
    const currentValueFormatted = format(targetDate, "yyyy-MM-dd");
    if (inputRef.current) {
      inputRef.current.value = currentValueFormatted;
      if (rest.onChange) {
        rest.onChange({ target: { value: currentValueFormatted } });
      }
      setShowCalendar(false);
      inputRef.current.focus();
    }
  };
  const setCurrentDateValue = (date) => {
    const targetDate = date ?? /* @__PURE__ */ new Date();
    setCurrentDate(targetDate);
    setYearValue(targetDate.getFullYear());
    setMonthValue(targetDate.getMonth() + 1);
  };
  useEffect(() => {
    const outSideClick = (e) => {
      if (showCalendar && containerRef.current && !containerRef.current.contains(e.target)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mouseup", outSideClick);
  }, [showCalendar]);
  return /* @__PURE__ */ jsxs(Container$2, { ref: containerRef, children: [
    /* @__PURE__ */ jsxs("div", { ref: refs.setReference, style: { position: "relative" }, children: [
      /* @__PURE__ */ jsx(
        BasicInput,
        {
          error,
          description,
          ref: inputRef,
          type: "text",
          title,
          onButtonWrapClick: !props.disabled ? handleCalendarView : () => {
          },
          defaultValue: defaultValue && `${yearValue}-${monthValue}-${+defaultValue.split("-")[2]}`,
          ...rest
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "dropdown-icon",
          style: { top: title ? "28px" : "0" },
          "aria-disabled": props.disabled,
          onClick: !props.disabled ? handleCalendarView : () => {
          },
          children: /* @__PURE__ */ jsx(DownArrowIcon, {})
        }
      )
    ] }),
    showCalendar && /* @__PURE__ */ jsxs(CalendarModalWrapper, { role: "dialog", ref: refs.setFloating, style: floatingStyles, children: [
      /* @__PURE__ */ jsxs(NowDate, { children: [
        /* @__PURE__ */ jsxs(CurrentDateInputs, { children: [
          /* @__PURE__ */ jsxs("div", { className: "year", children: [
            /* @__PURE__ */ jsx(
              NumberFlowInput,
              {
                "aria-label": "연도 입력",
                pattern: "[0-9]*",
                inputMode: "numeric",
                value: yearValue,
                maxLength: 4,
                onFocus: (e) => e.target.select(),
                onChange: (e) => setYearValue(+e.target.value.slice(0, 4)),
                onBlur: (e) => {
                  const newYear = Number(e.target.value);
                  if (e.target.value !== "" && newYear > 1900 && newYear < 2999) {
                    const newDate = new Date(newYear, monthValue, currentDate.getDate());
                    if (pickType === "ONLY_PAST" && isFuture(newDate)) {
                      setCurrentDateValue();
                      trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                    } else if (pickType === "ONLY_FUTURE" && isPast(newDate) && !isToday(newDate)) {
                      setCurrentDateValue();
                      trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                    } else {
                      setCurrentDateValue(new Date(newYear, monthValue - 1, currentDate.getDate()));
                    }
                  } else {
                    setCurrentDateValue();
                  }
                }
              }
            ),
            "년"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "month", children: [
            /* @__PURE__ */ jsx(
              NumberFlowInput,
              {
                min: 1,
                max: 12,
                "aria-label": "월 입력",
                pattern: "[0-9]*",
                inputMode: "numeric",
                style: {
                  paddingRight: "1px",
                  width: monthValue < 10 ? "12px" : "20px",
                  textAlign: monthValue < 10 ? "right" : "left"
                },
                value: monthValue,
                onFocus: (e) => e.target.select(),
                onChange: (e) => {
                  if (Number(e.target.value) >= 0 && Number(e.target.value) < 13) {
                    setMonthValue(+e.target.value);
                  }
                  return;
                },
                onBlur: (e) => {
                  const newMonth = Number(e.target.value);
                  if (e.target.value !== "" && newMonth > 0 && newMonth < 13) {
                    const newDate = new Date(yearValue, newMonth, currentDate.getDate());
                    if (pickType === "ONLY_PAST" && isFuture(newDate)) {
                      setCurrentDateValue();
                      trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                    } else if (pickType === "ONLY_FUTURE" && isPast(newDate) && !isToday(newDate)) {
                      setCurrentDateValue();
                      trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                    } else {
                      setCurrentDateValue(new Date(yearValue, newMonth - 1, currentDate.getDate()));
                    }
                  } else {
                    setCurrentDateValue();
                  }
                }
              }
            ),
            "월"
          ] })
        ] }),
        /* @__PURE__ */ jsxs(MonthSwitch, { children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: pickType === "ONLY_FUTURE" && isSameMonth(currentDate, /* @__PURE__ */ new Date()),
              onClick: () => handleMonthMove("PREV"),
              children: /* @__PURE__ */ jsx(LeftArrowIcon, {})
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              disabled: pickType === "ONLY_PAST" && isSameMonth(currentDate, /* @__PURE__ */ new Date()),
              onClick: () => handleMonthMove("NEXT"),
              children: /* @__PURE__ */ jsx(RightArrowIcon, {})
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Calendar, { children: [
        /* @__PURE__ */ jsx(Week, { className: "week-name-header", children: dayList.map((value2) => /* @__PURE__ */ jsx(DayName, { children: value2 }, value2)) }),
        weekCalendarList.map((week, weekNum) => /* @__PURE__ */ jsx(Week, { children: week.map((day) => /* @__PURE__ */ jsx(
          Day,
          {
            tabIndex: !(day.nextMonth || day.previousMonth) ? day.displayValue : -1,
            type: "button",
            $isCurrentMonth: !(day.nextMonth || day.previousMonth),
            $isHoliday: day.holiday.isHoliday,
            className: isSameDay(day.date, currentDate) ? "current-date" : "",
            "aria-label": `${day.date.getMonth() + 1}월 ${day.displayValue}일`,
            onClick: () => {
              const year = day.date.getFullYear();
              const month = day.date.getMonth() + 1;
              setCurrentDate(day.date);
              setYearValue(year);
              setMonthValue(month);
              onClickUpdateDateValue(day.date);
            },
            children: day.displayValue
          },
          day.date.toString()
        )) }, weekNum))
      ] })
    ] })
  ] });
});
DateCalendarInput.displayName = "DateCalendarInput";
const Container$2 = styled.div`
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
`;
const CalendarModalWrapper = styled.div`
  position: absolute;
  margin: 0 -4px;
  width: 320px;
  min-width: 320px;
  padding: 16px;
  background-color: var(--background-light);
  border-radius: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 50;
  color: var(--gray700);
`;
const NowDate = styled.div`
  display: flex;
  margin-bottom: 8px;
  justify-content: space-between;
`;
const CurrentDateInputs = styled.div`
  display: flex;
  gap: 8px;
  color: var(--gray900);
  ${FONTS.body2("semibold")};

  & > div.year,
  & > div.month {
    display: flex;
    align-items: center;
  }
`;
const MonthSwitch = styled.div`
  display: flex;
  gap: 12px;
  button {
    width: 28px;
    height: 28px;
    border-radius: 4px;

    svg {
      width: 100%;
      height: 100%;
      fill: var(--gray700);
    }
    &:not(:disabled) {
      ${TEXT_ACTIVE("var(--gray100)", { activeRange: 2 })}
    }
    &:disabled {
      cursor: not-allowed;
      svg {
        fill: var(--gray300);
      }
    }
  }
`;
const Calendar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Week = styled.div`
  display: flex;
  justify-content: space-between;

  &.week-name-header {
    display: inline-flex;
    align-items: center;
    margin-bottom: -8px;
  }
`;
const DayName = styled.div`
  width: 40px;
  height: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray400);
  ${FONTS.body4("medium")};
`;
const Day = styled.button`
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid transparent;
  /* color: ${({ $isHoliday }) => $isHoliday ? "var(--red400)" : "var(--gray700)"}; */
  color: ${({ $isCurrentMonth }) => $isCurrentMonth ? "var(--gray700)" : "var(--gray300)"};
  border-radius: 10px;
  ${FONTS.body3("medium")};

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray50);
  }
  &:active {
    background-color: var(--gray100);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    color: var(--white);
    ${FONTS.body3("semibold")};
  }
`;
function InputRadioWrapper({ title, children }) {
  return /* @__PURE__ */ jsxs(Container$1, { children: [
    /* @__PURE__ */ jsx("p", { className: "input-title", children: title }),
    /* @__PURE__ */ jsx(Items, { children })
  ] });
}
const Container$1 = styled.div`
  .input-title {
    font-size: 1.4rem;
    margin-bottom: 4px;
    padding: 0 10px;
    font-weight: 500;
    color: var(--gray700);
    line-height: 2.4rem;
  }

  .input-information {
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 8px;
    font-size: 1.2rem;
    color: var(--gray700);
    gap: 4px;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
const Items = styled.div`
  display: flex;
  gap: 10px;
`;
function CompetitionCreatePC() {
  const [sportsType, setSportsType] = useState("");
  const [teamNumber, setTeamNumber] = useState("");
  const [ageType, setAgeType] = useState("");
  const [bankName, setBankName] = useState("");
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return /* @__PURE__ */ jsxs(Container, { children: [
    /* @__PURE__ */ jsx("h2", { children: "새 대회 만들기" }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [
      /* @__PURE__ */ jsx("section", { className: "poster", children: /* @__PURE__ */ jsx("label", { children: "포스터 이미지 첨부" }) }),
      /* @__PURE__ */ jsxs("section", { className: "form-flex2", children: [
        /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "종목 및 대회명", children: [
          /* @__PURE__ */ jsx("div", { style: {
            width: "220px"
          }, children: /* @__PURE__ */ jsx(DropdownInput, { placeholder: "종목 선택", value: sportsType, onChange: setSportsType, options: SUPPORT_SPORTS.map((sports) => ({
            name: sports.name,
            value: sports.value
          })) }) }),
          /* @__PURE__ */ jsx(BasicInput, { type: "text", tabIndex: 1, ...register("title", {
            required: true
          }), placeholder: "대회명을 입력하세요" })
        ] }),
        /* @__PURE__ */ jsxs("section", { className: "form-grid-2", children: [
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "모집 기간", children: [
            /* @__PURE__ */ jsx(DateCalendarInput, { tabIndex: 3, placeholder: "모집 시작일", ...register("applyStartDate", {
              valueAsDate: true
            }) }),
            /* @__PURE__ */ jsx(DateCalendarInput, { tabIndex: 4, error: !!errors.applyEndDate, description: errors.applyEndDate ? errors.applyEndDate.message : "", placeholder: "모집 종료일", ...register("applyEndDate", {
              valueAsDate: true,
              validate: (value, formValues) => {
                const startDate = formValues["applyStartDate"];
                if (new Date(value) < new Date(startDate)) {
                  console.log(errors);
                  return "종료일은 시작일 이후여야 합니다.";
                }
                return true;
              }
            }) })
          ] }),
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "대회 기간", children: [
            /* @__PURE__ */ jsx(DateCalendarInput, { tabIndex: 5, placeholder: "대회 시작일", ...register("startDate", {
              valueAsDate: true
            }) }),
            /* @__PURE__ */ jsx(DateCalendarInput, { tabIndex: 6, error: !!errors.endDate, description: errors.endDate ? errors.endDate.message : "", placeholder: "대회 종료일", ...register("endDate", {
              valueAsDate: true,
              validate: (value, formValues) => {
                const startDate = formValues["startDate"];
                if (new Date(value) < new Date(startDate)) {
                  return "종료일은 시작일 이후여야 합니다.";
                }
                return true;
              }
            }) })
          ] }),
          /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "장소", ...register("place") }),
          /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "주최", disabled: true, information: "로그인된 계정의 소속 팀으로 자동입력됩니다.", ...register("host") }),
          /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "주관", ...register("organizer") }),
          /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "협찬", ...register("sponsor") }),
          /* @__PURE__ */ jsx("h3", { className: "group-title", children: "대회 방식" }),
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "참가 팀 수", children: [
            /* @__PURE__ */ jsx(DropdownInput, { placeholder: "선택", value: teamNumber, onChange: setTeamNumber, options: [{
              name: "12명",
              value: "12"
            }, {
              name: "20명",
              value: "20"
            }, {
              name: "직접 입력",
              value: "-1"
            }] }),
            /* @__PURE__ */ jsx(BasicInput, { type: "number", disabled: teamNumber !== "-1" })
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "group-title", children: "참가 조건" }),
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "성별", children: [
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("gender"), value: "mixed", id: "mixed", text: {
              title: "제한 없음"
            } }),
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("gender"), value: "male", id: "male", text: {
              title: "남성"
            } }),
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("gender"), value: "female", id: "female", text: {
              title: "여성"
            } })
          ] }),
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "국적", children: [
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("nationality"), value: "korean", id: "korean", text: {
              title: "대한민국 국적만"
            } }),
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("nationality"), value: "foreigner", id: "foreigner", text: {
              title: "외국인 허용"
            } })
          ] }),
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "출신", children: [
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("experience"), value: "amateur", id: "amateur", text: {
              title: "아마추어만"
            } }),
            /* @__PURE__ */ jsx(InputRadio, { buttonType: true, ...register("experience"), value: "athlete", id: "athlete", text: {
              title: "고교 이후 선출 허용"
            } })
          ] }),
          /* @__PURE__ */ jsxs(InputRadioWrapper, { title: "연령", children: [
            /* @__PURE__ */ jsx(DropdownInput, { value: ageType, onChange: setAgeType, placeholder: "나이 방식", options: [{
              name: "만나이",
              value: "global"
            }, {
              name: "한국식 나이",
              value: "korean-age"
            }] }),
            /* @__PURE__ */ jsx(BasicInput, { type: "number", placeholder: "최소 연령", ...register("ageRangeMin") }),
            /* @__PURE__ */ jsx(BasicInput, { type: "number", placeholder: "최대 연령", ...register("ageRangeMax") })
          ] }),
          /* @__PURE__ */ jsx("article", { className: "grid-merge", children: /* @__PURE__ */ jsx(TextArea, { title: "기타 참가 조건" }) }),
          /* @__PURE__ */ jsx("h3", { className: "group-title", children: "참가비" }),
          /* @__PURE__ */ jsxs("section", { className: "grid-merge form-grid-column", children: [
            /* @__PURE__ */ jsx("div", { style: {
              width: "132px",
              marginRight: "-8px"
            }, children: /* @__PURE__ */ jsx(DropdownInput, { title: "계좌번호", placeholder: "은행 선택", value: bankName, onChange: setBankName, options: [{
              name: "신한은행",
              value: "shinhan"
            }, {
              name: "KB국민은행",
              value: "kookmin"
            }, {
              name: "하나은행",
              value: "hana"
            }, {
              name: "우리은행",
              value: "woori"
            }, {
              name: "기업은행",
              value: "ibk"
            }, {
              name: "NH농협",
              value: "nh"
            }, {
              name: "카카오뱅크",
              value: "kakao"
            }, {
              name: "케이뱅크",
              value: "kbank"
            }, {
              name: "토스뱅크",
              value: "toss"
            }] }) }),
            /* @__PURE__ */ jsx("div", { className: "form-flex2", children: /* @__PURE__ */ jsx(InputRadioWrapper, { title: "ㅤ", children: /* @__PURE__ */ jsx(BasicInput, { type: "text", placeholder: "하이픈 없이 숫자만 입력하세요", ...register("accountNum", {
              setValueAs: (value) => value.replaceAll("-", "").trim()
            }) }) }) }),
            /* @__PURE__ */ jsx("div", { className: "form-flex1", children: /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "계좌 예금주", ...register("accountOwnerName") }) })
          ] }),
          /* @__PURE__ */ jsx(BasicInput, { delButton: false, suffix: "원", type: "text", style: {
            textAlign: "right"
          }, title: "금액", ...register("attendPay", {
            onChange: (e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              e.target.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            setValueAs: (value) => +value.replaceAll(",", "").trim()
          }) }),
          /* @__PURE__ */ jsx(InputRadioWrapper, { title: "입금 기한", children: /* @__PURE__ */ jsx(DateCalendarInput, { placeholder: "입금 마감일", ...register("payEndDate", {
            valueAsDate: true
          }) }) }),
          /* @__PURE__ */ jsx(TextArea, { title: "환불 규정", ...register("refundInfo") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Bottom, { children: [
        /* @__PURE__ */ jsxs("div", { className: "bottom-left-side", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", fullWidth: true, children: "임시저장" }),
          /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", fillType: "outline", fullWidth: true, children: "불러오기" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "bottom-right-side", children: /* @__PURE__ */ jsx(Button, { type: "submit", mode: "primary", fullWidth: true, children: "작성 완료" }) })
      ] })
    ] })
  ] });
}
const Container = styled.section`
  padding: 32px 60px 132px;
  @media (max-width: 1000px) {
    padding: 32px 8px;
  }

  h2 {
    ${FONTS.body1("semibold")};
    padding: 0 2px;
    margin-bottom: 20px;
    font-size: 2.4rem;
  }
  h3.group-title {
    grid-column: 1 / 3;
    ${FONTS.body1("semibold")};
    margin: 24px 0 0;
    font-size: 2rem;
  }
  form {
    display: flex;
    gap: 24px;

    section.poster {
      label {
        position: sticky;
        top: 20px;
        ${FONTS.body4("regular")};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: min(20vw, 260px);
        height: min(30vw, 390px);
        border: 1px solid var(--gray100);
        background-color: var(--gray50);
        border-radius: 10px;
        color: var(--gray700);
      }
    }

    section {
      display: flex;
      gap: 24px 36px;
    }
    .form-grid-column {
      gap: 24px 20px;
    }
    .form-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
      }
    }
    .form-flex2 {
      flex: 2;
      flex-direction: column;
    }
    .form-flex1 {
      flex: 1;
      flex-direction: column;
    }
    .grid-merge {
      grid-column: 1 / 3;
    }
  }
`;
const Bottom = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 80px 24px;
  left: 0;
  bottom: 0;
  width: 100%;
  gap: 60px;
  background-color: var(--background-light);
  border-top: 1px solid var(--gray200);
  z-index: 40;

  div.bottom-left-side {
    flex: 0.25;
    display: flex;
    gap: 10px;
  }
  div.bottom-right-side {
    flex: 0.2;
  }
`;
export {
  CompetitionCreatePC as component
};
