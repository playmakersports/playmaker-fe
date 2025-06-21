"use client";
import clsx from "clsx";
import { useGet } from "@/apis/hook/query";
import { useParams } from "next/navigation";

import ArticleTop from "../_components/ArticleTop";
import ArticleReply from "../_components/ArticleReply";
import { boardAPI } from "@/apis/url";
import { TeamBoardItemType } from "@/types/team";
import Loading from "@/components/common/Loading";
import "@/styles/editor.css";
import { baseContainer, baseDividedLineChild, flexColumnGap16 } from "@/styles/container.css";

function ArticleId() {
  const articleId = useParams()["articleId"] as string;
  const { data } = useGet<TeamBoardItemType>(boardAPI.DETAIL, { boardId: articleId });

  if (!data)
    return (
      <div className={baseContainer}>
        <Loading page />
      </div>
    );

  return (
    <section className={clsx(baseContainer, flexColumnGap16)}>
      <ArticleTop title={data.title} boardType={data.boardType} createBy={data.createBy} createAt={data.createAt} />
      <article
        id="tiptap_Editor"
        dangerouslySetInnerHTML={{
          __html: data?.content.replace(/<(iframe|script)[\s\S]*?<\/\1>/gi, ""),
        }}
      />
      <div className={baseDividedLineChild} />
      <ArticleReply teamId={data.teamId} articleId={articleId} viewCount={data.viewCount} />
    </section>
  );
}

export default ArticleId;
