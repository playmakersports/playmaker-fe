"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { useHeader } from "@/hook/useHeader";
import { FieldValues, useForm } from "react-hook-form";
import Image from "next/image";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import { baseContainer, flexColumnGap20 } from "@/styles/container.css";
import Badge from "@/components/common/Badge";
import MainTab from "@/components/Main/MainTab";
import { BasicInput } from "@/components/common/input/BaseInput";
import { FileInput } from "@/components/common/FileInput";
import DropdownInput from "@/components/common/input/DropdownInput";

import CheckIcon from "@/assets/icon/common/Check.svg";
import QuestionIcon from "@/assets/icon/circle/QuestionOutlined.svg";

function MySchool() {
  const [tab, setTab] = useState("find");

  useHeader({
    title: "학교 인증",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      action: () => {
        console.log("저장");
      },
    },
  });
  const { register, watch, setValue, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <section
      className={clsx(baseContainer, flexColumnGap20)}
      style={{ paddingTop: "20px", height: "calc(100vh - var(--safe-area-top))" }}
    >
      <School>
        <div>
          <Image src="/images/mock/seoul-tech-univ-logo.gif" alt="" width={40} height={40} />
          <span className={fonts.body2.semibold}>서울과학기술대학교</span>
        </div>
        <div>
          {/* <Badge size="large" type="gray">
            미인증
          </Badge> */}
          <Badge size="large" type="info" icon={<CheckIcon />}>
            인증
          </Badge>
        </div>
      </School>
      <Question>
        <p className={clsx("question-title", fonts.body4.medium)}>
          <QuestionIcon width={20} height={20} fill="var(--gray700)" />
          재학생 인증은 어디에 사용되나요?
        </p>
        <p className={clsx("question-content", fonts.caption1.regular)}>
          대학부 대상 스포츠 대회 참가자의 재학 여부를 확인하기 위한 절차로, 모든 대학생 사용자가 반드시 인증하지 않아도
          돼요.
        </p>
      </Question>
      <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
        <article className={flexColumnGap20} style={{ margin: "0 -20px", height: "100%" }}>
          <MainTab
            sameWidth
            padding={16}
            type="line"
            size="large"
            nowValue={setTab}
            items={[
              { name: "학교 찾기", value: "find" },
              { name: "재학생 인증", value: "detail" },
            ]}
          />
          <div style={{ overflow: "hidden", position: "relative", width: "100%", flex: 1 }}>
            <TabContents $next={tab === "detail"}>
              <div className={clsx("tab-page", baseContainer)} style={{ paddingBottom: 0 }}>
                <BasicInput type="text" iconType="search" placeholder="찾으려는 학교 이름 입력..." />
              </div>
              <div className={clsx("tab-page", baseContainer, flexColumnGap20)} style={{ paddingBottom: 0 }}>
                <div style={{ display: "flex", gap: "12px" }}>
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
                    <DropdownInput
                      placeholder="선택"
                      title="학년"
                      value={watch("grade")}
                      onChange={(value) => setValue("grade", value)}
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
                <FileInput
                  maxSizeMB={10}
                  title="재학증명서 첨부"
                  accept=".pdf, .jpg"
                  {...register("fileUpload", {
                    required: true,
                  })}
                />
              </div>
            </TabContents>
          </div>
        </article>
      </form>
    </section>
  );
}

const School = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  img {
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }
`;
const Question = styled.div`
  padding: 12px 16px;
  border-radius: 8px;
  background-color: var(--gray50);

  & > p.question-title {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: var(--gray700);
  }
  & > p.question-content {
    margin: 4px 2px 0;
    color: var(--gray500);
  }
`;
const TabContents = styled.div<{ $next: boolean }>`
  width: 200%;
  display: flex;
  flex-wrap: wrap;
  transition: transform 0.25s;
  transform: translateX(${({ $next }) => ($next ? "-50%" : "0%")});

  & > div.tab-page {
    flex: 1;
  }
`;

export default MySchool;
