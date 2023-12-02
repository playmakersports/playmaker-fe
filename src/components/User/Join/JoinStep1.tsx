import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

import Button from "../../Common/Button";
import { InputText, InputRadioWrap, Label, SelectLabel, ErrorMsg } from "../../Common/FormStyle";
import { JoinStateType, joinState } from "@/src/atoms/state";
import { API_URL } from "@/src/apis/endpoint";
import { removeHyphens, formatPhoneNumber } from "@/src/util/input";
import { useQueryMutate } from "@/src/apis/hook";
import { EyeHideIcon, EyeShowIcon } from "@/src/assets/icons/common/EyeIcon";

function JoinStep1({ setJoinStep }: { setJoinStep: React.Dispatch<React.SetStateAction<number>> }) {
    const [joinStateData, setJoinStateData] = useAtom(joinState);
    const { mutate } = useQueryMutate<Pick<JoinStateType, "userId" | "nickname" | "contact" | "email">>(
        "POST",
        API_URL.JOIN_VALIDATION
    );
    const router = useRouter();
    const methods = useForm({
        defaultValues: {
            userId: joinStateData.userId,
            password: joinStateData.password,
            username: joinStateData.username,
            nickname: joinStateData.nickname,
            contact: joinStateData.contact,
            birth: joinStateData.birth,
            sex: joinStateData.sex,
            email: joinStateData.email,
        },
    });
    const {
        register,
        watch,
        formState: { errors },
    } = methods;
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const passwordRegx = /^(?=.*[\W_]).{8,}$/;

    const onSubmit = async (data: FieldValues) => {
        mutate(
            {
                userId: data.userId,
                nickname: data.nickname,
                contact: data.contact,
                email: data.email,
            },
            {
                onSuccess: () => {
                    setJoinStateData((prev) => ({ ...prev, ...data }));
                    setJoinStep((prev) => prev + 1);
                },
                onError: (err) => {
                    alert(`${err?.response?.data.errorCode}: ${err?.response?.data.errorMessage}\n(${err.message})`);
                },
            }
        );
    };

    useEffect(() => {
        router.push({ query: { step: 1 } });
    }, []);

    return (
        <FormProvider {...methods}>
            <Form id="step1" onSubmit={methods.handleSubmit(onSubmit)}>
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
                            pattern: { value: passwordRegx, message: "특수문자를 포함해주세요." },
                            required: { value: true, message: "비밀번호를 입력해주세요." },
                        })}
                    />
                    <button type="button" className="password-show-button numbers" onClick={handleShowPassword}>
                        {showPassword ? <EyeHideIcon width={24} height={24} /> : <EyeShowIcon width={24} height={24} />}
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
                    <InputText type="text" {...register("username", { required: true })} />
                </Item>
                <Item>
                    <Label data-required>닉네임</Label>
                    <InputText type="text" {...register("nickname", { required: true })} />
                </Item>
                <Item>
                    <Label data-required>연락처</Label>
                    <InputText
                        type="tel"
                        {...register("contact", {
                            required: true,
                            setValueAs: (value) => removeHyphens(value),
                            onChange: (e) => {
                                e.target.value = formatPhoneNumber(e.target.value);
                            },
                        })}
                    />
                </Item>
                <Item>
                    <Label data-required>생년월일</Label>
                    <div className="input-container">
                        <InputText type="date" {...register("birth", { required: true })} />
                    </div>
                </Item>
                <Item>
                    <Label data-required>성별</Label>
                    <InputRadioWrap>
                        <SelectLabel>
                            <input type="radio" value="MALE" {...register("sex", { required: true })} />
                            남성
                        </SelectLabel>
                        <SelectLabel>
                            <input type="radio" value="FEMALE" {...register("sex", { required: true })} />
                            여성
                        </SelectLabel>
                    </InputRadioWrap>
                </Item>
                <Item>
                    <Label data-required>이메일</Label>
                    <InputText type="email" {...register("email", { required: true })} />
                </Item>
                <StepButtons>
                    <Button type="submit" mode="main1" size="large" text="다음" main={true} shadow={false} />
                </StepButtons>
            </Form>
        </FormProvider>
    );
}

const Form = styled.form`
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
        padding: 10px 12px;
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

const StepButtons = styled.div`
    display: flex;
    margin: 24px 0 0;
    gap: 12px;
`;

export default JoinStep1;
