import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import EditorView from "../_components/EditorView";

export const Route = createFileRoute("/team/$teamId/board/editor/")({
  component: TeamEditor,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      type: (search.type as string) || "new",
    };
  },
  head: ({ search }) => {
    const EDITOR_TYPE: Record<string, string> = {
      new: "글쓰기",
      edit: "글 수정",
    };
    return {
      meta: [{ title: EDITOR_TYPE[search.type] || "글쓰기" }],
    };
  },
});

function TeamEditor() {
  const { teamId } = Route.useParams();
  // TODO : 팀 별 카테고리 받아와야 함

  return <EditorView teamId={teamId} />;
}
