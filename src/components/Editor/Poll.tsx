import React from "react";
import styled from "@emotion/styled";
import { useFieldArray, useForm } from "react-hook-form";
import { FONTS } from "@/styles/common";

import SmallX from "@/assets/icon/editor/SmallX.svg";
import Button from "../common/Button";
import useToast from "@/hook/useToast";
import { InputCheckbox } from "../common/SelectInput";
import { BasicInput } from "../common/Input";
import { format } from "date-fns";

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
    },
  });
  const { register, watch, setValue, control } = form;
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
      <BasicInput
        control={control}
        type="text"
        name="pollTitle"
        placeholder="투표 제목을 입력하세요."
        delButton={() => setValue("pollTitle", "")}
      />

      <Options>
        {fields.map((field, index) => (
          <Option key={field.id}>
            <div className="option-index">{index + 1}</div>
            <input type="text" placeholder="입력..." {...register(`pollOptions.${index}.value`)} />
            <button onClick={() => removeOption(index)}>
              <SmallX />
            </button>
          </Option>
        ))}
      </Options>
      <Button
        fullWidth
        autoHeight
        mode="OPTION2"
        type="button"
        onClick={() => append({ value: "" }, { shouldFocus: false })}
      >
        선택지 추가
      </Button>

      <PollSetting>
        <SetItem>
          <InputCheckbox control={control} id="pollDue" name="pollDue" /> <label htmlFor="pollDue">종료</label>
          <DueInputs>
            <BasicInput
              disabled={!watch("pollDue")}
              medium
              styleType="BORDER"
              type="date"
              name="endDate"
              control={control}
            />
            <BasicInput
              disabled={!watch("pollDue")}
              medium
              styleType="BORDER"
              type="time"
              name="endTime"
              control={control}
            />
          </DueInputs>
        </SetItem>
        <SetItem>
          <InputCheckbox control={control} id="multiple" name="multiple" /> <label htmlFor="multiple">복수선택</label>
        </SetItem>
        <SetItem>
          <InputCheckbox control={control} id="anonymous" name="anonymous" />{" "}
          <label htmlFor="anonymous">익명투표</label>
        </SetItem>
      </PollSetting>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;

const PollSetting = styled.div`
  display: flex;
  margin: 24px 0 12px;
  padding-top: 20px;
  gap: 20px 32px;
  justify-content: flex-start;
  flex-wrap: wrap;
  border-top: 1px solid rgb(var(--gray-h4));
`;
const SetItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 1.5rem;
  word-break: keep-all;

  &:has(input:checked) {
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
  gap: 12px;
  margin-top: 12px;
  padding: 12px 8px 0;
  border-top: 1px solid rgb(var(--gray-h5));
  .option-index {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    text-align: center;
    color: rgb(var(--gray-h2));
    border: 2px solid rgb(var(--gray-h4));
    border-radius: 100%;
    font-size: 1.4rem;
    font-weight: 700;
  }
  input {
    width: calc(100% - 20px);
    color: var(--text);
    ${FONTS.MD1W500};
  }
  button {
    width: 20px;
    height: 20px;
    svg {
      fill: var(--text);
      opacity: 0.7;
    }
  }
  &:first-of-type {
    margin-top: 0;
    border-top: none;
  }
`;

export default Poll;
