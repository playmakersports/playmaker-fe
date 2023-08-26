import React from "react";
import { useTheme } from "@emotion/react";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import TeamLayout from "@/src/components/Team/Layout";
import Card from "@/src/components/Main/Card";
import styled from "@emotion/styled";
import {
    InputCheck,
    InputCheckRadioWrapper,
    SelectLabel,
    TextArea,
    TextAreaWrap,
} from "@/src/components/Common/FormStyle";
import FloatBottom from "@/src/components/Common/FloatBottom";
import Button from "@/src/components/Common/Button";

function ManagerJoinSetting() {
    const { register, handleSubmit, watch } = useForm<FieldValues>();
    const router = useRouter();
    const teamId = router.query.id;
    const teamColor = "#237c50";

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <TeamLayout teamName="팀 이름" title="가입 설정" color={teamColor}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Cards>
                    <Card title="모집 게시판 설정">
                        <InputCheckRadioWrapper>
                            <InputCheck type="checkbox" id="activeRecruit" {...register("activeRecruit")} />
                            <label htmlFor="activeRecruit">모집 진행 (모집 게시판 게재)</label>
                        </InputCheckRadioWrapper>
                        <MemberType>
                            <TypeLabel>모집성별</TypeLabel>
                            <div className="type-options">
                                <SelectLabel>
                                    <input type="radio" value="man" {...register("sex")} />
                                    남성
                                </SelectLabel>
                                <SelectLabel>
                                    <input type="radio" value="woman" {...register("sex")} />
                                    여성
                                </SelectLabel>
                                <SelectLabel>
                                    <input type="radio" value="every" {...register("sex")} />
                                    무관
                                </SelectLabel>
                            </div>
                        </MemberType>
                        <MemberType>
                            <TypeLabel>모집구분</TypeLabel>
                            <div className="type-options">
                                <SelectLabel>
                                    <input type="checkbox" value="man" {...register("position")} />
                                    공격특화
                                </SelectLabel>
                                <SelectLabel>
                                    <input type="checkbox" value="man" {...register("position")} />
                                    수비특화
                                </SelectLabel>
                                <SelectLabel>
                                    <input type="checkbox" value="keeper" {...register("position")} />
                                    골키퍼
                                </SelectLabel>
                                <SelectLabel>
                                    <input type="checkbox" value="every" {...register("position")} />
                                    다재다능
                                </SelectLabel>
                            </div>
                        </MemberType>
                    </Card>
                    <Card title="입단 축하 메시지">
                        <TextAreaWrap length={(watch("joinMessage") ?? "").length} max={150}>
                            <TextArea maxLength={150} {...register("joinMessage")} />
                        </TextAreaWrap>
                    </Card>
                </Cards>
                <FloatBottom>
                    <Button type="submit" text="저장" mode="main1" size="large" />
                </FloatBottom>
            </form>
        </TeamLayout>
    );
}

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const MemberType = styled.div`
    display: flex;
    margin: 20px 0 0;
    gap: 12px;
    .type-options {
        flex: 1;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
    }
`;

const TypeLabel = styled.p`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    opacity: 0.65;
    background-color: ${({ theme }) => theme.color.gray1};
    color: ${({ theme }) => theme.color.black};
    font-size: 0.9rem;
    font-weight: 500;
`;

export default ManagerJoinSetting;
