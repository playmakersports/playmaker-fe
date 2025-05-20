import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { fonts } from "@/styles/fonts.css";
import { flexColumnGap16 } from "@/styles/container.css";
import { teamMainRecentVoteCard, teamMainRecentVoteContainer, teamMainRecentVoteList } from "./team.main.css";
import RecentVoteCard from "./RecentVoteCard";

function RecentVote() {
  return (
    <div className={clsx(teamMainRecentVoteContainer, flexColumnGap16)}>
      <p className={fonts.body3.medium} style={{ color: "var(--gray900)", padding: "0 16px" }}>
        사용자 님의 <span style={{ color: "var(--primary500)" }}>참여 의사</span>를 기다리고 있어요!
      </p>
      <div className={teamMainRecentVoteList}>
        {data.length > 0 && (
          <Swiper slidesPerView="auto" freeMode={true}>
            {data.map((item) => (
              <SwiperSlide className={clsx(teamMainRecentVoteCard)}>
                <RecentVoteCard
                  key={item.voteId}
                  title={item.title}
                  scheduleId={item.scheduleId}
                  content={item.content}
                  date={item.date}
                  voteId={item.voteId}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
const data = [
  {
    voteId: "123",
    scheduleId: "123",
    title: "저녁 번개 참석자 모집",
    date: "2025.04.18",
    content: "과기대 앞 돼지고기집",
  },
  { voteId: "1423", scheduleId: "5123", title: "하계 훈련 참가자", date: "2025.05.31", content: "필참" },
];

export default RecentVote;
