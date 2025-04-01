"use client";
import React from "react";
import styled from "styled-components";
import { useGet } from "@/apis/hook/query";
import { useHeader } from "@/hook/useHeader";

import { FONTS } from "@/styles/common";
import { ApiSelectMember } from "@/apis/types/user";
import Chip from "@/components/common/Chip";

import FlagIcon from "@/assets/icon/common/filled/Star.svg";
import PencilIcon from "@/assets/icon/common/outlined/Pencil.svg";
import SettingsIcon from "@/assets/icon/common/filled/Person.svg";

function MyProfile() {
  const { data, isLoading } = useGet<ApiSelectMember>("/api/test/login/selectmyprofile");

  useHeader({
    subIcons: [
      {
        svgIcon: <FlagIcon />,
        onClick: `/user/login`,
        description: "임시 로그인",
      },
      {
        svgIcon: <SettingsIcon />,
        onClick: `/my/settings`,
        description: "내 설정",
      },
    ],
  });

  if (isLoading)
    return (
      <div style={{ display: "flex", padding: "0 24px", alignItems: "center" }}>
        <div className="skeleton-loading-ui" style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "4px 0px 0px 20px" }}>
          <div className="skeleton-loading-ui" style={{ width: "132px", height: "32px", borderRadius: "5px" }} />
          <div className="skeleton-loading-ui" style={{ width: "180px", height: "24px", borderRadius: "5px" }} />
        </div>
      </div>
    );

  return (
    <>
      <Profile>
        <ProfileImg style={{ backgroundImage: `url(${data?.imageUrl})` }}>
          <div>
            <PencilIcon />
          </div>
        </ProfileImg>
        <Info>
          <div className="player-name">{data?.userName}</div>
          <div className="tag-list">
            <Chip type="gray">{data?.birth.slice(0, 4)}년생</Chip>
            <Chip type="gray" fillType="light">
              {data?.university}
            </Chip>
          </div>
        </Info>
      </Profile>
      <Introduce>{data?.selfIntro}</Introduce>
    </>
  );
}

const Profile = styled.div`
  user-select: none;
  display: flex;
  padding: 0 24px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
const Introduce = styled.p`
  ${FONTS.body4("regular")};
  font-weight: 400;
  margin: -4px 24px 0;
  padding: 12px 16px;
  color: var(--gray600);
  white-space: pre-line;
  border: 1px solid var(--gray200);
  border-radius: 8px;
`;
const ProfileImg = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: var(--gray200);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  border-radius: 50%;

  & > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    right: -8px;
    bottom: -4px;
    background-color: var(--primary500);
    border-radius: 50%;
    border: 4px solid var(--background-light);
    box-sizing: content-box;
    svg {
      width: 24px;
      height: 24px;
      fill: #fff;
    }
  }
`;
const Info = styled.div`
  flex: 1;
  display: flex;
  padding-top: 8px;
  flex-direction: column;
  gap: 10px;
  div.player-name {
    color: var(--gray700);
    ${FONTS.body1("semibold")}
  }
  div.tag-list {
    display: inline-flex;
    gap: 6px;
    span.tag {
      padding: 6px 10px;
      font-size: 1.4rem;
      border-radius: 5px;
      background-color: var(--gray100);
      color: var(--gray900);
    }
  }
`;

export default MyProfile;
