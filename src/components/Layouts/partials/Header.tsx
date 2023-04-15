import React from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";

import { lightMode } from "@/src/atoms/state";

function Header() {
    const [lightModeState, setLightModeState] = useAtom(lightMode);
    const handleLightMode = () => {
        const body = document.querySelector("body");
        if (body?.classList.contains("light")) {
            body?.classList.remove("light");
            setLightModeState((prev) => !prev);
        } else {
            body?.classList.add("light");
            setLightModeState((prev) => !prev);
        }
    };

    return (
        <Container>
            <Logo lightModeState={lightModeState} />
            <div onClick={handleLightMode} style={{ color: "white" }}>
                라이트모드({lightModeState ? "ON" : "OFF"})
            </div>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    position: sticky;
    padding: 16px 24px 0px;
    justify-content: space-between;
    top: 0;
    background-color: var(--bg);
    z-index: 9;
`;
const Logo = styled.div<{ lightModeState: boolean }>`
    width: 148px;
    height: 80px;
    background-size: 148px;
    background-repeat: no-repeat;
    background-position: center left;
    background-image: ${(props) =>
        `url("/logotype/LogoType2Lines${
            props.lightModeState ? "Black" : "Color"
        }.svg")`};
    @media (min-width: 640px) {
        width: 320px;
        height: 68px;
        background-size: 320px;
        background-image: ${(props) =>
            `url("/logotype/LogoType${
                props.lightModeState ? "Black" : "Color"
            }.svg")`};
    }
`;

export default Header;
