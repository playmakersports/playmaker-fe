import React from "react";
import styled from "@emotion/styled";
import useBgWhite from "@/hook/useBgWhite";
import { usePageTitle } from "@/hook/usePageTitle";

import { BaseContainer } from "@/components/common/Container";

function TeamMatchUp() {
  useBgWhite();
  usePageTitle({
    subTitle: "JUMP",
    title: "교류전 제안 현황",
  });

  return <Container>TeamMatchUp</Container>;
}

const Container = styled(BaseContainer)`
  padding-bottom: calc(20px + var(--env-sab));
`;

export default TeamMatchUp;
