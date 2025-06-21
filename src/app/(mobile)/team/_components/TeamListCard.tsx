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
  university: string | null;
  teamId: number;
  teamLogo: string;
  teamName: string;
  location: string;
  teamIntro: string | null;
  gender: string;
  memberCnt: number;
  likeCnt: number;
  isHeart?: boolean;
};
function TeamListCard(props: Props) {
  const { university, teamId, teamLogo, teamName, location, teamIntro, gender, memberCnt, likeCnt } = props;
  const [heart, setHeart] = useState(false);

  return (
    <CardHeader className={baseCardContainerNoTrans} style={{ padding: "12px" }}>
      <Link href={`/team/${teamId}`} className={flexRowGap8} style={{ flex: 1 }}>
        <img src={teamLogo} alt={teamName} />
        <div className={flexColumnGap10} style={{ flex: 1 }}>
          <div>
            <h3 className={fonts.body3.medium}>{teamName}</h3>
            <p className={fonts.body4.regular}>{teamIntro}</p>
          </div>

          <div className={clsx(fonts.caption1.regular, flexRowGap10)} style={{ color: "var(--gray400)" }}>
            {university ? (
              <div className={clsx(flexRowGap4, flexAlignCenter)}>
                {/* <GraduationIcon /> */}
                <span>{university}</span>
              </div>
            ) : (
              <div className={clsx(flexRowGap4, flexAlignCenter)}>
                <LocationIcon width={18} height={18} />
                {location}
              </div>
            )}
            <div className={clsx(flexRowGap4, flexAlignCenter)}>
              <PeopleIcon width={18} height={18} />
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
          color: "var(--gray400)",
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
