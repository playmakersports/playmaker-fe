import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

import UserBadge from "./UserBadge";
import footballFiledImage from "@/src/assets/images/football_field_large.jpg";

function UserBadgeHeader() {
    return (
        <Wrapper>
            <Background src={footballFiledImage.src} />
            <BadgeWrap>
                <div className="badge-container">
                    <UserBadge />
                </div>
            </BadgeWrap>
        </Wrapper>
    );
}

const zoomInBackground = keyframes`
  from {
    width: 140%;
    height: 100%;
    filter: brightness(0.7);
  }
  to {
    width: 160%;
    height: 110%;
    filter: brightness(0.4);
  }
`;
const Wrapper = styled.article`
    position: relative;
    display: flex;
    padding: 80px 30px 32px;
    justify-content: center;
    overflow: hidden;
`;
const Background = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 160%;
    height: 110%;
    filter: brightness(0.4);
    object-fit: cover;
    animation: ${zoomInBackground} 1.2s ease-in-out;
`;
const BadgeWrap = styled.article`
    position: relative;
    width: 186px;
    height: 286px;
    background-color: #46859a;
    clip-path: polygon(0 5%, 50% 0, 100% 5%, 100% 92%, 50% 100%, 0 92%);
    .badge-container {
        position: absolute;
        top: 3px;
        left: 3px;
    }
`;

export default UserBadgeHeader;
