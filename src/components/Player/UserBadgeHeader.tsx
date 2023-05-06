import React from "react";
import styled from "@emotion/styled";

import UserBadge from "./UserBadge";

interface UserBadgeHeaderPropsType {
    isScrolled: boolean;
}

function UserBadgeHeader({ isScrolled }: UserBadgeHeaderPropsType) {
    return (
        <BadgeWrap scrolled={isScrolled}>
            <div className="badge-container">
                <UserBadgeBlurBack />
                <UserBadge />
            </div>
        </BadgeWrap>
    );
}

const badgePath =
    "M0 260.461V20.1191L45.8567 10.0596L91.7134 0L184 20.1191V260.461C184 260.461 102 276 92 296C82 276 0 260.461 0 260.461Z";

const BadgeWrap = styled.article<{ scrolled: boolean }>`
    position: fixed;
    width: 100%;
    padding: 12px 0;
    top: 0;
    left: 0;
    height: ${(props) => (props.scrolled ? "204px" : "232px")};
    background-color: var(--main);
    transition: height 0.45s;
    z-index: 11;
    .badge-container {
        position: ${(props) => (props.scrolled ? "fixed" : "absolute")};
        left: 50%;
        transform: translateX(-50%) scale(${(props) => (props.scrolled ? 0.6 : 1)});
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
