import styled from "@emotion/styled";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { GetServerSideProps } from "next";

import { useMutate } from "@/apis/post";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import DropDown from "@/components/common/DropDown";
import { BasicInput } from "@/components/common/Input";
import { BACK_END_REQUEST_URL } from "@/constants/baseUrl";
import axios from "axios";
import { usePageTitle } from "@/hook/usePageTitle";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>();

  const [univValue, setUnivValue] = useState<string>();

  const onClick = async (data: FieldValues) => {
    const post = axios.post(`${BACK_END_REQUEST_URL}/api/code/university/${univValue}?alias=${data.alias}`);
    if (await post) {
      window.alert("약칭이 저장되었습니다.");
      router.replace(router.asPath);
      reset();
    } else {
      window.alert("약칭 저장에 실패했습니다.");
    }
  };

  return (
    <BaseContainer>
      <form
        onSubmit={handleSubmit(onClick)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "calc(100vh - 100px)",
        }}
      >
        <FormContents>
          <DropDown
            title="대학 선택"
            id="univList"
            placeholder="대학을 선택해주세요"
            getSelectedValue={(value) => setUnivValue(value)}
            options={
              Array.isArray(univData)
                ? univData.map((item) => ({
                    value: `${item.universityId}`,
                    name: `${item.universityName}(${item.universityId}) - 약어: ${item.universityAlias ?? "(없음)"}`,
                  }))
                : []
            }
          />
          <BasicInput
            type="text"
            title="약칭 입력"
            errorText={errors.alias ? (errors.alias.message as string) : ""}
            information={{ text: "약칭은 최대 6자까지 입력 가능합니다.", onClick: () => {} }}
            {...register("alias", {
              maxLength: { value: 6, message: "약칭은 최대 6자까지 입력 가능합니다." },
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
    const response = await fetch(`${BACK_END_REQUEST_URL}/api/code/university`);
    const univData: UnivData = await response.json();
    return { props: { univData } };
  } catch (error) {
    console.error("Failed to fetch university names:", error);
    return { props: { univData: [] } };
  }
};

export default UnivName;
