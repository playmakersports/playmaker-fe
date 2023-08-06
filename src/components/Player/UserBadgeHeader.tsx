import React from "react";
import styled from "@emotion/styled";

import UserBadge from "./UserBadge";

function UserBadgeHeader() {
    return (
        <BadgeWrap>
            <div className="badge-container">
                <UserBadgeBlurBack />
                <UserBadge />
            </div>
        </BadgeWrap>
    );
}

const badgePath =
    "M0 260.461V20.1191L45.8567 10.0596L91.7134 0L184 20.1191V260.461C184 260.461 102 276 92 296C82 276 0 260.461 0 260.461Z";

const BadgeWrap = styled.article`
    position: absolute;
    width: 100%;
    height: 72px;
    padding: 16px 0 0;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.main};
    z-index: 10;
    .badge-container {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        transform-origin: center top;
        transition: transform 0.35s;
    }
`;
const UserBadgeBlurBack = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 183px;
    height: 296px;
    filter: blur(8px);
    &::before {
        position: absolute;
        content: "";
        margin: 8px 0 0;
        width: 100%;
        height: 100%;
        clip-path: ${`path("${badgePath}")`};
        background-color: rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
    }
`;

export default UserBadgeHeader;
