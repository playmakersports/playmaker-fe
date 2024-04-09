import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import styled from "@emotion/styled";

import InputBox, { InputBoxDataType } from "../../components/common/InputBox";
import Button from "@/src/components/common/Button";
import { loggedState } from "@/src/atoms/user";

function Login() {
    const {
        register,
        handleSubmit,
        watch,
        setFocus,
        formState: { errors },
    } = useForm();
    const router = useRouter();
    const [, setLogged] = useAtom(loggedState);

    const LOGIN_INPUTS: InputBoxDataType[] = [
        { id: "username", label: "아이디", type: "text" },
        { id: "password", label: "비밀번호", type: "password" },
    ];

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        setLogged({ username: data.username, nickname: "이강인이피엘가자" });
        router.push("/");
    };

    useEffect(() => {
        setFocus("username");
    }, []);

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <Hello>
                나를 알고 상대를 알아
                <br />
                더욱 즐거운 <strong>플레이메이커</strong>
            </Hello>
            {LOGIN_INPUTS.map((value) => (
                <InputBox
                    key={value.id}
                    register={register}
                    watch={watch}
                    id={value.id}
                    label={value.label}
                    type={value.type}
                    required={true}
                    errors={errors}
                />
            ))}
            <Button type="submit" mode="main1" size="large" shadow={false} text="로그인" />
            <Button
                type="button"
                mode="basic"
                size="large"
                shadow={false}
                text="회원가입"
                callback={() => router.push("/user/join")}
            />
        </Container>
    );
}

const Container = styled.form`
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    gap: 16px;
`;

const Hello = styled.p`
    margin: 0 0 16px;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2.2rem;
    strong {
        font-weight: 700;
    }
`;

export default Login;
