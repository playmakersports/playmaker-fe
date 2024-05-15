import React from "react";
import styled from "@emotion/styled";
import { FONTS } from "@/styles/common";

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
      <Category>{category}</Category>
      <Title>{title}</Title>
      <Info>
        <p>
          {writer} · {createAt}
        </p>
        <p>조회 {viewCount}</p>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
  padding: 0 8px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;
const Category = styled.p`
  margin-bottom: 4px;
  ${FONTS.MD1};
`;
const Title = styled.h2`
  margin-bottom: 12px;
  ${FONTS.HEAD1};
`;
const Info = styled.div`
  ${FONTS.MD2};
  display: flex;
  justify-content: space-between;
  opacity: 0.8;
`;

export default ArticleHead;
