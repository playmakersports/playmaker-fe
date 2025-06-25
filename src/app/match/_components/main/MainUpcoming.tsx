import React from "react";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

import { fonts } from "@/styles/fonts.css";
import {
  matchMainUpcomingCard,
  matchMainUpcomingCardDetail,
  matchMainUpcomingCardTeamLogo,
  matchMainUpcomingCardTeamName,
  matchMainUpcomingContainer,
} from "./matchMain.css";
import {
  flexAlignCenter,
  flexColumnGap12,
  flexColumnGap16,
  flexRowGap4,
  flexRowGap8,
  flexSpaceBetween,
} from "@/styles/container.css";
import RightArrow from "@/assets/icon/arrow/RightArrow.svg";
import RightDirectionIcon from "@/assets/icon/arrow/RightDirection.svg";
import LocationPinIcon from "@/assets/icon/common/filled/LocationPin.svg";
import CalendarIcon from "@/assets/icon/common/filled/Calendar.svg";
import { formattedDateNoHyphen } from "@/util/date";

function MainUpcomingMatch() {
  return (
    <div>
      <div className={clsx(flexColumnGap16, matchMainUpcomingContainer)}>
        <div className={clsx(flexAlignCenter, flexSpaceBetween)} style={{ padding: "0 var(--global-lr-padding)" }}>
          <h3 className={fonts.body2.semibold} style={{ color: "var(--gray900)" }}>
            진행 예정 경기
          </h3>
          <RightDirectionIcon width={24} height={24} />
        </div>
        <div style={{ scrollbarWidth: "none" }}>
          {data.length > 0 && (
            <Swiper slidesPerView="auto" freeMode={true}>
              {data.map((item) => (
                <SwiperSlide className={clsx(matchMainUpcomingCard)} key={item.matchId}>
                  <div className={flexColumnGap12}>
                    <Link className={flexRowGap8} href={`/match/${item.matchId}`}>
                      <div className={matchMainUpcomingCardTeamLogo}></div>
                      <div style={{ flex: 1 }}>
                        <p className={flexSpaceBetween}>
                          <span className={fonts.caption1.semibold} style={{ color: "var(--gray600)" }}>
                            {item.teamName}
                          </span>
                          <RightArrow width={20} height={20} />
                        </p>
                        <span className={clsx(matchMainUpcomingCardTeamName, fonts.body4.regular)}>
                          {item.matchName}
                        </span>
                      </div>
                    </Link>
                    <div className={matchMainUpcomingCardDetail}>
                      <p className={clsx(flexRowGap4, fonts.caption1.regular)} style={{ color: "var(--gray500)" }}>
                        <LocationPinIcon width={16} height={16} fill="var(--gray400)" />
                        {item.location}
                      </p>
                      <p className={clsx(flexRowGap4, fonts.caption1.regular)} style={{ color: "var(--gray500)" }}>
                        <CalendarIcon width={16} height={16} fill="var(--gray400)" />
                        {formattedDateNoHyphen(item.matchDate)} / {item.matchTime}{" "}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}

const data = [
  {
    matchId: 124,
    teamName: "Gvaleir",
    matchName: "제25회 과기대 총장배 전국농구동아리대회",
    teamLogo: ".png",
    matchDate: "20250620",
    matchTime: "16:00",
    location: "잠실운동장 야외코트",
  },
  {
    matchId: 524,
    teamName: "Gvaleir",
    matchName: "제25회 과기대 총장배 전국농구동아리대회",
    teamLogo: ".png",
    matchDate: "20250620",
    matchTime: "16:00",
    location: "잠실운동장 야외코트",
  },
  {
    matchId: 94,
    teamName: "Gvaleir",
    matchName: "제25회 과기대 총장배 전국농구동아리대회",
    teamLogo: ".png",
    matchDate: "20250625",
    matchTime: "20:00",
    location: "잠실운동장 야외코트",
  },
];

export default MainUpcomingMatch;
