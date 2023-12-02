import React, { useEffect } from "react";
import { useAtom } from "jotai";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { FieldValues, FormProvider, useForm } from "react-hook-form";

import { Label, SelectLabel, TextArea, TextAreaWrap } from "../../Common/FormStyle";
import FormDropdownBox from "../../Common/FormDropdownBox";
import { FOOTBALL_CLUBS, FOOTBALL_LEAGUE } from "@/src/constants/FootballClubs";
import Button from "../../Common/Button";
import { joinState } from "@/src/atoms/state";
import { API_URL } from "@/src/apis/endpoint";
import { useQueryMutate } from "@/src/apis/hook";

function JoinStep3({ setJoinStep }: { setJoinStep: React.Dispatch<React.SetStateAction<number>> }) {
    const router = useRouter();
    const { mutate } = useQueryMutate("POST", API_URL.JOIN);
    const [joinStateData] = useAtom(joinState);
    const methods = useForm({ defaultValues: joinStateData });
    const { register, watch } = methods;

    const PLAY_STYLE = [
        "육상부",
        "체대생",
        "축구부",
        "선수출신",
        "유스팀",
        "왼발",
        "왼손",
        "킥력",
        "피지컬",
        "국내파",
        "해외파",
        "트래핑장인",
        "축덕후",
        "초보",
    ];

    const onSubmit = (data: FieldValues) => {
        mutate(
            {
                ...data,
                activeTime: data.activeTime[0],
                gameStyle: data.gameStyle[0],
                preferredSoccerTeam: data.preferredSoccerTeam.join[0],
                proposalYn: data.proposalYn ? "Y" : "N",
            },
            {
                onSuccess: () => {
                    console.log("완료");
                    router.push("/user/login");
                },
                onError: (err) => alert(`잘못된 회원가입 정보입니다.\n(${err.message})`),
            }
        );
    };

    useEffect(() => {
        router.push({ query: { step: 3 } });
    }, []);

    return (
        <FormProvider {...methods}>
            <Form id="step3" onSubmit={methods.handleSubmit(onSubmit)}>
                <Item>
                    <Label>포지션</Label>
                    <Options>
                        <SelectLabel style={{ flex: 1 }}>
                            공격에 강해요
                            <input type="radio" value="FORWARD" {...register("position")} />
                        </SelectLabel>
                        <SelectLabel style={{ flex: 1 }}>
                            수비에 강해요
                            <input type="radio" value="DEFENDER" {...register("position")} />
                        </SelectLabel>
                        <SelectLabel style={{ flex: 1 }}>
                            골키퍼에 강해요
                            <input type="radio" value="GK" {...register("position")} />
                        </SelectLabel>
                    </Options>
                </Item>
                <Item>
                    <Label>나의 해시태그</Label>
                    <Options>
                        {PLAY_STYLE.map((value) => (
                            <SelectLabel key={value}>
                                #{value}
                                <input type="checkbox" value={value} {...register("gameStyle")} />
                            </SelectLabel>
                        ))}
                    </Options>
                </Item>
                <Item>
                    <Label>자기소개</Label>
                    <TextAreaWrap length={(watch("selfIntro") ?? "").length} max={60}>
                        <TextArea required={true} {...register("selfIntro", { maxLength: 60 })} />
                    </TextAreaWrap>
                </Item>
                <Item>
                    <Label>좋아하는 축구 클럽(팀)</Label>
                    <FormDropdownBox
                        type="checkbox"
                        id="preferredSoccerTeam"
                        options={FOOTBALL_CLUBS}
                        filter={FOOTBALL_LEAGUE}
                        maxChecked={2}
                        placeholder="축구 클럽(팀)을 선택해주세요"
                    />
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
                    <Button type="submit" mode="main1" size="large" text="완료" main={true} shadow={false} />
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
`;

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    font-size: 1.6rem;
`;

const StepButtons = styled.div`
    display: flex;
    margin: 24px 0 0;
    gap: 12px;
`;

export default JoinStep3;
