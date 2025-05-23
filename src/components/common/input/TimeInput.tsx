"use client";

import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
import { getHours, getMinutes } from "date-fns";
import useModal from "@/hook/useModal";

import { FONTS } from "@/styles/common";
import Button from "../Button";
import { BasicInput, InputProps } from "./BaseInput";
import { DateKeypadInput } from "./PlainInput";
import { InputStyledWrapper } from "../Wrapper";
import TimeInputModal from "./TimeInputModalContainer";
import DownArrowIcon from "@/assets/icon/arrow/DownArrow.svg";

type Props = Omit<InputProps, "type" | "value" | "iconType" | "suffix"> &
  (
    | {
        mode: "bottom-sheet";
        plainStyle?: boolean;
        value?: string;
        defaultValue?: string;
        bottomSheetTitle?: string;
        bottomSheetDescription?: string;
      }
    | { mode: "modal"; plainStyle?: boolean; value?: string; defaultValue?: string }
  );

const TimeInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { ModalComponents, showModal: showBottomSheet } = useModal();
  const { plainStyle = false, mode = "modal", error, description, defaultValue, title } = props;
  const [showTimeModal, setShowTimeModal] = useState(false);
  const [modalPosition, setModalPosition] = useState<{
    x: "left" | "right";
    y: "top" | "bottom";
  }>({ x: "left", y: "top" });
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

  const getHourMinute = (target: string) => {
    const [hour, minute] = target.split(":");
    const am = +hour < 12;
    const calculateHour = am ? hour : `${+hour - 12}`;
    return { hour: calculateHour, minute, am };
  };
  const initialTime = defaultValue ? getHourMinute(defaultValue) : null;
  const [timeValue, setTimeValue] = useState(() =>
    initialTime
      ? {
          am: initialTime.am,
          hour: initialTime.hour,
          minute: initialTime.minute,
        }
      : {
          am: getHours(new Date()) < 12,
          hour:
            getHours(new Date()) < 12
              ? String(getHours(new Date())).padStart(2, "0")
              : String(getHours(new Date()) - 12).padStart(2, "0"),
          minute: String(getMinutes(new Date())).padStart(2, "0"),
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
        +timeValue.hour +
          (!timeValue.am && +timeValue.hour < 12 ? 12 : 0) -
          (timeValue.am && +timeValue.hour === 12 ? 12 : 0)
      ).padStart(2, "0")}:${timeValue.minute.padStart(2, "0")}`;

      inputRef.current.value = newValue;

      if (inputRef.current) {
        inputRef.current.value = newValue;
        props.onChange?.({
          target: {
            name: props.name,
            value: newValue,
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
    if (mode === "modal") {
      setShowTimeModal(false);
    } else {
      return;
    }
  };

  useEffect(() => {
    const outSideClick = (e: MouseEvent) => {
      if (showTimeModal && containerRef.current && !containerRef.current.contains(e.target as Node)) {
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
      const { bottomSheetTitle, bottomSheetDescription, plainStyle, ...bottomSheetRest } = props;
      return { ...bottomSheetRest };
    } else {
      const { plainStyle, ...modalRest } = props;
      return modalRest;
    }
  };

  return (
    <Container ref={containerRef}>
      {plainStyle ? (
        <input
          type="text"
          name={props.name}
          id={props.id}
          ref={inputRef}
          onClick={!props.disabled ? handleModalView : () => {}}
          readOnly
          {...bottomSheetRest()}
        />
      ) : (
        <div style={{ position: "relative" }} className="input-wrapper">
          <BasicInput
            type="text"
            error={error}
            name={props.name}
            id={props.id}
            description={description}
            ref={inputRef}
            title={title}
            onButtonWrapClick={!props.disabled ? handleModalView : () => {}}
            {...bottomSheetRest()}
          />
          <div
            className="dropdown-icon"
            style={{ top: title ? "28px" : "0" }}
            aria-disabled={props.disabled}
            onClick={!props.disabled ? handleModalView : () => {}}
          >
            <DownArrowIcon />
          </div>
        </div>
      )}

      <TimeInputModal
        mode={mode}
        title={title}
        BottomSheetContainer={ModalComponents}
        onClickConfirm={onClickUpdateInput}
        position={modalPosition}
        showTimeModal={showTimeModal}
        {...bottomSheetProps()}
      >
        <TimeSelector data-view-mode={mode}>
          <HourMinute>
            <div className="input-wrapper">
              <label className="modal-input-label" htmlFor={`${props.id}-hourInput`}>
                시
              </label>
              <ModalInput>
                <DateKeypadInput
                  type="text"
                  id={`${props.id}-hourInput`}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  disabled={props.disabled}
                  value={timeValue.hour}
                  onFocus={(e) => e.target.select()}
                  onChange={(event) => {
                    const value = event.target.value;
                    if (+value > 23) return null;
                    setTimeValue((prev) => ({ ...prev, hour: value }));
                  }}
                  onBlur={(event) => {
                    const value = event.target.value;
                    if (+value > 12) {
                      setTimeValue((prev) => ({ ...prev, am: false, hour: String(+value - 12).padStart(2, "0") }));
                    } else if (+value === 0) {
                      setTimeValue((prev) => ({ ...prev, am: true, hour: "12" }));
                    } else {
                      setTimeValue((prev) => ({ ...prev, hour: value.padStart(2, "0") }));
                    }
                  }}
                />
              </ModalInput>
            </div>
            <span className="cologne" data-view-mode={mode}>
              :
            </span>
            <div className="input-wrapper">
              <label className="modal-input-label" htmlFor={`${props.id}-minuteInput`}>
                분
              </label>
              <ModalInput>
                <DateKeypadInput
                  type="text"
                  id={`${props.id}-minuteInput`}
                  pattern="[0-9]*"
                  inputMode="numeric"
                  value={timeValue.minute}
                  disabled={props.disabled}
                  onFocus={(e) => e.target.select()}
                  onChange={(event) => {
                    if (+event.target.value > 59) return null;
                    setTimeValue((prev) => ({ ...prev, minute: event.target.value }));
                  }}
                  onBlur={(event) => setTimeValue((prev) => ({ ...prev, minute: event.target.value.padStart(2, "0") }))}
                />
              </ModalInput>
            </div>
          </HourMinute>
          <ButtonAMPM
            type="button"
            data-view-mode={mode}
            disabled={props.disabled}
            onClick={() => {
              if (timeValue.hour === "12") {
                setTimeValue((prev) => ({ ...prev, am: !prev.am }));
              } else if (timeValue.hour === "00") {
                setTimeValue((prev) => ({ ...prev, am: false, hour: "12" }));
              } else {
                setTimeValue((prev) => ({ ...prev, am: !prev.am }));
              }
            }}
          >
            <span data-active={timeValue.am}>오전</span>
            <span data-active={!timeValue.am}>오후</span>
            <span
              className="active-background"
              style={{
                transform:
                  mode === "modal"
                    ? `translateY(${timeValue.am ? "0" : "32px"})`
                    : `translateX(${timeValue.am ? "0" : "calc(100% + 8px)"})`,
              }}
            ></span>
          </ButtonAMPM>
        </TimeSelector>
        {mode === "modal" && (
          <Buttons>
            <button type="button" className="reset-button" onClick={onClickResetInput}>
              초기화
            </button>
            <Button type="button" mode="primary" fillType="default" onClick={onClickUpdateInput}>
              확인
            </Button>
          </Buttons>
        )}
      </TimeInputModal>
    </Container>
  );
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

export default TimeInput;
