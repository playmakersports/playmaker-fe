import React from "react";
import styled from "styled-components";
import { ModalProps } from "@/hook/useModal";
import { useToast } from "@/hook/useToast";

import { BUTTON_ACTIVE, FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";

import CopyIcon from "@/assets/icon/common/outlined/Copy.svg";

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
      title={`${scheduleInfo?.emoji} ${scheduleInfo?.title}`}
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
      <Inner>
        <p className="description">{scheduleInfo?.description}</p>
        <div className="list-wrapper">
          {scheduleInfo && (
            <div className="list">
              <span className="option-title">일시</span>
              <span className="option-contents">
                {formattedDate(scheduleInfo.startDate, {
                  displayDateType: ".",
                  displayYear: "not-this-year",
                  displayTime: "24h",
                  displayDayName: "short-with-parenthesis",
                })}{" "}
                ~{" "}
                {formattedDate(scheduleInfo.endDate, {
                  displayDateType: ".",
                  displayYear: "not-this-year",
                  displayTime: "24h",
                  displayDayName: "short-with-parenthesis",
                })}
              </span>
            </div>
          )}
          <div className="list">
            <span className="option-title">장소</span>
            <button type="button" className="option-contents" onClick={() => copySchedulePlace(scheduleInfo?.place)}>
              {scheduleInfo?.place} <CopyIcon />
            </button>
          </div>
          <div className="list">
            <span className="option-title">작성자</span>
            <span className="option-contents">{scheduleInfo?.writer}</span>
          </div>
        </div>
      </Inner>
    </ModalContainer>
  );
}

const Inner = styled.div`
  margin: 16px 0 10px;

  div.list-wrapper {
    display: flex;
    margin-top: 24px;
    flex-direction: column;
    gap: 8px;
  }

  p.description {
    ${FONTS.body4("regular")};
    color: var(--gray600);
  }

  div.list {
    user-select: none;
    display: flex;
    justify-content: space-between;
    color: var(--gray700);
    ${FONTS.body4("regular")};

    button.option-contents {
      ${FONTS.body4("regular")};
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      margin-right: -10px;
      padding: 8px 10px;
      gap: 4px;
      ${BUTTON_ACTIVE("var(--gray100)")}
      svg {
        fill: var(--gray700);
      }
    }

    span.option-title {
      display: flex;
      align-items: center;
      gap: 8px;
      svg {
        fill: var(--gray700);
      }
    }
  }
`;

export default ScheduleDetailModal;
