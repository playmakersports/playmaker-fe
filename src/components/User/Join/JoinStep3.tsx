import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { FieldValues, UseFormRegister, UseFormWatch } from "react-hook-form";

import { Label, SelectLabel, TextArea, TextAreaWrap } from "../../Common/FormStyle";
import FormDropdownBox from "../../Common/FormDropdownBox";
import { FOOTBALL_CLUBS, FOOTBALL_LEAGUE } from "@/src/constants/FootballClubs";

interface JoinStepPropsType {
    setJoinStep: React.Dispatch<React.SetStateAction<number>>;
    register: UseFormRegister<FieldValues>;
    watch: UseFormWatch<FieldValues>;
}

function JoinStep3({ setJoinStep, register, watch }: JoinStepPropsType) {
    const ContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setJoinStep(3);
                    }
                });
            },
            { threshold: 0.5 }
        );
        observer.observe(ContainerRef.current!);
    }, []);

    const PLAY_STYLE = [
        "공격수",
        "수비수",
        "미드필더",
        "골키퍼",
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

    return (
        <Container id="step3" ref={ContainerRef}>
            <Item>
                <Label>나의 해시태그</Label>
                <Options>
                    {PLAY_STYLE.map((value) => (
                        <SelectLabel key={value}>
                            #{value}
                            <input type="checkbox" value={value} {...register("play-style")} />
                        </SelectLabel>
                    ))}
                </Options>
            </Item>
            <Item>
                <Label>자기소개</Label>
                <TextAreaWrap length={watch("introduce").length ?? 0} max={60}>
                    <TextArea required={true} {...register("introduce", { maxLength: 60 })} />
                </TextAreaWrap>
            </Item>
            <Item>
                <Label>좋아하는 축구 클럽(팀)</Label>
                <FormDropdownBox
                    register={register}
                    watch={watch}
                    type="checkbox"
                    id="favoriteClub"
                    options={FOOTBALL_CLUBS}
                    filter={FOOTBALL_LEAGUE}
                    maxChecked={2}
                    placeholder="축구 클럽(팀)을 선택해주세요"
                />
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
`;

const Options = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
    label {
        flex: auto;
        min-width: 90px;
    }
`;

export default JoinStep3;
