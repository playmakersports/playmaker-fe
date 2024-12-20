"use client";

import React from "react";
import styled from "styled-components";
import { usePageTitle } from "@/hook/usePageTitle";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";

import { FONTS } from "@/styles/common";
import Badge from "@/components/common/Badge";
import { BaseContainer } from "@/components/common/Container";
import { BasicInput } from "@/components/common/Input";
import { FileInput } from "@/components/common/FileInput";
import DropDown from "@/components/common/DropDown";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

import CheckIcon from "@/assets/icon/global/CheckIcon.svg";

function UserSchool() {
  usePageTitle({ title: "재학증명서 인증" });
  const { register, watch, setValue, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <School>
        <div>
          <Image src="/images/mock/seoul-tech-univ-logo.gif" alt="" width={52} height={52} />
          <span className="university-name">서울과학기술대학교</span>
        </div>
        <div>
          <Badge type="gray">미인증</Badge>
          {/* <Badge type="main">
            인증 <CheckIcon />
          </Badge> */}
        </div>
      </School>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="divide">
          <div style={{ flex: 2 }}>
            <BasicInput
              title="학번"
              type="text"
              {...register("schoolIdNumber", {
                required: true,
                pattern: /^[0-9]+$/,
                onChange: (e) => setValue("schoolIdNumber", e.target.value.replace(/[^0-9]/g, "")),
              })}
            />
          </div>
          <div style={{ flex: 1 }}>
            <DropDown
              placeholder="선택"
              title="학년"
              getSelectedValue={(value) => setValue("grade", value)}
              options={[
                { value: "1", name: "1학년" },
                { value: "2", name: "2학년" },
                { value: "3", name: "3학년" },
                { value: "4", name: "4학년" },
                { value: "5", name: "5학년" },
                { value: "6", name: "6학년" },
              ]}
            />
          </div>
        </div>
        <BasicInput title="주소" type="text" {...register("address")} />
        <FileInput
          maxSizeMB={10}
          title="재학증명서 첨부"
          accept=".pdf, .jpg"
          {...register("fileUpload", {
            required: true,
          })}
        />
        <FloatButton>
          <Button type="submit" mode="MAIN" $fullWidth>
            저장
          </Button>
        </FloatButton>
      </Form>
    </Container>
  );
}

const Container = styled(BaseContainer)``;

const School = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  background-color: var(--background-light);
  border: 1px solid var(--gray50);
  border-radius: 10px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.05);

  div {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  img {
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }
  span.university-name {
    ${FONTS.HEAD1}
    font-weight: 600;
  }
`;

const Form = styled.form`
  display: flex;
  margin-top: 24px;
  padding: 0 4px;
  flex-direction: column;
  gap: 16px;
  div.divide {
    display: flex;
    gap: 20px;
  }
`;

export default UserSchool;
