import React from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { WhiteSectionDivider } from "@/components/common/Container";

import RightArrowIcon from "@/assets/icon/arrow/RightArrow.svg";
// import GraduationIcon from "@/assets/icon/common/filled/Graduation.svg";
import LockIcon from "@/assets/icon/common/filled/Lock.svg";
import PersonIcon from "@/assets/icon/common/filled/Person.svg";
// import HeadphoneIcon from "@/assets/icon/common/filled/Headphone.svg";
// import InformationIcon from "@/assets/icon/common/filled/Information.svg";
// import BuildingsIcon from "@/assets/icon/common/filled/Buildings.svg";

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
              <RightArrowIcon />
            </span>
          ) : (
            <span className="status-wrapper">
              <RightArrowIcon />
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
          { icon: <PersonIcon />, title: "개인정보 수정", onClick: () => router.push(`/my/settings/info`) },
          { icon: <PersonIcon />, title: "계정 관리", onClick: () => router.push(`/my/settings/account`) },
          { icon: <LockIcon />, title: "공개 범위", onClick: () => {}, subText: "전체" },
          {
            // icon: <GraduationIcon />,
            icon: <LockIcon />,
            title: "학교 인증",
            onClick: () => router.push(`/my/settings/school`),
            subText: <span style={{ color: "var(--point-red)" }}>인증 필요</span>,
          },
        ]}
      />
      <WhiteSectionDivider $child />
      <GroupTitle>정보 및 지원</GroupTitle>
      <GroupList
        list={[
          {
            // icon: <HeadphoneIcon />,
            icon: <LockIcon />,
            title: "서비스 문의",
            onClick: () => {},
          },
          {
            // icon: <InformationIcon />,
            icon: <LockIcon />,
            title: "약관 및 개인정보처리방침",
            onClick: () => {},
          },
          {
            // icon: <BuildingsIcon />,
            icon: <LockIcon />,
            title: "서비스 제공자 정보",
            onClick: () => {},
          },
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
  ${FONTS.body3("semibold")};
  font-size: 2rem;
`;
const Group = styled.ul`
  margin: 0 -16px 16px;
  li {
    padding: 16px 18px;
    ${FONTS.body3("regular")};
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
    ${FONTS.body3("regular")}
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
