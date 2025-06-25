import React from "react";
import clsx from "clsx";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import {
  teamFindAllBanner,
  teamFindAllBannerIndex,
  teamFindAllBgGroupContainer,
  teamFindAllGroupContainer,
} from "./teamFind.css";
import { fonts } from "@/styles/fonts.css";
import { baseContainer, flexColumnGap4, flexSpaceBetween } from "@/styles/container.css";
import { formatDate } from "date-fns";

function TeamFindAll() {
  return (
    <div>
      <Swiper
        loop={true}
        slidesPerView="auto"
        style={{
          height: "180px",
        }}
      >
        {bannerList.map((banner, index) => (
          <SwiperSlide key={banner.id}>
            <div className={teamFindAllBanner} style={{ backgroundImage: `url(${banner.imageUrl})` }}>
              <div className={teamFindAllBannerIndex}>
                {index + 1}
                <span>/</span>
                {bannerList.length}
              </div>
              <div className={flexColumnGap4} style={{ width: "100%" }}>
                <p className={fonts.body2.semibold}>{banner.title}</p>
                <p className={fonts.body4.medium} style={{ opacity: 0.8 }}>
                  {banner.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <article className={baseContainer}>
        <div className={teamFindAllGroupContainer}>
          <GroupTitle className={flexColumnGap4}>
            <div className={clsx(flexSpaceBetween)}>
              <h5 className={fonts.body2.semibold}>
                이번주 가장 <span className="highlight">인기 있는 팀</span>
              </h5>
              <p className={fonts.caption1.regular}>{formatDate(new Date(), "MM-dd / HH:mm")} 기준</p>
            </div>
            <p className={fonts.body4.regular}>이번주 TOP3 스포츠 팀을 모았어요</p>
          </GroupTitle>
        </div>
        <div className={teamFindAllBgGroupContainer}>
          <GroupTitle className={flexColumnGap4}>
            <h5 className={fonts.body2.semibold}>
              지금 <span className="highlight">팀원 모집 중</span>인 관심 팀
            </h5>
            <p className={fonts.body4.regular}>사용자 님이 둘러본 팀들이 현재 부원을 모집중이에요!</p>
          </GroupTitle>
        </div>
        <div className={teamFindAllGroupContainer}>
          <GroupTitle className={flexColumnGap4}>
            <h5 className={fonts.body2.semibold}>
              요즘 활발하게 <span className="highlight">활동 중</span>인 팀
            </h5>
            <p className={fonts.body4.regular}>최근 가입자가 가장 많은 팀들이에요</p>
          </GroupTitle>
        </div>
      </article>
    </div>
  );
}

const bannerList = [
  {
    id: 1,
    title: "배너 제목1",
    description: "배너 설명1",
    imageUrl: "https://placehold.co/600x400",
  },
  {
    id: 2,
    title: "배너 제목2",
    description: "배너 설명2",
    imageUrl: "https://placehold.co/600x400",
  },
];

const GroupTitle = styled.div`
  & h5 {
    color: var(--gray900);
  }
  & p {
    color: var(--gray400);
  }
  span.highlight {
    color: var(--primary500);
  }
`;

export default TeamFindAll;
