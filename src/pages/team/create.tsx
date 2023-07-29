import React from "react";
import styled from "@emotion/styled";
import { FieldValues, useForm } from "react-hook-form";

import Button from "@/src/components/Common/Button";
import InputBox, { InputBoxDataType } from "@/src/components/Common/InputBox";

function TeamCreate() {
    function getFormattedDate() {
        const today = new Date();
        const formattedDate = new Intl.DateTimeFormat("ja", { dateStyle: "medium" }).format(today).split("/").join("-");
        return formattedDate;
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FieldValues>({
        mode: "onBlur",
        defaultValues: { teamColor: "#333", teamSports: "축구(풋살)", teamCreateAt: getFormattedDate() },
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    const TEAM_CREATE_INPUTS: InputBoxDataType[] = [
        {
            id: "teamEngName",
            label: "팀 영문명",
            type: "text",
            description: "팀 영문명은 팀 라커룸의 주소(URL)에 사용되므로, 신중히 입력해주세요.",
            options: {
                pattern: {
                    value: /^[a-z](?:-?[a-z]+)*$/,
                    message: "알파벳 소문자나 하이픈(-)만 포함되어야 합니다.",
                },
                minLength: { value: 6, message: "최소 6자 이상의 이름이어야 합니다." },
                required: { value: true, message: "필수 입력값입니다." },
            },
        },
        { id: "teamSports", label: "팀 종목", type: "text", readonly: true },
        {
            id: "teamCreateAt",
            label: "창단일",
            type: "date",
            description: "창단일은 팀 생성 후 수정이 불가능하므로, 신중히 입력해주세요.",
        },
        { id: "teamLocation", label: "활동지역", type: "text" },
        {
            id: "teamIntro",
            label: "팀 소개",
            type: "textarea",
            maxLength: 120,
            showLength: true,
        },
    ];

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <NameBox color={watch("teamColor")}>
                <Name
                    type="text"
                    placeholder="팀 이름을 입력하세요"
                    required={true}
                    {...register("teamName", { required: true })}
                />
                <ColorPicker color={watch("teamColor")}>
                    <span className="team-color-label">팀 색상 선택</span>
                    <input type="color" {...register("teamColor")} />
                    <span className="selected-color">{watch("teamColor").toUpperCase()}</span>
                </ColorPicker>
            </NameBox>
            <Items>
                {TEAM_CREATE_INPUTS.map((item) => (
                    <InputBox
                        key={item.id}
                        register={register}
                        watch={watch}
                        id={item.id}
                        label={item.label}
                        type={item.type}
                        required={true}
                        readonly={item.readonly}
                        description={item.description}
                        placeholder={item.placeholder}
                        options={item.options}
                        maxLength={item.maxLength}
                        showLength={item.showLength}
                        errors={errors}
                    />
                ))}
            </Items>
            <Buttons>
                <Button
                    type="button"
                    mode="basic"
                    size="large"
                    shadow={false}
                    text="취소"
                    callback={() => console.log()}
                />
                <Button type="submit" mode="main1" size="large" shadow={false} text="입력완료" />
            </Buttons>
        </Container>
    );
}

const Container = styled.form`
    padding: 200px 16px 0;
`;
const NameBox = styled.article<{ color: string }>`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 24px 24px;
    top: 0;
    left: 0;
    width: 100%;
    height: 136px;
    background-color: ${(props) => props.color ?? "silver"};
    z-index: 10;
    &::after {
        position: absolute;
        display: block;
        margin-left: -4px;
        content: "";
        left: 0;
        bottom: -35px;
        background-color: ${(props) => props.color ?? "silver"};
        width: calc(100% + 6px);
        height: 36px;
        clip-path: polygon(50% 100%, 0 0, 100% 0);
    }
`;

const Name = styled.input`
    margin: 12px 0 0;
    background: none;
    color: #fff;
    font-size: 1.85rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    &::placeholder {
        text-shadow: none;
    }
`;
const ColorPicker = styled.label<{ color: string }>`
    display: flex;
    margin: 16px 0 0;
    align-items: center;
    gap: 6px;
    color: #fff;
    input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
    }
    .team-color-label {
        font-weight: 700;
        mix-blend-mode: difference;
    }
    .selected-color {
        mix-blend-mode: difference;
        opacity: 0.8;
    }
    &::before {
        content: "";
        width: 20px;
        height: 20px;
        background-color: ${(props) => props.color};
        border: 2px solid #fff;
        border-radius: 100%;
    }
`;
const Items = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 20px;
    gap: 32px;
`;
const Buttons = styled.div`
    display: flex;
    margin: 36px 0 0;
    height: 48px;
    gap: 12px;
`;

export default TeamCreate;
