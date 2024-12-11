"use client";

import React from "react";
import styled from "@emotion/styled";
import { usePageTitle } from "@/hook/usePageTitle";
import { useParams } from "next/navigation";

import { FONTS } from "@/styles/common";
import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";
import TeamMainTop from "./components/TeamMainTop";
import TeamMainContents from "./components/TeamMainContents";
import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";
import SettingsIcon from "@/assets/icon/global/Settings.svg";

function TeamHome() {
  const params = useParams();
  const teamId = params["teamId"];
  usePageTitle({
    title: TEAM_INFO_MOCK.teamName,
    transparent: true,
    subIcons: [
      {
        svgIcon: <SettingsIcon />,
        linkTo: `/team/${teamId}/admin`,
        description: "팀 관리 페이지 이동",
      },
    ],
  });

  return (
    <>
      <FloatButton>
        <Button type="button" mode="MAIN" fullWidth onClick={() => {}}>
          가입 신청
        </Button>
      </FloatButton>
      <CoverImage src={TEAM_INFO_MOCK.cover} />
      <Description>{TEAM_INFO_MOCK.introduce}</Description>
      <TeamMainTop />
      <TeamMainContents />
    </>
  );
}

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray600);
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-repeat: no-repeat;
`;
const Description = styled.p`
  ${FONTS.MD2};
  color: var(--gray800);
  text-align: center;
  padding: 12px;
  border-bottom: 1px solid var(--gray300);
  text-wrap: pretty;
  background-color: var(--background-light);
`;

export default TeamHome;
