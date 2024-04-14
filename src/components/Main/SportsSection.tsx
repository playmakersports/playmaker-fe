import React from "react";
import styled from "styled-components";

import MainTab from "./MainTab";
import { BasicWhiteSection } from "../common/Card";

function SportsSection() {
  return (
    <Container>
      <MainTab
        items={[
          { value: "volley", name: "배구" },
          { value: "basketball", name: "농구" },
          { value: "football", name: "축구" },
          { value: "badminton", name: "배드민턴" },
        ]}
      />
      SportsSection
    </Container>
  );
}

const Container = styled(BasicWhiteSection)`
  margin: 0 -16px;
  padding: 0 16px 16px;
`;

export default SportsSection;
