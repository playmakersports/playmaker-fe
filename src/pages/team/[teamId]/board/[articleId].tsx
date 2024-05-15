import React from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { BaseContainer } from "@/components/common/Container";
import ArticleHead from "@/components/Article/Head";
import { EDITOR_ARTICLE_STYLE } from "@/styles/editor";

function ArticleId() {
  const router = useRouter();
  const articleId = router.query.articleId;

  return (
    <Container>
      <ArticleHead
        category="공지사항"
        title="5월 정기 경기 일정 알려드립니다."
        createAt="2024-04-20"
        writer="관리자"
        viewCount={20}
      />
      <Contents
        dangerouslySetInnerHTML={{
          __html: MOCK.replace(
            /<iframe[\s\S]*?<\/iframe>/gi,
            `<p class="wrong-iframe">[부적절한 코드가 감지되어 삭제되었습니다.]</p>`
          ),
        }}
      ></Contents>
    </Container>
  );
}

const Container = styled(BaseContainer)``;
const Contents = styled.article`
  padding: 0 8px;
  ${EDITOR_ARTICLE_STYLE}
`;

const MOCK = ` <p>안녕하세요 손수철입니다.</p>
  <p>이번주 경기 일정을 알려드리겠습니다.</p>
  <p></p>
  <blockquote>
    <h3>
      <strong>일정</strong>
    </h3>
  </blockquote>
  <p>
    2024년
    <strong>
      <mark>5월 15일</mark>
    </strong>
    16:00
  </p>
  <p>2024년 5월 25일 21:00</p>
  <p></p>
  <ul>
    <li>
      <p>하나</p>
    </li>
  </ul>
  <p>늦지 말고 모두 참석해주세요.</p>
  <p></p>
  <iframe>이상한 코드</iframe>
  <p>감사합니다.</p>
  <p>손수철 드림.</p>`;
export default ArticleId;
