import React from "react";
import Head from "next/head";
import { DEFAULT_HEAD_CONTENTS } from "@/constants/baseTag";

type HtmlHeadMetaTagType = {
  description: string;
  imageUrl?: string;
  author?: string;
  siteName?: string;
  publishedDate?: string;
  type?: "article" | "blog" | "music" | "video" | "website" | "profile";
};
type Props = {
  title: string;
  meta?: HtmlHeadMetaTagType;
};
// meta og:type https://ogp.me/#types

function MetaTitle({ title, meta }: Props) {
  return (
    <Head>
      {title !== "" ? <title>{title} | 플메</title> : <title>{DEFAULT_HEAD_CONTENTS.title}</title>}
      {meta && (
        <>
          <meta name="title">{title ?? DEFAULT_HEAD_CONTENTS.title}</meta>
          <meta property="og:title">{title ?? DEFAULT_HEAD_CONTENTS.title}</meta>
          <meta name="twitter:title">{title ?? DEFAULT_HEAD_CONTENTS.title}</meta>
          <meta name="description">{meta.description ?? DEFAULT_HEAD_CONTENTS.description}</meta>
          <meta property="og:description">{meta.description ?? DEFAULT_HEAD_CONTENTS.description}</meta>
          <meta name="twitter:description">{meta.description ?? DEFAULT_HEAD_CONTENTS.description}</meta>

          {meta.author && <meta name="og:article.author">{meta.author}</meta>}
          {meta.siteName && <meta name="og:site_name">{meta.siteName}</meta>}
          {meta.imageUrl && <meta property="og:image" content={meta.imageUrl} />}
          {meta.type && <meta property="og:type" content={meta.type} />}
        </>
      )}
    </Head>
  );
}

export default MetaTitle;
