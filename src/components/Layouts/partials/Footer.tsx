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
                width={224}
                height={32}
            />
            <p className="slogan">당신의 스포츠 파트너</p>
            <p className="copyright">Copyright PlayMaker All rights reserved.</p>
        </Container>
    );
}

const Container = styled.footer`
    margin: 24px auto 80px auto;
    padding: 24px 28px;
    max-width: 1024px;
    opacity: 0.65;
    color: var(--black);
    .slogan {
        font-size: 0.9rem;
        font-weight: 800;
    }
    .copyright {
        margin: 20px 0 0 0;
        font-size: 0.8rem;
        font-weight: 300;
    }
`;

const Img = styled.img``;

export default Footer;
