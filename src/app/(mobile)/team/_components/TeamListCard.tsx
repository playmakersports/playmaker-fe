import React, { useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import styled from "styled-components";

import { fonts } from "@/styles/fonts.css";
import Heart from "../../../../components/common/TeamHeart";
import {
  flexColumnGap10,
  flexAlignCenter,
  flexRowGap4,
  baseCardContainerNoTrans,
  flexRowGap8,
  flexRowGap10,
} from "@/styles/container.css";

import LocationIcon from "@/assets/icon/common/outlined/LocationPin.svg";
import PeopleIcon from "@/assets/icon/common/outlined/People.svg";
import NumberFlow from "@number-flow/react";
// import GraduationIcon from "@/assets/icon/common/filled/Graduation.svg";

type Props = {
  status: string;
  university: string | null;
  teamId: string;
  teamLogo: string;
  teamName: string;
  location: string;
  dueDate: string;
  gender: string;
  memberCnt: number;
  likeCnt: number;
};
function TeamListCard(props: Props) {
  const { status, university, teamId, teamLogo, teamName, location, gender, memberCnt, likeCnt } = props;
  const [heart, setHeart] = useState(false);

  return (
    <CardHeader className={baseCardContainerNoTrans}>
      <Link href={`/team/${teamId}`} className={flexRowGap8} style={{ flex: 1 }}>
        <img src={teamLogo} alt={teamName} />
        <div className={flexColumnGap10} style={{ flex: 1 }}>
          <div>
            <h3 className={fonts.body3.semibold}>{teamName}</h3>
            <p className={fonts.caption1.regular}>팀 소개글입니다!</p>
          </div>

          <div className={clsx(fonts.caption1.medium, flexRowGap10)} style={{ color: "var(--gray500)" }}>
            {university ? (
              <div className={clsx(flexRowGap4, flexAlignCenter)}>
                {/* <GraduationIcon /> */}
                <span>{university}</span>
              </div>
            ) : (
              <div className={clsx(flexRowGap4, flexAlignCenter)}>
                <LocationIcon width={18} height={18} fill="var(--gray500)" />
                {location}
              </div>
            )}
            <div className={clsx(flexRowGap4, flexAlignCenter)}>
              <PeopleIcon width={18} height={18} fill="var(--gray500)" />
              {memberCnt}명
            </div>
          </div>
        </div>
      </Link>
      <div
        className={clsx(flexColumnGap10, flexAlignCenter, fonts.caption1.medium)}
        style={{
          userSelect: "none",
          width: "24px",
          wordBreak: "keep-all",
          letterSpacing: "-0.35px",
          gap: 0,
        }}
      >
        <Heart teamId={teamId} isHeart={heart} onHeart={setHeart} />
        {Intl.NumberFormat("ko-KR", {
          notation: "compact",
          compactDisplay: "short",
          roundingMode: "trunc",
        }).format(likeCnt)}
      </div>
    </CardHeader>
  );
}

const CardHeader = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--gray700);

  img {
    display: inline-block;
    padding: 3px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: var(--background-light);
    border: 1px solid var(--gray200);
    overflow: hidden;
    object-fit: cover;
  }
`;

export default TeamListCard;
