"use client";

import React, { useState } from "react";
import styled from "styled-components";
import useModal from "@/hook/useModal";

import { FONTS } from "@/styles/common";
import { BaseContainer } from "@/components/common/Container";
import { BasicInput } from "@/components/common/input/BaseInput";
import { InputCheckbox } from "@/components/common/SelectInput";
import DateRangeModal from "./_components/DateRangeModal";

function ScheduleEditor() {
  const { ModalComponents, showModal } = useModal();
  const dateRangeState = useState({ start: "", end: "" });

  return (
    <>
      <BaseContainer>
        <Header>
          <div style={{ width: "60px" }}>
            <BasicInput type="text" placeholder="" />
          </div>
          <BasicInput type="text" placeholder="일정 제목" />
        </Header>
        <Options>
          <Option>
            <InputCheckbox
              id="date"
              text={{
                title: "날짜",
              }}
            />
            <OptionValue>
              <BasicInput type="text" value={dateRangeState[0].start} onButtonWrapClick={showModal} />
              <BasicInput type="text" value={dateRangeState[0].end} onButtonWrapClick={showModal} />
            </OptionValue>
          </Option>
          <Option>
            <InputCheckbox
              id="category"
              text={{
                title: "카테고리",
                description: "카테고리는 하나만 선택할 수 있습니다.",
              }}
            />
          </Option>
        </Options>
      </BaseContainer>
      <DateRangeModal ModalComponents={ModalComponents} rangeState={dateRangeState} />
    </>
  );
}

const Header = styled.div`
  display: flex;
  gap: 10px;
`;
const Options = styled.div`
  margin-top: 20px;
`;
const Option = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const OptionValue = styled.div`
  display: flex;
  max-width: 65%;
  gap: 8px;
`;

export default ScheduleEditor;
