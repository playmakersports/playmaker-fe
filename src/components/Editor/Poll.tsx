import React from "react";
import styled from "@emotion/styled";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { FONTS } from "@/styles/common";

import SmallX from "@/assets/icon/editor/SmallX.svg";
import Button from "../common/Button";
import useToast from "@/hook/useToast";
import RadioTab from "../common/RadioTab";

function Poll() {
  const { trigger } = useToast();
  const form = useForm({
    defaultValues: {
      pollTitle: "",
      selectedType: "radio",
      pollOptions: [{ value: "" }, { value: "" }],
    },
  });
  const { register, control } = form;
  const { fields, append, remove } = useFieldArray({ control, name: "pollOptions" });

  const removeOption = (index: number) => {
    if (fields.length > 2) {
      remove(index);
    } else {
      trigger("투표 선택지는 2개 이상이어야 합니다.", "ALERT");
    }
  };

  return (
    <FormProvider {...form}>
      <Container>
        <Title
          type="text"
          placeholder="투표 제목을 입력하세요."
          required
          {...register("pollTitle", { required: true })}
        />
        <PollSetting>
          <RadioTab
            id="selectedType"
            items={[
              { value: "radio", name: "단일선택" },
              { value: "checkbox", name: "복수선택" },
            ]}
          />
        </PollSetting>
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
        <Button fullWidth autoHeight mode="OPTION1" type="button" onClick={() => append({ value: "" })}>
          선택지 추가
        </Button>
      </Container>
    </FormProvider>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const PollSetting = styled.div`
  display: flex;
  margin: 12px 0;
`;
const Title = styled.input`
  width: 100%;
  padding: 12px;
  background-color: var(--background);
  border-radius: 8px;
  ${FONTS.MD1};
  font-size: 1.8rem;
`;
const Options = styled.ul`
  display: flex;
  margin: 12px 0 16px;
  flex-direction: column;
`;
const Option = styled.li`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  padding: 12px 8px 0;
  border-top: 1px solid var(--gray3);
  .option-index {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    text-align: center;
    color: var(--gray1);
    border: 2px solid var(--gray3);
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
