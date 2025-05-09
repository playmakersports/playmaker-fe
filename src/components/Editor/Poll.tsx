import React from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { useFieldArray, useForm } from "react-hook-form";
import { useToast } from "@/hook/useToast";

import TimeInput from "../common/input/TimeInput";
import Button from "../common/Button";
import { SCROLL_HIDE, SCROLL_MASKED_GRADIENT } from "@/styles/common";
import { BasicInput } from "../common/input/BaseInput";
import { InputCheckbox } from "../common/input/SelectInput";
import DateCalendarInput from "../common/DateCalendarInput";
import { scrollMaskedHandler, scrollMaskedHandlerRef } from "@/util/display";
import SmallX from "@/assets/icon/editor/SmallX.svg";

export type ArticlePollType = {
  pollDue: boolean;
  endDate: string;
  endTime: string;
  pollTitle: string;
  pollOptions: Array<{ value: string; order?: number }>;
  multiple: boolean;
  anonymous: boolean;
};

function Poll() {
  const { trigger } = useToast();
  const today = format(new Date(), "yyyy-MM-dd");
  const form = useForm({
    defaultValues: {
      pollDue: false,
      endDate: today,
      endTime: "00:00",
      pollTitle: "",
      pollOptions: [{ value: "" }, { value: "" }],
      multiple: false,
      anonymous: false,
    },
  });
  const { register, watch, control } = form;
  const { fields, append, remove } = useFieldArray({ control, name: "pollOptions" });

  const removeOption = (index: number) => {
    if (fields.length > 2) {
      remove(index);
    } else {
      trigger("투표 선택지는 2개 이상이어야 합니다.", { type: "error" });
    }
  };

  return (
    <Container>
      <BasicInput type="text" placeholder="투표 제목을 입력하세요." {...register("pollTitle")} />
      <Options>
        <ul
          className="options-list-inner"
          ref={(ref) => scrollMaskedHandlerRef(ref, "vertical")}
          onScroll={(e) => scrollMaskedHandler(e, "vertical")}
        >
          {fields.map((field, index) => (
            <Option key={field.id}>
              <div className="option-index">{index + 1}</div>
              <BasicInput type="text" placeholder="입력..." {...register(`pollOptions.${index}.value`)} />
              <button className="delete-option" onClick={() => removeOption(index)}>
                <SmallX />
              </button>
            </Option>
          ))}
        </ul>
      </Options>

      <div className="add-option-wrapper">
        <Button
          type="button"
          mode="gray"
          size="small"
          fillType="light"
          fullWidth
          onClick={() => append({ value: "" }, { shouldFocus: false })}
        >
          선택지 추가
        </Button>
      </div>

      <PollSetting>
        <SetItem>
          <InputCheckbox id="pollDue" text={{ title: "종료" }} size="MEDIUM" {...register("pollDue")} />
          <DueInputs>
            <DateCalendarInput disabled={!watch("pollDue")} name="endDate" />
            <TimeInput disabled={!watch("pollDue")} name="endTime" />
          </DueInputs>
        </SetItem>
        <SetItem>
          <InputCheckbox id="multiple" text={{ title: "복수선택" }} size="MEDIUM" {...register("multiple")} />
        </SetItem>
        <SetItem>
          <InputCheckbox id="anonymous" text={{ title: "익명투표" }} size="MEDIUM" {...register("anonymous")} />
        </SetItem>
      </PollSetting>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;

  div.add-option-wrapper {
    margin: 0 auto;
  }
`;
const Options = styled.div`
  margin: 4px 0 20px;
  ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")}

  ul.options-list-inner {
    display: flex;
    flex-direction: column;
    max-height: 32vh;
    min-height: calc(56px * 2.5);
    overflow-x: hidden;
    overflow-y: auto;
    gap: 12px;
    ${SCROLL_HIDE};
  }
`;
const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 2px;
  .option-index {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--gray500);
    font-size: 1.2rem;
    font-weight: 700;
  }
  input {
    width: calc(100% - 20px);
    color: var(--gray900);
  }
  .delete-option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    svg {
      fill: var(--gray600);
    }
    &:focus {
      background-color: var(--gray100);
    }
  }

  &:first-of-type {
    padding-top: 12px;
  }
`;

const PollSetting = styled.div`
  display: flex;
  margin: 24px 0 12px;
  padding-top: 20px;
  gap: 20px 32px;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid var(--gray300);
`;
const SetItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.4rem;
  word-break: keep-all;

  &:has(input:checked) > label {
    color: var(--main);
    font-weight: 600;
  }
`;

const DueInputs = styled.div`
  margin-left: 4px;
  display: flex;
  gap: 8px;
`;

export default Poll;
