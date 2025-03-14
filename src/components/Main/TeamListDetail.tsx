import { FONTS } from "@/styles/common";
import styled from "styled-components";
import React from "react";
import { WhiteSectionDivider } from "../common/Container";

function TeamListDetail() {
  return (
    <Container>
      <TeamHead>
        <TeamLogo />
        <h3>SPABA</h3>
        <div className="team-info">
          <span className="sports">농구</span>
          <span className="univ">서울과학기술대학교</span>
          <span className="gender"></span>
        </div>
      </TeamHead>
      <WhiteSectionDivider />
      <TeamDetail>
        <ul className="team-recruit-list">
          <li>
            <dt>연습장소</dt>
            <dd>서울과학기술대학교 체육관</dd>
          </li>
          <li>
            <dt>모집기간</dt>
            <dd>2024.10.20 ~ 2024.10.22</dd>
          </li>
          <li>
            <dt>모집인원</dt>
            <dd>최대 3명</dd>
          </li>
        </ul>
        <p className="team-welcome-message">
          안녕하세요 대학교 중앙동아리 SPABA입니다. 저희 동아리는 최선을 다하는 농구동아리입니다. 함께 농구하며 즐길
          준비되신 분에게 열려있습니다.
        </p>
      </TeamDetail>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 -16px;
`;

const TeamHead = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  h3 {
    ${FONTS.MD1}
  }
  div.team-info {
    ${FONTS.MD2}
    display: inline-flex;
    align-items: center;
    gap: 4px;
    span {
      font-size: 1.3rem;
      padding: 3px 8px;
      border-radius: 7px;
    }
    span.sports {
      background-color: var(--primary200);
      color: var(--main);
    }
    span.univ {
      background-color: var(--gray200);
      color: var(--gray700);
    }
  }
`;
const TeamLogo = styled.div`
  display: block;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--primary300);
`;
const TeamDetail = styled.div`
  padding: 12px 16px;
  ul.team-recruit-list {
    ${FONTS.MD2};
    margin: 0 0 12px;
    padding: 0 16px;
    li {
      display: flex;
      padding: 4px 0;
      gap: 12px;
      dt {
        color: var(--gray900);
      }
      dd {
        color: var(--gray700);
      }
    }
  }

  p.team-welcome-message {
    font-size: 1.6rem;
    line-height: 2.6rem;
    padding: 20px;
    background-color: rgba(var(--sub2-rgb), 0.3);
    border-radius: 10px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
`;

export default TeamListDetail;
