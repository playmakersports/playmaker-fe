import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import useBgWhite from "@/hook/useBgWhite";
import useStickyMoment from "@/hook/useStickyMoment";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import { COMPETITION_LIST_MOCK } from "@/constants/mock/COMPETITION";
import { BaseContainer } from "@/components/common/Container";
import { BasicWhiteCard, BasicWhiteCardTitle } from "@/components/common/Card";

function CompetitionArticle() {
  useBgWhite();
  usePageTitle({ title: "대회 정보" });
  const competitionHeaderRef = useRef<HTMLDivElement>(null);
  useStickyMoment(competitionHeaderRef);
  const router = useRouter();
  const competitionId = router.query.competitionId;
  const MOCK = COMPETITION_LIST_MOCK[1];
  return (
    <Container>
      <Header ref={competitionHeaderRef}>
        <img className="competition-poster-img" src={MOCK.posterImg} alt="포스터" />
        <Information>
          <h2 className="competition-name">{MOCK.competitionName}</h2>
          <ul className="competition-info-list">
            <li className="info-opened-by">
              <img src={MOCK.openedByLogo} alt={MOCK.openedBy} />
              {MOCK.openedBy}
            </li>
            <li>
              <dt>일시</dt>
              <dd>{MOCK.matchTime}</dd>
            </li>
            <li>
              <dt>장소</dt>
              <dd>{MOCK.matchLocation}</dd>
            </li>
          </ul>
        </Information>
      </Header>
      <Cards>
        <Card>
          <BasicWhiteCardTitle>대진 일정</BasicWhiteCardTitle>
        </Card>
        <Card>
          <BasicWhiteCardTitle>영상</BasicWhiteCardTitle>
        </Card>
      </Cards>
    </Container>
  );
}

const Container = styled(BaseContainer)``;

const Information = styled.div`
  flex: 1;
  display: inline-block;
  padding: 4px 0 8px;
  ${FONTS.MD1W500};
  transition: all 0.25s;

  .competition-name {
    margin-bottom: 8px;
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;
  }
  .competition-info-list {
    display: flex;
    flex-direction: column;
    li {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 1.4rem;
    }
    li.info-opened-by {
      padding-bottom: 8px;
      margin-bottom: 8px;
      border-bottom: 1px solid var(--gray300);
    }
    img {
      width: 28px;
      height: 28px;
      border-radius: 100%;
      background-color: #fff;
    }
    dt {
      font-weight: 600;
    }
    dd {
      font-weight: 400;
    }
  }
`;
const Header = styled.div`
  margin: -11px -16px 0; // sticky moment 처리를 위해 -11px
  position: sticky;
  display: flex;
  padding: 20px;
  gap: 24px;
  top: 0;
  transition: all 0.25s;
  background-color: var(--background-light);
  box-shadow: var(--shadow-alpha20);

  .competition-poster-img {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.25s;
  }

  &.stuck {
    display: flex;
    padding: 12px;

    .competition-poster-img {
      width: 60px;
      height: 80px;
    }
    ${Information} {
      padding: 0;
      .competition-name {
        margin-bottom: 6px;
      }
      .competition-info-list {
        gap: 2px 20px;
        flex-direction: row;
        flex-wrap: wrap;
      }
      li.info-opened-by {
        width: 100%;
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: none;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

const Cards = styled.section`
  display: flex;
  margin: 0 -16px -20px;
  padding: 24px 16px 32px;
  background-color: var(--background);
  flex-direction: column;
  gap: 20px;
`;
const Card = styled(BasicWhiteCard)``;

export default CompetitionArticle;
