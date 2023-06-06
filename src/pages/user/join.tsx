import React, { useState } from "react";
import styled from "@emotion/styled";
import { FieldValues, useForm } from "react-hook-form";

import JoinStep1 from "@/src/components/User/Join/JoinStep1";
import JoinStep2 from "@/src/components/User/Join/JoinStep2";
import JoinStep3 from "@/src/components/User/Join/JoinStep3";
import ButtonLarge from "@/src/components/Common/ButtonLarge";

function Join() {
    const [joinStep, setJoinStep] = useState(1);
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onBlur" });

    const STEP_LIST = [
        { step: 1, value: "기본정보" },
        { step: 2, value: "활동정보" },
        { step: 3, value: "플레이정보" },
    ];

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <Container onSubmit={handleSubmit(onSubmit)}>
            <section>
                <Steps>
                    {STEP_LIST.map((item, idx) => (
                        <StepItem key={idx} nowStep={item.step === joinStep}>
                            <i className="step-circle">{item.step}</i>
                            <span className="step-name">{item.value}</span>
                        </StepItem>
                    ))}
                </Steps>
                <JoinStep1 setJoinStep={setJoinStep} register={register} watch={watch} errors={errors} />
                <JoinStep2 setJoinStep={setJoinStep} register={register} />
                <JoinStep3 setJoinStep={setJoinStep} register={register} watch={watch} />
                <Buttons>
                    <ButtonLarge type="button" text="취소" main={false} callback={() => console.log()} />
                    <ButtonLarge type="submit" text="입력완료" main={true} />
                </Buttons>
            </section>
        </Container>
    );
}

const Container = styled.form`
    padding: 88px 0 0;
`;

const Steps = styled.ul`
    position: fixed;
    display: flex;
    width: calc(100% - 40px);
    margin: 0 20px;
    padding: 16px;
    top: 96px;
    align-items: center;
    justify-content: space-evenly;
    background-color: var(--white);
    border-radius: 80px;
    z-index: 1;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
    @media (min-width: 768px) {
        top: 86px;
        width: 50%;
        left: 50%;
        transform: translateX(-50%);
    }
`;
const StepItem = styled.li<{ nowStep: boolean }>`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transform: ${(props) => (props.nowStep ? "scale(1.1)" : "")};
    opacity: ${(props) => (props.nowStep ? "1" : "0.55")};
    transition: all 0.3s;
    .step-circle {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-color: ${(props) => (props.nowStep ? "var(--main)" : "var(--dark)")};
        border-radius: 100%;
        color: #000;
        font-size: 10px;
        line-height: 14px;
        text-align: center;
    }
    .step-name {
        font-size: 0.9rem;
        font-weight: ${(props) => (props.nowStep ? "500" : "400")};
    }
`;

const Buttons = styled.div`
    display: flex;
    margin: 36px 0 0;
    padding: 0 20px;
    height: 48px;
    gap: 12px;
`;

export default Join;
