import { jsx, jsxs } from "react/jsx-runtime";
import { q as flexColumnGap24, j as baseDividedLineChild, c as flexColumnGap16, s as baseContainerPaddingTop } from "./container.css-C2ezn6CH.js";
import { useState } from "react";
import { u as useToast } from "./useToast-hwetiz13.js";
import { useRouter, useParams } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import axios from "axios";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { g as getAccessToken, d as baseBackendURL } from "./authToken-Bx9YTtw3.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { B as BasicInput } from "./BaseInput-Bx50CJaq.js";
import { T as TextArea } from "./TextArea-C-rWbjLd.js";
import { T as ToggleSwitch } from "./ToggleSwitch-BI6P-uHJ.js";
import { I as InputWrapper } from "./InputWrapper-CgYCSwII.js";
import { M as MainTab } from "./MainTab-DOXli7NZ.js";
import { B as BirthRangeInput } from "./BirthRangeInput-Y0ATCX0T.js";
import { b as useTeamBasicInfoPut } from "./team-CBj277QK.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { f as Route } from "./router-mwjOH7mt.js";
import "@vanilla-extract/css";
import "sonner";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "jotai";
import "cookies-next";
import "clsx";
import "./fonts.css-vMQm04zv.js";
import "./Wrapper-DpW65hF8.js";
import "./Search-DrxoJQ2v.js";
import "@number-flow/react";
import "./Minus-Dzq7_5JU.js";
import "./Check-xgghRidd.js";
import "./container.css-DZr6lpKA.js";
import "date-fns";
import "swiper/react";
import "./useModal--yzWVOVY.js";
import "./Portal-D4P9dmtA.js";
import "react-dom";
/* empty css                */
import "./DownArrow-CJuEPh4T.js";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "@microsoft/clarity";
function TeamDissolution() {
  const popup = usePopup();
  const router = useRouter();
  const teamId = useParams({ strict: false })["teamId"];
  const accessToken = getAccessToken();
  const handleTeamDissolution = async () => {
    const confirm = await popup?.confirm(
      `해체된 팀은 복구할 수 없습니다.
신중하게 결정해주세요. 팀을 해체하시겠습니까?`,
      {
        title: "팀 해체",
        buttonText: { yes: "네, 해체합니다" },
        showIcon: true,
        color: "red"
      }
    );
    if (confirm) {
      axios.delete(`${baseBackendURL}/api/teams/${teamId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }).then(() => {
        popup?.alert("", { title: `팀이 해체되었습니다.
홈 화면으로 이동합니다.` });
        router.navigate({ to: "/" });
      }).catch((error) => {
        const status = error.response?.status;
        if (status === 403) {
          popup?.alert("", { title: "팀 해체 권한이 없습니다.[403]" });
        }
      });
    }
  };
  return /* @__PURE__ */ jsx(Button, { type: "button", mode: "red", fillType: "light", onClick: handleTeamDissolution, children: "팀 해체하기" });
}
function TeamBasicInfoAdmin(props) {
  const router = useRouter();
  const toast = useToast();
  const teamId = useParams({ strict: false })?.teamId;
  const { mutate, isPending } = useTeamBasicInfoPut(teamId);
  const [ageRange, setAgeRange] = useState([]);
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isDirty }
  } = useForm({
    defaultValues: {
      teamName: props.teamName,
      teamIntro: props.teamIntro,
      publicYn: props.publicYn === "Y",
      recruitingYn: props.recruitingYn === "Y"
    }
  });
  const handleActiveJoin = (value) => {
    setValue("recruitingYn", value === "Y", { shouldDirty: true });
  };
  const onSubmit = handleSubmit((data) => {
    mutate(
      {
        data: {
          teamName: data.teamName,
          teamIntro: data.teamIntro,
          publicYn: data.publicYn,
          recruitingYn: data.recruitingYn
        }
      },
      {
        onSuccess: () => {
          toast.trigger("팀 정보가 저장되었습니다.", { type: "success" });
          router.navigate({ to: `/team/${teamId}` });
        },
        onError: (error) => {
          toast.trigger(`에러: ${error.response?.data.errorMessage}`, { type: "error" });
        }
      }
    );
  });
  useHeader({
    title: "팀 관리",
    options: { titleAlign: "center" },
    subActions: {
      name: "저장",
      disabled: !isDirty,
      action: () => {
        onSubmit();
      }
    }
  });
  return /* @__PURE__ */ jsxs("div", { className: flexColumnGap24, children: [
    isPending && /* @__PURE__ */ jsx(Loading, { page: true }),
    /* @__PURE__ */ jsx(BasicInput, { type: "text", title: "팀 이름", ...register("teamName"), required: true }),
    /* @__PURE__ */ jsx(TextArea, { title: "팀 소개", ...register("teamIntro"), required: true }),
    /* @__PURE__ */ jsx(
      ToggleSwitch,
      {
        ...register("publicYn"),
        size: "large",
        text: {
          title: "팀 공개 여부",
          description: `팀을 비공개하면 팀원만 우리 팀에 접근할 수 있어요.
외부인은 초대 링크를 통해서만 가입할 수 있어요.`,
          first: true,
          textOnlySize: "medium"
        },
        showIcon: true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild }),
    /* @__PURE__ */ jsx(InputWrapper, { title: "팀 모집 설정", children: /* @__PURE__ */ jsx(
      MainTab,
      {
        type: "filled",
        color: "gray",
        size: "medium",
        sameWidth: true,
        initialValue: watch("recruitingYn") ? "Y" : "N",
        nowValue: handleActiveJoin,
        items: [
          { value: "Y", name: "모집 중" },
          { value: "N", name: "모집 중지" }
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: flexColumnGap16, children: [
      /* @__PURE__ */ jsx(
        ToggleSwitch,
        {
          size: "large",
          text: {
            title: "나이 제한",
            description: "팀에 가입할 수 있는 나이를 제한할 수 있어요.",
            first: true,
            textOnlySize: "medium"
          },
          showIcon: true
        }
      ),
      /* @__PURE__ */ jsx(BirthRangeInput, { getYearRange: setAgeRange })
    ] }),
    /* @__PURE__ */ jsx(
      "div",
      {
        style: {
          width: "100%",
          height: "1px",
          backgroundColor: "var(--gray100)"
        }
      }
    ),
    /* @__PURE__ */ jsx(TeamDissolution, {})
  ] });
}
function TeamAdmin() {
  const {
    teamId
  } = Route.useParams();
  return /* @__PURE__ */ jsx("section", { className: baseContainerPaddingTop, children: /* @__PURE__ */ jsx(TeamBasicInfoAdmin, { id: teamId, teamName: "", logoUrl: "" }) });
}
export {
  TeamAdmin as component
};
