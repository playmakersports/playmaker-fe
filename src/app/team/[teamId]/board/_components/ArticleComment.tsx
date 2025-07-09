import React from "react";
import clsx from "clsx";
import { colors, semantic } from "@/styles/color.css";
import { fonts } from "@/styles/fonts.css";
import { flexAlignCenter, flexColumnGap8, flexRowGap12, flexRowGap4, flexRowGap8 } from "@/styles/container.css";
import {
  commentInputBottomWrapper,
  commentInputContainer,
  commentInputStyle,
  commentItemHasReply,
  commentItemUserAvatar,
  commentListWrapper,
} from "./teamBoard.css";
import DropdownAction from "@/components/common/input/DropdownAction";

import MoreIcon from "@/assets/icon/common/MenuDots.svg";
import SendIcon from "@/assets/icon/common/filled/Send.svg";

type Props = {
  teamId: string | number;
  articleId: string | number;
  viewCount: number;
};
function ArticleComment(props: Props) {
  const { teamId, articleId, viewCount = 0 } = props;
  const hasSafeArea =
    Number(getComputedStyle(document.documentElement).getPropertyValue("--env-sab").replace("px", "")) ?? 0;

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
          <li className={flexColumnGap8}>
            <div className={clsx(flexAlignCenter, flexRowGap8)}>
              <span className={commentItemUserAvatar} />
              <span className={fonts.body4.medium} color={colors.gray800} style={{ flex: 1 }}>
                홍길동
              </span>
              <span className="menu">
                <DropdownAction
                  options={[
                    {
                      name: "수정",
                      action: () => console.log("수정"),
                    },
                    {
                      name: "삭제",
                      action: () => console.log("삭제"),
                    },
                  ]}
                >
                  <button type="button">
                    <MoreIcon width={20} height={20} />
                  </button>
                </DropdownAction>
              </span>
            </div>
            <div className={flexRowGap8}>
              <div className={commentItemHasReply} data-reply={true}></div>
              <p className={clsx(flexColumnGap8, fonts.body4.regular)}>
                <span>내용내용내용</span>
                <span className={semantic.description}>작성일</span>
              </p>
            </div>
          </li>
          <li className="item"></li>
          <li className="item"></li>
        </ul>
        <div className={commentInputBottomWrapper} data-safe-area={hasSafeArea > 0}>
          <div className={commentInputContainer}>
            <input type="text" className={commentInputStyle} placeholder="댓글을 입력해 주세요" />
            <button type="button">
              <SendIcon width={24} height={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleComment;
