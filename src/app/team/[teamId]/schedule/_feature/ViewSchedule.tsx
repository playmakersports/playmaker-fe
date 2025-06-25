import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import useModal from "@/hook/useModal";

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
import { commentContainer, commentInput } from "@/components/common/input/container.css";
import { scheduleDetailCommentsWrapper } from "../_components/calendar.css";
import DropdownAction from "@/components/common/input/DropdownAction";
import { SelectVoteOption } from "../../_components/RecentVoteCard";
import Badge from "@/components/common/Badge";

import CheckIcon from "@/assets/icon/common/Check.svg";
import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import LocationPinIcon from "@/assets/icon/common/outlined/LocationPin.svg";
import ClockIcon from "@/assets/icon/common/outlined/Clock.svg";
import DownArrow from "@/assets/icon/arrow/DownArrow.svg";
import SendIcon from "@/assets/icon/common/filled/Send.svg";
import DeleteIcon from "@/assets/icon/common/outlined/Delete.svg";
import PencilIcon from "@/assets/icon/common/outlined/Pencil.svg";
import { scheduleDetailDelEditButton } from "../_components/schedule.css";

function ViewSchedule({ scheduleId }: { scheduleId?: string | null }) {
  const router = useRouter();
  const teamId = useParams()["teamId"];
  const { ModalComponents, showModal } = useModal();
  const [foldComments, setFoldComments] = useState(true);
  const isOpenRef = useRef(false);

  const categoryColor: Record<string, any> = {
    훈련: "gray",
    교류전: "primary",
    팀: "info",
    대회: "purple",
  };

  useEffect(() => {
    if (!isOpenRef.current) {
      showModal();
      isOpenRef.current = true;
    }
  }, []);

  const data = {
    scheduleId: "1",
    category: "훈련",
    title: "훈련 1",
    place: "장소 1",
    date: "2025-05-26",
    time: "15:00",
    people: [
      { userId: "1", username: "홍길동", img: "https://picsum.photos/seed/picsum/300" },
      { userId: "2", username: "김철수", img: "https://picsum.photos/seed/picsum/300" },
    ],
    comments: [
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
    ],
  };

  return (
    <ModalComponents
      onClose={() => {
        setFoldComments(true);
        router.replace(`/team/${teamId}/schedule`);
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
            <div className={clsx(flexSpaceBetween, flexAlignCenter)}>
              <Badge size="medium" type={categoryColor[data?.category]} fillType="light">
                {data?.category}
              </Badge>
              <div className={clsx(flexRowGap12, flexAlignCenter)}>
                <button
                  type="button"
                  className={scheduleDetailDelEditButton}
                  onClick={() => {
                    router.push(`/team/${teamId}/schedule?feat=edit|${scheduleId}`);
                  }}
                >
                  <PencilIcon width={24} height={24} fill="var(--gray700)" />
                </button>
                <button type="button" className={scheduleDetailDelEditButton}>
                  <DeleteIcon width={24} height={24} fill="var(--gray700)" />
                </button>
              </div>
            </div>
            <div className={flexColumnGap4} style={{ gap: "8px", color: "var(--gray700)" }}>
              <div className={fonts.body2.semibold}>{data?.title}</div>
              <div className={fonts.body4.regular}>
                부원들끼리 서초구 종합 운동장에 모여 리그 챔피언 배구 경기를 관전합니다. 어떻게 경기가 진행되는지 잘
                살펴봅시다!
              </div>
            </div>
          </div>

          <div className={flexColumnGap12}>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <CalendarIcon width={20} height={20} fill="var(--gray500)" /> {data?.date}
            </div>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <LocationPinIcon width={20} height={20} fill="var(--gray500)" /> {data?.place}
            </div>
            <div className={clsx(flexRowGap8, fonts.body4.regular)} style={{ color: "var(--gray500)" }}>
              <ClockIcon width={20} height={20} fill="var(--gray500)" /> {data?.time}
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
                  options={data?.people.map((person) => ({
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
                  options={data?.people.map((person) => ({
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
              댓글 <span style={{ color: "var(--gray400)" }}>({data?.comments.length}개)</span>
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
            {data?.comments.map((comment) => (
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
  );
}

export default ViewSchedule;
