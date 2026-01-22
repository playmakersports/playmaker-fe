import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { u as useHeader } from "./useHeader-yY41oJF1.js";
import { u as usePopup } from "./PopupProvider-CCXZDelm.js";
import { u as useToast } from "./useToast-hwetiz13.js";
import { u as useProfileGet } from "./user-D6JVBRgW.js";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { h as baseContainer, c as flexColumnGap16, a as flexColumnGap20 } from "./container.css-C2ezn6CH.js";
import { d as settingsMyTeamListGroupTitle, e as settingsMyTeamListContainer } from "./userSetting.css-B3SV-hPj.js";
import "jotai";
import "react";
import "styled-components";
import "./common-6ceLbjxn.js";
import "./Button-cLlpCM0x.js";
import "sonner";
import "./AlertFilled-JvwFT9H1.js";
import "./Close20-w_89MMCP.js";
import "./authToken-Bx9YTtw3.js";
import "cookies-next";
import "axios";
import "./query-Ciubt76c.js";
import "@tanstack/react-query";
import "@vanilla-extract/css";
const FolderIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2765'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='25'%20height='24'%3e%3crect%20x='0.0981445'%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2765)'%3e%3cpath%20d='M4.40589%2019.5C3.90073%2019.5%203.47314%2019.325%203.12314%2018.975C2.77314%2018.625%202.59814%2018.1974%202.59814%2017.6923V6.30775C2.59814%205.80258%202.77314%205.375%203.12314%205.025C3.47314%204.675%203.90073%204.5%204.40589%204.5H9.06772C9.59815%204.5%2010.1069%204.71071%2010.4819%205.08579L11.3104%205.91421C11.6854%206.28929%2012.1941%206.5%2012.7246%206.5H19.7904C20.2956%206.5%2020.7231%206.675%2021.0731%207.025C21.4231%207.375%2021.5981%207.80258%2021.5981%208.30775V17.6923C21.5981%2018.1974%2021.4231%2018.625%2021.0731%2018.975C20.7231%2019.325%2020.2956%2019.5%2019.7904%2019.5H4.40589Z'%20/%3e%3c/g%3e%3c/svg%3e";
const PeopleIcon = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='currentColor'%20xmlns='http://www.w3.org/2000/svg'%3e%3cmask%20id='mask0_129_2787'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='0'%20y='0'%20width='24'%20height='24'%3e%3crect%20width='24'%20height='24'%20/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_129_2787)'%3e%3cpath%20d='M3.79834%2019.3078C2.69377%2019.3078%201.79834%2018.4123%201.79834%2017.3078V17.0845C1.79834%2016.5692%201.93134%2016.1093%202.19734%2015.7048C2.46334%2015.3003%202.81859%2014.9856%203.26309%2014.7608C4.21342%2014.2959%205.16901%2013.9375%206.12984%2013.6855C7.09084%2013.4337%208.14692%2013.3078%209.29809%2013.3078C10.4494%2013.3078%2011.5055%2013.4337%2012.4663%2013.6855C13.4273%2013.9375%2014.383%2014.2959%2015.3333%2014.7608C15.7778%2014.9856%2016.1331%2015.3003%2016.3991%2015.7048C16.6651%2016.1093%2016.7981%2016.5692%2016.7981%2017.0845V17.3078C16.7981%2018.4123%2015.9027%2019.3078%2014.7981%2019.3078H3.79834ZM20.5%2019.3078C19.56%2019.3078%2018.7981%2018.5458%2018.7981%2017.6059V16.9615C18.7981%2016.3052%2018.6374%2015.6796%2018.3161%2015.0848C17.9946%2014.4901%2017.5386%2013.9798%2016.9481%2013.554C17.6186%2013.654%2018.2552%2013.8088%2018.8578%2014.0183C19.4603%2014.2279%2020.0353%2014.4757%2020.5828%2014.7615C21.0995%2015.0372%2021.4985%2015.3621%2021.7798%2015.7363C22.0612%2016.1103%2022.2018%2016.5187%2022.2018%2016.9615V17.6059C22.2018%2018.5458%2021.4399%2019.3078%2020.5%2019.3078ZM9.29809%2011.6923C8.33559%2011.6923%207.51167%2011.3496%206.82634%2010.6643C6.14101%209.97876%205.79834%209.15476%205.79834%208.19226C5.79834%207.22976%206.14101%206.40584%206.82634%205.72051C7.51167%205.03501%208.33559%204.69226%209.29809%204.69226C10.2606%204.69226%2011.0846%205.03501%2011.7701%205.72051C12.4554%206.40584%2012.7981%207.22976%2012.7981%208.19226C12.7981%209.15476%2012.4554%209.97876%2011.7701%2010.6643C11.0846%2011.3496%2010.2606%2011.6923%209.29809%2011.6923ZM17.9326%208.19226C17.9326%209.15476%2017.5899%209.97876%2016.9046%2010.6643C16.2193%2011.3496%2015.3953%2011.6923%2014.4328%2011.6923C14.32%2011.6923%2014.1764%2011.6794%2014.0021%2011.6538C13.8276%2011.6281%2013.684%2011.5999%2013.5713%2011.5693C13.9657%2011.0951%2014.2688%2010.5691%2014.4806%209.99126C14.6923%209.41343%2014.7981%208.81343%2014.7981%208.19126C14.7981%207.56893%2014.6901%206.97118%2014.4741%206.39801C14.2581%205.82501%2013.9572%205.29751%2013.5713%204.81551C13.7148%204.76418%2013.8584%204.73084%2014.0021%204.71551C14.1456%204.70001%2014.2892%204.69226%2014.4328%204.69226C15.3953%204.69226%2016.2193%205.03501%2016.9046%205.72051C17.5899%206.40584%2017.9326%207.22976%2017.9326%208.19226Z'%20/%3e%3c/g%3e%3c/svg%3e";
function MyTeamList() {
  const {
    data
  } = useProfileGet();
  const myTeamList = data?.team;
  usePopup();
  const {
    trigger
  } = useToast();
  useHeader({
    title: "소속 팀 관리",
    options: {
      titleAlign: "center"
    }
  });
  return /* @__PURE__ */ jsxs("section", { className: baseContainer, style: {
    paddingTop: "20px"
  }, children: [
    /* @__PURE__ */ jsxs("div", { style: {
      marginBottom: "28px"
    }, className: flexColumnGap16, children: [
      /* @__PURE__ */ jsxs("h4", { className: settingsMyTeamListGroupTitle, children: [
        /* @__PURE__ */ jsx(FolderIcon, { width: 24, height: 24, fill: "var(--gray700)" }),
        "소속 팀 리스트"
      ] }),
      /* @__PURE__ */ jsx("ul", { className: settingsMyTeamListContainer, children: myTeamList?.map((team) => /* @__PURE__ */ jsx("li", { className: fonts.caption1.medium, children: /* @__PURE__ */ jsx(Link, { to: `/team/${team.teamId}`, children: team.teamName }) }, team.teamId)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: flexColumnGap20, children: /* @__PURE__ */ jsxs("h4", { className: settingsMyTeamListGroupTitle, children: [
      /* @__PURE__ */ jsx(PeopleIcon, { width: 24, height: 24, fill: "var(--gray700)" }),
      "소속 팀 관리"
    ] }) })
  ] });
}
export {
  MyTeamList as component
};
