import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { WhiteSectionGrayDivider } from "@/components/common/Container";

import RightArrowThinIcon from "@/assets/icon/arrow/RightArrowThin.svg";
import GraduationIcon from "@/assets/icon/global/Graduation.svg";
import LockIcon from "@/assets/icon/global/Lock.svg";
import PersonIcon from "@/assets/icon/global/Person24.svg";
import HeadphoneIcon from "@/assets/icon/global/Headphone.svg";
import InformationIcon from "@/assets/icon/global/Information.svg";
import BuildingsIcon from "@/assets/icon/global/Buildings.svg";

type GroupListProps = {
  list: {
    icon: React.ReactNode;
    title: string;
    onClick: () => void;
    subText?: string | React.ReactNode;
  }[];
};
function GroupList({ list }: GroupListProps) {
  return (
    <Group>
      {list.map((item, idx) => (
        <li key={idx} onClick={item.onClick}>
          <span className="title-wrapper">
            {item.icon}
            {item.title}
          </span>
          {item.subText ? (
            <span className="status-wrapper">
              {item.subText}
              <RightArrowThinIcon />
            </span>
          ) : (
            <span className="status-wrapper">
              <RightArrowThinIcon />
            </span>
          )}
        </li>
      ))}
    </Group>
  );
}
function UserSetting() {
  const router = useRouter();

  return (
    <Container>
      <GroupTitle>정보 관리</GroupTitle>
      <GroupList
        list={[
          {
            icon: <GraduationIcon />,
            title: "재학증명서 인증",
            onClick: () => router.push(`/my/settings/school`),
            subText: <span style={{ color: "var(--point-red)" }}>인증 필요</span>,
          },
          { icon: <LockIcon />, title: "공개 범위", onClick: () => {}, subText: "전체" },
          { icon: <PersonIcon />, title: "계정 관리", onClick: () => router.push(`/my/settings/account`) },
        ]}
      />
      <WhiteSectionGrayDivider />
      <GroupTitle>정보 및 지원</GroupTitle>
      <GroupList
        list={[
          {
            icon: <HeadphoneIcon />,
            title: "서비스 문의",
            onClick: () => {},
          },
          { icon: <InformationIcon />, title: "약관 및 개인정보처리방침", onClick: () => {} },
          { icon: <BuildingsIcon />, title: "서비스 제공자 정보", onClick: () => {} },
        ]}
      />
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
    ${BUTTON_ACTIVE("var(--gray50)")}
  }
  span.title-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    svg {
      width: 20px;
      height: 20px;
      fill: var(--gray900);
    }
  }
  span.status-wrapper {
    ${FONTS.MD1W500}
    display: inline-flex;
    align-items: center;
    font-size: 1.4rem;
    gap: 12px;
    color: var(--gray600);
    svg {
      width: 14px;
      fill: var(--gray600);
    }
  }
`;

export default UserSetting;
