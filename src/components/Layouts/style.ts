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

export const Menus = styled.div`
    position: fixed;
    padding: 16px;
    width: max-content;
    min-width: 160px;
    top: 56px;
    right: 12px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.05);
    color: #000;
    z-index: 10;
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
            background-color: ${({ theme }) => theme.color.main};
            border-radius: 100%;
        }
    }
`;
