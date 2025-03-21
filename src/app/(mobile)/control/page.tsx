"use client";
import styled from "styled-components";
import React, { ChangeEvent, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { usePageTitle } from "@/hook/usePageTitle";
import { useGet, usePost } from "@/apis/hook/query";
import useModal from "@/hook/useModal";

import Button from "@/components/common/Button";
import { BaseContainer } from "@/components/common/Container";
import { BasicInput } from "@/components/common/input/BaseInput";
import Loading from "@/components/common/Loading";

type UnivData = {
  universityId: number;
  universityName: string;
  universityAlias: string | null;
}[];

type SelectedUnivState = { code: number; alias: string | null };
function CodeControl() {
  usePageTitle({ title: "코드 관리" });
  const { ModalComponents, showModal } = useModal();
  const [selectedUniv, setSelectedUniv] = useState<SelectedUnivState | undefined>();

  const [searchKey, setSearchKey] = useState({
    code: "",
    name: "",
  });
  const [params, setParams] = useState("");
  const { register, handleSubmit, setValue, reset } = useForm<FieldValues>();

  const {
    data: univList,
    isLoading,
    isError,
    refetch,
  } = useGet<UnivData>("/api/code/university", { keyformat: params });
  const { mutateAsync } = usePost(`/api/code/university/${searchKey}`);

  const onSubmit = async (data: FieldValues) => {
    await mutateAsync(
      { data: {}, queryParams: { alias: data.alias } },
      {
        onSuccess: () => {
          refetch();
          reset();
        },
      }
    );
  };

  const onChangeCode = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchKey((prev) => ({ ...prev, code: newValue }));
  };
  const onChangeUnivName = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchKey((prev) => ({ ...prev, name: newValue }));
  };
  const handleSearch = () => {
    setParams(`${searchKey.code}-${searchKey.name}`);
  };
  const handleClickUnivItem = (target: SelectedUnivState) => {
    setSelectedUniv(target);
    setValue("alias", target.alias);
    showModal();
  };

  return (
    <BaseContainer>
      <Contents>
        <SearchBox>
          <div className="input-container">
            <div style={{ flex: 1 }}>
              <BasicInput
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                title="코드"
                value={searchKey.code}
                onChange={onChangeCode}
              />
            </div>
            <div style={{ flex: 2 }}>
              <BasicInput type="text" title="대학명" value={searchKey.name} onChange={onChangeUnivName} />
            </div>
          </div>
          <Button type="button" mode="gray" onClick={handleSearch}>
            조회
          </Button>
        </SearchBox>
        <SearchData>
          <li className="table-head">
            <span className="code">코드</span>
            <span className="name">대학명</span>
            <span className="alias">약칭</span>
          </li>
          {isLoading && <Loading />}
          {isError && <p style={{ fontSize: "2rem" }}>Error</p>}
          {univList?.map((univ) => (
            <li
              key={univ.universityId}
              className={selectedUniv?.code === univ.universityId ? "selected" : ""}
              onClick={() => handleClickUnivItem({ code: univ.universityId, alias: univ.universityAlias })}
            >
              <span className="code"> {univ.universityId} </span>
              <span className="name">{univ.universityName}</span>
              <span className="alias">{univ.universityAlias ?? "(약어없음)"}</span>
            </li>
          ))}
        </SearchData>
      </Contents>

      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalComponents buttons={[{ mode: "primary", name: "저장", onClick: () => {} }]}>
          <BasicInput
            type="text"
            title="약칭 입력"
            information="약칭은 최대 8자까지 입력 가능합니다."
            {...register("alias", {
              setValueAs: (value) => value.trim(),
              maxLength: 8,
            })}
          />
        </ModalComponents>
      </form>
    </BaseContainer>
  );
}

const Contents = styled.div`
  padding-bottom: 32px;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 10px 16px 16px;
  border: 1px solid rgba(var(--main-rgb), 0.25);
  border-radius: 10px;
  div.input-container {
    display: flex;
    gap: 10px;
  }
`;

const SearchData = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 10px;

  li {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 1.8rem;
    gap: 8px;
    border: 2px solid transparent;
    span {
      &.code {
        width: 50px;
        text-align: center;
      }
      &.name {
        flex: 2;
      }
      &.alias {
        flex: 1;
      }
      padding: 16px 6px;
      background-color: var(--gray50);
      border-radius: 6px;
      border: 2px solid transparent;
    }

    &.table-head > span {
      padding: 6px;
      text-align: center;
      font-weight: 500;
      background-color: var(--gray200);
    }
    &.selected > span {
      border: 2px solid var(--main);
      font-weight: 500;
      color: var(--main);
      background-color: #fff;
    }
  }
`;

export default CodeControl;
