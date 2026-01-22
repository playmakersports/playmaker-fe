import { jsxs, jsx } from "react/jsx-runtime";
import { u as useProfileGet } from "./user-D6JVBRgW.js";
import { c as flexColumnGap16, r as flexRowGap12, s as baseContainerPaddingTop, q as flexColumnGap24, j as baseDividedLineChild } from "./container.css-C2ezn6CH.js";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { useRouter } from "@tanstack/react-router";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { B as Button } from "./Button-cLlpCM0x.js";
import { b as settingsHeaderProfile, c as settingsHeaderProfileImage } from "./userSetting.css-B3SV-hPj.js";
import { P as PersonIcon } from "./Person-BRhULpHA.js";
import { style } from "@vanilla-extract/css";
import { L as LocationPinIcon, C as CalendarIcon } from "./Calendar-_ULFP4YG.js";
import { I as IdentifyIcon } from "./IdCard-DHy0MnbB.js";
import { L as Loading } from "./Loading-BabSRuVM.js";
import { f as formattedDateNoHyphen } from "./date-DKPo_LKv.js";
import { formatDate } from "date-fns";
import { R as Route } from "./router-mwjOH7mt.js";
import "./authToken-Bx9YTtw3.js";
import "cookies-next";
import "axios";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "jotai";
import "react";
import "styled-components";
import "./common-6ceLbjxn.js";
import "@microsoft/clarity";
function ProfileTop(props) {
  const { imageUrl, username, subName, isLoading, isMyProfile } = props;
  const router = useRouter();
  useHeader({ title: "프로필", options: { titleAlign: "center" } });
  if (isLoading)
    return /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "48px", height: "48px", borderRadius: "10px" } }),
      /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "4px", flex: 1 }, children: [
        /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "110px", height: "20px", borderRadius: "5px" } }),
        /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "72px", height: "16px", borderRadius: "5px" } })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "skeleton-loading-ui", style: { width: "90px", height: "36px", borderRadius: "5px" } })
    ] });
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
    /* @__PURE__ */ jsxs("div", { className: settingsHeaderProfile, style: { padding: 0 }, children: [
      /* @__PURE__ */ jsx("div", { className: settingsHeaderProfileImage, children: imageUrl ? /* @__PURE__ */ jsx("img", { src: imageUrl, alt: username, className: "profile-image" }) : /* @__PURE__ */ jsx(PersonIcon, { width: 24, height: 24, fill: "var(--gray300)" }) }),
      /* @__PURE__ */ jsxs("div", { className: "profile", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: fonts.body3.semibold,
            style: {
              color: "var(--gray700)"
            },
            children: username
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: fonts.caption1.regular,
            style: {
              color: "var(--gray400)"
            },
            children: [
              "@",
              subName
            ]
          }
        )
      ] })
    ] }),
    isMyProfile && /* @__PURE__ */ jsx(Button, { type: "button", mode: "gray", fillType: "light", size: "small", onClick: () => router.navigate({ to: "/my/info" }), children: "프로필 수정" })
  ] });
}
const profileInfoItem = style([
  fonts.body3.medium,
  {
    flex: 1,
    color: "var(--gray700)"
  }
]);
const LockIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2813'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2813)'%3e%3cmask%20id='mask1_129_2813'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask1_129_2813)'%3e%3cpath%20d='M6.30775%2021.5C5.81058%2021.5%205.385%2021.323%205.031%2020.969C4.677%2020.615%204.5%2020.1894%204.5%2019.6923V10.3077C4.5%209.81058%204.677%209.385%205.031%209.031C5.385%208.677%205.81058%208.5%206.30775%208.5H7.5V6.5C7.5%205.25133%207.93783%204.18917%208.8135%203.3135C9.68917%202.43783%2010.7513%202%2012%202C13.2487%202%2014.3108%202.43783%2015.1865%203.3135C16.0622%204.18917%2016.5%205.25133%2016.5%206.5V8.5H17.6923C18.1894%208.5%2018.615%208.677%2018.969%209.031C19.323%209.385%2019.5%209.81058%2019.5%2010.3077V19.6923C19.5%2020.1894%2019.323%2020.615%2018.969%2020.969C18.615%2021.323%2018.1894%2021.5%2017.6923%2021.5H6.30775ZM12%2016.75C12.4858%2016.75%2012.899%2016.5798%2013.2395%2016.2395C13.5798%2015.899%2013.75%2015.4858%2013.75%2015C13.75%2014.5142%2013.5798%2014.101%2013.2395%2013.7605C12.899%2013.4202%2012.4858%2013.25%2012%2013.25C11.5142%2013.25%2011.101%2013.4202%2010.7605%2013.7605C10.4202%2014.101%2010.25%2014.5142%2010.25%2015C10.25%2015.4858%2010.4202%2015.899%2010.7605%2016.2395C11.101%2016.5798%2011.5142%2016.75%2012%2016.75ZM9%208.5H15V6.5C15%205.66667%2014.7083%204.95833%2014.125%204.375C13.5417%203.79167%2012.8333%203.5%2012%203.5C11.1667%203.5%2010.4583%203.79167%209.875%204.375C9.29167%204.95833%209%205.66667%209%206.5V8.5Z'%20/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const UnlockIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_407_4520'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_407_4520)'%3e%3cpath%20d='M6.30775%208.5H15V6.5C15%205.66667%2014.7083%204.95833%2014.125%204.375C13.5417%203.79167%2012.8333%203.5%2012%203.5C11.1667%203.5%2010.4583%203.79167%209.875%204.375C9.47364%204.77636%209.21036%205.23689%209.08515%205.75659C8.98814%206.15929%208.66421%206.5%208.25%206.5C7.83579%206.5%207.49268%206.1621%207.55564%205.7527C7.69878%204.822%208.11806%204.00894%208.8135%203.3135C9.68917%202.43783%2010.7513%202%2012%202C13.2487%202%2014.3108%202.43783%2015.1865%203.3135C16.0622%204.18917%2016.5%205.25133%2016.5%206.5V8.5H17.6923C18.1909%208.5%2018.6169%208.67658%2018.9703%209.02975C19.3234%209.38308%2019.5%209.80908%2019.5%2010.3077V19.6923C19.5%2020.1909%2019.3234%2020.6169%2018.9703%2020.9703C18.6169%2021.3234%2018.1909%2021.5%2017.6923%2021.5H6.30775C5.80908%2021.5%205.38308%2021.3234%205.02975%2020.9703C4.67658%2020.6169%204.5%2020.1909%204.5%2019.6923V10.3077C4.5%209.80908%204.67658%209.38308%205.02975%209.02975C5.38308%208.67658%205.80908%208.5%206.30775%208.5ZM6.30775%2020H17.6923C17.7821%2020%2017.8558%2019.9712%2017.9135%2019.9135C17.9712%2019.8558%2018%2019.7821%2018%2019.6923V10.3077C18%2010.2179%2017.9712%2010.1442%2017.9135%2010.0865C17.8558%2010.0288%2017.7821%2010%2017.6923%2010H6.30775C6.21792%2010%206.14417%2010.0288%206.0865%2010.0865C6.02883%2010.1442%206%2010.2179%206%2010.3077V19.6923C6%2019.7821%206.02883%2019.8558%206.0865%2019.9135C6.14417%2019.9712%206.21792%2020%206.30775%2020ZM12%2016.75C12.4858%2016.75%2012.899%2016.5798%2013.2395%2016.2395C13.5798%2015.899%2013.75%2015.4858%2013.75%2015C13.75%2014.5142%2013.5798%2014.101%2013.2395%2013.7605C12.899%2013.4202%2012.4858%2013.25%2012%2013.25C11.5142%2013.25%2011.101%2013.4202%2010.7605%2013.7605C10.4202%2014.101%2010.25%2014.5142%2010.25%2015C10.25%2015.4858%2010.4202%2015.899%2010.7605%2016.2395C11.101%2016.5798%2011.5142%2016.75%2012%2016.75Z'%20/%3e%3c/g%3e%3c/svg%3e";
function ProfileInfo(props) {
  const { name, location, university, birth, phoneNum } = props;
  return /* @__PURE__ */ jsxs("ul", { className: flexColumnGap16, children: [
    /* @__PURE__ */ jsxs("li", { className: flexRowGap12, children: [
      /* @__PURE__ */ jsx(PersonIcon, { width: 24, height: 24, fill: "var(--gray400)" }),
      /* @__PURE__ */ jsx("span", { className: profileInfoItem, children: name }),
      /* @__PURE__ */ jsx(UnlockIcon, { width: 24, height: 24, fill: "var(--gray400)" })
    ] }),
    /* @__PURE__ */ jsxs("li", { className: flexRowGap12, children: [
      /* @__PURE__ */ jsx(LocationPinIcon, { width: 24, height: 24, fill: "var(--gray400)" }),
      /* @__PURE__ */ jsx("span", { className: profileInfoItem, children: location }),
      /* @__PURE__ */ jsx(LockIcon, { width: 24, height: 24, fill: "var(--gray400)" })
    ] }),
    /* @__PURE__ */ jsxs("li", { className: flexRowGap12, children: [
      /* @__PURE__ */ jsx(CalendarIcon, { width: 24, height: 24, fill: "var(--gray400)" }),
      /* @__PURE__ */ jsx("span", { className: profileInfoItem, children: birth }),
      /* @__PURE__ */ jsx(UnlockIcon, { width: 24, height: 24, fill: "var(--gray400)" })
    ] }),
    /* @__PURE__ */ jsxs("li", { className: flexRowGap12, children: [
      /* @__PURE__ */ jsx(IdentifyIcon, { width: 24, height: 24, fill: "var(--gray400)" }),
      /* @__PURE__ */ jsx("span", { className: profileInfoItem, children: phoneNum }),
      /* @__PURE__ */ jsx(UnlockIcon, { width: 24, height: 24, fill: "var(--gray400)" })
    ] })
  ] });
}
function ProfilePage() {
  const {
    userId
  } = Route.useParams();
  const {
    data,
    isLoading
  } = useProfileGet();
  return /* @__PURE__ */ jsx("section", { className: baseContainerPaddingTop, children: /* @__PURE__ */ jsxs("div", { className: flexColumnGap24, children: [
    /* @__PURE__ */ jsx(ProfileTop, { imageUrl: data?.imageUrl ?? "", username: data?.userName ?? "", isLoading, isMyProfile: userId === "my" }),
    !isLoading && data ? /* @__PURE__ */ jsx(ProfileInfo, { name: data?.userName, location: data?.activeAreas?.join(",") ?? "", university: "서울대학교", birth: formatDate(formattedDateNoHyphen(data?.birth), "yyyy년 M월 d일"), phoneNum: data?.contact }) : /* @__PURE__ */ jsx(Loading, { page: true }),
    /* @__PURE__ */ jsx("div", { className: baseDividedLineChild, style: {
      marginTop: "-4px"
    } })
  ] }) });
}
export {
  ProfilePage as component
};
