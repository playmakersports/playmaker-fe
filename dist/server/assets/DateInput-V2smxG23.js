import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React, { useRef, useImperativeHandle, useState, useEffect } from "react";
import styled from "styled-components";
import { getYear, getMonth, format, isToday, isSameMonth, isFuture, isPast, isSameDay, subMonths, addMonths } from "date-fns";
import { u as useCalendar } from "./useCalendar-DZwp9ZF5.js";
import { u as useModal } from "./useModal--yzWVOVY.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { F as FONTS, T as TEXT_ACTIVE } from "./common-6ceLbjxn.js";
import { L as LeftArrowIcon } from "./LeftArrow-BtJmGAG9.js";
import { R as RightArrowIcon } from "./RightArrow-DXzZnMRc.js";
const DateKeypadInput = styled.input`
  width: 100%;
  color: var(--gray700);
  text-align: right;
  -moz-appearance: textfield;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  padding: 1px;
  &:focus {
    padding: 0px;
    box-sizing: border-box;
    border-radius: 4px;
  }
`;
styled.input`
  appearance: none;
  width: 100%;
  height: 2px;

  background: ${({ min, max, value }) => {
  const percentage = (value - min) / (max - min) * 100;
  return `linear-gradient(to right, var(--primary500) 0%, var(--primary500) ${percentage}%, var(--gray200) ${percentage}%, var(--gray200) 100%)`;
}};
  border-radius: 4px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background-color: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
  &::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background-color: var(--white);
    border: 1px solid var(--gray300);
    border-radius: 50%;
    cursor: pointer;
    box-shadow: var(--shadow-xs);
  }
`;
const DateInput = React.forwardRef((props, ref) => {
  const {
    defaultValue,
    title,
    error,
    description,
    value,
    pickType = "EVERYDAY",
    plainStyle = false,
    bottomSheetHeader,
    ...rest
  } = props;
  const { ModalComponents, showModal } = useModal();
  const { trigger } = useToast();
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
  const setTargetDate = (target) => {
    if (target) {
      const [year, month, day] = target.split("/");
      setCurrentDate(/* @__PURE__ */ new Date(`${year}/${month}/${day}`));
      setYearValue(+year);
      setMonthValue(+month);
    } else {
      setCurrentDate(/* @__PURE__ */ new Date());
      setYearValue((/* @__PURE__ */ new Date()).getFullYear());
      setMonthValue((/* @__PURE__ */ new Date()).getMonth() + 1);
    }
  };
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    plainStyle ? /* @__PURE__ */ jsx("input", { type: "text", name: rest.name, ref: inputRef, onClick: () => showModal(), readOnly: true, ...rest }) : /* @__PURE__ */ jsx(
      BasicInput,
      {
        ref: inputRef,
        type: "text",
        name: rest.name,
        title,
        error,
        description,
        onButtonWrapClick: () => showModal(),
        ...rest
      }
    ),
    /* @__PURE__ */ jsx(
      ModalComponents,
      {
        title: bottomSheetHeader?.title,
        description: bottomSheetHeader?.description,
        draggable: "all",
        buttons: [
          {
            mode: "primary",
            disabled: !(value || defaultValue || inputRef.current && inputRef.current.value),
            name: value || defaultValue || inputRef.current && inputRef.current.value ? `${format(currentDate, "yyyy년 M월 d일")}로 설정` : "날짜를 선택하세요",
            onClick: (close) => {
              if (inputRef.current) {
                const newValue = format(currentDate, "yyyy-MM-dd");
                inputRef.current.value = newValue;
                if (rest.onChange) {
                  rest.onChange({
                    target: {
                      name: props.name,
                      value: newValue
                    }
                  });
                }
              }
              inputRef.current?.focus();
              close();
            }
          }
        ],
        children: /* @__PURE__ */ jsxs(Container, { children: [
          /* @__PURE__ */ jsxs(NowDate, { children: [
            /* @__PURE__ */ jsxs(CurrentDateInputs, { children: [
              /* @__PURE__ */ jsxs("div", { className: "year", children: [
                /* @__PURE__ */ jsx(
                  DateKeypadInput,
                  {
                    type: "number",
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
                        const newDate = new Date(newYear, monthValue - 1, 1);
                        if (pickType === "ONLY_PAST" && newDate > /* @__PURE__ */ new Date()) {
                          setTargetDate();
                          trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                        } else if (pickType === "ONLY_FUTURE" && newDate < /* @__PURE__ */ new Date()) {
                          setTargetDate();
                          trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                        } else {
                          setTargetDate(`${newYear}/${monthValue}/01`);
                        }
                      } else {
                        setTargetDate();
                      }
                    }
                  }
                ),
                "년"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "month", children: [
                /* @__PURE__ */ jsx(
                  DateKeypadInput,
                  {
                    type: "number",
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
                    onChange: (e) => setMonthValue(+e.target.value),
                    onBlur: (e) => {
                      const newMonth = Number(e.target.value);
                      if (e.target.value !== "" && newMonth > 0 && newMonth < 13) {
                        const newDate = new Date(yearValue, newMonth - 1, currentDate.getDate());
                        if (pickType === "ONLY_PAST" && newDate > /* @__PURE__ */ new Date()) {
                          setTargetDate();
                          trigger("미래로 날짜를 설정할 수 없어요.", { type: "error" });
                        } else if (pickType === "ONLY_FUTURE" && newDate < /* @__PURE__ */ new Date() && !isToday(newDate)) {
                          setTargetDate();
                          trigger("과거로 날짜를 설정할 수 없어요.", { type: "error" });
                        } else {
                          setTargetDate(`${yearValue}/${newMonth}/${currentDate.getDate()}`);
                        }
                      } else {
                        setTargetDate();
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
            /* @__PURE__ */ jsx(Week, { children: dayList.map((value2) => /* @__PURE__ */ jsx(DayName, { children: value2 }, value2)) }),
            weekCalendarList.map((week, weekNum) => /* @__PURE__ */ jsx(Week, { children: week.map((day) => /* @__PURE__ */ jsx(
              Day,
              {
                type: "button",
                disabled: pickType === "ONLY_PAST" && isFuture(day.date) || pickType === "ONLY_FUTURE" && isPast(day.date) && !isToday(day.date),
                $isCurrentMonth: !(day.nextMonth || day.previousMonth),
                $isHoliday: day.holiday.isHoliday,
                className: isSameDay(day.date, currentDate) && inputRef.current && inputRef.current.value ? "current-date" : "",
                "aria-label": `${day.date.getMonth() + 1}월 ${day.displayValue}일`,
                onClick: () => {
                  const year = day.date.getFullYear();
                  const month = day.date.getMonth() + 1;
                  const date = day.date.getDate();
                  setCurrentDate(day.date);
                  setYearValue(year);
                  setMonthValue(month);
                  const updatedNewDate = `${year}/${String(month).padStart(2, "0")}/${String(date).padStart(
                    2,
                    "0"
                  )}`;
                  if (inputRef.current) {
                    inputRef.current.value = updatedNewDate.replaceAll("/", "-");
                  }
                  if (rest.onChange) {
                    rest.onChange({
                      target: { value: updatedNewDate.replaceAll("/", "-") }
                    });
                  }
                  setTargetDate(updatedNewDate);
                },
                children: day.displayValue
              },
              day.date.toString()
            )) }, weekNum))
          ] })
        ] })
      }
    )
  ] });
});
DateInput.displayName = "DateInput";
const Container = styled.div`
  position: relative;
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
  ${FONTS.body2("semibold")};

  ${DateKeypadInput} {
    padding: 0;
    text-align: left;
    max-width: 46px;
    border-radius: 0;
    ${FONTS.body2("semibold")};
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
  display: flex;
  margin-bottom: 20px; // Bottom Sheet default 20px + Calendar 20px = 40px
  flex-direction: column;
`;
const Week = styled.div`
  --cal-gap: 4px;
  display: flex;
  justify-content: space-between;
  height: calc((min(100vw, var(--mobile-max-width)) - 32px - (var(--cal-gap) * 7)) / 7);
  gap: var(--cal-gap);
  ${FONTS.body2("medium")};
`;
const DayName = styled.div`
  flex: 1;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gray400);
  ${FONTS.body4("medium")};
`;
const Day = styled.button`
  position: relative;
  flex: 1;
  text-align: center;
  border: 1px solid transparent;
  color: ${({ $isCurrentMonth }) => $isCurrentMonth ? "var(--gray700)" : "var(--gray300)"};
  /* color: ${({ $isHoliday }) => $isHoliday ? "var(--red400)" : "var(--gray600)"}; */
  opacity: ${({ $isCurrentMonth }) => $isCurrentMonth ? 1 : 0.5};
  border-radius: 10px;

  &[aria-invalid] {
    visibility: hidden;
  }
  &:hover {
    background-color: var(--gray50);
  }
  &:focus {
    background-color: var(--gray200);
  }
  &:active {
    background-color: var(--gray100);
  }
  &:disabled {
    cursor: not-allowed;
    color: var(--gray300);
    &:hover,
    &:focus,
    &:active {
    }
    background-color: transparent;
    transform: scale(1);
  }
  &.current-date {
    background-color: var(--main);
    transform: scale(1.03);
    color: #fff;
    font-weight: 600; // semibold
  }
`;
export {
  DateInput as D,
  DateKeypadInput as a
};
