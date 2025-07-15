"use client";
import clsx from "clsx";
import { useGet } from "@/apis/hook/query";
import { useParams } from "next/navigation";

import "@/styles/editor.css";
import Loading from "@/components/common/Loading";
import ArticleTop from "../_components/ArticleTop";
import ArticleReply from "../_components/ArticleComment";
import { boardAPI } from "@/apis/url";
import { TeamBoardItemType } from "@/types/team";
import { baseContainer, baseDividedLineChild, flexColumnGap4 } from "@/styles/container.css";
import ImagesGrid from "../_components/ImagesGrid";

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
    <section
      className={clsx(baseContainer, flexColumnGap4)}
      style={{
        minHeight: "calc(100vh - var(--safe-area-top)",
        paddingBottom: "var(--safe-bottom)",
        gap: 0,
      }}
    >
      <ArticleTop title={data.title} boardType={data.boardType} createBy={data.createBy} createAt={data.createAt} />
      <article
        id="tiptap_Editor"
        dangerouslySetInnerHTML={{
          __html: data?.content
            .replace(/<(iframe|script)[\s\S]*?<\/\1>/gi, "")
            .replace(
              /(https?:\/\/[^\s<]+)/g,
              '<a href="$1" class="editor-link" target="_blank" rel="noopener noreferrer">$1</a>'
            ),
        }}
      />
      {data.imgUrl.length > 0 && <ImagesGrid images={data.imgUrl} />}
      <div className={baseDividedLineChild} style={{ margin: "16px -16px" }} />
      <ArticleReply teamId={data.teamId} articleId={articleId} viewCount={data.viewCount} />
    </section>
  );
}

export default ArticleId;
