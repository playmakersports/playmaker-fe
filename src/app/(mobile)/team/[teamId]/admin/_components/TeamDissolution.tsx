import React from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { usePopup } from "@/components/common/global/PopupProvider";
import { useAuth } from "@/session/useAuth";

import { baseBackendURL } from "@/apis";
import Button from "@/components/common/Button";

function TeamDissolution() {
  const popup = usePopup();
  const router = useRouter();
  const teamId = useParams()["teamId"] as string;
  const { accessToken } = useAuth();

  const handleTeamDissolution = async () => {
    const confirm = await popup?.confirm(
      `해체된 팀은 복구할 수 없습니다.\n신중하게 결정해주세요. 팀을 해체하시겠습니까?`,
      {
        title: "팀 해체",
        buttonText: { yes: "네, 해체합니다" },
        showIcon: true,
        color: "red",
      }
    );

    if (confirm) {
      axios
        .delete(`${baseBackendURL}/api/teams/${teamId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then(() => {
          popup?.alert("", { title: `팀이 해체되었습니다.\n홈 화면으로 이동합니다.` });
          router.push("/");
        })
        .catch((error) => {
          const status = error.response?.status;
          if (status === 403) {
            popup?.alert("", { title: "팀 해체 권한이 없습니다.[403]" });
          }
        });
    }
  };

  return (
    <Button type="button" mode="red" fillType="light" onClick={handleTeamDissolution}>
      팀 해체하기
    </Button>
  );
}

export default TeamDissolution;
