import React from "react";
import styled from "styled-components";
import { ModalProps } from "@/hook/useModal";
import { useToast } from "@/hook/useToast";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import CopyIcon from "@/assets/icon/global/Copy.svg";
import CalendarIcon from "@/assets/icon/global/Calendar.svg";
import LocationIcon from "@/assets/icon/global/Location.svg";
import PersonIcon from "@/assets/icon/global/Person24.svg";

type Props = {
  ModalContainer: (props: ModalProps) => React.JSX.Element | undefined;
  scheduleInfo?: {
    articleId: string;
    title: string;
    emoji: string;
    startDate: string;
    endDate: string;
    place: string;
    description: string;
    writer: string;
  };
};

function ScheduleDetailModal({ ModalContainer, scheduleInfo }: Props) {
  const { trigger } = useToast();
  const copySchedulePlace = (target?: string) => {
    if (target) {
      navigator.clipboard.writeText(target).then(() => {
        trigger("장소가 복사됐어요");
      });
    }
  };

  return (
    <ModalContainer
      draggable="all"
      buttons={[
        { mode: "primary", fillType: "light", name: "게시글 보기", onClick: () => {} },
        {
          mode: "primary",
          name: "확인",
          onClick: (close) => {
            close();
          },
        },
      ]}
    >
      <Header>
        <span className="emoji">{scheduleInfo?.emoji}</span>
        <h3>{scheduleInfo?.title}</h3>
      </Header>
      <Inner>
        <p className="description">{scheduleInfo?.description}</p>
        <div className="list-wrapper">
          <div className="list">
            <span className="option-title">
              <CalendarIcon />
              일시
            </span>
            <span className="option-contents">
              {scheduleInfo?.startDate} ~ {scheduleInfo?.endDate}
            </span>
          </div>
          <div className="list">
            <span className="option-title">
              <LocationIcon />
              장소
            </span>
            <button type="button" className="option-contents" onClick={() => copySchedulePlace(scheduleInfo?.place)}>
              {scheduleInfo?.place} <CopyIcon />
            </button>
          </div>
          <div className="list">
            <span className="option-title">
              <PersonIcon />
              작성자
            </span>
            <span className="option-contents">{scheduleInfo?.writer}</span>
          </div>
        </div>
      </Inner>
    </ModalContainer>
  );
}

const Header = styled.div`
  display: flex;
  margin: 0 -16px;
  padding: 0 24px 16px;
  align-items: center;
  border-bottom: 1px solid var(--gray200);
  gap: 12px;

  h3 {
    ${FONTS.HEAD2};
    font-size: 1.8rem;
  }
  span.emoji {
    display: inline-flex;
    padding: 6px 0;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
`;

const Inner = styled.div`
  margin: 16px -6px 10px;

  div.list-wrapper {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 8px;
  }

  p.description {
    margin: 6px 10px 24px;
    font-weight: 400;
    font-size: 1.4rem;
    color: var(--gray800);
  }

  div.list {
    user-select: none;
    display: flex;
    justify-content: space-between;
    padding: 4px 12px;
    color: var(--gray800);

    button.option-contents {
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      margin-right: -10px;
      padding: 8px 10px;
      gap: 4px;

      ${BUTTON_ACTIVE("var(--gray100)")}
      svg {
        fill: var(--gray600);
      }
    }

    span.option-title {
      display: flex;
      align-items: center;
      gap: 8px;
      svg {
        fill: var(--gray800);
      }
    }
  }
`;

export default ScheduleDetailModal;
