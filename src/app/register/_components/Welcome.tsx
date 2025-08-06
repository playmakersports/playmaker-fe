import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { useRouter } from "next/navigation";

import { SetStepType } from "./StageWrapper";
import { fonts } from "@/styles/fonts.css";
import { stageWelcomeContainer, welcomeTextContainer, welcomeTextItem, welcomeTextFadeIn } from "./stage.css";
import Button from "@/components/common/Button";
import { colors } from "@/styles/color.css";
import { flexCenterJA, flexColumnGap8 } from "@/styles/container.css";

function Welcome({ setStep }: SetStepType) {
  const { watch } = useFormContext();
  const router = useRouter();
  const [textPhase, setTextPhase] = useState(0);
  const username = watch("username");

  useEffect(() => {
    setTextPhase(1);
    setTimeout(() => {
      setTextPhase(2);
    }, 2300);
  }, []);

  return (
    <div
      className={stageWelcomeContainer}
      style={{
        backgroundColor: "rgba(243, 254, 245, 1)",
        backgroundImage: `url('/images/assets/complete_shoot_animation.png')`,
        backgroundSize: "100%",
        gap: "36px",
      }}
    >
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "flex-end", textAlign: "center" }}>
        <div className={welcomeTextContainer}>
          <div className={clsx(welcomeTextItem, { [welcomeTextFadeIn]: textPhase === 1 })}>
            <p className={fonts.head4.medium}>
              <span className={colors.primary500}>{username}</span> 님,
            </p>
            <p className={fonts.head5.medium} style={{ paddingBottom: "calc(60px - 36px)" }}>
              만나서 반가워요!
            </p>
          </div>
          <div className={clsx(welcomeTextItem, fonts.head6.regular, { [welcomeTextFadeIn]: textPhase === 2 })}>
            <p>
              <span className={colors.primary500}>추가 정보</span>를 입력하시면,
            </p>
            맞춤 팀을 추천해드릴 수 있어요!
          </div>
        </div>
      </div>
      <div className={flexColumnGap8}>
        <div className={clsx(welcomeTextItem, { [welcomeTextFadeIn]: textPhase === 2 })}>
          <Button
            type="button"
            fillType="outline"
            size="xlarge"
            mode="gray"
            fullWidth
            onClick={() => setStep("Option1")}
          >
            추가 정보 입력하기
          </Button>
        </div>
        <Button type="button" size="xlarge" fullWidth onClick={() => router.replace("/home")}>
          시작하기
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
