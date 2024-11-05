import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useAtomValue } from "jotai";
import { usePost } from "@/apis/hook/query";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";
import useToast from "@/hook/useToast";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import GradientBg from "@/components/common/GradientBg";
import Loading from "@/components/common/Loading";
import { atomTeamCreate } from "@/atom/team";
import FloatButton from "@/components/common/FloatButton";

function TeamCreateFinish() {
  usePageTitle({ transparent: true });
  const { trigger } = useToast();
  const router = useRouter();
  const teamCreateValue = useAtomValue(atomTeamCreate);
  const { mutate, isPending, isError, error, isSuccess } = usePost("");

  useEffect(() => {
    mutate({ data: teamCreateValue });
  }, []);

  useEffect(() => {
    if (isError) trigger(error.message, "ALERT");
  }, [isError]);

  return (
    <StagePageContainer stepper={false}>
      <GradientBg position="absolute" />
      {isPending && <Loading />}
      <Message show={!isSuccess}>
        <p>팀 생성이 완료되었어요</p>
        <p className="last">멋진 활동 기대할게요</p>
      </Message>
      <FloatButton onClick={() => router.push("/")}>홈 화면으로 이동</FloatButton>
    </StagePageContainer>
  );
}

const Message = styled.div<{ show: boolean }>`
  position: absolute;
  top: calc(var(--safe-area-top) + 128px);
  width: calc(100% - 32px);
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.2rem;
  z-index: 1;
  p {
    opacity: ${({ show }) => (show ? 1 : 0)};
    transition: opacity 1.1s;
  }
  p.last {
    transition-delay: 0.8s;
  }
`;

export default TeamCreateFinish;
