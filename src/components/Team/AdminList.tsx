import React, { useState } from "react";
import { useRouter, useParams } from "next/navigation";
import styled from "styled-components";
import useDeviceAgent from "@/hook/useDeviceAgent";
import useModal from "@/hook/useModal";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import ToggleInput from "../common/ToggleInput";

type GroupProps = {
  title: string;
  pages?: {
    icon: React.ReactNode;
    title: string;
    subText?: React.ReactNode;
    linkTo?: string;
    onlyPc?: boolean;
    onClick?: () => void;
  }[];
};
function AdminListGroup({ title, pages }: GroupProps) {
  const router = useRouter();
  const { isMobile } = useDeviceAgent();
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
          pages.map((page, index) => (
            <li
              key={`${page.linkTo}-${index}`}
              role="button"
              aria-disabled={page.onlyPc}
              className={page.onlyPc && isMobile ? "invalid" : "valid"}
              onClick={() => (page.onlyPc && isMobile ? {} : handleClick(page.linkTo ?? page.onClick))}
            >
              <div className="page-title-wrapper">
                <span className="icon-wrapper">{page.icon}</span> {page.title}
              </div>
              {page.onlyPc && isMobile ? (
                <SubTextWrapper>
                  <span className="pc-only">PC에서만 지원</span>
                </SubTextWrapper>
              ) : (
                <SubTextWrapper>{page.subText}</SubTextWrapper>
              )}
            </li>
          ))}
      </List>
    </Group>
  );
}

function AdminList() {
  const params = useParams();
  const teamId = params["teamId"];

  const { showModal: showApplyAllowModal, ModalComponents: ApplyAllowModal } = useModal();
  const { showModal: showPublicTeamModal, ModalComponents: PublicTeamModal } = useModal();

  const [applyAllow, setApplyAllow] = useState(true);
  const [publicTeam, setPublicTeam] = useState(true);

  return (
    <>
      <Container>
        <AdminListGroup
          title="팀 관리"
          pages={[
            {
              icon: "🔧",
              title: "기본 정보 수정",
              linkTo: `/team/${teamId}/admin/basic-info`,
            },
            { icon: "🔁", title: "팀 공개 여부", onClick: showPublicTeamModal },
          ]}
        />
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
          title="팀원 관리"
          pages={[
            {
              icon: "👥",
              title: "팀원 목록",
              linkTo: `/team/${teamId}/players`,
            },
            {
              icon: "🔗",
              title: "팀원 카테고리 관리",
              linkTo: `/team/${teamId}/admin/player-category`,
            },
            {
              icon: "📢",
              title: "모집 공고 관리",
              linkTo: `/team/${teamId}/admin/recruit-post`,
              subText: <span className="sub-status">모집 중</span>,
            },
            {
              icon: "📋",
              title: "가입 신청 목록",
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
          title="대회"
          pages={[
            {
              icon: "🏆",
              title: "주최 대회 목록",
              linkTo: `/staff/competition`,
              onlyPc: true,
            },
            {
              icon: "🔗",
              title: "신규 대회 주최",
              linkTo: `/staff/competition/create`,
              onlyPc: true,
            },
          ]}
        />
        <AdminListGroup
          title="게시판 설정"
          pages={[
            {
              icon: "📝",
              title: "카테고리 관리",
              linkTo: `/team/${teamId}/admin/board-category`,
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
        {/* <AdminListGroup
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
        /> */}
      </Container>
      <ApplyAllowModal
        draggable="all"
        buttons={[
          {
            mode: "gray",
            fillType: "light",
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
      <PublicTeamModal
        draggable="all"
        buttons={[
          {
            mode: "gray",
            fillType: "light",
            name: "닫기",
            onClick: (close) => {
              close();
            },
          },
        ]}
      >
        <PublicHandlerContainer>
          <div className="handler-wrapper">
            <p>팀 공개 여부</p>
            <ToggleInput toggled={publicTeam} setToggle={setPublicTeam} />
          </div>
          <div className="description">
            비공개 팀이 되면 다른 사용자는 우리 팀을 볼 수 없으며, 아래의 제한이 생겨요.
            <ul className="information">
              <li>초대 링크로만 새 팀원을 영입할 수 있어요.</li>
              <li>다른 팀은 우리 팀에 교류전 제안을 할 수 없어요.</li>
              <li>단, 우리 팀에서 교류전을 제안하면 상대 팀은 우리 팀을 볼 수 있어요.</li>
              <li>팀 순위에서 제외돼요.</li>
            </ul>
          </div>
        </PublicHandlerContainer>
      </PublicTeamModal>
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
    user-select: none;
    cursor: pointer;
    display: flex;
    padding: 10px 20px 10px 16px;
    justify-content: space-between;

    &.valid {
      ${BUTTON_ACTIVE("var(--gray100)")};
    }
    &.invalid {
      cursor: not-allowed;
      opacity: 0.5;
    }

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
    font-size: 1.5rem;
    color: var(--main);
    font-weight: 600;
  }
  span.sub-status {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--gray700);
  }
  span.pc-only {
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--main);
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

const PublicHandlerContainer = styled.div`
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
      ${FONTS.body3("semibold")};
      color: var(--gray700);
    }
  }
  div.description {
    ${FONTS.body4("regular")};
    color: var(--gray500);
    word-break: keep-all;
    ul.information {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin: 10px 0 0 10px;
      padding: 0 0 0 6px;
      list-style-type: disc;
    }
  }
`;

export default AdminList;
