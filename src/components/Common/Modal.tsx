import styled from "@emotion/styled";
import React, { useEffect } from "react";
import ButtonLarge from "./ButtonLarge";

export interface IModalPopupBtnType {
    text: string;
    type: "submit" | "button" | "reset" | undefined;
    main: boolean;
    onClick: () => void;
}

interface IModalPopupPropsType {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    btns: IModalPopupBtnType[];
    children: JSX.Element;
}

function Modal({ setShow, btns, children }: IModalPopupPropsType) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const closeModal = () => {
        setShow((prev) => !prev);
    };
    return (
        <>
            <Wrap>
                <Contents>
                    <div className="modal-contents-container">{children}</div>
                    <div className="modal-btn-container">
                        {btns.map((btn) => (
                            <ButtonLarge type={btn.type} text={btn.text} main={btn.main} callback={btn.onClick} />
                        ))}
                    </div>
                </Contents>
            </Wrap>
            <Backdrop onClick={closeModal} />
        </>
    );
}

const Backdrop = styled.div`
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.25);
`;

const Wrap = styled.div`
    position: fixed;
    padding: 32px 28px 28px;
    top: 50%;
    left: 50%;
    width: calc(100% - 32px);
    z-index: 99;
    background: #ffffff;
    background-color: var(--white);
    border-radius: 20px;
    transform: translate(-50%, -50%);
`;

const Contents = styled.section`
    min-height: 228px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .modal-contents-container {
        h2 {
            font-size: 1.2rem;
            font-weight: 600;
            margin-bottom: 16px;
        }
        p {
            font-size: 1rem;
        }
    }
    .modal-btn-container {
        display: flex;
        justify-content: space-between;
        gap: 8px;
        margin-top: 20px;
    }
`;

export default Modal;
