import React from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";
import { formattedDate } from "@/util/date";

type Props = {
  category: string;
  title: string;
  writer: string;
  viewCount: number;
  createAt: string;
};

function ArticleHead(props: Props) {
  const { category, title, writer, viewCount, createAt } = props;

  return (
    <Container>
      <Title>{title}</Title>
      <Info>
        <p>
          {writer} |{" "}
          {formattedDate(createAt, {
            displayDateType: ".",
            displayYear: "always",
            displayDayName: "hide",
          })}
        </p>
        <p>조회 {viewCount}</p>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
  padding: 0 4px 12px;
  border-bottom: 1px solid var(--gray200);
`;
const Title = styled.h2`
  margin-bottom: 12px;
  ${FONTS.HEAD1};
`;
const Info = styled.div`
  ${FONTS.MD2};
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  color: var(--gray600);
`;

export default ArticleHead;
