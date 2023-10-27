import React, { useEffect } from "react";
import styled from "@emotion/styled";

import Button from "./Button";

export interface IModalPopupBtnType {
    text: string;
    type: "submit" | "button" | "reset" | undefined;
    mode: "main1" | "main2" | "basic";
    onClick: () => void;
}

interface Props {
    title: string;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    btns: IModalPopupBtnType[];
    children: React.ReactNode;
}

function Modal({ title, setShow, btns, children }: Props) {
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
            <Wrapper>
                <Contents>
                    <Title>{title}</Title>
                    <div className="modal-contents-container">{children}</div>
                    <Buttons>
                        {btns.map((btn) => (
                            <Button
                                key={btn.text}
                                type={btn.type}
                                text={btn.text}
                                mode={btn.mode}
                                size="medium"
                                shadow={false}
                                callback={btn.onClick}
                            />
                        ))}
                    </Buttons>
                </Contents>
            </Wrapper>
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
    background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: calc(100% - 32px);
    z-index: 99;
    transform: translate(-50%, -50%);
    @media (min-width: 768px) {
        width: 460px;
    }
`;
const Contents = styled.section`
    min-height: 360px;
    display: flex;
    padding: 24px;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.color.white};

    .modal-contents-container {
        p {
            font-size: 1.4rem;
        }
    }
`;
const Title = styled.h2`
    display: block;
    margin: -24px -24px 0;
    padding: 24px 24px 16px;
    font-size: 2rem;
    font-weight: 700;
    font-family: SUITE Variable;
    background-color: ${({ theme }) => theme.color.main};
`;
const Buttons = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    gap: 12px;
`;

export default Modal;
