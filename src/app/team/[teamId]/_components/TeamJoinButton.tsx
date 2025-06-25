"use client";
import React from "react";
import Button from "@/components/common/Button";
import FloatButton from "@/components/common/FloatButton";
import useModal from "@/hook/useModal";
import { TextArea } from "@/components/common/TextArea";
import { usePost } from "@/apis/hook/query";
import { teamJoinAPI } from "@/apis/url";
import { usePopup } from "@/components/common/global/PopupProvider";
import { formatDate } from "date-fns";

function TeamJoinButton({ teamId }: { teamId: string }) {
  const { mutate } = usePost(teamJoinAPI.REQUEST);
  const popup = usePopup();
  const { showModal, ModalComponents, modalState } = useModal({ key: "join-request-modal" });

  const onSubmitJoin = (close: () => void) => {
    mutate(
      {
        data: {
          teamId,
          message: modalState?.["join-request-modal"],
        },
      },
      {
        onSuccess: () => {
          popup?.alert(`가입 신청을 해주셔서 감사합니다.\n운영진의 승인까지 잠시만 기다려주세요.`, {
            title: "가입 신청 완료",
            color: "primary",
            showIcon: true,
          });
          close();
        },
        onError: (err) => {
          if (err.response?.data) {
            const content =
              err.response.data.error === "E415"
                ? "운영진의 가입 승인까지 잠시만 기다려주세요."
                : `잠시후 다시 시도해주세요. [${err.status}]`;
            popup?.alert(`${content}\nOccurred Date ${formatDate(new Date(), "yyyy-MM-dd HH:mm:ss")}`, {
              title: err.response?.data.message,
              color: "red",
              showIcon: true,
            });
            if (err.response.data.error === "E415") {
              close();
            }
            return;
          }
          popup?.alert(
            `잠시후 다시 시도해주세요. [${err.status}]\nOccurred Date ${formatDate(new Date(), "yyyy-MM-dd HH:mm:ss")}`,
            {
              title: "에러",
              color: "red",
              showIcon: true,
            }
          );
        },
      }
    );
  };

  return (
    <>
      <FloatButton>
        <Button type="button" mode="primary" size="xlarge" fullWidth onClick={showModal}>
          팀 가입 신청
        </Button>
      </FloatButton>
      <ModalComponents
        title="팀 가입 신청"
        description="가입을 위한 메시지를 남겨보세요"
        buttons={[
          {
            name: "신청",
            onClick: (close) => {
              onSubmitJoin(close);
            },
            mode: "primary",
          },
        ]}
      >
        {({ setState }) => (
          <TextArea
            title="가입 요청 메시지"
            placeholder="최대 80자까지 작성할 수 있어요."
            height={100}
            maxLength={80}
            onChange={(event) => setState(event.target.value)}
            displayLength
          />
        )}
      </ModalComponents>
    </>
  );
}

export default TeamJoinButton;
