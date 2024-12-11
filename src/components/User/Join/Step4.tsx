import React from "react";
import styled from "@emotion/styled";
import { useAtom, useAtomValue } from "jotai";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import useToast from "@/hook/useToast";
import { useMutate } from "@/apis/post";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { atomServiceApply, atomServiceApplyImage } from "@/atom/user";

function Step4() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { mutate } = useMutate("/api/login/signup");
  const { register, watch, setValue } = useForm<{ preferredSport: string[] }>();
  const { trigger } = useToast();
  const preferredSportValue = watch("preferredSport");
  const applyValues = useAtomValue(atomServiceApply);
  const applyProfileImgValue = useAtomValue(atomServiceApplyImage);
  console.log(applyValues);
  const handleNextStep = async () => {
    if (preferredSportValue?.length > 0 && preferredSportValue?.length <= 3) {
      const formData = new FormData();
      const jsonBlob = new Blob([JSON.stringify({ ...applyValues, preferredSport: preferredSportValue })], {
        type: "application/json",
      });
      formData.append("userInfo", jsonBlob);
      if (applyProfileImgValue) {
        formData.append("image", applyProfileImgValue);
      }

      const success = await mutate("post", formData, "form-data");
      if (success) {
        router.push({
          pathname: "/user/apply/complete",
          query: {
            name: "손수철",
            gender: "male",
          },
        });
      }
    }
  };

  const checkSelectedLength = (event: any, target: string) => {
    if (preferredSportValue.length === 3 && event.target.checked) {
      trigger("최대 3개까지 선택 가능합니다.", "ALERT");
      setValue(
        "preferredSport",
        preferredSportValue?.filter((v) => v !== target)
      );
    }
  };

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
