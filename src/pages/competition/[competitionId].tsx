import React, { useRef } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import { usePageTitle } from "@/hook/usePageTitle";
import { BaseContainer } from "@/components/common/Container";
import { FONTS } from "@/styles/common";
import { BasicWhiteCard, BasicWhiteCardTitle } from "@/components/common/Card";
import useStickyMoment from "@/hook/useStickyMoment";

function CompetitionArticle() {
  usePageTitle("대회 정보");
  const competitionHeaderRef = useRef<HTMLDivElement>(null);
  useStickyMoment(competitionHeaderRef);
  const router = useRouter();
  const competitionId = router.query.competitionId;
  const posterImg =
    "https://i.namu.wiki/i/83QhQJRkrjYOgRlz8WBlerxOxWfSDjs0nEag90x03uiA6hIMS9rdFCFuC7aCRxP53zCadhmwMlUHhjJX570WRg.webp";

  return (
    <Container>
      <Header posterImg={posterImg} ref={competitionHeaderRef}>
        <div className="contents">
          <img className="competition-poster-img" src={posterImg} alt="포스터" />
          <div className="competition-info">
            <h2>2024년 00대학교 농구리그</h2>
            <p>주최 00</p>
            <p>주관 00</p>
          </div>
        </div>
      </Header>
      <Card></Card>

      <Card>
        <BasicWhiteCardTitle>일정</BasicWhiteCardTitle>
      </Card>
      <Card>
        <BasicWhiteCardTitle>영상</BasicWhiteCardTitle>
      </Card>
      <Card>
        <BasicWhiteCardTitle>사진</BasicWhiteCardTitle>
      </Card>
    </Container>
  );
}

const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Header = styled.div<{ posterImg: string }>`
  margin: -11px -16px 40px; // sticky moment 처리를 위해 -11px
  position: sticky;
  top: 0;
  width: calc(100% + 32px);
  height: 168px;
  background-image: url(${({ posterImg }) => posterImg});
  background-repeat: no-repeat;
  background-size: 100%;
  object-fit: cover;
  transition: all 0.25s;

  .contents {
    padding: 24px 20px 12px;
    width: 100%;
    height: 168px;
    backdrop-filter: blur(16px);
    background: rgba(0, 0, 0, 0.25);
    transition: all 0.25s;

    .competition-poster-img {
      position: absolute;
      width: 120px;
      height: 180px;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 0 16px 12px var(--box-shadow);
      transition: all 0.25s;
    }
    .competition-info {
      margin-left: 140px;
      display: inline-block;
      padding: 4px 0 8px;
      ${FONTS.MD1W500};
      color: #fff;
      transition: all 0.25s;

      h2 {
        margin-bottom: 12px;
        font-weight: 800;
        font-size: 2.2rem;
        line-height: 3rem;
      }
    }
  }

  &.stuck {
    height: 60px;
    .contents {
      display: flex;
      padding: 12px;
      height: 60px;
      .competition-poster-img {
        width: 40px;
        height: 60px;
      }
      .competition-info {
        padding: 0;
        display: inline-flex;
        margin-left: 60px;
        align-items: center;
        h2 {
          margin-bottom: 0;
        }
        p {
          display: none;
        }
      }
    }
  }
`;

const Card = styled(BasicWhiteCard)``;

export default CompetitionArticle;
