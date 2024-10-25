import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import styled from "@emotion/styled";
import React from "react";

type GroupProps = {
  title: string;
  pages?: {
    icon: React.ReactNode;
    title: string;
    subText?: React.ReactNode;
    linkTo: string;
  }[];
};
function AdminListGroup({ title, pages }: GroupProps) {
  return (
    <Group>
      <Title>{title}</Title>
      <List>
        {pages &&
          pages.map((page) => (
            <li key={page.linkTo}>
              <div className="page-title-wrapper">
                <span className="icon-wrapper">{page.icon}</span> {page.title}
              </div>
              <SubTextWrapper>{page.subText}</SubTextWrapper>
            </li>
          ))}
      </List>
    </Group>
  );
}

function AdminList() {
  return (
    <Container>
      <AdminListGroup
        title="교류전 및 훈련"
        pages={[
          {
            icon: "🏁",
            title: "교류전 제안 목록",
            linkTo: "/team/1/admin/matchup",
            subText: <span className="sub-highlight">+3</span>,
          },
          { icon: "🔁", title: "훈련 일정 반복 관리", linkTo: "/team/1/admin/train" },
        ]}
      />
      <AdminListGroup
        title="팀 회원 모집"
        pages={[
          {
            icon: "🙋🏻",
            title: "모집 공고 올리기",
            linkTo: "/team/1/admin/recruit-post",
            subText: <span className="sub-status">모집중</span>,
          },
          {
            icon: "📋",
            title: "팀 가입 신청자 목록",
            linkTo: "/team/1/admin/recruit-applicant",
            subText: <span className="sub-highlight">+3</span>,
          },
          {
            icon: "👍",
            title: "팀 가입 허용",
            linkTo: "/team/1/admin/recruit-allow",
            subText: <span className="sub-highlight">+3</span>,
          },
        ]}
      />
      <AdminListGroup
        title="알림 설정"
        pages={[
          {
            icon: "🛎️",
            title: "알림 발송 자동화",
            linkTo: "/team/1/admin/notification-auto",
          },
          {
            icon: "🔔",
            title: "알림 수동 발송",
            linkTo: "/team/1/admin/notification-manual",
          },
        ]}
      />
      <AdminListGroup
        title="Premium 계정 관리"
        pages={[
          {
            icon: "💵",
            title: "결제 방식 변경",
            linkTo: "/team/1/admin/payment-method",
          },
          {
            icon: "💸",
            title: "결제 내역",
            linkTo: "/team/1/admin/payment-history",
          },
        ]}
      />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  margin: 28px 2px 0;
  flex-direction: column;
  gap: 16px;
`;
const Group = styled.div`
  margin: 12px 0;
`;
const Title = styled.h5`
  ${FONTS.HEAD1};
  margin: 0 0 12px;
`;
const List = styled.ul`
  margin: 0 -16px;
  ${FONTS.MD1W500};
  li {
    ${BUTTON_ACTIVE("var(--gray100)")};
    user-select: none;
    cursor: pointer;
    display: flex;
    padding: 10px 20px 10px 16px;
    justify-content: space-between;

    div.page-title-wrapper {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    span.icon-wrapper {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      padding: 4px;
      border-radius: 5px;
      background-color: var(--gray200);
    }
  }
`;
const SubTextWrapper = styled.div`
  span.sub-highlight {
    display: inline-block;
    padding: 1px 8px;
    font-size: 1.4rem;
    background-color: var(--main);
    color: var(--gray0);
    border-radius: 12px;
    font-weight: 600;
    line-height: 2rem;
  }
  span.sub-status {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--gray700);
  }
`;

export default AdminList;
