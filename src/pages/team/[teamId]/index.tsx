import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

import { usePageTitle } from "@/hook/usePageTitle";
import useBackgroundGray from "@/hook/useBackgroundGray";
import { FONTS } from "@/styles/common";
import { BasicWhiteCard, BasicWhiteCardTitle } from "@/components/common/Card";
import { BaseContainer } from "@/components/common/Container";

function TeamHome() {
  // usePageTitle("팀 이름");
  useBackgroundGray();
  const PLAYING = true;
  const router = useRouter();
  const teamId = router.query.teamId;

  return (
    <BaseContainer>
      <Top>
        <ProfileImgContainer>
          {PLAYING && <Playing />}
          <ProfileImg playing={PLAYING}>
            <img
              className="image"
              src="https://www.yonexmall.com/shop/data/skin_mobileV2/godobaby_C/mobileShopLogo.gif"
              alt="팀 프로필 이미지"
            />
          </ProfileImg>
        </ProfileImgContainer>
        <Right>
          <h2>
            팀 이름
            <span>배구</span>
            <span>성균관대</span>
          </h2>
          <p>창단 2024.04.20</p>
          <p>팀원 14명</p>
        </Right>
      </Top>
      <Cards>
        <Card></Card>
        <Card></Card>
        <Card>123</Card>
        <Card>
          <BasicWhiteCardTitle>경기 영상</BasicWhiteCardTitle>
          <Link href={`/team/${teamId}/video/1`}>이동</Link>
        </Card>
      </Cards>
    </BaseContainer>
  );
}

const rotateCircle = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
`;
const Top = styled.section`
  display: flex;
  padding: 0 8px;
  margin-bottom: 32px;
  gap: 20px;
  h2 {
    ${FONTS.HEAD1}
  }
`;

const ProfileImgContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;
const ProfileImg = styled.div<{ playing: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 100%;
  overflow: hidden;

  .image {
    margin: ${({ playing }) => (playing ? "3px" : "0")};
    border: 5px solid ${({ theme }) => theme.card};
    border: ${({ playing }) => (playing ? "" : "none")};
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    z-index: 1;
    border-radius: 100%;
    object-fit: cover;
  }
  &::before {
    content: "";
    position: absolute;
    display: ${({ playing }) => (playing ? "block" : "none")};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main};
    background: linear-gradient(${({ theme }) => theme.main2} 0%, #10bfff 45%, #90d621 95%);
    animation: ${rotateCircle} 2s linear infinite;
  }
`;
const Playing = styled.p`
  position: absolute;
  padding: 4px 10px;
  border-radius: 12px;
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.main2};
  border-top: 3px solid ${({ theme }) => theme.card};
  border-left: 3px solid ${({ theme }) => theme.card};
  border-right: 3px solid ${({ theme }) => theme.card};
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  z-index: 2;
  word-break: keep-all;
  &::before {
    content: "경기중";
  }
`;
const Right = styled.div`
  display: flex;
  margin-top: 4px;
  flex-direction: column;
  gap: 8px;
  h2 {
    display: inline-flex;
    gap: 6px;
    span {
      display: inline-block;
      font-size: 1.3rem;
      line-height: 1.6rem;
      padding: 2px 4px;
      border: 1px solid ${({ theme }) => theme.gray2};
      color: ${({ theme }) => theme.gray1};
      border-radius: 6px;
    }
  }
  p {
    ${FONTS.MD2};
  }
`;
const Cards = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled(BasicWhiteCard)`
  height: 128px;
`;

export default TeamHome;
