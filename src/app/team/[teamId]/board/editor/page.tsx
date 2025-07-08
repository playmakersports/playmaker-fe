import React from "react";
import EditorView from "./EditorView";
import { Metadata } from "next";

type Props = {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const type = (await searchParams).type;
  const EDITOR_TYPE = {
    new: "글쓰기",
    edit: "글 수정",
  };
  return {
    title: EDITOR_TYPE[type as keyof typeof EDITOR_TYPE],
  };
}
async function TeamEditor({ params }: Props) {
  // (await params).teamId;
  // TODO : 팀 별 카테고리 받아와야 함
  const { teamId } = await params;

  return <EditorView teamId={teamId} />;
}

export default TeamEditor;
