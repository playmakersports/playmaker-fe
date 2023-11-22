import styled from "@emotion/styled";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
    z-index: 1;
`;

export const HeaderInner = styled.div`
    margin: 0 auto;
    display: flex;
    padding: 8px 16px;
    max-width: 1024px;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 768px) {
        padding: 8px 20px;
    }
`;
