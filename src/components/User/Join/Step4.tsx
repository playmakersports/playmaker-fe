import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import useToast from "@/hook/useToast";

import { FONTS } from "@/styles/common";
import Stepper from "@/components/layouts/Stepper";
import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";

function Step4({ setStep }: { setStep: (prev: number) => void }) {
  const { register, watch, setValue } = useForm<{ favSports: string[] }>();
  const { trigger } = useToast();
  const favSportsValue = watch("favSports");

  const handleNextStep = () => {
    if (favSportsValue?.length > 0 && favSportsValue?.length <= 3) {
      window.alert("다음으로 고고");
      setStep(5);
    } else {
      window.alert("선택을 하세요.");
    }
  };

  const checkSelectedLength = async (event: any, target: string) => {
    if (favSportsValue.length === 3 && event.target.checked) {
      trigger("최대 3개까지 선택 가능합니다.", "ALERT");
      setValue(
        "favSports",
        favSportsValue?.filter((v) => v !== target)
      );
    }
  };

  return (
    <Stepper
      stage={{ now: 3, length: 3 }}
      title="관심 스포츠를 선택해주세요"
      button={{
        text: "다음",
        onClick: handleNextStep,
      }}
    >
      <Description>최대 3개까지 선택 가능</Description>
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
              {item.iconSvg} {item.name}
            </Item>
          </CardInput>
        ))}
      </List>
    </Stepper>
  );
}

const Description = styled.p`
  margin-bottom: 20px;
  ${FONTS.MD2};
  color: var(--gray3);
  text-align: center;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 16px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default Step4;
