"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FieldValues, useForm } from "react-hook-form";

import { FONTS } from "@/styles/common";
import { BasicInput } from "@/components/common/input/BaseInput";
import DateCalendarInput from "@/components/common/DateCalendarInput";
import InputRadioWrapper from "@/components/common/InputRadioWrapper";
import { SUPPORT_SPORTS } from "@/constants/SPORTS";
import Button from "@/components/common/Button";
import { InputRadio } from "@/components/common/input/SelectInput";
import { TextArea } from "@/components/common/TextArea";
import DropdownInput from "@/components/common/input/DropdownInput";

function CompetitionCreatePC() {
  const [sportsType, setSportsType] = useState("");
  const [teamNumber, setTeamNumber] = useState("");
  const [ageType, setAgeType] = useState("");
  const [bankName, setBankName] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Container>
      <h2>새 대회 만들기</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="poster">
          <label>포스터 이미지 첨부</label>
        </section>
        <section className="form-flex2">
          <InputRadioWrapper title="종목 및 대회명">
            <div style={{ width: "220px" }}>
              <DropdownInput
                placeholder="종목 선택"
                value={sportsType}
                onChange={setSportsType}
                options={SUPPORT_SPORTS.map((sports) => ({
                  name: sports.name,
                  value: sports.value,
                }))}
              />
            </div>
            <BasicInput
              type="text"
              tabIndex={1}
              {...register("title", {
                required: true,
              })}
              placeholder="대회명을 입력하세요"
            />
          </InputRadioWrapper>
          <section className="form-grid-2">
            <InputRadioWrapper title="모집 기간">
              <DateCalendarInput
                tabIndex={3}
                placeholder="모집 시작일"
                {...register("applyStartDate", {
                  valueAsDate: true,
                })}
              />
              <DateCalendarInput
                tabIndex={4}
                error={!!errors.applyEndDate}
                description={errors.applyEndDate ? (errors.applyEndDate.message as string) : ""}
                placeholder="모집 종료일"
                {...register("applyEndDate", {
                  valueAsDate: true,
                  validate: (value, formValues) => {
                    const startDate = formValues["applyStartDate"];
                    if (new Date(value) < new Date(startDate)) {
                      console.log(errors);
                      return "종료일은 시작일 이후여야 합니다.";
                    }
                    return true;
                  },
                })}
              />
            </InputRadioWrapper>
            <InputRadioWrapper title="대회 기간">
              <DateCalendarInput
                tabIndex={5}
                placeholder="대회 시작일"
                {...register("startDate", {
                  valueAsDate: true,
                })}
              />
              <DateCalendarInput
                tabIndex={6}
                error={!!errors.endDate}
                description={errors.endDate ? (errors.endDate.message as string) : ""}
                placeholder="대회 종료일"
                {...register("endDate", {
                  valueAsDate: true,
                  validate: (value, formValues) => {
                    const startDate = formValues["startDate"];
                    if (new Date(value) < new Date(startDate)) {
                      return "종료일은 시작일 이후여야 합니다.";
                    }
                    return true;
                  },
                })}
              />
            </InputRadioWrapper>

            <BasicInput type="text" title="장소" {...register("place")} />
            <BasicInput
              type="text"
              title="주최"
              disabled
              information="로그인된 계정의 소속 팀으로 자동입력됩니다."
              {...register("host")}
            />
            <BasicInput type="text" title="주관" {...register("organizer")} />
            <BasicInput type="text" title="협찬" {...register("sponsor")} />

            <h3 className="group-title">대회 방식</h3>
            <InputRadioWrapper title="참가 팀 수">
              <DropdownInput
                placeholder="선택"
                value={teamNumber}
                onChange={setTeamNumber}
                options={[
                  { name: "12명", value: "12" },
                  { name: "20명", value: "20" },
                  { name: "직접 입력", value: "-1" },
                ]}
              />
              <BasicInput type="number" disabled={teamNumber !== "-1"} />
            </InputRadioWrapper>
            <h3 className="group-title">참가 조건</h3>
            <InputRadioWrapper title="성별">
              <InputRadio buttonType {...register("gender")} value="mixed" id="mixed" text={{ title: "제한 없음" }} />
              <InputRadio buttonType {...register("gender")} value="male" id="male" text={{ title: "남성" }} />
              <InputRadio buttonType {...register("gender")} value="female" id="female" text={{ title: "여성" }} />
            </InputRadioWrapper>
            <InputRadioWrapper title="국적">
              <InputRadio
                buttonType
                {...register("nationality")}
                value="korean"
                id="korean"
                text={{ title: "대한민국 국적만" }}
              />
              <InputRadio
                buttonType
                {...register("nationality")}
                value="foreigner"
                id="foreigner"
                text={{ title: "외국인 허용" }}
              />
            </InputRadioWrapper>
            <InputRadioWrapper title="출신">
              <InputRadio
                buttonType
                {...register("experience")}
                value="amateur"
                id="amateur"
                text={{ title: "아마추어만" }}
              />
              <InputRadio
                buttonType
                {...register("experience")}
                value="athlete"
                id="athlete"
                text={{ title: "고교 이후 선출 허용" }}
              />
            </InputRadioWrapper>
            <InputRadioWrapper title="연령">
              <DropdownInput
                value={ageType}
                onChange={setAgeType}
                placeholder="나이 방식"
                options={[
                  { name: "만나이", value: "global" },
                  { name: "한국식 나이", value: "korean-age" },
                ]}
              />
              <BasicInput type="number" placeholder="최소 연령" {...register("ageRangeMin")} />
              <BasicInput type="number" placeholder="최대 연령" {...register("ageRangeMax")} />
            </InputRadioWrapper>
            <article className="grid-merge">
              <TextArea title="기타 참가 조건" />
            </article>

            <h3 className="group-title">참가비</h3>
            <section className="grid-merge form-grid-column">
              <div style={{ width: "132px", marginRight: "-8px" }}>
                <DropdownInput
                  title="계좌번호"
                  placeholder="은행 선택"
                  value={bankName}
                  onChange={setBankName}
                  options={[
                    { name: "신한은행", value: "shinhan" },
                    { name: "KB국민은행", value: "kookmin" },
                    { name: "하나은행", value: "hana" },
                    { name: "우리은행", value: "woori" },
                    { name: "기업은행", value: "ibk" },
                    { name: "NH농협", value: "nh" },
                    { name: "카카오뱅크", value: "kakao" },
                    { name: "케이뱅크", value: "kbank" },
                    { name: "토스뱅크", value: "toss" },
                  ]}
                />
              </div>
              <div className="form-flex2">
                <InputRadioWrapper title={"ㅤ"}>
                  <BasicInput
                    type="text"
                    placeholder="하이픈 없이 숫자만 입력하세요"
                    {...register("accountNum", {
                      setValueAs: (value) => value.replaceAll("-", "").trim(),
                    })}
                  />
                </InputRadioWrapper>
              </div>
              <div className="form-flex1">
                <BasicInput type="text" title="계좌 예금주" {...register("accountOwnerName")} />
              </div>
            </section>

            <BasicInput
              delButton={false}
              suffix="원"
              type="text"
              style={{ textAlign: "right" }}
              title="금액"
              {...register("attendPay", {
                onChange: (e) => {
                  const value = e.target.value.replace(/[^0-9]/g, "");
                  e.target.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                },
                setValueAs: (value) => +value.replaceAll(",", "").trim(),
              })}
            />
            <InputRadioWrapper title="입금 기한">
              <DateCalendarInput
                placeholder="입금 마감일"
                {...register("payEndDate", {
                  valueAsDate: true,
                })}
              />
            </InputRadioWrapper>
            <TextArea title="환불 규정" {...register("refundInfo")} />
          </section>
        </section>
        <Bottom>
          <div className="bottom-left-side">
            <Button type="button" mode="gray" fullWidth>
              임시저장
            </Button>
            <Button type="button" mode="gray" fillType="outline" fullWidth>
              불러오기
            </Button>
          </div>
          <div className="bottom-right-side">
            <Button type="submit" mode="primary" fullWidth>
              작성 완료
            </Button>
          </div>
        </Bottom>
      </form>
    </Container>
  );
}

const Container = styled.section`
  padding: 32px 60px 132px;
  @media (max-width: 1000px) {
    padding: 32px 8px;
  }

  h2 {
    ${FONTS.body1("semibold")};
    padding: 0 2px;
    margin-bottom: 20px;
    font-size: 2.4rem;
  }
  h3.group-title {
    grid-column: 1 / 3;
    ${FONTS.body1("semibold")};
    margin: 24px 0 0;
    font-size: 2rem;
  }
  form {
    display: flex;
    gap: 24px;

    section.poster {
      label {
        position: sticky;
        top: 20px;
        ${FONTS.body4("regular")};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: min(20vw, 260px);
        height: min(30vw, 390px);
        border: 1px solid var(--gray100);
        background-color: var(--gray50);
        border-radius: 10px;
        color: var(--gray700);
      }
    }

    section {
      display: flex;
      gap: 24px 36px;
    }
    .form-grid-column {
      gap: 24px 20px;
    }
    .form-grid-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
      }
    }
    .form-flex2 {
      flex: 2;
      flex-direction: column;
    }
    .form-flex1 {
      flex: 1;
      flex-direction: column;
    }
    .grid-merge {
      grid-column: 1 / 3;
    }
  }
`;

const Bottom = styled.footer`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 80px 24px;
  left: 0;
  bottom: 0;
  width: 100%;
  gap: 60px;
  background-color: var(--background-light);
  border-top: 1px solid var(--gray200);
  z-index: 40;

  div.bottom-left-side {
    flex: 0.25;
    display: flex;
    gap: 10px;
  }
  div.bottom-right-side {
    flex: 0.2;
  }
`;

export default CompetitionCreatePC;
