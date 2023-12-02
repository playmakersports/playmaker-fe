import React, { useState } from "react";
import styled from "@emotion/styled";

import JoinStep1 from "@/src/components/User/Join/JoinStep1";
import JoinStep2 from "@/src/components/User/Join/JoinStep2";
import JoinStep3 from "@/src/components/User/Join/JoinStep3";
import { SubTitleText } from "@/src/styles/common";

function Join() {
    const [joinStep, setJoinStep] = useState(1);

    const STEP_LIST = [
        { step: 1, value: "기본정보" },
        { step: 2, value: "활동정보" },
        { step: 3, value: "플레이정보" },
    ];

    return (
        <Wrapper>
            <Steps>
                {STEP_LIST.map((item, idx) => (
                    <StepItem as="li" key={idx} nowStep={item.step <= joinStep}>
                        <span className="step-circle">{item.step}</span>
                        <span className="step-name">{item.value}</span>
                    </StepItem>
                ))}
            </Steps>
            {joinStep === 1 && <JoinStep1 setJoinStep={setJoinStep} />}
            {joinStep === 2 && <JoinStep2 setJoinStep={setJoinStep} />}
            {joinStep === 3 && <JoinStep3 setJoinStep={setJoinStep} />}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 0 20px;
`;

const Steps = styled.ul`
    display: flex;
    position: sticky;
    top: 64px;
    margin: 0 -20px 24px;
    align-items: center;
    justify-content: space-evenly;
    z-index: 1;
    box-shadow: 0 0 12px 2px rgba(0, 0, 0, 0.1);
    background-color: ${({ theme }) => theme.color.background};

    @media (min-width: 768px) {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        overflow: hidden;
    }
`;
const StepItem = styled(SubTitleText)<{ nowStep: boolean }>`
    position: relative;
    flex: 1;
    display: flex;
    padding: 20px 0px 16px;
    align-items: center;
    gap: 4px;
    opacity: ${({ nowStep }) => (nowStep ? "1" : "0.6")};
    .step-circle {
        display: inline-flex;
        width: 16px;
        height: 16px;
        color: #000;
        font-size: 1.3rem;
        color: ${({ theme, nowStep }) => (nowStep ? theme.color.green : theme.color.gray2)};
        border-radius: 100%;
        justify-content: center;
        align-items: center;
    }
    .step-name {
        font-weight: ${({ nowStep }) => (nowStep ? "600" : "400")};
    }
    &:first-of-type {
        padding: 20px 0px 16px 16px;
    }
    &::before {
        content: "";
        position: absolute;
        width: ${({ nowStep }) => (nowStep ? "100%" : "0%")};
        height: 12%;
        bottom: 0;
        left: 0;
        background-color: ${({ theme, nowStep }) => nowStep && theme.color.main};
        z-index: -1;
        transition: width 0.3s;
    }
`;

export default Join;
