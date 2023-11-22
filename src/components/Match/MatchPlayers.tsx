import React, { useState } from "react";
import styled from "@emotion/styled";
import Button from "../Common/Button";
import Modal from "../Common/Modal";
import InputBox from "../Common/InputBox";
import { Control, FieldValues, UseFormRegister, useFieldArray } from "react-hook-form";

type MatchPlayersListType = {
    id: number;
    name: string;
    gk: boolean;
    mom: boolean;
    goal: number;
};

type MatchPlayersType = {
    type?: "view" | "edit";
    id?: string;
    register?: UseFormRegister<FieldValues>;
    control?: Control;
    teamColor: string;
    list: Array<MatchPlayersListType>;
};

function MatchPlayers({ type = "view", id, register, control, teamColor, list }: MatchPlayersType) {
    const [showModal, setShowModal] = useState(() => false);
    const PLAYER_SEARCH_DATA = [
        { id: 123, name: "홍길동", point: 200, rank: 2, location: "경기 안양" },
        { id: 333, name: "선수1", point: 145, rank: 4, location: "경기 안양" },
        { id: 343, name: "선수2", point: 125, rank: 9, location: "경기 안양" },
    ];

    if (type === "edit") {
        const { fields, append } = useFieldArray({
            control,
            name: `${id}Players`,
        });

        return (
            <Container teamColor={teamColor}>
                <ButtonBox>
                    <Button
                        type="button"
                        mode="sub2"
                        size="medium"
                        callback={() => setShowModal((prev) => !prev)}
                        text="+ 선수 추가"
                    />
                </ButtonBox>
                {register &&
                    fields.map((player, index) => (
                        <Player key={player.id}>
                            <input
                                className="player-id"
                                type="text"
                                readOnly
                                {...register(`${id}Players.${index}.playerId`)}
                            />
                            <input
                                className="player-name"
                                type="text"
                                readOnly
                                {...register(`${id}Players.${index}.playerName`)}
                            />
                            <input
                                className="player-gk"
                                type="checkbox"
                                id={`${id}Players.${index}.gk`}
                                {...register(`${id}Players.${index}.gk`)}
                            />
                            <label htmlFor={`${id}Players.${index}.gk`}>GK</label>
                            <input
                                type="number"
                                pattern="[0-9]*"
                                className="player-goal numbers"
                                min={0}
                                defaultValue={0}
                                {...register(`${id}Players.${index}.goal`)}
                            />
                        </Player>
                    ))}
                {showModal && (
                    <Modal title="선수 선택" setShow={setShowModal} btns={[]}>
                        <p>경기에 참여하는 선수를 선택해주세요.</p>
                        <SearchWrapper>
                            <input type="text" />
                            <Button type="button" mode="main1" size="medium" shadow={false} text="검색" />
                        </SearchWrapper>
                        <ModalPlayerList>
                            {PLAYER_SEARCH_DATA.map((player) => (
                                <li key={player.id}>
                                    <p className="player-list-info">
                                        {player.name}
                                        <span className="player-list-label">
                                            {player.location} {player.rank}위
                                        </span>
                                        <span className="player-list-label">({player.point})</span>
                                    </p>
                                    <Button
                                        type="button"
                                        mode="sub2"
                                        size="small"
                                        shadow={false}
                                        noFlex={true}
                                        callback={() => append({ playerId: player.id, playerName: player.name })}
                                        text="+ 추가"
                                    />
                                </li>
                            ))}
                        </ModalPlayerList>
                    </Modal>
                )}
            </Container>
        );
    } else {
        return (
            <Container teamColor={teamColor}>
                {list.map((player) => (
                    <li key={player.id}>
                        <dt>{player.name}</dt>
                        <dd>
                            {player.mom && <span className="label-mom">MoM</span>}
                            {player.gk && <span className="label-gk">GK</span>}
                            {player.goal > 0 && `${player.goal}골`}
                        </dd>
                    </li>
                ))}
            </Container>
        );
    }
}

const Container = styled.ul<{ teamColor: string }>`
    flex: 1;
    padding: 6px 0 0;
    border-top: 8px solid ${({ teamColor }) => teamColor};
    li {
        display: flex;
        padding: 8px 2px;
        align-items: center;
        justify-content: space-between;
        dd {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            color: ${({ theme }) => theme.color.gray4};
            font-size: 0.85rem;
        }
    }
    .label-mom {
        padding: 1px 4px;
        border: 1px solid ${({ theme }) => theme.color.warn};
        border-radius: 12px;
        color: ${({ theme }) => theme.color.warn};
        font-size: 0.7rem;
        font-weight: 500;
        letter-spacing: -0.2px;
    }
    .label-gk {
        padding: 2px 4px;
        background-color: ${({ theme }) => theme.color.gray1};
        color: ${({ theme }) => theme.color.black};
        font-size: 0.7rem;
        border-radius: 8px;
    }
`;

const ButtonBox = styled.div`
    display: flex;
    padding: 4px 4px 8px;
`;

const SearchWrapper = styled.div`
    margin: 24px 0 8px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 12px;
    input {
        flex: 12;
        width: 0;
        padding: 12px;
        height: 42px;
        border: 1px solid ${({ theme }) => theme.color.gray2};
        border-radius: 8px;
        font-size: 1rem;
        &:focus {
            border: 1px solid ${({ theme }) => theme.color.gray4};
        }
    }
`;
const ModalPlayerList = styled.ul`
    display: flex;
    padding: 0 2px;
    height: 36vh;
    flex-direction: column;
    overflow: scroll;
    gap: 4px;
    li {
        padding: 12px 0;
        .player-list-info {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            .player-list-label {
                font-size: 0.8rem;
                color: ${({ theme }) => theme.color.gray4};
            }
        }
    }
`;
const Player = styled.li`
    display: flex;
    gap: 4px;
    .player-id {
        display: none;
    }
    .player-name {
        flex: 1;
        width: 0;
        font-size: 1rem;
    }
    .player-gk {
        display: none;
        & + label {
            user-select: none;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 2px;
            padding: 2px 4px;
            border: 2px solid ${({ theme }) => theme.color.gray2};
            border-radius: 12px;
            font-size: 0.8rem;
            color: ${({ theme }) => theme.color.gray2};
            opacity: 0.8;
        }
        &:checked + label {
            border: 2px solid #000;
            background-color: ${({ theme }) => theme.color.main};
            color: #000;
            font-weight: 600;
            opacity: 1;
        }
    }
    .player-goal {
        margin: -2px 0 0 0;
        width: 20px;
        font-size: 1.2rem;
        font-weight: 500;
        text-align: center;
    }
    &::after {
        content: "골";
        font-size: 0.85rem;
        opacity: 0.7;
    }
`;

export default MatchPlayers;
