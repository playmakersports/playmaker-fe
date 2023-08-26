import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import Button from "@/src/components/Common/Button";
import InputBox, { InputBoxDataType } from "@/src/components/Common/InputBox";
import { ErrorMsg } from "@/src/components/Common/FormStyle";
import { getCurrentDateTime } from "@/src/util/time";

function TeamCreate() {
    const router = useRouter();
    const teamId = router.query.teamId;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm<FieldValues>({
        mode: "onBlur",
        defaultValues: { teamColor: "#333", teamSports: "축구(풋살)", teamCreateAt: getCurrentDateTime("date") },
    });

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    const setTeamInfo = () => {
        reset();
    };

    useEffect(() => {
        if (router.query.type === "edit") {
            setTeamInfo();
        }
    }, [router.query.type]);

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
            readonly: router.query.type === "edit",
            description:
                router.query.type === "edit"
                    ? "창단일은 수정이 불가능합니다."
                    : "창단일은 팀 생성 후 수정이 불가능하므로, 신중히 입력해주세요.",
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
            <NameBox>
                <Name
                    type="text"
                    placeholder="팀 이름을 입력하세요"
                    required={true}
                    {...register("teamName", {
                        required: { value: true, message: "필수 입력 항목입니다." },
                        minLength: { value: 3, message: "최소 3자 이상의 이름이어야 합니다." },
                    })}
                />
                {errors.teamName?.message && <ErrorMsg>{errors?.teamName?.message as string}</ErrorMsg>}
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
    padding: 0 16px 0;
`;
const NameBox = styled.div`
    margin: 20px 0 32px;
`;

const Name = styled.input`
    margin: 8px 0 0;
    padding: 4px 0;
    width: 100%;
    background: transparent;
    font-size: 1.6rem;
    font-weight: 800;
    border-bottom: 2px solid ${({ theme }) => theme.color.gray4};
`;
const ColorPicker = styled.label<{ color: string }>`
    display: flex;
    margin: 16px 0 0;
    align-items: center;
    gap: 6px;
    input {
        width: 0;
        height: 0;
        opacity: 0;
    }
    .team-color-label {
        font-weight: 600;
    }
    .selected-color {
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
