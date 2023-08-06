import styled from "@emotion/styled";
import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type MatchTeamDataType = {
    teamName: string;
    score: number;
    teamColor: string;
};

type ScoreType = {
    home: MatchTeamDataType;
    away: MatchTeamDataType;
    status: string;
    type?: "view" | "edit";
    register?: UseFormRegister<FieldValues>;
};

function Score({ home, away, status, type = "view", register }: ScoreType) {
    return (
        <Container>
            <TeamBox align="left" color={home.teamColor}>
                <p className="team-name">{home.teamName}</p>
                {type === "view" && <p className="team-score numbers">{home.score}</p>}
                {type === "edit" && (
                    <input
                        type="number"
                        pattern="[0-9]*"
                        min={0}
                        max={99}
                        maxLength={2}
                        placeholder="골"
                        className="team-score numbers"
                        {...(register && register("scoreA", { valueAsNumber: true }))}
                    />
                )}
            </TeamBox>
            <TeamBox align="right" color={away.teamColor}>
                <p className="team-name">{away.teamName}</p>
                {type === "view" && <p className="team-score numbers">{away.score}</p>}
                {type === "edit" && (
                    <input
                        type="number"
                        pattern="[0-9]*"
                        min={0}
                        max={99}
                        maxLength={2}
                        placeholder="골"
                        className="team-score numbers"
                        {...(register && register("scoreB", { valueAsNumber: true }))}
                    />
                )}
            </TeamBox>
            <Status>{status}</Status>
            {type === "edit" && (
                <StatusInfo>
                    경기 일시에 맞춰
                    <br />
                    자동 변경됩니다.
                </StatusInfo>
            )}
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    display: flex;
`;
const TeamBox = styled.div<{ align: "left" | "right"; color?: string }>`
    flex: 1;
    padding: 36px 32px;
    text-align: ${({ align }) => align};
    background-color: ${({ color }) => color};
    border-bottom-right-radius: ${({ align }) => align === "left" && "32px"};
    border-bottom-left-radius: ${({ align }) => align === "right" && "32px"};
    .team-name {
        margin: 0 0 20px;
        color: #fff;
        font-size: 1.1rem;
        mix-blend-mode: difference;
    }
    p.team-score {
        padding: 0 2px;
        mix-blend-mode: difference;
        color: #fff;
        font-size: 2.5rem;
        font-weight: 500;
    }
    input.team-score {
        margin: -4px 0;
        padding: 0 3px;
        width: 56px;
        border-bottom: 3px solid #fff;
        background-color: transparent;
        mix-blend-mode: difference;
        color: #fff;
        font-size: 2.5rem;
        font-weight: 500;
        text-align: ${({ align }) => align};
        &::placeholder {
            font-size: 2rem;
            opacity: 0.7;
        }
    }
`;

const Status = styled.div`
    position: absolute;
    padding: 8px 16px 7px;
    left: 50%;
    bottom: 40px;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
`;

const StatusInfo = styled.div`
    position: absolute;
    padding: 6px 0;
    width: 152px;
    left: 50%;
    bottom: -24px;
    transform: translateX(-50%);
    word-break: keep-all;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.color.gray1};
    color: ${({ theme }) => theme.color.gray4};
    font-size: 0.85rem;
    line-height: 1.25rem;
    text-align: center;
    &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 10px;
        left: 50%;
        top: -8px;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.color.white};
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }
`;

export default Score;
