import React, { useState } from "react";
import styled from "@emotion/styled";
import useModal from "@/hook/useModal";

import { countDayDiff } from "@/util/date";
import { BasicWhiteCard } from "../common/Card";
import { CARD_ACTIVE, FONTS } from "@/styles/common";
import TeamListDetail from "@/components/Main/TeamListDetail";

import LocationIcon from "@/assets/icon/global/Location.svg";
import GraduationIcon from "@/assets/icon/global/Graduation.svg";
import Heart from "../common/Heart";

const RECRUIT_STATUS: Record<string, string> = {
  PENDING: "모집중",
  FINISHED: "모집완료",
  NO_RECRUIT: "",
};
const RECRUIT_GENDER: Record<string, string> = {
  MALE: "남성",
  FEMALE: "여성",
  MIXED: "혼성",
};

type Props = {
  status: string;
  university: string | null;
  teamId: string;
  teamLogo: string;
  teamName: string;
  location: string;
  dueDate: string;
  gender: string;
};
function TeamListCard(props: Props) {
  const { status, university, teamId, teamLogo, teamName, location, dueDate, gender } = props;
  const { ModalComponents, showModal } = useModal();
  const [heart, setHeart] = useState(false);

  return (
    <>
      <Card key={teamId} onClick={showModal}>
        <CardHeader>
          <div className="left-side">
            <img src={teamLogo} alt={teamName} />
            <h3>{teamName}</h3>
          </div>
          <Heart isHeart={heart} onHeart={setHeart} />
        </CardHeader>
        <div className="recruit-detail">
          {university ? (
            <div className="recruit-detail-item">
              <GraduationIcon />
              <span>{university}</span>
            </div>
          ) : (
            <div className="recruit-detail-item">
              <LocationIcon />
              <span>{location}</span>
            </div>
          )}
          <TeamLabels>
            {status === "PENDING" && (
              <>
                {dueDate && countDayDiff(dueDate) < 6 ? (
                  <li className="recruit-status count">마감 D-{countDayDiff(dueDate)}</li>
                ) : (
                  <li className="recruit-status">모집중</li>
                )}
              </>
            )}
            <li className={`recruit-status ${gender}`}>{RECRUIT_GENDER[gender]}</li>
          </TeamLabels>
        </div>
      </Card>
      <ModalComponents
        buttons={[
          { mode: "OPTION2", name: "팀 페이지 이동", onClick: () => console.log("") },
          { mode: "MAIN", name: "가입 신청", onClick: () => console.log("") },
        ]}
      >
        <TeamListDetail />
      </ModalComponents>
    </>
  );
}

const Card = styled(BasicWhiteCard)`
  ${FONTS.MD1W500};
  font-weight: 400;
  text-align: left;
  border: 1px solid var(--gray200);
  pointer-events: auto;
  box-shadow: 0 6px 12px 0 rgba(112, 144, 178, 0.08), 0 2px 4px 0 rgba(112, 144, 178, 0.06);
  ${CARD_ACTIVE};

  .recruit-detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 4px;
    gap: 8px;
    ${FONTS.MD2};
    font-weight: 400;
    div.recruit-detail-item {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: var(--gray700);
    }
    svg {
      width: 18px;
      height: 18px;
      fill: var(--gray500);
    }
  }
`;

const CardHeader = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 14px;
  align-items: center;
  justify-content: space-between;

  div.left-side {
    ${FONTS.MD1W500};
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  h3 {
    display: inline-flex;
    align-items: center;
    font-size: 1.6rem;
    font-weight: 600;
    gap: 6px;
  }
  img {
    display: inline-block;
    padding: 3px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background-color: var(--background-light);
    border: 1px solid var(--gray300);
    overflow: hidden;
    object-fit: cover;
  }
`;

const TeamLabels = styled.ul`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  .recruit-status {
    ${FONTS.MD2};
    font-size: 1.3rem;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    line-height: 1.25rem;
    padding: 6px 10px 5px;
    border-radius: 7px;
    background-color: rgba(160, 188, 248, 0.3);
    color: var(--main);

    &.FINISHED {
      background-color: var(--gray200);
      color: var(--gray700);
    }
    &.count {
      background-color: #fff4ed;
      color: var(--point);
    }
    &.MALE {
      background-color: rgba(var(--sub2-rgb), 0.3);
      color: var(--sub0);
    }
    &.FEMALE {
      background-color: rgba(239, 142, 141, 0.1);
      color: #ef8e8d;
    }
    &.MIXED {
      background-color: rgba(241, 245, 255, 1);
      color: var(--art-purple);
    }
  }
`;

export default TeamListCard;
