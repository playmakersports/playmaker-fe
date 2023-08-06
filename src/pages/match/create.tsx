import React from "react";
import { FieldValues, useFieldArray, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import Score from "@/src/components/Match/Score";
import Card from "@/src/components/Main/Card";
import MatchPlayers from "@/src/components/Match/MatchPlayers";
import FloatBottom from "@/src/components/Common/FloatBottom";
import Button from "@/src/components/Common/Button";
import { getCurrentDateTime } from "@/src/util/time";

function MatchCreate() {
    const router = useRouter();
    const { register, handleSubmit, control } = useForm<FieldValues>({
        defaultValues: {
            date: getCurrentDateTime("date"),
            time: getCurrentDateTime("time"),
        },
    });
    const matchId = router.query.id;

    const PLAYERS_LIST = [
        { id: 32, name: "선수명", gk: true, mom: false, goal: 0 },
        { id: 43, name: "선수명", gk: false, mom: false, goal: 0 },
        { id: 233, name: "선수명", gk: false, mom: true, goal: 2 },
        { id: 993, name: "선수명", gk: false, mom: false, goal: 1 },
    ];

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Score
                home={{ teamName: "FC 1", score: 3, teamColor: "#ffcd2a" }}
                away={{ teamName: "FC 2", score: 2, teamColor: "#2bf385" }}
                status="경기종료"
                type="edit"
                register={register}
            />
            <Cards>
                <Card title="경기 정보">
                    <Info>
                        <li>
                            <dt>일시</dt>
                            <dd>
                                <input type="date" {...register("date")} />
                                <input type="time" {...register("time")} />
                            </dd>
                        </li>
                        <li>
                            <dt>장소</dt>
                            <dd>
                                <input type="text" {...register("location")} />
                            </dd>
                        </li>
                    </Info>
                </Card>
                <Card title="선수 정보">
                    <PlayerBox>
                        <MatchPlayers
                            type="edit"
                            id="HOME"
                            register={register}
                            control={control}
                            teamColor="#ffcd2a"
                            list={PLAYERS_LIST}
                        />
                        <MatchPlayers
                            type="edit"
                            id="AWAY"
                            register={register}
                            control={control}
                            teamColor="#2bf385"
                            list={PLAYERS_LIST}
                        />
                    </PlayerBox>
                </Card>
            </Cards>
            <FloatBottom>
                <Button type="submit" text="저장" mode="main1" size="large" />
            </FloatBottom>
        </form>
    );
}

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0 0;
    padding: 0 16px;
    gap: 20px;
`;
const Info = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        dt {
            flex: 1;
        }
        dd {
            flex: 2;
            display: flex;
            align-items: center;
            border-bottom: 2px solid ${({ theme }) => theme.color.gray4};
        }
        dd > input {
            width: 100%;
            height: 27px;
            font-size: 0.9rem;
            text-align: right;
            background-color: transparent;
            color: ${({ theme }) => theme.color.black};
        }
    }
`;
const PlayerBox = styled.div`
    display: flex;
    gap: 12px;
`;

export default MatchCreate;
