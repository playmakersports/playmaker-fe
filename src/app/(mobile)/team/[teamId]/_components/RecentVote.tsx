import React from "react";
import clsx from "clsx";
import { useForm } from "react-hook-form";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap16 } from "@/styles/container.css";
import { teamMainRecentVoteCard, teamMainRecentVoteContainer, teamMainRecentVoteList } from "./team.main.css";
import Button from "@/components/common/Button";
import { InputRadio } from "@/components/common/input/SelectInput";

type Props = {
  voteId: string;
  title: string;
  content: string;
  date: string;
};
function RecentVoteCard({ voteId, title, content, date }: Props) {
  const { register } = useForm();

  return (
    <li className={clsx(teamMainRecentVoteCard, flexColumnGap16)}>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <p style={{ color: "var(--gray900)" }} className={fonts.body3.semibold}>
          {title}
        </p>
        <p style={{ color: "var(--gray600)" }} className={fonts.caption1.medium}>
          {content}
        </p>
        <p style={{ color: "var(--gray400)" }} className={fonts.caption1.regular}>
          {date}
        </p>
      </div>
      <ul>
        <li style={{ padding: "8px 10px" }}>
          <InputRadio id={`${voteId}-attend`} {...register(`${voteId}-Vote`)} text={{ title: "참석" }} />
        </li>
        <li style={{ padding: "8px 10px" }}>
          <InputRadio id={`${voteId}-no-attend`} {...register(`${voteId}-Vote`)} text={{ title: "불참" }} />
        </li>
      </ul>
      <Button type="button" mode="primary">
        확인
      </Button>
    </li>
  );
}

function RecentVote() {
  return (
    <div className={clsx(teamMainRecentVoteContainer, flexColumnGap16)}>
      <p className={fonts.body3.medium} style={{ color: "var(--gray900)", padding: "0 20px" }}>
        사용자 님의 <span style={{ color: "var(--primary500)" }}>참여 의사</span>를 기다리고 있어요!
      </p>
      <ul className={teamMainRecentVoteList}>
        {MOCK.map((item) => (
          <RecentVoteCard
            key={item.voteId}
            title={item.title}
            content={item.content}
            date={item.date}
            voteId={item.voteId}
          />
        ))}
      </ul>
    </div>
  );
}
const MOCK = [
  { voteId: "123", title: "저녁 번개 참석자 모집", date: "2025.04.18", content: "과기대 앞 돼지고기집" },
  { voteId: "1423", title: "하계 훈련 참가자", date: "2025.05.31", content: "필참" },
];

export default RecentVote;
