import React, { SetStateAction } from "react";

import { Backdrop, Menus } from "../style";

type HeaderMenuType = {
    showMenu: React.Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
};
function HeaderMenu({ showMenu, children }: HeaderMenuType) {
    return (
        <>
            <Menus onClick={() => showMenu((prev) => !prev)}>{children}</Menus>
            <Backdrop onClick={() => showMenu((prev) => !prev)} />
        </>
    );
}

export default HeaderMenu;
