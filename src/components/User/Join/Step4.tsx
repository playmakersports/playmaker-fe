import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
import useToast from "@/hook/useToast";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";

function Step4() {
  const router = useRouter();
  const { register, watch, setValue } = useForm<{ favSports: string[] }>();
  const { trigger } = useToast();
  const favSportsValue = watch("favSports");

  const handleNextStep = () => {
    if (favSportsValue?.length > 0 && favSportsValue?.length <= 3) {
      // 회원가입 POST 로직
      router.push({
        pathname: "/user/login/complete",
        query: {
          name: "손수철",
          gender: "male",
        },
      });
    }
  };

  const checkSelectedLength = (event: any, target: string) => {
    if (favSportsValue.length === 3 && event.target.checked) {
      trigger("최대 3개까지 선택 가능합니다.", "ALERT");
      setValue(
        "favSports",
        favSportsValue?.filter((v) => v !== target)
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
        disabled: favSportsValue.length === 0,
      }}
    >
      <List>
        {SUPPORT_SPORTS.map((item) => (
          <CardInput
            type="checkbox"
            key={item.value}
            id={item.value}
            value={item.value}
            {...register("favSports", {
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
