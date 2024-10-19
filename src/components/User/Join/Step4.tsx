import React from "react";
import styled from "@emotion/styled";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/router";
import useToast from "@/hook/useToast";

import { SUPPORT_SPORTS } from "@/constants/mock/SPORTS";
import CardInput from "@/components/common/CardInput";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import { ACCESS_TOKEN, atomServiceApply, atomServiceApplyImage } from "@/atom/user";
import { useAtom } from "jotai";
import axios from "axios";
import { BACK_END_REQUEST_URL } from "@/constants/baseUrl";

function Step4() {
  const router = useRouter();
  const { register, watch, setValue } = useForm<{ preferredSport: string[] }>();
  const { trigger } = useToast();
  const preferredSportValue = watch("preferredSport");
  const [getter, setter] = useAtom(atomServiceApply);
  const [accessToken] = useAtom(ACCESS_TOKEN);
  const [getterImg, setterImg] = useAtom(atomServiceApplyImage);

  const handleNextStep = () => {
    if (preferredSportValue?.length > 0 && preferredSportValue?.length <= 3) {
      setter((prev) => ({ ...prev, preferredSport: "축구" }));

      const formData = new FormData();

      // userInfo를 JSON 문자열로 변환하여 추가
      formData.append("userInfo", JSON.stringify({ ...getter, preferredSport: "축구" }));

      // image 파일 추가 (getterImg는 image/png 파일이어야 함)
      formData.append("image", getterImg);

      // axios 요청 설정
      const request = axios.post(`${BACK_END_REQUEST_URL}/api/login/signup`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      request
        .then((req) => {
          window.alert(req.data);
          router.push({
            pathname: "/user/apply/complete",
            query: {
              name: "손수철",
              gender: "male",
            },
          });
        })
        .catch((err) => window.alert(err));
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
