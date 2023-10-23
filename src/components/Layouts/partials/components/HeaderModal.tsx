import React, { SetStateAction } from "react";

import { Backdrop } from "../../style";
import styled from "@emotion/styled";

type Props = {
    showMenu: React.Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
};
function HeaderModal({ showMenu, children }: Props) {
    return (
        <>
            <Menus onClick={() => showMenu((prev) => !prev)}>{children}</Menus>
            <Backdrop onClick={() => showMenu((prev) => !prev)} />
        </>
    );
}

const Menus = styled.div`
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
    ul {
        display: flex;
        flex-direction: column;
        gap: 6px;
        text-align: center;
        li {
            padding: 6px 0;
        }
    }
    .checked {
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

export default HeaderModal;
