import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputText, Label, InputCheck, SelectLabel } from "../../Common/FormStyle";

interface JoinStepPropsType {
    setJoinStep: React.Dispatch<React.SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
}

function JoinStep2({ setJoinStep, register }: JoinStepPropsType) {
    const ContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setJoinStep(2);
                    }
                });
            },
            { threshold: 0.2 }
        );
        observer.observe(ContainerRef.current!);
    }, []);

    return (
        <Container id="step2" ref={ContainerRef}>
            <Item>
                <Label>활동 지역</Label>
                <InputText type="text" required={true} {...register("location")} />
            </Item>
            <Item>
                <Label>활동 시간</Label>
                <DayWrap>
                    <DayLabel>평일</DayLabel>
                    <div className="day-select-wrap">
                        <SelectLabel>
                            <input type="checkbox" value="w0711" {...register("weekday-time")} />
                            07~11시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="w1218" {...register("weekday-time")} />
                            12~18시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="w1924" {...register("weekday-time")} />
                            19~24시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="w0006" {...register("weekday-time")} />
                            00~06시
                        </SelectLabel>
                    </div>
                </DayWrap>
                <DayWrap>
                    <DayLabel>토요일</DayLabel>
                    <div className="day-select-wrap">
                        <SelectLabel>
                            <input type="checkbox" value="sat0711" {...register("saturday-time")} />
                            07~11시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="sat1218" {...register("saturday-time")} />
                            12~18시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="sat1924" {...register("saturday-time")} />
                            19~24시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="sat0006" {...register("saturday-time")} />
                            00~06시
                        </SelectLabel>
                    </div>
                </DayWrap>
                <DayWrap>
                    <DayLabel>일요일</DayLabel>
                    <div className="day-select-wrap">
                        <SelectLabel>
                            <input type="checkbox" value="sun0711" {...register("sunday-time")} />
                            07~11시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="sun1218" {...register("sunday-time")} />
                            12~18시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="sun1924" {...register("sunday-time")} />
                            19~24시
                        </SelectLabel>
                        <SelectLabel>
                            <input type="checkbox" value="sun0006" {...register("sunday-time")} />
                            00~06시
                        </SelectLabel>
                    </div>
                </DayWrap>
            </Item>
            <Item>
                <div className="selected-label-wrap">
                    <InputCheck type="checkbox" id="offer-active" {...register("offer-active")} />
                    <label htmlFor="offer-active">영입 제안 받기 허용</label>
                </div>
                <p className="offer-active-description">
                    다른 사람이 선수 님께 영입 제안을 할 수 있도록 일부 선수정보가 공개됩니다. (닉네임, 출생년도, 성별,
                    활동정보 및 플레이정보)
                </p>
            </Item>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 32px;
`;

const Item = styled.div`
    position: relative;
    label {
        cursor: pointer;
    }
    .selected-label-wrap {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 1.1rem;
    }
    .offer-active-description {
        margin: 8px 0 0;
        padding-left: 30px;
        font-size: 0.9rem;
        line-height: 1.4rem;
        opacity: 0.6;
    }
`;

const DayWrap = styled.div`
    flex: 1;
    display: flex;
    margin: 0 0 28px;
    gap: 8px;
    .day-select-wrap {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
        @media (min-width: 768px) {
            display: flex;
            label {
                flex: 1;
            }
        }
    }
    &:last-of-type {
        margin: 0 0 8px;
    }
`;
const DayLabel = styled.p`
    padding: 12px 6px;
    width: 70px;
    opacity: 0.65;
    background-color: var(--dark);
    color: var(--white);
    font-size: 0.9rem;
    font-weight: 500;
    text-align: center;
`;
export default JoinStep2;
