import React, { useRef, useState } from "react";

import Stepper from "@/components/layouts/Stepper";
import { BasicInput } from "@/components/common/Input";
import { StepFormWrapper } from "@/components/common/global/Text";
import { useConfirm } from "@/components/common/global/ConfirmProvider";

function StepStudents({ setStep }: { setStep: (prev: number) => void }) {
  const confirm = useConfirm();
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
      title="대학생 인증"
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
        />

        <div style={{ opacity: isSendSuccess ? 1 : 0 }}>
          <BasicInput
            type="text"
            ref={VerifyCodeInput}
            title="인증번호"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
        </div>
      </StepFormWrapper>
    </Stepper>
  );
}

export default StepStudents;
