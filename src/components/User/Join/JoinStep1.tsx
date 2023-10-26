import React, { useState } from "react";
import styled from "@emotion/styled";
import { useFormContext } from "react-hook-form";

import { InputText, InputRadioWrap, Label, SelectLabel, ErrorMsg } from "../../Common/FormStyle";

function JoinStep1() {
    const {
        register,
        watch,
        formState: { errors },
    } = useFormContext();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const passwordRegx = /^(?=.*[\W_]).{8,}$/;

    return (
        <Container id="step1">
            <Item>
                <Label data-required>아이디</Label>
                <InputText
                    type="text"
                    {...register("userId", {
                        pattern: { value: /^[a-zA-Z0-9_-]+$/, message: "잘못된 아이디가 입력되었습니다." },
                        required: { value: true, message: "아이디를 입력해주세요." },
                    })}
                />
                {errors.userId && <ErrorMsg>{errors.userId.message as string}</ErrorMsg>}
            </Item>
            <Item>
                <Label data-required>비밀번호</Label>
                <InputText
                    type={showPassword ? "text" : "password"}
                    placeholder=""
                    minLength={8}
                    style={{ paddingRight: "56px" }}
                    {...register("password", {
                        pattern: passwordRegx,
                        required: { value: true, message: "비밀번호를 입력해주세요." },
                    })}
                />
                <button type="button" className="password-show-button numbers" onClick={handleShowPassword}>
                    {showPassword ? "HIDE" : "SHOW"}
                </button>
                {errors.password && <ErrorMsg>{errors.password.message as string}</ErrorMsg>}
                <ul className="password-validation-list">
                    <PwdValid isContain={watch("password")?.length > 7}>최소 8자 이상의 문자</PwdValid>
                    <PwdValid isContain={watch("password") ? passwordRegx.test(watch("password")) : false}>
                        1개 이상의 특수문자 포함
                    </PwdValid>
                </ul>
            </Item>
            <Item>
                <Label data-required>이름</Label>
                <InputText type="text" {...register("name", { required: true })} />
            </Item>
            <Item>
                <Label data-required>닉네임</Label>
                <InputText type="text" {...register("nickname", { required: true })} />
            </Item>
            <Item>
                <Label data-required>연락처</Label>
                <InputText type="tel" {...register("phone", { required: true })} />
            </Item>
            <Item>
                <Label data-required>생년월일</Label>
                <div className="input-container">
                    <InputText type="date" {...register("birthday", { required: true })} />
                </div>
            </Item>
            <Item>
                <Label data-required>성별</Label>
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
                <Label data-required>이메일</Label>
                <InputText type="email" {...register("email", { required: true })} />
            </Item>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    padding: 0 2px 16px;
    font-size: 1.4rem;
    font-weight: ${({ isContain }) => (isContain ? 600 : 500)};
    opacity: ${({ isContain }) => (isContain ? 1 : 0.6)};
    &::before {
        display: inline-block;
        content: ${({ isContain }) => (isContain ? `"✓"` : `"✕"`)};
        width: 13px;
        height: 13px;
        margin: 0 6px 0 0;
        text-align: center;
        color: ${({ theme, isContain }) => (isContain ? theme.color.green : theme.color.warn)};
    }
`;

export default JoinStep1;
