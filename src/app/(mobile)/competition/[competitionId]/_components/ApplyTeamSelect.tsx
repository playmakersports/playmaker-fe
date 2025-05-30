"use client";
import React from "react";
import styled from "styled-components";
import { FieldValues, useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { useToast } from "@/hook/useToast";

import { FONTS } from "@/styles/common";
import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import CardInput from "@/components/common/CardInput";
import FloatButton from "@/components/common/FloatButton";
import { InputCheckbox } from "@/components/common/input/SelectInput";

function ApplyTeamSelect() {
  const { trigger } = useToast();
  const router = useRouter();
  const params = useParams();
  const competitionId = params["competitionId"];
  const { register, watch, handleSubmit } = useForm();

  const isReCheckTeam = watch("ReCheckTeam") && !!watch("teamId");
  const TEAMS_MOCK = [
    { teamName: "SPABA1", teamId: 123, teamLogo: "" },
    { teamName: "SPABA2", teamId: 233, teamLogo: "" },
    { teamName: "SPABA3", teamId: 533, teamLogo: "" },
  ];

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    trigger("참가 신청이 완료됐어요", { type: "success" });
    router.replace(`/competition/${competitionId}`);
  };

  return (
    <Container>
      <form className="inner-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <p className="info-title">출전할 팀을 선택해주세요</p>
        <TeamList>
          {TEAMS_MOCK.map((team) => (
            <li key={team.teamId}>
              <CardInput type="radio" value={`${team.teamId}`} id={`${team.teamId}`} {...register("teamId")}>
                <p className="card-inner">
                  <span className="team-logo" />
                  <span className="team-name">{team.teamName}</span>
                </p>
              </CardInput>
            </li>
          ))}
        </TeamList>

        <FloatButton>
          <Button type="submit" mode="primary" disabled={!isReCheckTeam} fullWidth>
            신청
          </Button>
        </FloatButton>
      </form>
      <InputCheckbox id="ReCheckTeam" text={{ title: "위 선택한 팀으로 신청합니다" }} {...register("ReCheckTeam")} />
    </Container>
  );
}

const Container = styled(BaseContainer)`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  form.inner-wrapper {
    flex: 1;
    overflow-y: auto;
    padding: 0 12px;
  }
  p.info-title {
    ${FONTS.body3("semibold")};
  }
`;
const TeamList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 18px;

  li {
    display: flex;
    p.card-inner {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  span.team-logo {
    display: block;
    width: 60px;
    height: 60px;
    background-color: var(--gray100);
    border-radius: 50%;
  }
  span.team-name {
    ${FONTS.body3("semibold")};
    font-size: 1.8rem;
  }
`;

export default ApplyTeamSelect;
