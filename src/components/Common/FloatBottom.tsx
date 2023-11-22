import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

function FloatBottom({ children }: { children: React.ReactNode }) {
    const [showButtons, setShowButtons] = useState(false);
    useEffect(() => {
        setShowButtons(true);
    }, []);

    return <Container showButtons={showButtons}>{children}</Container>;
}

const Container = styled.div<{ showButtons: boolean }>`
    position: fixed;
    display: flex;
    padding: 4px 16px;
    gap: 8px;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 68px;
    z-index: 9;
    transform: translate(-50%, ${(props) => (props.showButtons ? "-68px" : 0)});
    transition: transform 0.45s;
    @media (min-width: 768px) {
        width: 30%;
        padding: 4px 0;
    }
`;

export default FloatBottom;
