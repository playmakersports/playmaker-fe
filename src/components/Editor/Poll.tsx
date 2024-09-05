import React from "react";
import styled from "@emotion/styled";
import { format } from "date-fns";
import { useFieldArray, useForm } from "react-hook-form";
import useToast from "@/hook/useToast";

import SmallX from "@/assets/icon/editor/SmallX.svg";
import { FONTS } from "@/styles/common";
import Button from "../common/Button";
import { BasicInput } from "../common/Input";
import { InputCheckbox } from "../common/SelectInput";
import DateCalendarInput from "../common/DateCalendarInput";
import TimeInput from "../common/TimeInput";

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
      trigger("투표 선택지는 2개 이상이어야 합니다.", "ALERT");
    }
  };

  console.log(watch());

  return (
    <Container>
      <BasicInput type="text" placeholder="투표 제목을 입력하세요." {...register("pollTitle")} />
      <Options>
        {fields.map((field, index) => (
          <Option key={field.id}>
            <div className="option-index">{index + 1}</div>
            <BasicInput type="text" placeholder="입력..." {...register(`pollOptions.${index}.value`)} />
            <button className="delete-option" onClick={() => removeOption(index)}>
              <SmallX />
            </button>
          </Option>
        ))}
      </Options>
      <div className="add-option-wrapper">
        <Button
          autoHeight
          fullWidth
          borderType
          mode="OPTION2"
          type="button"
          onClick={() => append({ value: "" }, { shouldFocus: false })}
        >
          선택지 추가
        </Button>
      </div>

      <PollSetting>
        <SetItem>
          <InputCheckbox id="pollDue" {...register("pollDue")} /> <label htmlFor="pollDue">종료</label>
          <DueInputs>
            <DateCalendarInput disabled={!watch("pollDue")} name="endDate" />
            <TimeInput disabled={!watch("pollDue")} name="endTime" />
          </DueInputs>
        </SetItem>
        <SetItem>
          <InputCheckbox id="multiple" {...register("multiple")} /> <label htmlFor="multiple">복수선택</label>
        </SetItem>
        <SetItem>
          <InputCheckbox id="anonymous" {...register("anonymous")} /> <label htmlFor="anonymous">익명투표</label>
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
    width: 32%;
  }
`;

const PollSetting = styled.div`
  display: flex;
  margin: 24px 0 12px;
  padding-top: 20px;
  gap: 20px 32px;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid var(--gray7);
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

const Options = styled.ul`
  display: flex;
  margin: 12px 0 20px;
  flex-direction: column;
  justify-content: flex-end;
  max-height: 28vh;
  overflow-y: auto;
`;
const Option = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  padding: 12px 2px 0;
  .option-index {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--gray5);
    border-radius: 100%;
    font-size: 1.2rem;
    font-weight: 700;
  }
  input {
    width: calc(100% - 20px);
    color: var(--gray1);
    ${FONTS.MD1W500};
  }
  .delete-option {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    svg {
      fill: var(--gray3);
      opacity: 0.7;
    }
    &:focus {
      background-color: var(--gray7);
    }
  }
  &:first-of-type {
    margin-top: 0;
    border-top: none;
  }
`;

export default Poll;
