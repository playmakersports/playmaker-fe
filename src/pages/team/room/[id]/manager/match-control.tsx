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

function ManagerMatchControl() {
    const { register, handleSubmit, watch } = useForm<FieldValues>();
    const router = useRouter();
    const teamId = router.query.id;
    const teamColor = "#237c50";

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <TeamLayout teamName="팀 이름" title="경기 관리" color={teamColor}>
            <FloatBottom>
                <Button type="submit" text="저장" mode="main1" size="large" />
            </FloatBottom>
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

export default ManagerMatchControl;
