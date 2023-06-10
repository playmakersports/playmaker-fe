import React from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";

import { darkMode } from "@/src/atoms/state";

function Footer() {
    const [darkModeState] = useAtom(darkMode);

    return (
        <Container>
            <Img
                src={`/logotype/LogoType${darkModeState ? "White" : "Black"}.svg`}
                alt="PlayMaker"
                width={160}
                height={32}
            />
            <p className="copyright numbers">COPYRIGHT PLAY\MAKER ALL RIGHTS RESERVED.</p>
        </Container>
    );
}

const Container = styled.footer`
    margin: 0 auto 40px auto;
    padding: 24px 28px 120px;
    max-width: 1024px;
    opacity: 0.65;
    color: var(--black);
    text-align: center;
    .copyright {
        font-size: 0.85rem;
        font-weight: 300;
    }
`;

const Img = styled.img``;

export default Footer;
