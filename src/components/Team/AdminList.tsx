import useModal from "@/hook/useModal";
import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import ToggleInput from "../common/ToggleInput";

type GroupProps = {
  title: string;
  pages?: {
    icon: React.ReactNode;
    title: string;
    subText?: React.ReactNode;
    linkTo?: string;
    onClick?: () => void;
  }[];
};
function AdminListGroup({ title, pages }: GroupProps) {
  const router = useRouter();
  const handleClick = (target?: string | (() => void)) => {
    if (typeof target === "string") {
      router.push(target);
    } else if (typeof target === "function") {
      target();
    }
  };
  return (
    <Group>
      <Title>{title}</Title>
      <List>
        {pages &&
          pages.map((page) => (
            <li key={page.linkTo} onClick={() => handleClick(page.linkTo ?? page.onClick)}>
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
  const { showModal: showApplyAllowModal, ModalComponents: ApplyAllowModal } = useModal();
  const [applyAllow, setApplyAllow] = useState(true);
  const router = useRouter();
  const teamId = router.query.teamId;

  return (
    <>
      <Container>
        <AdminListGroup
          title="교류전 및 훈련"
          pages={[
            {
              icon: "🏁",
              title: "교류전 제안 현황",
              linkTo: `/team/${teamId}/admin/matchup`,
              subText: <span className="sub-highlight">+3</span>,
            },
            { icon: "🔁", title: "훈련 일정 반복 관리", linkTo: `/team/${teamId}/admin/train` },
          ]}
        />
        <AdminListGroup
          title="팀원 모집"
          pages={[
            {
              icon: "🙋🏻",
              title: "모집 공고 올리기",
              linkTo: `/team/${teamId}/admin/recruit-post`,
              subText: <span className="sub-status">모집 중</span>,
            },
            {
              icon: "📋",
              title: "가입 신청자 목록",
              linkTo: `/team/${teamId}/admin/recruit-applicant`,
              subText: <span className="sub-highlight">+3</span>,
            },
            {
              icon: "👍",
              title: "팀 가입 허용",
              onClick: showApplyAllowModal,
              subText: <span className="sub-status">비허용</span>,
            },
          ]}
        />
        <AdminListGroup
          title="알림 설정"
          pages={[
            {
              icon: "🛎️",
              title: "알림 발송 자동화",
              linkTo: `/team/${teamId}/admin/notification-auto`,
            },
            {
              icon: "🔔",
              title: "알림 수동 발송",
              linkTo: `/team/${teamId}/admin/notification-manual`,
            },
          ]}
        />
        <AdminListGroup
          title="Premium 계정 관리"
          pages={[
            {
              icon: "💵",
              title: "결제 방식 변경",
              linkTo: `/team/${teamId}/admin/payment-method`,
            },
            {
              icon: "💸",
              title: "결제 내역",
              linkTo: `/team/${teamId}/admin/payment-history`,
            },
          ]}
        />
      </Container>
      <ApplyAllowModal
        buttons={[
          {
            mode: "OPTION1",
            name: "닫기",
            onClick: (close) => {
              close();
            },
          },
        ]}
      >
        <AllowContainer>
          <div className="handler-wrapper">
            <p>팀 가입 허용</p>
            <ToggleInput toggled={applyAllow} setToggle={setApplyAllow} />
          </div>
          <p className="description">비허용하면 다른 사용자가 팀에 가입할 수 없어요</p>
        </AllowContainer>
      </ApplyAllowModal>
    </>
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
  display: flex;
  align-items: center;

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

const AllowContainer = styled.div`
  ${FONTS.MD1};
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  div.handler-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      flex: 1;
    }
  }
  p.description {
    ${FONTS.MD2};
    font-weight: 400;
    color: var(--gray700);
  }
`;

export default AdminList;
