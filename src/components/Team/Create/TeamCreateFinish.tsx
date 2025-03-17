import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";

import StagePageContainer from "@/components/layouts/StagePageContainer";
import GradientBg from "@/components/common/GradientBg";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

function TeamCreateFinish({ teamId }: { teamId: string }) {
  usePageTitle({ transparent: true });
  const router = useRouter();

  const moveTeamPage = () => {
    router.replace(`/team/${teamId}`);
  };

  return (
    <StagePageContainer stepper={false}>
      <GradientBg position="absolute" />
      <Message>
        <p>팀 생성이 완료되었어요</p>
        <p className="last">멋진 활동 기대할게요</p>
      </Message>
      <FloatButton>
        <Button mode="primary" fullWidth onClick={moveTeamPage} type="button">
          팀으로 이동
        </Button>
      </FloatButton>
    </StagePageContainer>
  );
}

const Message = styled.div`
  position: absolute;
  top: calc(var(--safe-area-top) + 128px);
  width: calc(100% - 32px);
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.8rem;
  z-index: 1;

  p.last {
    transition-delay: 0.8s;
  }
`;

export default TeamCreateFinish;
