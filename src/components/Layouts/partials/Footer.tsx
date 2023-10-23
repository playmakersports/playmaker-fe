import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";
import LogotypeHorizontal from "@/src/assets/logo/LogotypeHorizontal";

function Footer() {
    const theme = useTheme();
    const [darkModeState] = useAtom(darkMode);

    return (
        <Container>
            <LogotypeHorizontal width={164} fill={darkModeState ? theme.color.white : theme.color.black} />
            <p className="copyright">Copyright PLAY\MAKER all rights reserved.</p>
        </Container>
    );
}

const Container = styled.footer`
    margin: 0 auto 40px auto;
    padding: 24px 28px 120px;
    max-width: 1024px;
    opacity: 0.8;
    text-align: center;
    .copyright {
        font-size: 1.3rem;
        font-weight: 400;
    }
`;

const Img = styled.img``;

export default Footer;
