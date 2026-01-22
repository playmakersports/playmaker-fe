import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useLayoutEffect } from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { B as BaseContainer } from "./Container-AJHSCHjd.js";
import { F as FONTS, S as SCROLL_MASKED_GRADIENT, a as SCROLL_HIDE, T as TEXT_ACTIVE } from "./common-6ceLbjxn.js";
import { s as scrollMaskedHandler, a as scrollMaskedHandlerRef } from "./display-DVSv9f0r.js";
import { m as minSecToSecond, s as secondToMinSec } from "./common-BU27Mq6v.js";
import { B as BasicWhiteCard } from "./Card-7o_ZdfYV.js";
import { a as formattedDate } from "./date-DKPo_LKv.js";
import { S as SendIcon } from "./Send-CIkiv51_.js";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import { i as Route } from "./router-mwjOH7mt.js";
import "jotai";
import "date-fns";
import "@tanstack/react-router";
import "@microsoft/clarity";
function useYoutube(youtubeRef, props) {
  const { width, height, controller = true } = props || {};
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playerState, setPlayerState] = useState(-1);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [updateTimeInterval, setUpdateTimeInterval] = useState();
  const playerSize = { width, height };
  const defaultOpts = {
    playerVars: {
      start: 0,
      controls: controller ? 1 : 0,
      modestbranding: 1,
      iv_load_policy: 3,
      rel: 0
      // 관련 동영상 표시 안 함
    }
  };
  const opts = playerSize ? {
    ...playerSize,
    ...defaultOpts
  } : defaultOpts;
  function onPlayerReady(event) {
    setPlayerState(event.data);
    youtubeRef.current?.internalPlayer.getDuration().then((duration2) => {
      setDuration(duration2);
    });
  }
  function handlePlayer(event) {
    setPlayerState(event.data);
    if (event.data !== 1) {
      clearInterval(updateTimeInterval);
    } else {
      const interval = setInterval(() => {
        setCurrentTime(event.target.getCurrentTime().toFixed(0));
      }, 1e3);
      setUpdateTimeInterval(interval);
    }
  }
  function onPlaybackRateChange(event) {
    setPlaybackRate(event.target.getPlaybackRate());
  }
  const handlePlaybackRate = (targetRate) => {
    youtubeRef.current?.internalPlayer.setPlaybackRate(targetRate).then(() => {
      setPlaybackRate(targetRate);
    });
  };
  const handlePlayPause = () => {
    if (playerState === 1) {
      youtubeRef.current?.internalPlayer.pauseVideo();
    } else {
      youtubeRef.current?.internalPlayer.playVideo();
    }
  };
  const handleSeekTo = (seconds) => {
    youtubeRef.current?.internalPlayer.seekTo(seconds);
  };
  const playerConnect = {
    onReady: onPlayerReady,
    onPlay: handlePlayer,
    onStateChange: handlePlayer,
    onPlaybackRateChange
  };
  return {
    playerConnect,
    currentTime,
    duration,
    playerState,
    handlePlayPause,
    playbackRate,
    handlePlaybackRate,
    handleSeekTo,
    opts
  };
}
const useThrottle = (callback, delay) => {
  const lastCall = useRef(0);
  return () => {
    const now = Date.now();
    if (now - lastCall.current >= delay) {
      lastCall.current = now;
      callback();
    }
  };
};
const VIDEO_COMMENTS = [
  { author: "홍길동", writtenAt: "2024-04-24T06:40", time: "03:20", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T06:42", time: "04:20", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T06:43", time: "07:11", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T06:06", time: "09:55", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-24T21:34", time: "10:01", contents: "여기임" },
  {
    author: "홍길동",
    writtenAt: "2024-04-24T20:30",
    time: "12:12",
    contents: "우리 센터가 상대 센터보다 작아서 이건 박스게임 보다는 사이드 플레이가 좋을 것 같은데  상대도 센터 믿고 게임하는게 보이니까 좌측 비어있으니 좌측으로 돌고 @김민우 중간으로 빠져서 패스해봐"
  },
  { author: "홍길동", writtenAt: "2024-04-25T12:27", time: "14:33", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T12:32", time: "15:41", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T12:37", time: "64:11", contents: "여기임" },
  {
    author: "홍길동",
    writtenAt: "2024-04-25T13:40",
    time: "66:08",
    contents: "내용입니다. 오른쪽에서 왼쪽으로 이동. 실수를 줄여야 합니다."
  },
  { author: "홍길동", writtenAt: "2024-04-25T20:18", time: "90:48", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T21:32", time: "91:34", contents: "여기임" },
  { author: "홍길동", writtenAt: "2024-04-25T21:32", time: "120:34", contents: "여기임" }
];
const VIDEO_DATA = {
  youtubeId: "IVKWwtZFU3k",
  title: "2024 KUSF 대학배구 U-리그",
  subTitle: "한양대 : 인하대",
  description: "01:06:50 ~ 02:01:30 TEAM1(과기대) vs Scuba(시립대) 상대는 56번이 메인이니까 56번 위주로 보기",
  createdAt: "2024-06-13",
  players: [
    {
      playerName: "지민",
      playerId: "827421"
    },
    {
      playerName: "석우",
      playerId: "800421"
    },
    {
      playerName: "미란",
      playerId: "98462"
    },
    {
      playerName: "지원",
      playerId: "123"
    },
    {
      playerName: "현우",
      playerId: "322"
    },
    {
      playerName: "대원",
      playerId: "12"
    },
    {
      playerName: "재원",
      playerId: "56"
    },
    {
      playerName: "주원",
      playerId: "78"
    },
    {
      playerName: "도원",
      playerId: "827421"
    },
    {
      playerName: "강훈",
      playerId: "827421"
    },
    {
      playerName: "태민",
      playerId: "827421"
    }
  ]
};
const BookmarkIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2836'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2836)'%3e%3cpath%20d='M7.875%206.74625L10.5787%203.198C10.7582%202.95783%2010.9714%202.7815%2011.2183%202.669C11.4651%202.55633%2011.7257%202.5%2012%202.5C12.2743%202.5%2012.5349%202.55633%2012.7817%202.669C13.0286%202.7815%2013.2417%202.95783%2013.4212%203.198L16.125%206.74625L20.2595%208.14225C20.6545%208.26925%2020.9625%208.49317%2021.1835%208.814C21.4047%209.135%2021.5152%209.4895%2021.5152%209.8775C21.5152%2010.0567%2021.4891%2010.2353%2021.4368%2010.4133C21.3844%2010.5913%2021.2984%2010.7618%2021.1788%2010.925L18.4865%2014.6615L18.5865%2018.627C18.6032%2019.1535%2018.4296%2019.5972%2018.0658%2019.9583C17.7021%2020.3194%2017.2783%2020.5%2016.7943%2020.5C16.7801%2020.5%2016.6128%2020.4782%2016.2923%2020.4345L12%2019.2038L7.70775%2020.4345C7.62442%2020.4678%207.53842%2020.4871%207.44975%2020.4923C7.36108%2020.4974%207.27975%2020.5%207.20575%2020.5C6.71725%2020.5%206.29225%2020.3194%205.93075%2019.9583C5.56925%2019.5972%205.39683%2019.1535%205.4135%2018.627L5.5135%2014.6365L2.8365%2010.925C2.71683%2010.7612%202.63083%2010.5899%202.5785%2010.4113C2.52617%2010.2324%202.5%2010.0537%202.5%209.875C2.5%209.49783%202.60983%209.14708%202.8295%208.82275C3.04917%208.49842%203.356%208.26842%203.75%208.13275L7.875%206.74625ZM8.802%208.0385L4.23075%209.5615C4.13458%209.5935%204.06892%209.65925%204.03375%209.75875C3.99842%209.85808%204.01283%209.94942%204.077%2010.0328L7.023%2014.1905L6.9135%2018.6578C6.907%2018.7668%206.94542%2018.8533%207.02875%2018.9172C7.11208%2018.9814%207.20508%2018.9975%207.30775%2018.9655L12%2017.648L16.6923%2018.9905C16.7949%2019.0225%2016.8879%2019.0064%2016.9712%2018.9423C17.0546%2018.8783%2017.093%2018.7917%2017.0865%2018.6828L16.977%2014.1905L19.923%2010.0827C19.9872%209.99942%2020.0016%209.90808%2019.9663%209.80875C19.9311%209.70925%2019.8654%209.6435%2019.7693%209.6115L15.198%208.0385L12.2405%204.13475C12.1827%204.05125%2012.1025%204.0095%2012%204.0095C11.8975%204.0095%2011.8173%204.05125%2011.7595%204.13475L8.802%208.0385Z'%20/%3e%3c/g%3e%3c/svg%3e";
const ShareIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2770'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2770)'%3e%3cpath%20d='M16.8055%2021.5C16.057%2021.5%2015.4215%2021.2383%2014.899%2020.7148C14.3767%2020.1912%2014.1155%2019.5556%2014.1155%2018.8078C14.1155%2018.7078%2014.1501%2018.4648%2014.2193%2018.0788L7.10775%2013.8923C6.86675%2014.1423%206.58042%2014.3381%206.24875%2014.4798C5.91708%2014.6214%205.56175%2014.6923%205.18275%2014.6923C4.43758%2014.6923%203.80417%2014.4294%203.2825%2013.9038C2.76083%2013.3781%202.5%2012.7435%202.5%2012C2.5%2011.2565%202.76083%2010.6219%203.2825%2010.0962C3.80417%209.57058%204.43758%209.30775%205.18275%209.30775C5.56175%209.30775%205.91708%209.37858%206.24875%209.52025C6.58042%209.66192%206.86675%209.85775%207.10775%2010.1077L14.2193%205.93075C14.1796%205.80775%2014.1523%205.68725%2014.1375%205.56925C14.1228%205.45125%2014.1155%205.32558%2014.1155%205.19225C14.1155%204.44442%2014.3774%203.80875%2014.9012%203.28525C15.4253%202.76175%2016.0615%202.5%2016.81%202.5C17.5585%202.5%2018.1939%202.762%2018.7163%203.286C19.2388%203.80983%2019.5%204.446%2019.5%205.1945C19.5%205.943%2019.2383%206.5785%2018.7148%207.101C18.1912%207.62333%2017.5556%207.8845%2016.8077%207.8845C16.4269%207.8845%2016.0728%207.81208%2015.7452%207.66725C15.4176%207.52242%2015.1333%207.325%2014.8923%207.075L7.78075%2011.2615C7.82042%2011.3847%207.84767%2011.5052%207.8625%2011.623C7.87717%2011.741%207.8845%2011.8667%207.8845%2012C7.8845%2012.1333%207.87717%2012.259%207.8625%2012.377C7.84767%2012.4948%207.82042%2012.6153%207.78075%2012.7385L14.8923%2016.925C15.1333%2016.675%2015.4176%2016.4776%2015.7452%2016.3328C16.0728%2016.1879%2016.4269%2016.1155%2016.8077%2016.1155C17.5556%2016.1155%2018.1912%2016.3774%2018.7148%2016.9012C19.2383%2017.4253%2019.5%2018.0615%2019.5%2018.81C19.5%2019.5585%2019.238%2020.1939%2018.714%2020.7163C18.1902%2021.2388%2017.554%2021.5%2016.8055%2021.5ZM16.8077%2020C17.1456%2020%2017.4287%2019.8857%2017.6572%2019.6572C17.8857%2019.4287%2018%2019.1456%2018%2018.8078C18%2018.4699%2017.8857%2018.1868%2017.6572%2017.9583C17.4287%2017.7296%2017.1456%2017.6152%2016.8077%2017.6152C16.4699%2017.6152%2016.1868%2017.7296%2015.9583%2017.9583C15.7296%2018.1868%2015.6152%2018.4699%2015.6152%2018.8078C15.6152%2019.1456%2015.7296%2019.4287%2015.9583%2019.6572C16.1868%2019.8857%2016.4699%2020%2016.8077%2020ZM5.18275%2013.1923C5.52325%2013.1923%205.80867%2013.078%206.039%2012.8495C6.2695%2012.621%206.38475%2012.3378%206.38475%2012C6.38475%2011.6622%206.2695%2011.379%206.039%2011.1505C5.80867%2010.922%205.52325%2010.8077%205.18275%2010.8077C4.84758%2010.8077%204.56667%2010.922%204.34%2011.1505C4.11333%2011.379%204%2011.6622%204%2012C4%2012.3378%204.11333%2012.621%204.34%2012.8495C4.56667%2013.078%204.84758%2013.1923%205.18275%2013.1923ZM16.8077%206.38475C17.1456%206.38475%2017.4287%206.27042%2017.6572%206.04175C17.8857%205.81325%2018%205.53008%2018%205.19225C18%204.85442%2017.8857%204.57125%2017.6572%204.34275C17.4287%204.11425%2017.1456%204%2016.8077%204C16.4699%204%2016.1868%204.11425%2015.9583%204.34275C15.7296%204.57125%2015.6152%204.85442%2015.6152%205.19225C15.6152%205.53008%2015.7296%205.81325%2015.9583%206.04175C16.1868%206.27042%2016.4699%206.38475%2016.8077%206.38475Z'%20/%3e%3c/g%3e%3c/svg%3e";
function VideoInfo(props) {
  const [selectedProfile, setSelectedProfile] = useState({ show: false, playerId: "", x: 0, y: 0 });
  const onClickProfile = (playerId, event) => {
    const currentTarget = event.currentTarget;
    const rect = currentTarget.getBoundingClientRect();
    rect.left + window.scrollX;
    rect.top + window.scrollY + currentTarget.clientHeight;
  };
  return /* @__PURE__ */ jsxs(Container$4, { children: [
    /* @__PURE__ */ jsx("h3", { className: "video-match", children: props.subTitle }),
    /* @__PURE__ */ jsx("h2", { className: "video-title", children: props.title }),
    /* @__PURE__ */ jsx("p", { className: "video-description", children: props.description }),
    /* @__PURE__ */ jsxs("div", { className: "video-setting", children: [
      /* @__PURE__ */ jsx("span", { children: props.createdAt }),
      /* @__PURE__ */ jsxs("ul", { className: "video-share", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(BookmarkIcon, {}) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(ShareIcon, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "match-players-wrapper", children: /* @__PURE__ */ jsx(
      "ul",
      {
        className: "match-players",
        ref: (prev) => scrollMaskedHandlerRef(prev, "horizontal"),
        onScroll: (prev) => scrollMaskedHandler(prev, "horizontal"),
        children: props.players.map((player, index) => /* @__PURE__ */ jsx("li", { onClick: (event) => onClickProfile(player.playerId, event), children: player.playerName }, `${player.playerId}${index}`))
      }
    ) })
  ] });
}
const Container$4 = styled.div`
  padding: 0 20px 16px;

  .video-match {
    margin-bottom: 2px;
    ${FONTS.body4("regular")};
    color: var(--gray600);
  }
  .video-title {
    ${FONTS.body2("semibold")};
  }
  .video-description {
    margin: 12px 0 8px;
    color: var(--gray800);
    ${FONTS.body4("regular")};
  }
  .video-setting {
    margin: 16px 0 6px;
    padding-bottom: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray300);
    color: var(--gray700);
    ${FONTS.body4("regular")};

    .video-share {
      display: flex;
      gap: 12px;
      svg {
        width: 16px;
        height: 16px;
        fill: var(--gray700);
      }
    }
  }

  .match-players-wrapper {
    ${SCROLL_MASKED_GRADIENT("var(--background-light-rgb)")};
  }
  .match-players {
    display: flex;
    gap: 4px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    ${SCROLL_HIDE};

    li {
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      overflow: hidden;
      border: 1px solid var(--gray300);
      font-size: 1.4rem;
      font-weight: 400;
      letter-spacing: -0.5px;
    }
  }
`;
function VideoCommentItem(props) {
  const {
    commentValue,
    activeComment,
    setActiveComment,
    handleSeekTo,
    playerDuration,
    playerCurrentTime,
    nextCommentTime
  } = props;
  const thisTime = minSecToSecond(commentValue.time);
  const nextTime = nextCommentTime ? minSecToSecond(nextCommentTime) : playerDuration;
  const isActiveComment = thisTime <= playerCurrentTime && nextTime > playerCurrentTime;
  const onClickTimeFlag = (time) => {
    handleSeekTo(minSecToSecond(time));
  };
  return /* @__PURE__ */ jsxs(Container$3, { children: [
    /* @__PURE__ */ jsx(Time, { onClick: () => onClickTimeFlag(commentValue.time), children: /* @__PURE__ */ jsx("div", { className: isActiveComment ? "now-active" : "", children: commentValue.time }) }),
    /* @__PURE__ */ jsx(
      Contents$1,
      {
        ref: (ref) => {
          if (!ref) return;
          if (isActiveComment && activeComment !== commentValue.time) {
            ref.scrollIntoView({ block: "center", behavior: "smooth" });
            setActiveComment(commentValue.time);
          }
        },
        "data-info": `${commentValue.author} • ${formattedDate(commentValue.writtenAt, {
          displayDateType: ".",
          displayDayName: "hide",
          displayYear: "not-this-year",
          displayTime: "24h"
        })}`,
        children: /* @__PURE__ */ jsx("span", { className: "contents", children: commentValue.contents })
      }
    )
  ] });
}
const Container$3 = styled.li`
  position: relative;
  margin: 0 -16px;
  padding: 8px 16px 16px;
  display: flex;
  align-items: flex-start;
  gap: 10px;

  &::before {
    content: "";
    position: absolute;
    border-left: 1px dashed var(--gray500);
    width: 1px;
    height: calc(100% - 2px);
    left: calc(27px + 16px);
    top: 0;
  }

  &:first-of-type::before {
    top: 16px;
    height: calc(100% - 16px);
  }
  &:last-of-type::before {
    height: 16px;
  }
`;
const Time = styled.div`
  ${FONTS.body4("regular")};
  margin: 8px 0;
  height: 100%;
  z-index: 1;

  div {
    padding: 3px 0;
    width: 54px;
    text-align: center;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.05rem;
    font-weight: 800;
    border-radius: 24px;
    background-color: var(--background-light);
    user-select: none;
    word-break: keep-all;
    transition: transform 0.2s;
  }
  div.now-active {
    border: 1px solid transparent;
    background-color: var(--main);
    color: #fff;
  }
  &:active > div {
    transform: scale(0.95);
  }
`;
const Contents$1 = styled(BasicWhiteCard)`
  flex: 1;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 12px;
  transition: all 0.2s;
  ${FONTS.body3("regular")};
  line-height: 2.4rem;

  &::after {
    content: attr(data-info);
    display: block;
    opacity: 0.6;
    margin-top: 6px;
    ${FONTS.body4("regular")}
  }
`;
function VideoCommentInput({ articleId, currentTime }) {
  const [commentTime, setCommentTime] = useState("");
  return /* @__PURE__ */ jsxs(Container$2, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        "aria-label": "현재 재생시간 설정",
        className: `target-time ${commentTime !== "" ? "valid-time" : ""}`,
        onClick: () => setCommentTime(secondToMinSec(currentTime)),
        children: commentTime === "" ? "지 금" : commentTime
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: "target-comment",
        disabled: commentTime === "",
        placeholder: commentTime === "" ? "지금을 눌러 코멘트 시간 설정" : "여기에 코멘트 넣기..."
      }
    ),
    /* @__PURE__ */ jsx("button", { type: "button", className: "comment-submit", "aria-label": "댓글 등록", children: /* @__PURE__ */ jsx(SendIcon, { width: 20, height: 20 }) })
  ] });
}
const Container$2 = styled.div`
  display: flex;
  ${FONTS.body3("semibold")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;

  button.target-time {
    min-width: 52px;
    padding: 6px 2px;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.045rem;
    font-variant-numeric: tabular-nums;
    text-align: center;
    border-radius: 8px;

    color: var(--white);
    background-color: var(--gray500);
    &.valid-time {
      font-weight: 700;
      color: var(--main);
      background-color: rgba(var(--sub2-rgb), 0.7);
    }
  }

  .target-comment {
    width: calc(100% - 28px);
    padding: 6px 8px;
    font-size: 1.4rem;
    border-radius: 8px;
    border: 1px solid var(--primary300);
    ${TEXT_ACTIVE("var(--background-light)", { focus: true })};

    &:disabled {
      border: 1px solid var(--gray200);
      & + button.comment-submit > svg {
        fill: var(--gray400);
      }
    }
  }
  .comment-submit {
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      fill: var(--main);
    }
  }
`;
function PlayerController({
  currentTime,
  duration,
  playbackRate,
  handlePlaybackRate,
  playerState,
  handlePlayPause
}) {
  const handleTimeMS = (seconds) => {
    const hh = Math.floor(seconds / 3600);
    const mm = Math.floor(seconds % 3600 / 60) + hh * 60;
    const ss = seconds % 60;
    return { mm, ss };
  };
  const { mm: curMM, ss: curSS } = handleTimeMS(currentTime);
  const { mm: durMM, ss: durSS } = handleTimeMS(duration);
  return /* @__PURE__ */ jsxs(Container$1, { children: [
    /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsxs(NumberFlowGroup, { children: [
        /* @__PURE__ */ jsx(NumberFlow, { trend: 0, value: curMM, format: { minimumIntegerDigits: 2, maximumFractionDigits: 3 } }),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            prefix: ":",
            trend: 1,
            value: curSS,
            digits: { 1: { max: 5 } },
            format: { minimumIntegerDigits: 2 },
            willChange: true
          }
        )
      ] }),
      "/",
      /* @__PURE__ */ jsxs(NumberFlowGroup, { children: [
        /* @__PURE__ */ jsx(NumberFlow, { trend: 0, value: durMM, format: { minimumIntegerDigits: 2, maximumFractionDigits: 3 } }),
        /* @__PURE__ */ jsx(
          NumberFlow,
          {
            prefix: ":",
            trend: 1,
            value: durSS,
            digits: { 1: { max: 5 } },
            format: { minimumIntegerDigits: 2 }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        className: "playback-rate",
        onClick: () => {
          if (playbackRate === 1) {
            handlePlaybackRate(2);
          } else {
            handlePlaybackRate(1);
          }
        },
        children: [
          "x",
          playbackRate
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: `play-pause-btn ${playerState === 1 && "playing"}`,
        onClick: handlePlayPause,
        disabled: playerState === 3,
        children: playerState === 1 ? "일시정지" : playerState === 3 ? "버퍼링" : "재생"
      }
    )
  ] });
}
const Container$1 = styled.div`
  display: flex;
  padding: 0 2px;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  p {
    user-select: none;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.045rem;
    font-variant-numeric: tabular-nums;
  }
  button {
    padding: 6px 12px;
    font-size: 1.6rem;
    border-radius: 10px;
  }
  button.play-pause-btn {
    width: 82px;
    color: var(--white);
    background-color: var(--main);

    &:disabled {
      color: var(--gray500);
      background-color: var(--gray200);
    }
    &.playing {
      background-color: var(--warning500);
    }
  }

  button.playback-rate {
    flex: 1;
    margin: 0 8px;
    background-color: var(--gray200);
  }
`;
function VideoArticle() {
  const {
    articleId
  } = Route.useParams();
  useHeader({
    title: VIDEO_DATA.title
  });
  const youtubeRef = useRef(null);
  const containerRef = useRef(null);
  const [currentActiveComment, setCurrentActiveComment] = useState("");
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [clientWidth, setClientWidth] = useState({
    ready: false,
    width: 500
  });
  const VIDEO_SIZE = {
    width: showMiniPlayer ? clientWidth.width / 2 : clientWidth.width,
    height: showMiniPlayer ? Math.floor(clientWidth.width * (9 / 16)) / 2 : Math.floor(clientWidth.width * (9 / 16))
  };
  const {
    playerConnect,
    currentTime,
    duration,
    handleSeekTo,
    handlePlayPause,
    playerState,
    playbackRate,
    handlePlaybackRate,
    opts
  } = useYoutube(youtubeRef, {
    ...VIDEO_SIZE,
    controller: false
  });
  const handleScroll = useThrottle(() => {
    if (window.scrollY > VIDEO_SIZE.height * 1.1) {
      setShowMiniPlayer(true);
    } else {
      setShowMiniPlayer(false);
    }
  }, 50);
  useLayoutEffect(() => {
    if (containerRef.current) {
      setClientWidth({
        ready: true,
        width: containerRef.current.clientWidth
      });
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [containerRef.current]);
  return /* @__PURE__ */ jsxs(Container, { ref: containerRef, children: [
    /* @__PURE__ */ jsx(Player, { className: showMiniPlayer ? "mini" : "", height: VIDEO_SIZE.height, children: clientWidth.ready && /* @__PURE__ */ jsx(PlayerInner, { className: showMiniPlayer ? "mini" : "", children: /* @__PURE__ */ jsx(YouTube, { ref: youtubeRef, videoId: VIDEO_DATA.youtubeId, opts, ...playerConnect }) }) }),
    /* @__PURE__ */ jsxs(Contents, { children: [
      /* @__PURE__ */ jsx(PlayerTop, { children: /* @__PURE__ */ jsx(VideoInfo, { subTitle: VIDEO_DATA.subTitle, title: VIDEO_DATA.title, description: VIDEO_DATA.description, createdAt: VIDEO_DATA.createdAt, players: VIDEO_DATA.players }) }),
      /* @__PURE__ */ jsx(Comments, { children: VIDEO_COMMENTS.map((value, index) => /* @__PURE__ */ jsx(VideoCommentItem, { handleSeekTo, activeComment: currentActiveComment, setActiveComment: setCurrentActiveComment, playerCurrentTime: currentTime, playerDuration: duration, nextCommentTime: VIDEO_COMMENTS[index + 1]?.time, commentValue: value }, value.time)) }),
      /* @__PURE__ */ jsxs(Bottom, { children: [
        /* @__PURE__ */ jsx(PlayerController, { duration, currentTime, playerState, playbackRate, handlePlaybackRate, handlePlayPause }),
        /* @__PURE__ */ jsx(VideoCommentInput, { articleId, currentTime })
      ] })
    ] })
  ] });
}
const Container = styled(BaseContainer)`
  display: flex;
  flex-direction: column;
  padding: 0 16px 40px;
`;
const Player = styled.section`
  margin: 0 -16px;
  width: calc(var(--mobile-max-width));
  height: ${({
  height
}) => height}px;
  overflow: hidden;
  z-index: 10;
  &.mini {
    height: ${({
  height
}) => height * 2}px;
  }
`;
const PlayerInner = styled.div`
  &.mini {
    position: fixed;
    margin: 20px 16px 0;
    right: 50%;
    border-radius: 12px;
    overflow: hidden;
    transform: translateX(calc(50% + var(--mobile-max-width) / 4));
  }
`;
const Contents = styled.section`
  flex: 1;
`;
const PlayerTop = styled.div`
  display: flex;
  padding-top: 12px;
  margin-left: -16px;
  margin-right: -16px;
  flex-direction: column;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  gap: 16px;
  background: var(--background-light);
  box-shadow: var(--shadow-alpha20);
`;
const Comments = styled.ul`
  padding: 12px 16px;
  margin-left: -16px;
  margin-right: -16px;
`;
const Bottom = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  bottom: 0;
  width: var(--mobile-max-width);
  margin: 0 -16px;
  padding: 8px 14px calc(20px + env(safe-area-inset-bottom) / 2);
  border-top: 1px solid var(--gray100);
  background: var(--white);
  z-index: 10;
`;
export {
  VideoArticle as component
};
