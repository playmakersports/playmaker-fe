import React, { useEffect } from "react";
import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import styled from "@emotion/styled";

import FormDropdownBox from "../../../common/FormDropdownBox";
import { Label, InputCheck, SelectLabel, InputCheckRadioWrapper, ErrorMsg } from "../../../common/FormStyle";
import { SIDO_AREA_NAME, SIGUNGU_AREA_NAME } from "@/src/constants/areaName";
import Button from "../../../common/Button";
import { joinState } from "@/src/atoms/user";

function JoinStep2({ setJoinStep }: { setJoinStep: React.Dispatch<React.SetStateAction<number>> }) {
    const router = useRouter();
    const [joinStateData, setJoinStateData] = useAtom(joinState);
    const methods = useForm({
        defaultValues: {
            activeArea: joinStateData.activeArea,
            activeTime: joinStateData.activeTime,
            proposalYn: joinStateData.proposalYn === "Y",
        },
    });
    const {
        register,
        formState: { errors },
    } = methods;

    const TIME_LIST = [
        { name: "07~11시", value: "0711" },
        { name: "12~18시", value: "1218" },
        { name: "19~24시", value: "1924" },
        { name: "00~06시", value: "0006" },
    ];

    const onSubmit = (data: FieldValues) => {
        setJoinStep((prev) => prev + 1);
        setJoinStateData((prev) => ({ ...prev, ...data }));
    };

    useEffect(() => {
        router.push({ query: { step: 2 } });
    }, []);

    return (
        <FormProvider {...methods}>
            <Form id="step2" onSubmit={methods.handleSubmit(onSubmit)}>
                <Item>
                    <Label data-required>활동 지역</Label>
                    <FormDropdownBox
                        type="radio"
                        id="activeArea"
                        filter={Object.keys(SIDO_AREA_NAME).map((sido) => ({
                            value: sido,
                            optionName: SIDO_AREA_NAME[sido],
                        }))}
                        options={SIGUNGU_AREA_NAME.map((sigungu) => ({
                            value: `${sigungu.code}`,
                            optionName: sigungu.siGunGuName,
                            category: `${sigungu.siDoCode}`,
                        }))}
                        placeholder="주요 활동 지역을 선택해주세요"
                        showFilterName
                    />

                    {errors.activeArea && <ErrorMsg>{errors.activeArea.message as string}</ErrorMsg>}
                </Item>
                <Item>
                    <Label data-required>활동 시간</Label>
                    <DayWrap>
                        <DayLabel>평일</DayLabel>
                        <div className="day-select-wrap">
                            {TIME_LIST.map((item) => (
                                <SelectLabel key={item.value}>
                                    <input type="checkbox" value={`WEEK${item.value}`} {...register("activeTime")} />
                                    {item.name}
                                </SelectLabel>
                            ))}
                        </div>
                    </DayWrap>
                    <DayWrap>
                        <DayLabel>토요일</DayLabel>
                        <div className="day-select-wrap">
                            {TIME_LIST.map((item) => (
                                <SelectLabel key={item.value}>
                                    <input type="checkbox" value={`SAT${item.value}`} {...register("activeTime")} />
                                    {item.name}
                                </SelectLabel>
                            ))}
                        </div>
                    </DayWrap>
                    <DayWrap>
                        <DayLabel>일요일</DayLabel>
                        <div className="day-select-wrap">
                            {TIME_LIST.map((item) => (
                                <SelectLabel key={item.value}>
                                    <input type="checkbox" value={`SUN${item.value}`} {...register("activeTime")} />
                                    {item.name}
                                </SelectLabel>
                            ))}
                        </div>
                    </DayWrap>
                </Item>
                <Item>
                    <InputCheckRadioWrapper>
                        <InputCheck type="checkbox" id="offer-active" {...register("proposalYn")} />
                        <label htmlFor="offer-active">영입 제안 받기 허용</label>
                    </InputCheckRadioWrapper>
                    <p className="offer-active-description">
                        다른 사람이 선수 님께 영입 제안을 할 수 있도록 일부 선수정보가 공개됩니다. (닉네임, 출생년도,
                        성별, 활동정보 및 플레이정보)
                    </p>
                </Item>
                <StepButtons>
                    <Button
                        type="button"
                        mode="basic"
                        size="large"
                        text="이전"
                        main={false}
                        shadow={false}
                        callback={() => setJoinStep((prev) => prev - 1)}
                    />
                    <Button type="submit" mode="main1" size="large" text="다음" main={true} shadow={false} />
                </StepButtons>
            </Form>
        </FormProvider>
    );
}

const Form = styled.form`
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

const StepButtons = styled.div`
    display: flex;
    margin: 24px 0 0;
    gap: 12px;
`;

export default JoinStep2;
