import React, { useEffect } from "react";
import styled from "styled-components";
import { useAtomValue } from "jotai";
import { usePost } from "@/apis/hook/query";
import { useRouter } from "next/navigation";
import { usePageTitle } from "@/hook/usePageTitle";
import { useConfirm } from "@/components/common/global/ConfirmProvider";
import useToast from "@/hook/useToast";

import { atomTeamCreate, atomTeamCreateLogo } from "@/atom/team";
import StagePageContainer from "@/components/layouts/StagePageContainer";
import GradientBg from "@/components/common/GradientBg";
import Loading from "@/components/common/Loading";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

function TeamCreateFinish() {
  usePageTitle({ transparent: true });
  const { trigger } = useToast();
  const confirm = useConfirm();
  const router = useRouter();
  const teamCreateValue = useAtomValue(atomTeamCreate);
  const teamLogoValue = useAtomValue(atomTeamCreateLogo);
  const { mutate, data, isError, isPending, error, isSuccess } = usePost<{ teamId: string }>(
    "/api/team/create",
    "form-data"
  );

  const moveTeamPage = () => {
    router.replace(`/team/${data?.teamId}`);
  };

  useEffect(() => {
    const teamData = new FormData();
    teamData.append("teamInfo", new Blob([JSON.stringify(teamCreateValue)], { type: "application/json" }));
    if (teamLogoValue) {
      teamData.append("image", teamLogoValue);
    }
    mutate({ data: teamData });
  }, []);

  useEffect(() => {
    async function handleError() {
      if (isError) {
        const errorConfirm = await confirm?.showConfirm(`팀 생성에 실패했어요\n${error?.message}`, {
          yes: "홈 화면 이동",
          no: "닫기",
        });
        if (errorConfirm) {
          router.replace("/");
        } else {
          router.back();
        }
      }
    }
    handleError();
  }, [isError]);

  return (
    <>
      {isPending && <Loading page text="지금 멋진 팀을 만드는 중이에요" />}
      <StagePageContainer stepper={false}>
        <GradientBg position="absolute" />
        {isSuccess && (
          <>
            <Message show={isSuccess}>
              <p>팀 생성이 완료되었어요</p>
              <p className="last">멋진 활동 기대할게요</p>
            </Message>
            <FloatButton>
              <Button mode="MAIN" fullWidth onClick={moveTeamPage} type="button">
                팀으로 이동
              </Button>
            </FloatButton>
          </>
        )}
      </StagePageContainer>
    </>
  );
}

const Message = styled.div<{ show: boolean }>`
  position: absolute;
  top: calc(var(--safe-area-top) + 128px);
  width: calc(100% - 32px);
  text-align: center;
  font-size: 2.8rem;
  font-weight: 600;
  line-height: 4.8rem;
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
