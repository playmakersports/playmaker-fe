import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { PAGE_HEADER_TITLE } from "../../../../constants/PAGE_HEADER";
import { ArrowIconLeft } from "@/src/assets/icons/common/ArrowIconLeft";
import AlertIcon from "@/src/assets/icons/common/AlertIcon";

import AlertList from "@/src/components/Main/AlertList";
import { HeaderInner } from "../../style";

function PageBar({ transparent }: { transparent?: boolean }) {
    const { pathname, back } = useRouter();
    const [activeAlert, setActiveAlert] = useState(true);
    const [showAlertList, setShowAlertList] = useState(false);

    return (
        <>
            <PageBarInner transparent={!!transparent}>
                <IconButton type="button" onClick={() => back()}>
                    <ArrowIconLeft />
                </IconButton>
                <PageName>{PAGE_HEADER_TITLE[pathname]}</PageName>
                <AlertButton type="button" onClick={() => setShowAlertList((prev) => !prev)} active={activeAlert}>
                    <AlertIcon width={22} />
                </AlertButton>
            </PageBarInner>
            <AlertListWrapper show={showAlertList}>
                <AlertList />
            </AlertListWrapper>
        </>
    );
}

const PageBarInner = styled(HeaderInner)<{ transparent?: boolean }>`
    svg {
        fill: ${({ transparent }) => transparent && "#fff"};
    }
    color: ${({ transparent }) => transparent && "#fff"};
`;
const PageName = styled.p`
    font-size: 2rem;
    font-weight: 700;
    font-family: SUITE Variable;
`;

const IconButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
`;
const AlertButton = styled(IconButton)<{ active: boolean }>`
    position: relative;

    &::after {
        content: "";
        position: absolute;
        margin: 3px;
        display: ${({ active }) => (active ? "block" : "none")};
        top: 0;
        left: 0;
        width: 10px;
        height: 10px;
        background-color: ${({ theme }) => theme.color.warn};
        border-radius: 100%;
    }
`;

const AlertListWrapper = styled.div<{ show: boolean }>`
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
    height: ${({ show }) => (show ? "136px" : "0px")};
    padding: 4px 0;
    background-color: ${({ theme }) => theme.color.background};
    box-shadow: 0 12px 8px 2px rgba(0, 0, 0, 0.1);
    opacity: ${({ show }) => (show ? "1" : "0")};
    transition: all 0.3s;
    overflow: hidden;

    @media (min-width: 768px) {
        height: ${({ show }) => (show ? "168px" : "0px")};
    }
`;

export default PageBar;
