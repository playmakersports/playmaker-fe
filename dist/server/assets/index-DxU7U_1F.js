import { jsx, jsxs } from "react/jsx-runtime";
import { useFormContext, useForm, FormProvider } from "react-hook-form";
import { useRouter } from "@tanstack/react-router";
import { S as StageWrapper, u as useFunnel } from "./StageWrapper-DCIdQPz_.js";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import styled from "styled-components";
import { S as SUPPORT_SPORTS } from "./SPORTS-C8KNL8RQ.js";
import { s as stageFormWrapper, a as stageWrapper, b as stageFavSportsGrid } from "./stage.css-BcVhTwyI.js";
import { F as FONTS } from "./common-6ceLbjxn.js";
import { a as flexColumnGap20, b as flexColumnGap40, c as flexColumnGap16, d as flexColumnGap4 } from "./container.css-C2ezn6CH.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { T as TextArea } from "./TextArea-C-rWbjLd.js";
import { D as DateInput } from "./DateInput-V2smxG23.js";
import { useState, useEffect, useRef } from "react";
import { c as convertWebpImage } from "./webp-VRlAmM_r.js";
import { P as PlusIcon } from "./Plus-CBBY8JMW.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
import clsx from "clsx";
import { u as useGet, a as usePost } from "./query-Ciubt76c.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { C as Chip } from "./Chip-Bq9i_bIn.js";
import { c as commonAPI, t as teamAPI } from "./authToken-Bx9YTtw3.js";
import { c as colors } from "./color.css-BLEreRIo.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { T as ToggleSwitch } from "./ToggleSwitch-BI6P-uHJ.js";
import { B as BirthRangeInput } from "./BirthRangeInput-Y0ATCX0T.js";
import { formatDate } from "date-fns";
import { u as useToast } from "./useToast-hwetiz13.js";
import "./Button-cLlpCM0x.js";
import "./Badge-CVtyNCaL.js";
import "jotai";
import "@vanilla-extract/css";
import "./Wrapper-DpW65hF8.js";
import "./Close20-w_89MMCP.js";
import "./Search-DrxoJQ2v.js";
import "@number-flow/react";
import "./useCalendar-DZwp9ZF5.js";
import "./useModal--yzWVOVY.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
import "./LeftArrow-BtJmGAG9.js";
import "./RightArrow-DXzZnMRc.js";
import "./container.css-DZr6lpKA.js";
import "@tanstack/react-query";
import "cookies-next";
import "axios";
import "./Minus-Dzq7_5JU.js";
import "./Check-xgghRidd.js";
import "swiper/react";
/* empty css                */
import "./DownArrow-CJuEPh4T.js";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
function TeamCreateStage1({ setStep }) {
  const { register, watch } = useFormContext();
  const handleNextStep = () => {
    setStep("Stage2");
  };
  return /* @__PURE__ */ jsx(StageWrapper, { start: true, onClickNext: handleNextStep, length: 5, current: 1, disableNext: !watch("teamItem"), children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "종목을 선택해 주세요" }),
      /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "팀 생성할 스포츠 종목을 선택해주세요." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: stageFavSportsGrid, children: SUPPORT_SPORTS.map((item) => /* @__PURE__ */ jsxs(SportsButton, { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "radio",
          id: `${item.value}+${item.name}`,
          value: item.nameEng.toUpperCase(),
          style: { display: "none" },
          ...register("teamItem", {
            maxLength: 3
          })
        }
      ),
      /* @__PURE__ */ jsxs("label", { htmlFor: `${item.value}+${item.name}`, children: [
        /* @__PURE__ */ jsx("div", { className: "icon-wrapper", children: /* @__PURE__ */ jsx("img", { src: item.icon, alt: item.name, width: 80, height: 80 }) }),
        /* @__PURE__ */ jsx("span", { className: "sports-name", children: item.name })
      ] })
    ] }, item.value)) })
  ] }) });
}
const SportsButton = styled.div`
  width: 100%;
  max-width: 110px;
  label {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 110px;
      border-radius: 10px;
      border: 1px solid var(--gray200);
      transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    }
    span.sports-name {
      ${FONTS.body3("medium")};
      padding: 10px 0;
      color: var(--gray600);
    }

    &:active div.icon-wrapper > img {
      transform: scale(0.95);
      transition: transform 0.2s ease-in-out;
    }
  }

  input:checked + label div.icon-wrapper {
    border: 2px solid var(--primary500);
  }
  input:checked + label span.sports-name {
    ${FONTS.body3("semibold")};
    color: var(--primary500);
  }
`;
function TeamCreateStage2({ setStep }) {
  const { register, watch } = useFormContext();
  const handlePrevStep = () => {
    setStep("Stage1");
  };
  const handleNextStep = () => {
    setStep("Stage3");
  };
  return /* @__PURE__ */ jsx(
    StageWrapper,
    {
      onClickPrev: handlePrevStep,
      onClickNext: handleNextStep,
      length: 5,
      current: 2,
      disableNext: !watch("teamName"),
      children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "팀 프로필을 작성해주세요" }),
          /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "새로 만들 팀 정보를 입력해 주세요." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap20, children: [
          /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "팀 이름", required: true, ...register("teamName", { required: true }) }),
          /* @__PURE__ */ jsx(DateInput, { title: "창단일", required: true, ...register("foundingDate") }),
          /* @__PURE__ */ jsx(
            TextArea,
            {
              title: "팀 소개",
              placeholder: `다른 플레이어들에게 보일 팀 소개글을 작성해 주세요
150자 이내 작성 가능합니다. (선택)`,
              required: true,
              style: { height: "130px", resize: "none" },
              displayLength: true,
              maxLength: 150,
              ...register("teamIntro", { required: true })
            }
          )
        ] })
      ] })
    }
  );
}
const ImageIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2792'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='-1'%20y='0'%20width='25'%20height='24'%3e%3crect%20x='-0.0961914'%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2792)'%3e%3cpath%20d='M5.21156%2020.5C4.70639%2020.5%204.27881%2020.325%203.92881%2019.975C3.57881%2019.625%203.40381%2019.1974%203.40381%2018.6923V5.30775C3.40381%204.80258%203.57881%204.375%203.92881%204.025C4.27881%203.675%204.70639%203.5%205.21156%203.5H18.5961C19.1012%203.5%2019.5288%203.675%2019.8788%204.025C20.2288%204.375%2020.4038%204.80258%2020.4038%205.30775V18.6923C20.4038%2019.1974%2020.2288%2019.625%2019.8788%2019.975C19.5288%2020.325%2019.1012%2020.5%2018.5961%2020.5H5.21156ZM7.37902%2015.7887C7.08079%2016.184%207.36281%2016.75%207.85801%2016.75H16.0306C16.525%2016.75%2016.8072%2016.1856%2016.5106%2015.79L14.4165%2012.9978C14.1783%2012.6801%2013.7027%2012.6773%2013.4607%2012.9922L11.1346%2016.0192L9.61575%2014.0769C9.37288%2013.7663%208.90156%2013.7704%208.6641%2014.0851L7.37902%2015.7887Z'%20/%3e%3c/g%3e%3c/svg%3e";
function TeamCreateStage3({ setStep }) {
  const {
    register,
    watch,
    setValue,
    formState: { isValid }
  } = useFormContext();
  const [previewImage, setPreviewImage] = useState("");
  const handlePreviewImg = async (event) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;
    try {
      const webpBlob = await convertWebpImage(file, { maxWidth: 600, quality: 0.8 });
      const webpFile = new File([webpBlob], "team_logo.webp", { type: "image/webp" });
      const previewBase64 = URL.createObjectURL(webpBlob);
      setPreviewImage(previewBase64);
      setValue("image", webpFile);
    } catch (error) {
      console.error("Error converting image to WebP:", error);
    }
  };
  useEffect(() => {
    if (watch("image") instanceof Blob) {
      const file = watch("image");
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          if (reader.result) {
            setPreviewImage(reader.result.toString());
          }
        };
      }
    }
  }, []);
  const handlePrevStep = () => {
    setStep("Stage2");
  };
  const handleNextStep = () => {
    setStep("Stage4");
  };
  const COLOR_LIST = [
    "FE110F",
    "E35B62",
    "FF480A",
    "FFB813",
    "FFD878",
    "124DFF",
    "07D9CC",
    "66F51F",
    "0FFF9B",
    "0B8585",
    "6512FF",
    "BF61FD",
    "D518F2",
    "F866D9",
    "cbd5e1"
  ];
  return /* @__PURE__ */ jsx(
    StageWrapper,
    {
      onClickPrev: handlePrevStep,
      onClickNext: handleNextStep,
      length: 5,
      current: 3,
      disableNext: !!watch("watch"),
      children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "팀 로고와 색상을 선택해 주세요" }),
          /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "팀을 대표하는 이미지와 색을 선택해 주세요!" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap40, children: [
          /* @__PURE__ */ jsxs(ImageUpload, { htmlFor: "profileImgUpload", children: [
            previewImage ? /* @__PURE__ */ jsx(PreviewImg, { src: previewImage }) : /* @__PURE__ */ jsx(ImageIcon, {}),
            /* @__PURE__ */ jsx("div", { className: "camera-icon-wrapper", children: /* @__PURE__ */ jsx(PlusIcon, {}) })
          ] }),
          /* @__PURE__ */ jsx(InputWrapper, { title: "팀 색상", required: true, children: /* @__PURE__ */ jsx(ColorWrapper, { children: COLOR_LIST.map((color) => /* @__PURE__ */ jsx(
            "label",
            {
              style: {
                backgroundColor: `#${color}`
              },
              children: /* @__PURE__ */ jsx(
                "input",
                {
                  type: "radio",
                  style: { display: "none" },
                  value: color,
                  ...register("teamColor", { required: true })
                }
              )
            },
            color
          )) }) })
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            style: { display: "none" },
            type: "file",
            accept: "image/*",
            id: "profileImgUpload",
            ...register("teamLogo", {
              onChange: handlePreviewImg
            })
          }
        )
      ] })
    }
  );
}
const ImageUpload = styled.label`
  cursor: pointer;
  position: relative;
  display: flex;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: var(--gray50);
  border: 4px solid var(--background-light);
  outline: 4px solid var(--gray300);
  align-items: center;
  justify-content: center;
  user-select: none;

  svg {
    width: 36px;
    height: 36px;
    fill: var(--gray300);
  }
  .camera-icon-wrapper {
    position: absolute;
    display: flex;
    right: -10px;
    top: -10px;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: var(--primary500);
    border: 2px solid var(--background-light);
    svg {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.25s;
  }
`;
const PreviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
`;
const ColorWrapper = styled.div`
  display: grid;
  padding: 16px;
  grid-template-columns: repeat(5, 1fr);
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--gray200);
  gap: 24px;

  & > label {
    cursor: pointer;
    display: flex;
    margin: 0 auto;
    border-radius: 8px;
    width: 32px;
    height: 32px;

    &:has(input:checked) {
      outline: 3px solid var(--gray900);
    }
  }
`;
function TeamCreateStage4({ setStep }) {
  const { setValue, watch } = useFormContext();
  const { data, isLoading } = useGet(`${commonAPI.CODES}/activeArea`);
  const handlePrevStep = () => {
    setStep("Stage3");
  };
  const handleNextStep = () => {
    setStep("Stage5");
  };
  const [sido, setSido] = useState({ key: "11", name: "서울특별시" });
  const formLocation = watch("activeArea");
  const formLocationDisplayValues = {
    key: formLocation?.key ?? null,
    name: findAreaByCodeSequenceKey(data, formLocation?.key)?.text ?? ""
  };
  const [location, setLocation] = useState(formLocationDisplayValues);
  const onClickLocation = (locationKey, name) => {
    setLocation({ key: locationKey, name: `${sido.name} ${name}` });
    setValue("activeArea", locationKey);
  };
  const onRemoveLocation = () => {
    setLocation(void 0);
    setValue("activeArea", "");
  };
  return /* @__PURE__ */ jsx(StageWrapper, { onClickPrev: handlePrevStep, onClickNext: handleNextStep, length: 5, current: 4, children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, style: { overflow: "hidden", margin: "0 -16px", padding: "0 16px" }, children: [
    /* @__PURE__ */ jsxs("div", { style: { marginBottom: "-4px" }, children: [
      /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "팀의 활동 지역을 선택해 주세요" }),
      /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "주로 운동하시는 지역을 1곳 선택해주세요" })
    ] }),
    isLoading ? /* @__PURE__ */ jsx("div", { style: { marginTop: "32px" }, children: /* @__PURE__ */ jsx(Loading, {}) }) : /* @__PURE__ */ jsxs(Location, { children: [
      /* @__PURE__ */ jsx("div", { className: "location-selected", children: formLocation && /* @__PURE__ */ jsx(
        Chip,
        {
          type: "primary",
          fillType: "light",
          size: "large",
          closeAction: () => {
            onRemoveLocation();
          },
          children: location?.name
        }
      ) }),
      /* @__PURE__ */ jsxs(List, { className: fonts.body3.regular, children: [
        /* @__PURE__ */ jsx("ul", { className: "parent", children: data?.map((item) => {
          const parent = item.parent;
          return /* @__PURE__ */ jsx(
            "li",
            {
              onClick: () => setSido({ key: parent.codeSequenceKey, name: parent.codeValue }),
              className: clsx({
                active: sido.key === parent.codeSequenceKey,
                [fonts.body3.semibold]: sido.key === parent.codeSequenceKey
              }),
              role: "button",
              children: parent.codeValue
            },
            parent.codeSequenceKey
          );
        }) }),
        /* @__PURE__ */ jsx("ul", { className: "child", children: data?.find((item) => item.parent.codeSequenceKey === sido.key)?.child?.map((item) => /* @__PURE__ */ jsx(
          "li",
          {
            role: "button",
            className: clsx(
              formLocation === item.codeSequenceKey && { active: true, [fonts.body3.semibold]: true }
            ),
            onClick: () => onClickLocation(item.codeSequenceKey, item.codeValue),
            children: item.codeValue
          },
          `${item.codeSequenceKey}+${item.codeValue}`
        )) })
      ] })
    ] })
  ] }) });
}
const Location = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 -16px;
  border-bottom: 1px solid var(--gray200);
  div.location-selected {
    display: inline-flex;
    padding: 0 16px;
    gap: 12px;
  }
`;
const List = styled.div`
  overflow: hidden;
  flex: 1;
  display: flex;
  justify-content: center;
  border-top: 1px solid var(--gray200);

  & > ul {
    flex: 1;

    &.parent {
      background-color: var(--gray50);
      border-right: 1px solid var(--gray200);
      & li {
        color: var(--gray400);
        &.active {
          background-color: var(--white);
          color: var(--primary500);
          &:active {
            background-color: var(--white);
          }
        }
        &:active {
          background-color: var(--gray100);
        }
      }
    }

    &.child {
      overflow-y: auto;
      & li {
        color: var(--gray500);
        &.active {
          color: var(--primary500);
        }
        &:active {
          background-color: var(--primary50);
        }
      }
    }
  }
  & li {
    cursor: pointer;
    user-select: none;
    padding: 12px 0;
    text-align: center;
  }
`;
function findAreaByCodeSequenceKey(data, targetKey) {
  const item = data?.find((item2) => item2.child.some((child2) => child2.codeSequenceKey === targetKey));
  if (!item) return null;
  const child = item?.child?.find((child2) => child2.codeSequenceKey === targetKey);
  return {
    parent: item.parent.codeValue,
    child: child?.codeValue,
    text: `${item.parent.codeValue} ${child?.codeValue}`
  };
}
function TeamCreateStage5({ setStep }) {
  const { register, setValue, watch } = useFormContext();
  const [genderRestriction, setGenderRestriction] = useState(false);
  const [ageRestriction, setAgeRestriction] = useState(false);
  const [ageRange, setAgeRange] = useState();
  const handleGender = (value) => {
    setValue("genderRestriction", value);
  };
  const handlePrevStep = () => {
    setStep("Stage4");
  };
  const handleComplete = () => {
    if (!genderRestriction) {
      setValue("genderRestriction", null);
    }
    if (ageRestriction) {
      setValue("ageMin", ageRange?.[1] || 0);
      setValue("ageMax", ageRange?.[0] || 0);
    } else {
      setValue("ageMin", 0);
      setValue("ageMax", 0);
    }
    setStep("Welcome");
  };
  return /* @__PURE__ */ jsx(StageWrapper, { last: true, onClickPrev: handlePrevStep, onClickLast: handleComplete, length: 5, current: 5, children: /* @__PURE__ */ jsxs("div", { className: stageFormWrapper, children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: stageWrapper.title, children: "추가 정보를 작성해주세요" }),
      /* @__PURE__ */ jsx("p", { className: stageWrapper.description, children: "거의 다 왔어요!" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap40, children: [
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
        /* @__PURE__ */ jsx(
          ToggleSwitch,
          {
            size: "large",
            text: { title: "나이 제한", description: "팀에 가입할 수 있는 나이를 제한할 수 있어요.", first: true },
            showIcon: true,
            checked: ageRestriction,
            onChange: (e) => {
              setAgeRestriction(e.target.checked);
              if (!e.target.checked) {
                setValue("ageMin", 0);
                setValue("ageMax", 0);
              }
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: ageRestriction ? void 0 : {
              pointerEvents: "none",
              opacity: 0.55
            },
            children: /* @__PURE__ */ jsx(BirthRangeInput, { getYearRange: setAgeRange })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        ToggleSwitch,
        {
          size: "large",
          text: { title: "기수제 운영", description: "팀 소속 선수를 기수로 관리할 수 있어요.", first: true },
          showIcon: true,
          ...register("hasGenerationSystem")
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
        /* @__PURE__ */ jsxs("div", { className: flexColumnGap4, children: [
          /* @__PURE__ */ jsx("div", { className: fonts.body3.medium, children: "성별 제한" }),
          /* @__PURE__ */ jsx("div", { className: clsx(fonts.body4.regular, colors.gray400), children: "팀에 가입할 수 있는 성별을 제한할 수 있어요." })
        ] }),
        /* @__PURE__ */ jsx(
          MainTab,
          {
            type: "filled",
            color: "gray",
            size: "medium",
            sameWidth: true,
            initialValue: watch("genderRestriction"),
            nowValue: handleGender,
            items: [
              { value: "MIXED", name: "혼성" },
              { value: "FEMALE", name: "여성" },
              { value: "MALE", name: "남성" }
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function TeamCreateWelcome({ setStep }) {
  const { watch } = useFormContext();
  const router = useRouter();
  const toast = useToast();
  const popup = usePopup();
  const { mutate, isPending } = usePost(teamAPI.TEAMS, "form-data");
  const hasPostedRef = useRef(false);
  useEffect(() => {
    const formValues = watch();
    const formData = new FormData();
    const requestDto = {
      hasGenerationSystem: formValues.hasGenerationSystem ? "Y" : "N",
      teamColor: formValues.teamColor,
      message: formValues.message,
      teamName: formValues.teamName,
      genderRestriction: formValues.genderRestriction ?? null,
      foundingDate: formValues.foundingDate.replaceAll("-", ""),
      university: null,
      teamIntro: formValues.teamIntro,
      teamItem: formValues.teamItem,
      activeArea: formValues.activeArea,
      ageMax: 0,
      ageMin: 0
    };
    formData.append("requestDto", new Blob([JSON.stringify(requestDto)], { type: "application/json" }));
    if (formValues.image instanceof File) {
      formData.append("logoFile", formValues.image);
    }
    if (!hasPostedRef.current) {
      mutate(
        {
          data: formData
        },
        {
          onSuccess: (data) => {
            toast?.trigger("새로운 팀을 만들었습니다.", {
              type: "success"
            });
            router.navigate({ to: `/team/${data.id}`, replace: true });
          },
          onError: (error) => {
            let errorResponse = void 0;
            if (error?.response) {
              errorResponse = {
                code: error.response.data.errorCode,
                message: error.response.data.errorMessage
              };
            } else {
              errorResponse = {
                code: null,
                message: error.message
              };
            }
            popup?.alert(
              `${errorResponse?.message}${errorResponse.code ? `[${errorResponse.code}]` : ""}
Occurred Time ${formatDate(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm:ss")}`,
              {
                title: "서버와의 통신 중 문제가 발생했습니다",
                showIcon: true,
                color: "red"
              }
            );
            setStep("Stage5");
          }
        }
      );
      hasPostedRef.current = true;
    }
  }, []);
  return /* @__PURE__ */ jsx("div", { children: isPending && /* @__PURE__ */ jsx(Loading, { page: true }) });
}
const stages = ["Stage1", "Stage2", "Stage3", "Stage4", "Stage5", "Welcome"];
function TeamCreate() {
  const popup = usePopup();
  const router = useRouter();
  useHeader({
    onClickBack: () => {
      const handleConfirm = async () => {
        const confirmValue = await popup?.confirm(`입력된 정보는 저장되지 않고, 다시 복구할 수 없습니다.`, {
          showIcon: true,
          title: "팀 만들기를 취소하시겠습니까?",
          buttonText: {
            yes: "네, 취소할게요",
            no: "아니오"
          }
        });
        if (confirmValue) {
          router.navigate({
            to: "/",
            replace: true
          });
        }
      };
      handleConfirm();
    }
  });
  const methods = useForm();
  const {
    Funnel,
    Step,
    setStep
  } = useFunnel({
    initialStep: stages[0]
  });
  return /* @__PURE__ */ jsx(FormProvider, { ...methods, children: /* @__PURE__ */ jsxs(Funnel, { children: [
    /* @__PURE__ */ jsx(Step, { name: stages[0], children: /* @__PURE__ */ jsx(TeamCreateStage1, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[1], children: /* @__PURE__ */ jsx(TeamCreateStage2, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[2], children: /* @__PURE__ */ jsx(TeamCreateStage3, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[3], children: /* @__PURE__ */ jsx(TeamCreateStage4, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[4], children: /* @__PURE__ */ jsx(TeamCreateStage5, { setStep }) }),
    /* @__PURE__ */ jsx(Step, { name: stages[5], children: /* @__PURE__ */ jsx(TeamCreateWelcome, { setStep }) })
  ] }) });
}
export {
  TeamCreate as component
};
