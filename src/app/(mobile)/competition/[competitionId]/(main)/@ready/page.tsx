"use client";
import React from "react";
import styled from "styled-components";
import useToast from "@/hook/useToast";
import { useParams, useRouter } from "next/navigation";

import { BUTTON_ACTIVE } from "@/styles/common";
import { BaseContainer } from "@/components/common/Container";
import InformationGroup from "../../_components/InformationGroup";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";

import CopyIcon from "@/assets/icon/global/Copy.svg";

function CompetitionReady() {
  const { trigger } = useToast();
  const params = useParams();
  const router = useRouter();
  const competitionId = params["competitionId"];
  const copyAccountNum = (target?: string) => {
    if (target) {
      navigator.clipboard.writeText(target).then(() => {
        trigger("계좌번호가 복사됐어요");
      });
    }
  };

  const moveCompetitionApply = () => {
    router.push(`/competition/${competitionId}/apply`);
  };

  return (
    <Container>
      <FloatButton>
        <Button type="button" mode="MAIN" onClick={moveCompetitionApply} $fullWidth>
          참가 신청
        </Button>
      </FloatButton>
      <Groups>
        <InformationGroup
          title="개요"
          hidable={false}
          list={[
            { title: "대회명", content: "2021년 제1회 대한민국 스포츠대회" },
            { title: "주최", content: "대한유소년스포츠연맹" },
            { title: "일시", content: "2023년 2월 19일" },
            { title: "장소", content: "양천구민 체육센터" },
            { title: "주관", content: "사단법인 한국문화스포츠연맹" },
          ]}
        />
        <InformationGroup
          title="참가 제한"
          hidable={false}
          list={[
            "대학 특기자로 등록되지 않은 순수 아마추어 선수(고교 이상 선수 출신 출전 불가)",
            "대학 재학생 및 휴학생(대학원생·수료생·교환학생·평생교육원·학점은행제 선수 제외)",
            "팀당 예비 엔트리 무제한(경기 당일 엔트리 12명)",
          ]}
        />
        <InformationGroup
          title="참가비"
          hidable={false}
          list={[
            "하단의 계좌로 입금자명 양식 꼭 지켜서 입금하시면 됩니다.",
            "다른 이름으로 입금하신 경우 개별연락 바랍니다.",
            "입금자명 : 학교/ 팀명 / 과기대배",
            "참가비 : 36만원",
          ]}
        >
          <div className="account" role="button" onClick={() => copyAccountNum("국민은행 123456-78-910111 김준현")}>
            국민은행 123456-78-910111 김준현
            <CopyIcon />
          </div>
        </InformationGroup>
        <div>
          <InformationGroup
            title="선별 기준"
            hidable={true}
            defaultOpen={false}
            list={[
              "대학 특기자로 등록되지 않은 순수 아마추어 선수(고교 이상 선수 출신 출전 불가)",
              "대학 재학생 및 휴학생(대학원생·수료생·교환학생·평생교육원·학점은행제 선수 제외)",
              "팀당 예비 엔트리 무제한(경기 당일 엔트리 12명)",
            ]}
          >
            <div className="open-gap"></div>
          </InformationGroup>
          <InformationGroup
            title="대표자 회의"
            hidable={true}
            defaultOpen={false}
            list={[
              "대학 특기자로 등록되지 않은 순수 아마추어 선수(고교 이상 선수 출신 출전 불가)",
              "대학 재학생 및 휴학생(대학원생·수료생·교환학생·평생교육원·학점은행제 선수 제외)",
              "팀당 예비 엔트리 무제한(경기 당일 엔트리 12명)",
            ]}
          >
            <div className="open-gap"></div>
          </InformationGroup>
        </div>
      </Groups>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-top: 0;
  padding-bottom: calc(var(--env-sab) + 100px);
`;
const Groups = styled.article`
  display: flex;
  margin-top: 8px;
  flex-direction: column;
  gap: 36px;
  div.account {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin-top: 10px;
    padding: 16px 0;
    font-size: 1.4rem;
    line-height: 2.6rem;
    background-color: var(--gray100);
    border-radius: 10px;
    text-align: center;
    svg {
      width: 16px;
      height: 16px;
      fill: var(--gray800);
    }
    ${BUTTON_ACTIVE("var(--gray200)")}
  }

  div.open-gap {
    margin-top: 36px;
  }
`;

export default CompetitionReady;
