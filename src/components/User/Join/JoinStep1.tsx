import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { FieldErrors, FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";
import { InputText, InputRadioWrap, Label, SelectLabel } from "../../Common/FormStyle";

interface JoinStepPropsType {
    setJoinStep: React.Dispatch<React.SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
    watch: UseFormWatch<FieldValues>;
    errors: FieldErrors<FieldValues>;
}

function JoinStep1({ setJoinStep, register, watch, errors }: JoinStepPropsType) {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const ContainerRef = useRef<HTMLDivElement>(null);
    const passwordRegx = /^(?=.*[\W_]).{8,}$/;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setJoinStep(1);
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(ContainerRef.current!);
    }, []);

    return (
        <Container id="step1" ref={ContainerRef}>
            <Item>
                <Label>아이디</Label>
                <InputText
                    type="text"
                    {...register("userId", {
                        pattern: /^[a-zA-Z0-9_-]+$/,
                        required: true,
                    })}
                />
            </Item>
            <Item>
                <Label>비밀번호</Label>
                <InputText
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    minLength={8}
                    style={{ paddingRight: "56px" }}
                    {...register("password", { pattern: passwordRegx, required: true })}
                />
                <button type="button" className="password-show-button numbers" onClick={handleShowPassword}>
                    {showPassword ? "HIDE" : "SHOW"}
                </button>
                <ul className="password-validation-list">
                    <PwdValid isContain={watch("password")?.length > 7}>최소 8자 이상의 문자</PwdValid>
                    <PwdValid isContain={watch("password") ? passwordRegx.test(watch("password")) : false}>
                        1개 이상의 특수문자 포함
                    </PwdValid>
                </ul>
            </Item>
            <Item>
                <Label>이름</Label>
                <InputText type="text" {...register("name", { required: true })} />
            </Item>
            <Item>
                <Label>닉네임</Label>
                <InputText type="text" {...register("nickname", { required: true })} />
            </Item>
            <Item>
                <Label>연락처</Label>
                <InputText type="tel" {...register("phone", { required: true })} />
            </Item>
            <Item>
                <Label>생년월일</Label>
                <div className="input-container">
                    <InputText type="date" {...register("birthday", { required: true })} />
                </div>
            </Item>
            <Item>
                <Label>성별</Label>
                <InputRadioWrap>
                    <SelectLabel>
                        <input type="radio" value="male" {...register("sex", { required: true })} />
                        남성
                    </SelectLabel>
                    <SelectLabel>
                        <input type="radio" value="female" {...register("sex", { required: true })} />
                        여성
                    </SelectLabel>
                </InputRadioWrap>
            </Item>
            <Item>
                <Label>이메일</Label>
                <InputText type="email" {...register("email", { required: true })} />
            </Item>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 32px;
`;
const Item = styled.div`
    position: relative;
    .password-show-button {
        cursor: pointer;
        position: absolute;
        right: 0;
        padding: 0 12px;
        font-size: 0.95rem;
        line-height: 49px;
        opacity: 0.8;
    }
    .password-validation-list {
        margin: 12px 4px 0;
    }
    .input-container {
        display: flex;
        gap: 12px;
        justify-content: space-between;
    }
`;
const PwdValid = styled.li<{ isContain: boolean }>`
    padding: 0 2px 10px;
    font-size: 0.85rem;
    font-weight: ${(props) => (props.isContain ? 500 : 300)};
    opacity: ${(props) => (props.isContain ? 1 : 0.55)};
    &::before {
        display: inline-block;
        content: "✓";
        width: 13px;
        height: 13px;
        margin: 0 6px 0 0;
        text-align: center;
        border-radius: 100%;
        border: 1px solid var(--black);
        color: ${(props) => (props.isContain ? "var(--black)" : "transparent")};
    }
`;

export default JoinStep1;
