import styled from "@emotion/styled";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

export const Menus = styled.div`
    position: absolute;
    padding: 16px;
    width: 208px;
    top: 50px;
    right: -8px;
    background-color: var(--white);
    border-radius: 28px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.05);
    color: var(--black);
    z-index: 2;
    .change-location-menu {
        display: flex;
        flex-direction: column;
        gap: 6px;
        font-size: 0.9rem;
        text-align: center;
        li {
            padding: 6px 0;
        }
    }
    .checked {
        font-weight: 600;
        &::before {
            display: inline-block;
            content: "";
            margin: 0 4px 2px 0;
            width: 6px;
            height: 6px;
            background-color: var(--main);
            border-radius: 100%;
        }
    }
`;
