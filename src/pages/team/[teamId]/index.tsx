import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/router";

import { usePageTitle } from "@/hook/usePageTitle";
import useBackgroundGray from "@/hook/useBackgroundGray";
import { FONTS } from "@/styles/fonts";
import { BasicWhiteCard } from "@/components/common/Card";

function TeamHome() {
  usePageTitle("팀 이름");
  useBackgroundGray();
  const router = useRouter();
  const teamId = router.query.teamId;

  return (
    <>
      <Container>
        <ProfileImg>
          <img
            className="image"
            src="https://www.yonexmall.com/shop/data/skin_mobileV2/godobaby_C/mobileShopLogo.gif"
            alt="팀 프로필 이미지"
          />
          <div className="active" />
        </ProfileImg>
        <h2>팀 이름</h2>
      </Container>
      <Cards>
        <Card>123</Card>
        <Card>123</Card>
        <Card>123</Card>
        <Card>123</Card>
      </Cards>
    </>
  );
}

const rotateCircle = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(180deg) }
`;
const Container = styled.section`
  display: flex;
  gap: 20px;
  margin: -64px -16px 24px;
  padding: 64px 24px 20px;
  background-color: ${({ theme }) => theme.card};
  h2 {
    ${FONTS.HEAD1}
  }
`;

const ProfileImg = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 100%;
  overflow: hidden;

  .image {
    position: absolute;
    margin: 3px;
    border: 5px solid ${({ theme }) => theme.card};
    top: 0;
    left: 0;
    width: calc(100% - 6px);
    height: calc(100% - 6px);
    z-index: 1;
    border-radius: 100%;
    object-fit: cover;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main};
    background: linear-gradient(${({ theme }) => theme.main} 0%, #a825ff 45%, #ff7525 90%);
    animation: ${rotateCircle} 1.5s forwards;
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
