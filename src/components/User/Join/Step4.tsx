import React, { useEffect } from "react";
import styled from "styled-components";
import { useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePost } from "@/apis/hook/query";
import { useToast } from "@/hook/useToast";

import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { atomServiceApply, atomServiceApplyImage } from "@/atom/user";
import Loading from "@/components/common/Loading";

function Step4() {
  const router = useRouter();

  const { mutate, isPending, isSuccess } = usePost("/api/login/signup", "form-data");
  const { register, watch, setValue } = useForm<{ preferredSport: string[] }>();
  const { trigger } = useToast();
  const preferredSportValue = watch("preferredSport");
  const applyValues = useAtomValue(atomServiceApply);
  const applyProfileImgValue = useAtomValue(atomServiceApplyImage);

  const handleNextStep = () => {
    if (preferredSportValue?.length > 0 && preferredSportValue?.length <= 3) {
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify({ ...applyValues, preferredSport: preferredSportValue })], {
        type: "application/json",
      });
      formData.append("userInfo", jsonBlob);
      if (applyProfileImgValue) {
        formData.append("image", applyProfileImgValue);
      }

      mutate({ data: formData });
    }
  };

  const checkSelectedLength = (event: any, target: string) => {
    if (preferredSportValue.length === 3 && event.target.checked) {
      trigger("최대 3개까지 선택할 수 있어요.", { type: "warning" });
      setValue(
        "preferredSport",
        preferredSportValue?.filter((v) => v !== target)
      );
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.replace(`/user/apply/complete?name=${applyValues.username}&gender=${applyValues.sexKey}`);
    }
  }, [isSuccess]);

  if (isPending) {
    return <Loading page />;
  }

  return (
    <StagePageContainer
      stepper
      title="관심 스포츠를 선택해주세요"
      description="최대 3개 선택 가능해요"
      button={{
        text: "다음",
        onClick: handleNextStep,
        disabled: !preferredSportValue || preferredSportValue?.length === 0,
      }}
    >
      <List>
        {SUPPORT_SPORTS.map((item) => (
          <CardInput
            type="checkbox"
            key={item.value}
            id={item.value}
            value={item.value}
            {...register("preferredSport", {
              onChange: (event) => checkSelectedLength(event, item.value),
            })}
          >
            <Item>
              <Image src={item.icon} alt={item.name} width={52} /> {item.name}
            </Item>
          </CardInput>
        ))}
      </List>
    </StagePageContainer>
  );
}

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 16px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default Step4;
