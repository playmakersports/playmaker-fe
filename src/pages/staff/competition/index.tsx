import React from "react";
import styled from "@emotion/styled";

import { FONTS } from "@/styles/common";
import DateCalendarInput from "@/components/common/DateCalendarInput";
import { BasicInput } from "@/components/common/Input";
import Button from "@/components/common/Button";

function CompetitionViewPC() {
  const COMPETITION = [1, 2, 3, 4, 5, 6];
  return (
    <Container>
      <Aside>
        <Button type="button" mode="MAIN" onClick={() => {}} fullWidth>
          새 대회 만들기
        </Button>
        <Filter>
          <BasicInput type="text" placeholder="대회명" />
          <DateCalendarInput placeholder="대회 날짜" />
          <Button type="button" mode="OPTION2" onClick={() => {}} fullWidth borderType autoHeight>
            찾기
          </Button>
        </Filter>
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
  padding: 20px 20px 0 4px;
  flex-direction: column;
  min-width: 280px;
  border-right: 1px solid var(--gray300);
`;
const Filter = styled.div`
  display: flex;
  padding: 12px 0 0 0;
  flex-direction: column;
  gap: 8px;
`;
const List = styled.ul`
  flex: 1;
  display: flex;
  margin-top: 16px;
  padding: 12px 0 32px 0;
  flex-direction: column;
  gap: 12px;
  overflow-y: scroll;
`;
const Item = styled.li`
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: var(--background-light);
  border: 1px solid var(--gray300);
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
