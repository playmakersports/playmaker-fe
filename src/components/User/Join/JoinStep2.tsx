import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "@emotion/styled";

import { InputText, Label, InputCheck, SelectLabel, InputCheckRadioWrapper, ErrorMsg } from "../../Common/FormStyle";

function JoinStep2() {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const TIME_LIST = [
        { name: "07~11시", value: "0711" },
        { name: "12~18시", value: "1218" },
        { name: "19~24시", value: "1924" },
        { name: "00~06시", value: "0006" },
    ];

    return (
        <Container id="step2">
            <Item>
                <Label data-required>활동 지역</Label>
                <InputText
                    type="text"
                    required={true}
                    {...register("location", { required: { value: true, message: "활동 지역을 입력해주세요." } })}
                />
                {errors.location && <ErrorMsg>{errors.location.message as string}</ErrorMsg>}
            </Item>
            <Item>
                <Label data-required>활동 시간</Label>
                <DayWrap>
                    <DayLabel>평일</DayLabel>
                    <div className="day-select-wrap">
                        {TIME_LIST.map((item) => (
                            <SelectLabel>
                                <input type="checkbox" value={`w${item.value}`} {...register("weekday-time")} />
                                {item.name}
                            </SelectLabel>
                        ))}
                    </div>
                </DayWrap>
                <DayWrap>
                    <DayLabel>토요일</DayLabel>
                    <div className="day-select-wrap">
                        {TIME_LIST.map((item) => (
                            <SelectLabel>
                                <input type="checkbox" value={`sat${item.value}`} {...register("saturday-time")} />
                                {item.name}
                            </SelectLabel>
                        ))}
                    </div>
                </DayWrap>
                <DayWrap>
                    <DayLabel>일요일</DayLabel>
                    <div className="day-select-wrap">
                        {TIME_LIST.map((item) => (
                            <SelectLabel>
                                <input type="checkbox" value={`sun${item.value}`} {...register("sunday-time")} />
                                {item.name}
                            </SelectLabel>
                        ))}
                    </div>
                </DayWrap>
            </Item>
            <Item>
                <InputCheckRadioWrapper>
                    <InputCheck type="checkbox" id="offer-active" {...register("offer-active")} />
                    <label htmlFor="offer-active">영입 제안 받기 허용</label>
                </InputCheckRadioWrapper>
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
    gap: 32px;
`;

const Item = styled.div`
    position: relative;
    label {
        cursor: pointer;
    }
    .offer-active-description {
        margin: 8px 0 0;
        padding-left: 30px;
        font-size: 1.3rem;
        line-height: 1.9rem;
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
    opacity: 0.8;
    background-color: ${({ theme }) => theme.color.gray1};
    color: ${({ theme }) => theme.color.black};
    font-size: 1.4rem;
    font-weight: 500;
    text-align: center;
`;

export default JoinStep2;
