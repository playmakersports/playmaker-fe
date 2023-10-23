import React, { useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useTheme } from "@emotion/react";

import { darkMode } from "@/src/atoms/state";
import { MdHeadText } from "@/src/styles/common";
import { HeaderInner } from "../Header";
import HeaderMenu from "../components/HeaderModal";
import LogotypeVertical from "@/src/assets/logo/LogotypeVertical";
import LocationPickerIcon from "@/src/assets/icons/common/LocationPickerIcon";

function MainBar() {
    const theme = useTheme();
    const [darkModeState] = useAtom(darkMode);
    const [showLocationMenu, setShowLocationMenu] = useState(false);

    return (
        <HeaderInner>
            <Logo>
                <LogotypeVertical width={100} fill={darkModeState ? theme.color.main : theme.color.black} />
            </Logo>
            <LocationButton onClick={() => setShowLocationMenu((prev) => !prev)}>
                <LocationPickerIcon />
                <MdHeadText>안양시</MdHeadText>
            </LocationButton>
            {showLocationMenu && (
                <HeaderMenu showMenu={setShowLocationMenu}>
                    <LocationList as="ul">
                        <li className="checked">경기도 안양시</li>
                        <li>경기도 성남시분당구</li>
                    </LocationList>
                </HeaderMenu>
            )}
        </HeaderInner>
    );
}

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const LocationButton = styled.button`
    display: flex;
    align-items: center;
    gap: 2px;
`;

const LocationList = styled(MdHeadText)`
    color: ${({ theme }) => theme.color.gray4};
    font-weight: 400;
    .checked {
        color: ${({ theme }) => theme.color.black};
        font-weight: 700;
    }
`;
export default MainBar;
