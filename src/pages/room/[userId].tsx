import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { usePageTitle } from "@/hook/usePageTitle";

import { BaseContainer } from "@/components/common/Container";
import SettingsIcon from "@/assets/icon/global/Settings.svg";

function UserPage() {
  const router = useRouter();
  const userId = router.query.userId;

  usePageTitle({
    subIcons: [
      {
        svgIcon: <SettingsIcon />,
        linkTo: `/team/${userId}/admin`,
        description: "내 정보 수정",
      },
    ],
  });
  return <Container>UserPage</Container>;
}

const Container = styled(BaseContainer)``;

export default UserPage;
