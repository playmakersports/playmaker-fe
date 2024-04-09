import React from "react";
import styled from "@emotion/styled";
import LogotypeHorizontal from "@/src/assets/logo/LogotypeHorizontal.svg";

function Footer() {
    return (
        <Container>
            <LogotypeHorizontal />
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
