import React, { useState } from "react";
import useModal from "@/hook/useModal";
import Image from "next/image";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import {
  flexAlignCenter,
  flexColumnGap10,
  flexColumnGap12,
  flexColumnGap20,
  flexColumnGap4,
  flexRowGap10,
  flexRowGap12,
  flexRowGap4,
  flexRowGap8,
  flexSpaceBetween,
} from "@/styles/container.css";
import { scheduleDetailCommentsWrapper, scheduleListItemProfile, scheduleListItemWrapper } from "./calendar.css";

import Badge from "@/components/common/Badge";
import { SelectVoteOption } from "../../_components/RecentVoteCard";

import { ScheduleItemType } from "./ScheduleList";
import CheckIcon from "@/assets/icon/common/Check.svg";
import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import LocationPinIcon from "@/assets/icon/common/outlined/LocationPin.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";
import DownArrow from "@/assets/icon/arrow/DownArrow.svg";
import SendIcon from "@/assets/icon/common/filled/Send.svg";
import { commentContainer, commentInput } from "@/components/common/input/container.css";
import DropdownAction from "@/components/common/input/DropdownAction";

function ScheduleListArticle(props: ScheduleItemType) {
  const { scheduleId, category, title, place, date, time, people } = props;
  const { ModalComponents, showModal } = useModal();

  const [foldComments, setFoldComments] = useState(true);

  const categoryColor: Record<string, any> = {
    훈련: "gray",
    교류전: "primary",
    팀: "info",
    대회: "purple",
  };

  return (
    <>
      <li
        key={scheduleId}
        className={clsx(scheduleListItemWrapper, flexColumnGap12)}
        data-type={category}
        onClick={() => showModal()}
      >
        <div className={clsx(flexRowGap8, flexAlignCenter)}>
          <Badge type={categoryColor[category]} fillType="light" size="medium">
            {category}
          </Badge>
          <span className={fonts.body4.semibold} style={{ color: "var(--gray700)" }}>
            {title}
          </span>
        </div>
        <div className={clsx(flexColumnGap4, fonts.caption1.regular)} style={{ color: "var(--gray500)" }}>
          <span className={flexRowGap4}>
            <LocationPinIcon width={18} height={18} fill="var(--gray500)" />
            {place}
          </span>
          <span className={flexRowGap4}>
            <ClockIcon width={18} height={18} fill="var(--gray500)" />
            {time}
          </span>
        </div>
        <div className={flexAlignCenter}>
          {people.slice(0, 5).map((person, scheduleIndex) => (
            <div
              key={person.userId}
              className={scheduleListItemProfile}
              style={{
                backgroundImage: `url(${person.img})`,
                zIndex: people.length - scheduleIndex,
              }}
            >
              <span className="blind">{person.username}</span>
            </div>
          ))}
          <p className={fonts.body4.medium} style={{ color: "var(--gray500)", marginLeft: "8px" }}>
            {people.length > 5 ? `+${people.length - 5}` : ""}
          </p>
        </div>
      </li>

      <ModalComponents
        onClose={() => {
          setFoldComments(true);
        }}
        draggable="all"
        buttons={foldComments ? [{ name: "경기 내용 보러가기", onClick: () => {}, mode: "primary" }] : undefined}
      >
        <div className={flexColumnGap20}>
          <div
            className={flexColumnGap20}
            style={{
              display: foldComments ? "flex" : "none",
            }}
          >
            <div className={flexColumnGap12}>
              <div>
                <Badge size="medium" type={categoryColor[category]} fillType="light">
                  {category}
                </Badge>
              </div>
              <div className={flexColumnGap4} style={{ gap: "8px", color: "var(--gray700)" }}>
                <div className={fonts.body2.semibold}>{title}</div>
                <div className={fonts.body4.regular}>
                  부원들끼리 서초구 종합 운동장에 모여 리그 챔피언 배구 경기를 관전합니다. 어떻게 경기가 진행되는지 잘
                  살펴봅시다!
                </div>
              </div>
            </div>

            <div className={flexColumnGap12}>
              <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
                <CalendarIcon width={20} height={20} fill="var(--gray500)" /> {date}
              </div>
              <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
                <LocationPinIcon width={20} height={20} fill="var(--gray500)" /> {place}
              </div>
              <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
                <ClockIcon width={20} height={20} fill="var(--gray500)" /> {time}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--gray200)",
              }}
            />
            <div className={flexColumnGap10}>
              <div className={flexSpaceBetween}>
                <p className={fonts.body4.medium} style={{ color: "var(--gray700)" }}>
                  참석 여부
                </p>
                <div className={flexRowGap12} style={{ color: "var(--gray700)" }}>
                  <DropdownAction
                    maxHeight="200px"
                    options={people.map((person) => ({
                      name: (
                        <p className={flexAlignCenter}>
                          <img
                            src={person.img}
                            alt={person.username}
                            style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
                          />
                          {person.username}
                        </p>
                      ),
                      action: () => {},
                    }))}
                  >
                    <div className={flexAlignCenter} style={{ cursor: "pointer" }}>
                      <span className={flexRowGap4}>
                        <span className={fonts.body4.medium}>참석</span>{" "}
                        <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                          18
                        </span>
                      </span>
                      <DownArrow width={24} height={24} fill="var(--gray600)" />
                    </div>
                  </DropdownAction>

                  <DropdownAction
                    maxHeight="200px"
                    options={people.map((person) => ({
                      name: (
                        <p className={flexAlignCenter}>
                          <img
                            src={person.img}
                            alt={person.username}
                            style={{ width: "20px", height: "20px", borderRadius: "50%", marginRight: "8px" }}
                          />
                          {person.username}
                        </p>
                      ),
                      action: () => {},
                    }))}
                  >
                    <div className={flexAlignCenter} style={{ cursor: "pointer" }}>
                      <span className={flexRowGap4}>
                        <span className={fonts.body4.medium}>불참석</span>{" "}
                        <span className={fonts.body4.medium} style={{ color: "var(--primary500)" }}>
                          8
                        </span>
                      </span>
                      <DownArrow width={24} height={24} fill="var(--gray600)" />
                    </div>
                  </DropdownAction>
                </div>
              </div>

              <div className={flexRowGap8}>
                <SelectVoteOption>
                  <input style={{ visibility: "hidden" }} type="radio" name="vote" />
                  <div className="checkbox">
                    <CheckIcon width={20} height={20} />
                  </div>
                  <span className={fonts.body4.medium}>참석</span>
                </SelectVoteOption>

                <SelectVoteOption>
                  <input style={{ visibility: "hidden" }} type="radio" name="vote" />
                  <div className="checkbox">
                    <CheckIcon width={20} height={20} />
                  </div>
                  <span className={fonts.body4.medium}>불참석</span>
                </SelectVoteOption>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--gray200)",
              }}
            />
          </div>

          <div className={flexColumnGap20}>
            <div className={flexSpaceBetween}>
              <p className={fonts.body4.medium} style={{ color: "var(--gray700)" }}>
                댓글 <span style={{ color: "var(--gray400)" }}>({comments.length}개)</span>
              </p>
              <button
                type="button"
                className={fonts.body4.regular}
                style={{ color: "var(--gray700)", textDecoration: "underline" }}
                onClick={() => setFoldComments((prev) => !prev)}
              >
                {foldComments ? "펼쳐보기" : "간략히"}
              </button>
            </div>

            <div
              className={clsx(flexColumnGap20, scheduleDetailCommentsWrapper, "scrollable-container")}
              data-fold={foldComments}
            >
              {comments.map((comment) => (
                <div className={flexRowGap10} key={comment.commentsId}>
                  <Image
                    src={comment.profileImg}
                    alt=""
                    aria-disabled={true}
                    width={28}
                    height={28}
                    style={{ borderRadius: "50%" }}
                  />
                  <div className={flexColumnGap4} style={{ gap: "6px", flex: 1, color: "var(--gray700)" }}>
                    <div className={flexSpaceBetween}>
                      <div className={fonts.body4.semibold}>{comment.name}</div>
                      <div
                        className={clsx(fonts.caption1.regular, flexRowGap4, flexAlignCenter)}
                        style={{ color: "var(--gray400)" }}
                      >
                        <span>{comment.date}</span>
                        <DropdownAction
                          icon={true}
                          options={[
                            { name: "수정", action: () => {} },
                            { name: "삭제", action: () => {} },
                          ]}
                        />
                      </div>
                    </div>
                    <div className={fonts.body4.regular}>{comment.text}</div>
                  </div>
                </div>
              ))}
            </div>

            {!foldComments && (
              <div className={commentContainer} style={{ marginBottom: "-20px" }}>
                <input type="text" className={commentInput} placeholder="댓글을 입력해 주세요" />
                <SendIcon fill="var(--gray300)" width={24} height={24} />
              </div>
            )}
          </div>
        </div>
      </ModalComponents>
    </>
  );
}

const comments = [
  {
    commentsId: "1245",
    profileImg: "https://picsum.photos/seed/picsum/100",
    name: "홍길동",
    date: "2025-05-20 22:50",
    text: "서초 종합 운동장 입구에서 만나나요? 서초역에서 만나서 같이 가실분?",
  },
  {
    commentsId: "16245",
    profileImg: "https://picsum.photos/seed/picsum/40",
    name: "김영희",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "616245",
    profileImg: "https://picsum.photos/seed/picsum/40",
    name: "김영희",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "1025",
    profileImg: "https://picsum.photos/seed/picsum/10",
    name: "김영희",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "87975",
    profileImg: "https://picsum.photos/seed/picsum/40",
    name: "김이프",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "17055",
    profileImg: "https://picsum.photos/seed/picsum/10",
    name: "김영희",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "9875",
    profileImg: "https://picsum.photos/seed/picsum/40",
    name: "김이프",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "19905",
    profileImg: "https://picsum.photos/seed/picsum/10",
    name: "김영희",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
  {
    commentsId: "41975",
    profileImg: "https://picsum.photos/seed/picsum/40",
    name: "김이프",
    date: "2025-05-20 22:57",
    text: "저 나중에 그 근처에서 같이 가니깐요~",
  },
];

export default ScheduleListArticle;
