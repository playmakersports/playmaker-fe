import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAtom } from "jotai";
import styled from "@emotion/styled";

import InputBox, { IInputBoxDataType } from "../../components/Common/InputBox";
import Button from "@/src/components/Common/Button";
import { loggedState } from "@/src/atoms/state";

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

    const LOGIN_INPUTS: IInputBoxDataType[] = [
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

export default Login;
