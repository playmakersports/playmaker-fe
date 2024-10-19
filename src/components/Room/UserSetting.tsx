import React from "react";
import styled from "@emotion/styled";
import { WhiteSectionDivider } from "../common/Container";
import { FONTS } from "@/styles/common";

import RightArrowThinIcon from "@/assets/icon/arrow/RightArrowThin.svg";

function UserSetting() {
  return (
    <Container>
      <GroupTitle>계정 관리</GroupTitle>
      <Group>
        <li>
          재학증명서 인증{" "}
          <span className="status-wrapper">
            인증됨
            <RightArrowThinIcon />
          </span>
        </li>
        <li>
          공개 범위{" "}
          <span className="status-wrapper">
            전체
            <RightArrowThinIcon />
          </span>
        </li>
        <li>
          계정 관리 <RightArrowThinIcon />
        </li>
      </Group>
      <WhiteSectionDivider />
      <GroupTitle>프리미엄</GroupTitle>
      <Group>
        <li>개인 프리미엄</li>
        <li>팀 프리미엄</li>
      </Group>
      <WhiteSectionDivider />
      <GroupTitle>정보 및 지원</GroupTitle>
      <Group>
        <li>
          사업자 정보 <RightArrowThinIcon />
        </li>
        <li>
          이용약관 <RightArrowThinIcon />
        </li>
        <li>
          개인정보처리방침 <RightArrowThinIcon />
        </li>
        <li>
          인스타그램 <RightArrowThinIcon />
        </li>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  padding: 0 0 calc(20px + var(--env-sab));
`;

const GroupTitle = styled.div`
  margin-top: 10px;
  padding: 16px 0;
  ${FONTS.MD1};
  font-size: 2rem;
`;
const Group = styled.ul`
  margin: 0 -16px 16px;
  li {
    padding: 16px 18px;
    ${FONTS.MD1W500};
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: var(--gray100);
    }
    &:active {
      background-color: var(--gray200);
    }
  }
  span.status-wrapper {
    display: inline-flex;
    align-items: center;
    font-size: 1.4rem;
    gap: 12px;
    color: var(--gray600);
  }

  svg {
    width: 14px;
    fill: var(--gray600);
  }
`;

export default UserSetting;
