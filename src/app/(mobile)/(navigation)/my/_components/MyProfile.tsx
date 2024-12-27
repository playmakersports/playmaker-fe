"use client";
import React from "react";
import styled from "styled-components";
import { useGet } from "@/apis/hook/query";
import { usePageTitle } from "@/hook/usePageTitle";

import { FONTS } from "@/styles/common";
import { ApiSelectMember } from "@/apis/types/user";
import Loading from "@/components/common/Loading";

import PencilIcon from "@/assets/icon/global/Pencil.svg";
import SettingsIcon from "@/assets/icon/global/Settings.svg";

function MyProfile() {
  const { data, isLoading } = useGet<ApiSelectMember>("/api/test/login/selectmyprofile");

  usePageTitle({
    subIcons: [
      {
        svgIcon: <SettingsIcon />,
        linkTo: `/my/settings`,
        description: "내 설정",
      },
    ],
  });

  if (isLoading) return <Loading />;
  return (
    <Profile>
      <ProfileImg $src={data?.imageUrl ?? ""}>
        <div>
          <PencilIcon />
        </div>
      </ProfileImg>
      <Info>
        <p className="player-name">{data?.username}</p>
        <p className="introduce">{data?.selfIntro}</p>
        <p className="tag-list">
          <span className="tag">{data?.birth.slice(0, 4)}년생</span>
          <span className="tag">{data?.university}</span>
        </p>
      </Info>
    </Profile>
  );
}

const Profile = styled.div`
  user-select: none;
  display: flex;
  padding: 0 24px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
`;
const ProfileImg = styled.div<{ $src: string }>`
  position: relative;
  width: 85px;
  height: 85px;
  background-color: var(--sub2);
  background-image: url(${(props) => props.$src});
  background-size: 101% auto;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  border-radius: 50%;

  & > div {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    right: -4px;
    bottom: -4px;
    background-color: var(--main);
    border-radius: 50%;
    border: 4px solid var(--background-light);
    box-sizing: content-box;
    svg {
      width: 14px;
      height: 14px;
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
  p.player-name {
    font-weight: 700;
    font-size: 2.4rem;
    strong {
      color: var(--main);
    }
  }
  p.introduce {
    ${FONTS.MD2}
    font-weight: 400;
    color: var(--gray800);
    white-space: pre-line;
  }

  p.tag-list {
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
