import React from "react";
import { useRouter } from "next/router";
import TeamLayout from "@/src/components/Team/Layout";

function Article() {
    const router = useRouter();
    const teamId = router.query.id;
    const page = router.query.page;
    const teamColor = "#237c50";

    return (
        <TeamLayout teamName="팀 이름" title="글 제목" color={teamColor}>
            <p>Article</p>
        </TeamLayout>
    );
}

export default Article;
