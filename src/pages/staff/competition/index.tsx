import React from "react";
import styled from "@emotion/styled";

import { FONTS } from "@/styles/common";

function CompetitionViewPC() {
  const COMPETITION = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <Aside>
        <div>필터 영역</div>
        <List>
          {COMPETITION.map((value) => (
            <Item key={value}>대회{value}</Item>
          ))}
        </List>
      </Aside>
      <Detail>상세정보</Detail>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  gap: 24px;
  height: 100%;
  overflow: hidden;
`;
const Aside = styled.aside`
  ${FONTS.MD1W500};
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  min-width: 280px;
  border-right: 1px solid var(--gray7);
`;
const List = styled.ul`
  flex: 1;
  display: flex;
  margin-top: 16px;
  padding: 12px 20px 32px 0;
  flex-direction: column;
  gap: 12px;
  overflow-y: scroll;
`;
const Item = styled.li`
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: var(--background-light);
  border: 1px solid var(--gray7);
  &:hover {
    border: 1px solid var(--main);
  }
`;
const Detail = styled.article`
  ${FONTS.MD2};
  flex: 1;
  padding-top: 20px;
  font-weight: 400;
`;

export default CompetitionViewPC;
