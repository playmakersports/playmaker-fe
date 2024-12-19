"use client";

import React from "react";
import styled from "styled-components";
import { FONTS } from "@/styles/common";

type Props = {
  coverImg: string;
  teamIntro: string;
};

const initialCoverImg =
  "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function TeamMainCoverTop(props: Props) {
  const { coverImg, teamIntro } = props;
  return (
    <>
      <CoverImage src={coverImg ?? initialCoverImg} />
      <Description>{teamIntro}</Description>
    </>
  );
}

const CoverImage = styled.section<{ src: string }>`
  margin-top: calc(-1 * var(--safe-area-top));
  width: 100%;
  height: calc(232px + var(--env-sat));
  background-color: var(--gray400);
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
