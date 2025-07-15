import React, { useState } from "react";
import clsx from "clsx";
import { axiosCommentDelete, useCommentGet, useCommentPost } from "@/apis/hook/team";
import { useToast } from "@/hook/useToast";

import { colors, semantic } from "@/styles/color.css";
import { fonts } from "@/styles/fonts.css";
import { flexAlignCenter, flexColumnGap8, flexRowGap12, flexRowGap4, flexRowGap8 } from "@/styles/container.css";
import {
  boardEmptyCommentArea,
  commentInputBottomWrapper,
  commentInputContainer,
  commentInputStyle,
  commentItemHasReply,
  commentItemUserAvatar,
  commentListWrapper,
} from "./teamBoard.css";
import DropdownAction from "@/components/common/input/DropdownAction";
import Spinner from "@/components/common/Spinner";
import MoreIcon from "@/assets/icon/common/MenuDots.svg";
import SendIcon from "@/assets/icon/common/filled/Send.svg";
import { formattedDate, parsedServerDateTime } from "@/util/date";

type Props = {
  teamId: string | number;
  articleId: string | number;
  viewCount: number;
};
function ArticleComment(props: Props) {
  const { teamId, articleId, viewCount = 0 } = props;
  const [comment, setComment] = useState("");
  const toast = useToast();
  const { data, isLoading, refetch } = useCommentGet(`${articleId}`);
  const { mutate, isPending } = useCommentPost();

  const hasSafeArea =
    Number(getComputedStyle(document.documentElement).getPropertyValue("--env-sab").replace("px", "")) ?? 0;

  const onSubmitComment = () => {
    mutate(
      {
        data: {
          teamId,
          teamBoardId: articleId,
          content: comment,
        },
      },
      {
        onSuccess: () => {
          toast.trigger("새 댓글을 달았어요.");
          setComment("");
          refetch();
        },
      }
    );
  };

  return (
    <>
      <div className={clsx(flexRowGap12, fonts.body4.medium)}>
        <span className={clsx(flexRowGap4, colors.gray500)}>
          댓글<span className={colors.gray600}>0</span>
        </span>
        <span className={clsx(flexRowGap4, colors.gray500)}>
          조회<span className={colors.gray600}>{viewCount}</span>
        </span>
      </div>
      <div style={{ position: "inherit", flex: 1, display: "flex", flexDirection: "column" }}>
        <ul className={commentListWrapper}>
          {data?.map((comment) => (
            <li key={comment.id} className={flexColumnGap8}>
              <div className={clsx(flexAlignCenter, flexRowGap8)}>
                <span
                  className={commentItemUserAvatar}
                  style={{ backgroundImage: `url(${comment.createBy.imageUrl})` }}
                />
                <span className={fonts.body4.medium} color={colors.gray800} style={{ flex: 1 }}>
                  {comment.createBy.memberName}
                </span>
                {comment.author && (
                  <span className="menu">
                    <DropdownAction
                      options={[
                        {
                          name: "수정",
                          action: () => console.log("수정"),
                        },
                        {
                          name: "삭제",
                          action: async () => {
                            toast.trigger("삭제 중입니다. 잠시만 기다려주세요.", { type: "info" });
                            const response = await axiosCommentDelete(`${comment.id}`);
                            if (response.status === 200) {
                              refetch();
                              toast.trigger("댓글을 삭제했어요.", { type: "success" });
                            }
                          },
                        },
                      ]}
                    >
                      <button type="button">
                        <MoreIcon width={20} height={20} />
                      </button>
                    </DropdownAction>
                  </span>
                )}
              </div>
              <div className={flexRowGap8}>
                <div className={commentItemHasReply} data-reply={false}></div>
                <p className={clsx(flexColumnGap8, fonts.body4.regular)}>
                  <span>{comment.content}</span>
                  <span className={semantic.description}>
                    {formattedDate(new Date(parsedServerDateTime(comment.createAt)), {
                      displayDateType: "kr",
                      displayDayName: "hide",
                      displayYear: "not-this-year",
                      displayTime: "12h-kr",
                      displaySimpleKR: true,
                    })}
                  </span>
                </p>
              </div>
            </li>
          ))}
          {(data?.length === 0 || !data) && (
            <div className={boardEmptyCommentArea}>
              {isLoading ? <Spinner size={40} /> : `댓글이 없습니다.\n첫 번째 댓글의 주인공이 되어보세요!`}
            </div>
          )}
        </ul>
        <div className={commentInputBottomWrapper} data-safe-area={hasSafeArea > 0}>
          <div className={commentInputContainer}>
            <input
              type="text"
              className={commentInputStyle}
              disabled={isPending}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력해 주세요"
            />
            {isPending ? (
              <Spinner size={26} />
            ) : (
              <button type="button" onClick={onSubmitComment}>
                <SendIcon width={26} height={26} />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleComment;
