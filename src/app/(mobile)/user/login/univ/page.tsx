"use client";
import styled from "@emotion/styled";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";
import { usePageTitle } from "@/hook/usePageTitle";
import { useGet, usePost } from "@/apis/hook/query";

import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import DropDown from "@/components/common/DropDown";
import { BasicInput } from "@/components/common/Input";
import { baseBackendURL } from "@/apis";

type UnivData = {
  universityId: number;
  universityName: string;
  universityAlias: string | null;
}[];

interface UnivNameProps {
  univData: UnivData;
}

function UnivName({ univData }: UnivNameProps) {
  usePageTitle({ title: "대학 약칭 설정" });
  const [univValue, setUnivValue] = useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const { data: univList, refetch } = useGet<UnivData>("/api/code/university", {}, { initialData: univData });
  const { mutateAsync } = usePost(`/api/code/university/${univValue}`);

  const onSubmit = async (data: FieldValues) => {
    await mutateAsync(
      { data: {}, queryParams: { alias: data.alias } },
      {
        onSuccess: () => {
          refetch();
          reset();
        },

        onError: () => {
          console.log("error");
        },
      }
    );
  };

  return (
    <BaseContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "calc(90vh - 120px)",
        }}
      >
        <FormContents>
          <DropDown
            title="대학 선택"
            placeholder="대학을 선택해주세요"
            getSelectedValue={(value) => setUnivValue(value)}
            options={
              univList
                ? univList.map((item) => ({
                    value: `${item.universityId}`,
                    name: `${item.universityName}(${item.universityId}) - ${
                      item.universityAlias ?? "(저장된 약어 없음)"
                    }`,
                  }))
                : []
            }
          />
          <BasicInput
            type="text"
            title="약칭 입력"
            errorText={errors.alias ? (errors.alias.message as string) : ""}
            information={{ text: "약칭은 최대 8자까지 입력 가능합니다.", onClick: () => {} }}
            {...register("alias", {
              setValueAs: (value) => value.trim(),
              maxLength: { value: 8, message: "약칭은 최대 8자까지 입력 가능합니다." },
            })}
          />
        </FormContents>
        <Button type="submit" mode="MAIN" fullWidth>
          저장
        </Button>
      </form>
    </BaseContainer>
  );
}

const FormContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(`${baseBackendURL}/api/code/university`);
    const univData: UnivData = await response.json();
    return { props: { univData } };
  } catch (error) {
    console.error("Failed to fetch university names:", error);
    return { props: { univData: [] } };
  }
};

export default UnivName;
