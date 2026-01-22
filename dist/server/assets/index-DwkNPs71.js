import { jsxs, jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { Link } from "@tanstack/react-router";
import { f as fonts } from "./fonts.css-vMQm04zv.js";
import { f as flexColumnGap12 } from "./container.css-C2ezn6CH.js";
import { style } from "@vanilla-extract/css";
const VERCEL_BASE_URL = "https://playermaker.vercel.app";
const k_auth_uri = "https://kauth.kakao.com/oauth/authorize";
const g_auth_uri = "https://accounts.google.com/o/oauth2/v2/auth";
const a_auth_uri = "https://appleid.apple.com/auth/authorize";
const AUTH_TARGET_URI = {
  kakao: k_auth_uri,
  google: g_auth_uri,
  apple: a_auth_uri
};
const REST_APIKEY_ENV = {
  kakao: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY,
  google: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  apple: ""
};
const createOpenUri = (provider, redirectUri) => {
  const baseUri = AUTH_TARGET_URI[provider];
  const googleParams = {
    scope: "email openid profile"
  };
  const params = new URLSearchParams({
    client_id: REST_APIKEY_ENV[provider] ?? "",
    redirect_uri: redirectUri,
    response_type: "code",
    ...provider === "google" ? googleParams : {}
  });
  return `${baseUri}?${params.toString()}`;
};
const oAuthSignInStart = (provider) => {
  const target_redirect_uri = `${VERCEL_BASE_URL}/user/login/${provider}`;
  const openUri = createOpenUri(provider, target_redirect_uri);
  window.open(openUri, "_self");
};
const LogoSymbolType = "data:image/svg+xml,%3csvg%20width='129'%20height='85'%20viewBox='0%200%20129%2085'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M60.946%2039.9858C68.5564%2026.8005%2063.2053%209.67807%2048.83%203.41571C37.8899%20-1.35372%2024.8226%202.20023%2017.8067%2011.858C12.0063%2019.8511%2011.4646%2029.7599%2015.1906%2037.8719C16.7365%2041.2541%2016.6704%2045.1516%2014.8074%2048.3752L12.6009%2052.2066C11.5043%2054.0959%209.82625%2055.5228%207.87077%2056.5005C4.81865%2058.033%202.26862%2060.6622%200.907714%2064.2425C-1.33843%2070.1217%200.696311%2076.9786%205.76996%2080.7044C12.7462%2085.8437%2022.4311%2083.677%2026.6459%2076.3841C28.1918%2073.7153%2028.76%2070.7559%2028.4825%2067.9154C28.2711%2065.709%2028.8524%2063.5027%2029.9623%2061.587L31.8253%2058.3633C33.6883%2055.1264%2037.0443%2053.0918%2040.7702%2052.788C48.896%2052.1009%2056.5726%2047.5957%2060.9592%2039.999L60.946%2039.9858Z'%20fill='url(%23paint0_linear_413_4083)'/%3e%3cpath%20d='M128.594%2067.0169C127.656%2063.3044%20125.437%2060.3846%20122.583%2058.5086C120.759%2057.3063%20119.253%2055.6945%20118.394%2053.6863C117.866%2052.4444%20117.245%2051.0175%20116.65%2049.6171C115.184%2046.1952%20115.567%2042.311%20117.509%2039.1402C122.147%2031.5434%20122.794%2021.6743%20118.011%2013.0734C112.832%203.77236%2099.7117%20-1.97475%2089.3794%200.627963C76.0214%203.99695%2068.3052%2016.5481%2069.9304%2029.0068C70.6174%2034.2915%2069.8379%2039.6554%2067.4464%2044.4248L65.8609%2047.5957C65.3456%2048.6262%2064.4736%2049.4189%2063.4298%2049.8945C59.9152%2051.4931%2057.0216%2054.5186%2055.7136%2058.6539C53.811%2064.652%2056.2421%2071.3768%2061.5271%2074.8118C68.7941%2079.5416%2078.3336%2076.8068%2082.1124%2069.2761C83.5922%2066.3299%2083.949%2063.1062%2083.3412%2060.1072C82.8788%2057.8215%2083.7244%2055.7737%2084.7153%2053.7259C85.3759%2052.3651%2086.3008%2051.2157%2087.8203%2050.8325C88.9962%2050.5287%2090.2646%2050.7004%2091.4141%2051.0836C93.6074%2051.8234%2095.4704%2053.356%2096.8974%2055.1924C99.6192%2058.6935%20101.535%2063.3176%20100.689%2067.7964C100.174%2070.4784%20100.438%2073.3453%20101.601%2076.0405C104.931%2083.7826%20114.285%2087.0723%20121.816%2082.7917C127.286%2079.6737%20130.127%2073.1207%20128.581%2067.0169H128.594Z'%20fill='url(%23paint1_linear_413_4083)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_413_4083'%20x1='32.2022'%20y1='1.31055'%20x2='32.2022'%20y2='83.519'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2349CF60'/%3e%3cstop%20offset='1'%20stop-color='%2349CF60'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_413_4083'%20x1='92.0353'%20y1='0'%20x2='92.0353'%20y2='84.6845'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2349CF60'/%3e%3cstop%20offset='1'%20stop-color='%2349CF60'%20stop-opacity='0.5'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
function LoginWrapper({ children, logoFill }) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      style: {
        position: "relative",
        display: "flex",
        height: "calc(100vh - var(--safe-area-top) - 2px)",
        padding: "calc(var(--env-sat) + 40px) 20px 0",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxs("svg", { style: backgroundStyle, viewBox: "0 0 414 694", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M145 193.5C73 66.7 3 12 -23 0.5L-38 721.5L440 709.5V330L418 240.5C357 277.667 217 320.3 145 193.5Z",
              fill: "url(#paint0_linear_2198_3712)",
              fillOpacity: "0.1"
            }
          ),
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M220 223C75.9086 245.359 3 60.5 -23 49L-38 770L440 758V378.5L423 196.5C376.5 145 249 218.5 220 223Z",
              fill: "url(#paint1_linear_2198_3712)",
              fillOpacity: "0.1"
            }
          ),
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "paint0_linear_2198_3712",
                x1: "-38",
                y1: "-8.08817",
                x2: "70.9706",
                y2: "269.69",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsx("stop", { stopColor: logoFill ?? "#2BCE8A" }),
                  /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: logoFill ?? "#2BCE8A", stopOpacity: "0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "linearGradient",
              {
                id: "paint1_linear_2198_3712",
                x1: "-38",
                y1: "40.9531",
                x2: "180.542",
                y2: "372.539",
                gradientUnits: "userSpaceOnUse",
                children: [
                  /* @__PURE__ */ jsx("stop", { stopColor: logoFill ?? "#2BCE8A" }),
                  /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: logoFill ?? "#2BCE8A", stopOpacity: "0" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { style: logoAreaStyle, children: [
          /* @__PURE__ */ jsx(LogoSymbolType, { className: "logo-icon", width: 132, height: 72 }),
          /* @__PURE__ */ jsx("div", { className: fonts.head5.semibold, style: { color: "var(--primary500)" }, children: "플메" })
        ] }),
        /* @__PURE__ */ jsx("div", { style: { position: "relative", paddingBottom: "4px", zIndex: 1 }, children })
      ]
    }
  );
}
const backgroundStyle = {
  display: "block",
  position: "absolute",
  left: "-48px",
  top: "15%",
  width: "600px",
  height: "800px",
  zIndex: 0
};
const logoAreaStyle = {
  display: "flex",
  margin: "60px 0",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px"
};
const onboardingLoginButton = style([
  fonts.body3.medium,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    color: "var(--gray900)",
    gap: "8px",
    padding: "12px 0",
    boxSizing: "border-box",
    border: "1px solid transparent",
    selectors: {
      "&[data-provider='kakao']": {
        backgroundColor: "#FEE500"
      },
      "&[data-provider='google']": {
        backgroundColor: "#FFF",
        border: "1px solid var(--gray200)"
      },
      "&[data-provider='apple']": {
        backgroundColor: "#000",
        color: "#FFF"
      }
    }
  }
]);
const KakaoLogo = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.9766%202.25C14.0318%202.25%2015.9327%202.64999%2017.6792%203.44998C19.4257%204.24997%2020.8065%205.3378%2021.8213%206.71344C22.8363%208.08903%2023.3438%209.58955%2023.3438%2011.2149C23.3438%2012.8403%2022.8363%2014.3429%2021.8213%2015.7228C20.8065%2017.1027%2019.4278%2018.1926%2017.6855%2018.9926C15.9432%2019.7925%2014.0402%2020.1926%2011.9766%2020.1926C11.3253%2020.1926%2010.6529%2020.146%209.95939%2020.0529C6.94842%2022.1438%205.34572%2023.202%205.15119%2023.2274C5.05814%2023.2613%204.96931%2023.257%204.88475%2023.2147C4.85091%2023.1893%204.82555%2023.1555%204.80863%2023.1131C4.7917%2023.0708%204.78327%2023.0327%204.78327%2022.9988V22.9481C4.83403%2022.6179%205.21883%2021.2423%205.93775%2018.8212C4.3054%2018.0085%203.00925%2016.9313%202.0493%2015.5895C1.08935%2014.2477%200.609375%2012.7895%200.609375%2011.2149C0.609375%209.58955%201.11684%208.08903%202.13177%206.71344C3.1467%205.3378%204.52742%204.24997%206.27394%203.44998C8.02045%202.64999%209.92133%202.25%2011.9766%202.25Z'%20fill='%23212121'/%3e%3c/svg%3e";
const GoogleLogo = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M19.6%2010.2276C19.6%209.51849%2019.5364%208.83667%2019.4182%208.18213H10V12.0503H15.3818C15.15%2013.3003%2014.4455%2014.3594%2013.3864%2015.0685V17.5776H16.6182C18.5091%2015.8367%2019.6%2013.273%2019.6%2010.2276Z'%20fill='%234285F4'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.99984%2019.9999C12.6998%2019.9999%2014.9635%2019.1044%2016.618%2017.5772L13.3862%2015.0681C12.4908%2015.6681%2011.3453%2016.0226%209.99984%2016.0226C7.3953%2016.0226%205.19075%2014.2635%204.40439%2011.8999H1.06348V14.4908C2.70893%2017.759%206.09075%2019.9999%209.99984%2019.9999Z'%20fill='%2334A853'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M4.40455%2011.8997C4.20455%2011.2997%204.09091%2010.6588%204.09091%209.9997C4.09091%209.34061%204.20455%208.6997%204.40455%208.0997V5.50879H1.06364C0.386364%206.85879%200%208.38606%200%209.9997C0%2011.6133%200.386364%2013.1406%201.06364%2014.4906L4.40455%2011.8997Z'%20fill='%23FBBC05'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.99984%203.97727C11.468%203.97727%2012.7862%204.48182%2013.8226%205.47273L16.6908%202.60455C14.9589%200.990909%2012.6953%200%209.99984%200C6.09075%200%202.70893%202.24091%201.06348%205.50909L4.40439%208.1C5.19075%205.73636%207.3953%203.97727%209.99984%203.97727Z'%20fill='%23EA4335'/%3e%3c/svg%3e";
const AppleLogo = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xml:space='preserve'%20x='0px'%20y='0px'%20fill='%23fff'%20style='enable-background:new%200%200%20406.5899048%20500'%20viewBox='0%200%20406.5899048%20500'%3e%3cpath%20d='M393.794%20170.505c-2.88%202.24-54.063%2030.71-54.063%2095.01%200%2074.216%2064.94%20100.448%2066.859%20101.088-.32%201.92-10.237%2035.828-34.23%2071.017-21.112%2030.71-43.825%2061.74-77.734%2061.74s-42.867-20.153-81.894-20.153c-38.388%200-51.823%2020.793-82.854%2020.793s-52.783-28.79-77.735-63.66C23.353%20395.074%200%20331.414%200%20270.633c0-96.929%2063.02-148.752%20125.4-148.752%2032.95%200%2060.46%2021.753%2081.254%2021.753%2019.514%200%2050.224-23.033%2087.972-23.033%2014.395%200%2065.579%201.28%2099.168%2049.904zm-184.58-55.342c-2.56%200-5.12-.32-6.719-.64-.32-1.28-.96-5.118-.96-8.957%200-25.911%2013.116-51.503%2027.512-67.818C246.96%2016.635%20277.35.96%20302.303%200c.64%202.88.96%206.398.96%209.917%200%2025.592-10.877%2051.183-26.232%2069.738-16.634%2020.473-45.105%2035.508-67.818%2035.508z'/%3e%3c/svg%3e";
function AppOnboardingHome() {
  const onClickLogin = (provider) => {
    oAuthSignInStart(provider);
  };
  return /* @__PURE__ */ jsx(LoginWrapper, { children: /* @__PURE__ */ jsxs("div", { className: flexColumnGap12, children: [
    /* @__PURE__ */ jsx(Link, { to: "/user/login/test", className: clsx(fonts.body3.medium, onboardingLoginButton), "data-provider": "google", children: "TEST LOGIN" }),
    /* @__PURE__ */ jsxs("button", { type: "button", className: onboardingLoginButton, "data-provider": "kakao", onClick: () => onClickLogin("kakao"), children: [
      /* @__PURE__ */ jsx(KakaoLogo, { width: 20, height: 20 }),
      " 카카오 로그인"
    ] }),
    /* @__PURE__ */ jsxs("button", { type: "button", className: onboardingLoginButton, "data-provider": "google", onClick: () => onClickLogin("google"), children: [
      /* @__PURE__ */ jsx(GoogleLogo, { width: 20, height: 20 }),
      " Google 계정으로 로그인"
    ] }),
    /* @__PURE__ */ jsxs("button", { type: "button", className: onboardingLoginButton, "data-provider": "apple", onClick: () => onClickLogin("apple"), children: [
      /* @__PURE__ */ jsx(AppleLogo, { width: 20, height: 20 }),
      " Apple로 로그인"
    ] })
  ] }) });
}
export {
  AppOnboardingHome as component
};
