import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import useModal from "@/hook/useModal";

import Stepper from "@/components/layouts/Stepper";
import { BasicInput } from "@/components/common/Input";
import { StepFormWrapper } from "@/components/common/global/Text";
import { useConfirm } from "@/components/common/global/ConfirmProvider";

function StepStudents({ setStep }: { setStep: (prev: number) => void }) {
  const confirm = useConfirm();
  const { ModalComponents, showModal } = useModal();
  const [univEmail, setUnivEmail] = useState("");
  const [verifyCode, setVerifyCode] = useState("");
  const [isSendSuccess, setIsSendSuccess] = useState(false);

  const VerifyCodeInput = useRef<HTMLInputElement>(null);

  const requestUnivEmail = () => {
    setIsSendSuccess(true);
    if (VerifyCodeInput.current) VerifyCodeInput.current!.focus();
  };
  const checkVerifyCode = async () => {
    const wrongCodeConfirm = await confirm?.showConfirm("잘못된 인증번호입니다", {
      yes: "다시 입력",
      no: "인증번호 재전송",
    });

    if (wrongCodeConfirm) {
      VerifyCodeInput.current!.focus();
    } else {
      window.alert("재전송");
      setStep(2);
    }
  };

  return (
    <Stepper
      title="먼저 대학생 인증이 필요해요"
      button={
        isSendSuccess
          ? {
              text: "다음",
              onClick: checkVerifyCode,
              disabled: verifyCode.length === 0,
            }
          : {
              text: "인증번호 전송",
              onClick: requestUnivEmail,
              disabled: univEmail.length === 0,
            }
      }
    >
      <StepFormWrapper>
        <BasicInput
          type="email"
          title="학교 이메일"
          value={univEmail}
          onChange={(e) => setUnivEmail(e.target.value)}
          disabled={isSendSuccess}
          information={
            !isSendSuccess
              ? {
                  text: "이용 가능 학교 목록",
                  onClick: () => showModal(),
                }
              : undefined
          }
        />

        <div style={{ height: isSendSuccess ? "max-content" : "0px", overflow: "hidden" }}>
          <BasicInput
            type="text"
            ref={VerifyCodeInput}
            title="인증번호"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
            information={{
              text: "이메일을 받지 못하셨나요?",
              onClick: () => console.log(""),
            }}
          />
        </div>
      </StepFormWrapper>
      <ModalComponents
        title="이용 가능한 학교 목록 (가나다순)"
        buttons={[
          {
            name: "닫기",
            mode: "OPTION2",
            onClick: (close) => close(),
          },
        ]}
      >
        <UnivListIndex>가</UnivListIndex>
        가천대학교, 가톨릭대학교, 건국대학교, 경기대학교, 경희대학교, 고려대학교, 국민대학교
        <UnivListIndex>다, 마, 바</UnivListIndex>
        단국대학교, 동국대학교, 명지대학교, 부산대학교
        <UnivListIndex>사</UnivListIndex>
        서울과학기술대학교, 서강대학교, 서울대학교, 서울시립대학교, 성균관대학교, 성신여자대학교, 세종대학교, 숭실대학교
        <UnivListIndex>아, 자, 파</UnivListIndex>
        아주대학교, 연세대학교, 용인대학교, 인하대학교, 이화여자대학교, 중앙대학교, 포항공과대학교(POSTECH)
        <UnivListIndex>파, 하</UnivListIndex>
        한국외국어대학교, 한국체육대학교, 한양대학교, 한국과학기술원(KAIST), 홍익대학교
      </ModalComponents>
    </Stepper>
  );
}

const UnivListIndex = styled.p`
  margin: 16px 0 4px;
  padding: 2px;
  font-weight: 500;
  font-size: 1.6rem;
`;

export default StepStudents;
