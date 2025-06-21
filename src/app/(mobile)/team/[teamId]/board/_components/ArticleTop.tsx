"use client";
import React from "react";
import { articleDetailHeader } from "./teamBoard.css";
import { formatDate } from "date-fns";
import { useHeader } from "@/hook/useHeader";
import Image from "next/image";
import { fonts } from "@/styles/fonts.css";
import clsx from "clsx";
import { semantic } from "@/styles/color.css";
import { flexRowGap4 } from "@/styles/container.css";

type Props = {
  title: string;
  createBy: {
    memberId: number | string;
    memberName: string;
    imageUrl: string;
  };
  boardType: string | number;
  createAt: string | Date;
};
function ArticleTop(props: Props) {
  const BOARD_TYPE_TITLE: Record<string, string> = {
    1: "공지사항",
    2: "자유게시판",
    3: "갤러리",
  };
  const { title, boardType, createBy, createAt } = props;
  useHeader({
    title: BOARD_TYPE_TITLE[boardType] ?? "게시판",
    options: { titleAlign: "center" },
  });

  return (
    <div className={articleDetailHeader.container}>
      <div className={articleDetailHeader.info}>
        <div style={{ borderRadius: "50%", overflow: "hidden", width: "36px", height: "36px" }}>
          <Image src={createBy.imageUrl} alt={createBy.memberName} width={36} height={36} />
        </div>
        <div>
          <div className={fonts.caption1.medium}>{createBy.memberName}</div>
          <div className={clsx(semantic.description, flexRowGap4)}>
            {createAt && <span className="create-at">{formatDate(createAt, "yyyy-mm-dd")}</span>}
            {createAt && <span className="create-at-time">{formatDate(createAt, "HH:mm")}</span>}
          </div>
        </div>
      </div>
      <h3 className={articleDetailHeader.title}>{title}</h3>
    </div>
  );
}

export default ArticleTop;
