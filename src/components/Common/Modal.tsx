import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Button from "./Button";

export interface IModalPopupBtnType {
    text: string;
    type: "submit" | "button" | "reset" | undefined;
    mode: "main1" | "main2" | "basic";
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
                            <Button
                                type={btn.type}
                                text={btn.text}
                                mode={btn.mode}
                                size="medium"
                                shadow={false}
                                callback={btn.onClick}
                            />
                        ))}
                    </div>
                </Contents>
            </Wrap>
            <Dim onClick={closeModal} />
        </>
    );
}

const Dim = styled.div`
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
    padding: 28px;
    top: 50%;
    left: 50%;
    width: calc(100% - 32px);
    z-index: 99;
    background: #ffffff;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
        width: 460px;
    }
`;

const Contents = styled.section`
    min-height: 228px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .modal-contents-container {
        h2 {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 24px;
        }
        p {
            font-size: 1rem;
        }
    }
    .modal-btn-container {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        margin-top: 20px;
    }
`;

export default Modal;
