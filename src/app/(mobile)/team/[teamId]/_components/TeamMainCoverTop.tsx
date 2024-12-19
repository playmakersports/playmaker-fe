"use client";

import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";
import { TEAM_INFO_MOCK } from "@/constants/mock/TEAM";

function TeamMainCoverTop() {
  return (
    <>
      <CoverImage src={TEAM_INFO_MOCK.cover} />
      <Description>{TEAM_INFO_MOCK.introduce}</Description>
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

export default TeamMainCoverTop;
