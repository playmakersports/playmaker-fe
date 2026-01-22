import { createRootRoute, HeadContent, Outlet, Scripts, createFileRoute, lazyRouteComponent, createRouter as createRouter$1 } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
import Clarity from "@microsoft/clarity";
const globalCss = "/assets/globals-BfiD5b-l.css";
const Route$O = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=false"
      },
      { title: "플메 PLAYER MAKER" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: globalCss
      }
    ]
  }),
  component: RootLayout
});
Clarity.init("sfaizx4ss8");
function RootLayout() {
  return /* @__PURE__ */ jsxs("html", { lang: "ko", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$N = () => import("./index-DzzqYeBR.js");
const Route$N = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$N, "component")
});
const $$splitComponentImporter$M = () => import("./index-DwkNPs71.js");
const Route$M = createFileRoute("/user/")({
  component: lazyRouteComponent($$splitComponentImporter$M, "component")
});
const $$splitComponentImporter$L = () => import("./index-DxU7U_1F.js");
const Route$L = createFileRoute("/team-create/")({
  component: lazyRouteComponent($$splitComponentImporter$L, "component")
});
const $$splitComponentImporter$K = () => import("./index-DnwVlkP_.js");
const Route$K = createFileRoute("/register/")({
  component: lazyRouteComponent($$splitComponentImporter$K, "component")
});
const $$splitComponentImporter$J = () => import("./index-DgHYy1eS.js");
const Route$J = createFileRoute("/notification/")({
  component: lazyRouteComponent($$splitComponentImporter$J, "component")
});
const $$splitComponentImporter$I = () => import("./index-6Y7cpgpV.js");
const Route$I = createFileRoute("/my/")({
  component: lazyRouteComponent($$splitComponentImporter$I, "component")
});
const $$splitComponentImporter$H = () => import("./index-DfbHGWIp.js");
const Route$H = createFileRoute("/match/")({
  component: lazyRouteComponent($$splitComponentImporter$H, "component")
});
const $$splitComponentImporter$G = () => import("./index-Ci_HXaaD.js");
const Route$G = createFileRoute("/home/")({
  component: lazyRouteComponent($$splitComponentImporter$G, "component")
});
const $$splitComponentImporter$F = () => import("./index-BVTr5n6U.js");
const Route$F = createFileRoute("/feed/")({
  component: lazyRouteComponent($$splitComponentImporter$F, "component")
});
const $$splitComponentImporter$E = () => import("./index-DSppf0Bg.js");
const Route$E = createFileRoute("/control/")({
  component: lazyRouteComponent($$splitComponentImporter$E, "component")
});
const $$splitComponentImporter$D = () => import("./route-D5T7JSHu.js");
const Route$D = createFileRoute("/pc/staff")({
  component: lazyRouteComponent($$splitComponentImporter$D, "component")
});
const $$splitComponentImporter$C = () => import("./index-B2WtEFnc.js");
const Route$C = createFileRoute("/user/logout/")({
  component: lazyRouteComponent($$splitComponentImporter$C, "component")
});
const $$splitComponentImporter$B = () => import("./index-DU0nC38Z.js");
const Route$B = createFileRoute("/team/find/")({
  component: lazyRouteComponent($$splitComponentImporter$B, "component"),
  validateSearch: (search) => {
    return {
      sports: search.sports || ""
    };
  }
});
const $$splitComponentImporter$A = () => import("./index-1Jc2ENSK.js");
const Route$A = createFileRoute("/pc/staff/")({
  component: lazyRouteComponent($$splitComponentImporter$A, "component")
});
const $$splitComponentImporter$z = () => import("./index-DIdK41Fx.js");
const Route$z = createFileRoute("/p/$userId/")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component")
});
const $$splitComponentImporter$y = () => import("./index-CzYq41qb.js");
const Route$y = createFileRoute("/my/team-list/")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component")
});
const $$splitComponentImporter$x = () => import("./index-DYPQFBf6.js");
const Route$x = createFileRoute("/my/sports/")({
  component: lazyRouteComponent($$splitComponentImporter$x, "component")
});
const $$splitComponentImporter$w = () => import("./index-Blt37Jxc.js");
const Route$w = createFileRoute("/my/school/")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component")
});
const $$splitComponentImporter$v = () => import("./index-BakYPhfR.js");
const Route$v = createFileRoute("/my/physical/")({
  component: lazyRouteComponent($$splitComponentImporter$v, "component")
});
const $$splitComponentImporter$u = () => import("./index-BCwSIh22.js");
const Route$u = createFileRoute("/my/notification/")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component")
});
const $$splitComponentImporter$t = () => import("./index-CDg4iRNE.js");
const Route$t = createFileRoute("/my/notice/")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component")
});
const $$splitComponentImporter$s = () => import("./index-BRwab-VF.js");
const Route$s = createFileRoute("/my/location/")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component")
});
const $$splitComponentImporter$r = () => import("./index-BDk0ufUH.js");
const Route$r = createFileRoute("/my/info/")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component")
});
const $$splitComponentImporter$q = () => import("./index-MNKWPYLf.js");
const Route$q = createFileRoute("/my/account/")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component")
});
const $$splitComponentImporter$p = () => import("./index-C9iZj5S5.js");
const Route$p = createFileRoute("/match/$matchId/")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component")
});
const $$splitComponentImporter$o = () => import("./route-B9wedaJd.js");
const Route$o = createFileRoute("/team/$teamId/schedule")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component"),
  validateSearch: (search) => {
    return {
      feat: search.feat || void 0
    };
  }
});
const $$splitComponentImporter$n = () => import("./index-C0AocSgg.js");
const Route$n = createFileRoute("/user/login/test/")({
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const $$splitComponentImporter$m = () => import("./index-CYgfOVg4.js");
const Route$m = createFileRoute("/user/login/kakao/")({
  component: lazyRouteComponent($$splitComponentImporter$m, "component"),
  validateSearch: (search) => {
    return {
      code: search.code || ""
    };
  }
});
const $$splitComponentImporter$l = () => import("./index-C8dyoiLv.js");
const Route$l = createFileRoute("/user/login/google/")({
  component: lazyRouteComponent($$splitComponentImporter$l, "component"),
  validateSearch: (search) => {
    return {
      code: search.code || "",
      error: search.error || ""
    };
  }
});
const $$splitComponentImporter$k = () => import("./index-DCAcw1i4.js");
const Route$k = createFileRoute("/team/$teamId/video/")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const $$splitComponentImporter$j = () => import("./index-zc2XeR8Y.js");
const Route$j = createFileRoute("/team/$teamId/statistics/")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const $$splitComponentImporter$i = () => import("./index-yhGdFmg1.js");
const Route$i = createFileRoute("/team/$teamId/schedule/")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./index-wDx_QC3R.js");
const Route$h = createFileRoute("/team/$teamId/players/")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./index-Cm5MaDO6.js");
const Route$g = createFileRoute("/team/$teamId/matches/")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./index-BYAkkPle.js");
const Route$f = createFileRoute("/team/$teamId/board/")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component"),
  validateSearch: (search) => {
    return {
      keyword: search.keyword || ""
    };
  }
});
const $$splitComponentImporter$e = () => import("./index-NgvUs4Y0.js");
const Route$e = createFileRoute("/team/$teamId/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component"),
  loader: async ({
    params
  }) => {
    return {
      teamId: params.teamId
    };
  }
});
const $$splitComponentImporter$d = () => import("./index-B0hiL9Ai.js");
const Route$d = createFileRoute("/team/$teamId/_home/")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./index-ZtlbXdmy.js");
const Route$c = createFileRoute("/pc/staff/competition/")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./index-NsZ_jtGf.js");
const Route$b = createFileRoute("/competition/$competitionId/apply/")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./index-DLJqfFVY.js");
const Route$a = createFileRoute("/competition/$competitionId/_main/")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index-CP2tVeD3.js");
const Route$9 = createFileRoute("/team/$teamId/video/$articleId/")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  validateSearch: (search) => {
    return {
      articleId: search.articleId || ""
    };
  }
});
const $$splitComponentImporter$8 = () => import("./index-bw9c9_iE.js");
const Route$8 = createFileRoute("/team/$teamId/statistics/records/")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./index-D0wYZvMj.js");
const Route$7 = createFileRoute("/team/$teamId/statistics/leaderboard/")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./index-EbKzwvBT.js");
const Route$6 = createFileRoute("/team/$teamId/board/editor/")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  validateSearch: (search) => {
    return {
      type: search.type || "new"
    };
  },
  head: ({
    search
  }) => {
    const EDITOR_TYPE = {
      new: "글쓰기",
      edit: "글 수정"
    };
    return {
      meta: [{
        title: EDITOR_TYPE[search.type] || "글쓰기"
      }]
    };
  }
});
const $$splitComponentImporter$5 = () => import("./index-BpkgWe-W.js");
const Route$5 = createFileRoute("/team/$teamId/board/$articleId/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-Bj5GG82I.js");
const Route$4 = createFileRoute("/team/$teamId/admin/role/")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-BRwMj5Qr.js");
const Route$3 = createFileRoute("/team/$teamId/admin/player-batch/")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-Dm6f9OWT.js");
const Route$2 = createFileRoute("/team/$teamId/admin/join-request/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-B4VNES02.js");
const Route$1 = createFileRoute("/team/$teamId/admin/block/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-B9EGBz1w.js");
const Route = createFileRoute("/pc/staff/competition/create/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route$N.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$O
});
const UserIndexRoute = Route$M.update({
  id: "/user/",
  path: "/user/",
  getParentRoute: () => Route$O
});
const TeamCreateIndexRoute = Route$L.update({
  id: "/team-create/",
  path: "/team-create/",
  getParentRoute: () => Route$O
});
const RegisterIndexRoute = Route$K.update({
  id: "/register/",
  path: "/register/",
  getParentRoute: () => Route$O
});
const NotificationIndexRoute = Route$J.update({
  id: "/notification/",
  path: "/notification/",
  getParentRoute: () => Route$O
});
const MyIndexRoute = Route$I.update({
  id: "/my/",
  path: "/my/",
  getParentRoute: () => Route$O
});
const MatchIndexRoute = Route$H.update({
  id: "/match/",
  path: "/match/",
  getParentRoute: () => Route$O
});
const HomeIndexRoute = Route$G.update({
  id: "/home/",
  path: "/home/",
  getParentRoute: () => Route$O
});
const FeedIndexRoute = Route$F.update({
  id: "/feed/",
  path: "/feed/",
  getParentRoute: () => Route$O
});
const ControlIndexRoute = Route$E.update({
  id: "/control/",
  path: "/control/",
  getParentRoute: () => Route$O
});
const PcStaffRouteRoute = Route$D.update({
  id: "/pc/staff",
  path: "/pc/staff",
  getParentRoute: () => Route$O
});
const UserLogoutIndexRoute = Route$C.update({
  id: "/user/logout/",
  path: "/user/logout/",
  getParentRoute: () => Route$O
});
const TeamFindIndexRoute = Route$B.update({
  id: "/team/find/",
  path: "/team/find/",
  getParentRoute: () => Route$O
});
const PcStaffIndexRoute = Route$A.update({
  id: "/",
  path: "/",
  getParentRoute: () => PcStaffRouteRoute
});
const PUserIdIndexRoute = Route$z.update({
  id: "/p/$userId/",
  path: "/p/$userId/",
  getParentRoute: () => Route$O
});
const MyTeamListIndexRoute = Route$y.update({
  id: "/my/team-list/",
  path: "/my/team-list/",
  getParentRoute: () => Route$O
});
const MySportsIndexRoute = Route$x.update({
  id: "/my/sports/",
  path: "/my/sports/",
  getParentRoute: () => Route$O
});
const MySchoolIndexRoute = Route$w.update({
  id: "/my/school/",
  path: "/my/school/",
  getParentRoute: () => Route$O
});
const MyPhysicalIndexRoute = Route$v.update({
  id: "/my/physical/",
  path: "/my/physical/",
  getParentRoute: () => Route$O
});
const MyNotificationIndexRoute = Route$u.update({
  id: "/my/notification/",
  path: "/my/notification/",
  getParentRoute: () => Route$O
});
const MyNoticeIndexRoute = Route$t.update({
  id: "/my/notice/",
  path: "/my/notice/",
  getParentRoute: () => Route$O
});
const MyLocationIndexRoute = Route$s.update({
  id: "/my/location/",
  path: "/my/location/",
  getParentRoute: () => Route$O
});
const MyInfoIndexRoute = Route$r.update({
  id: "/my/info/",
  path: "/my/info/",
  getParentRoute: () => Route$O
});
const MyAccountIndexRoute = Route$q.update({
  id: "/my/account/",
  path: "/my/account/",
  getParentRoute: () => Route$O
});
const MatchMatchIdIndexRoute = Route$p.update({
  id: "/match/$matchId/",
  path: "/match/$matchId/",
  getParentRoute: () => Route$O
});
const TeamTeamIdScheduleRouteRoute = Route$o.update({
  id: "/team/$teamId/schedule",
  path: "/team/$teamId/schedule",
  getParentRoute: () => Route$O
});
const UserLoginTestIndexRoute = Route$n.update({
  id: "/user/login/test/",
  path: "/user/login/test/",
  getParentRoute: () => Route$O
});
const UserLoginKakaoIndexRoute = Route$m.update({
  id: "/user/login/kakao/",
  path: "/user/login/kakao/",
  getParentRoute: () => Route$O
});
const UserLoginGoogleIndexRoute = Route$l.update({
  id: "/user/login/google/",
  path: "/user/login/google/",
  getParentRoute: () => Route$O
});
const TeamTeamIdVideoIndexRoute = Route$k.update({
  id: "/team/$teamId/video/",
  path: "/team/$teamId/video/",
  getParentRoute: () => Route$O
});
const TeamTeamIdStatisticsIndexRoute = Route$j.update({
  id: "/team/$teamId/statistics/",
  path: "/team/$teamId/statistics/",
  getParentRoute: () => Route$O
});
const TeamTeamIdScheduleIndexRoute = Route$i.update({
  id: "/",
  path: "/",
  getParentRoute: () => TeamTeamIdScheduleRouteRoute
});
const TeamTeamIdPlayersIndexRoute = Route$h.update({
  id: "/team/$teamId/players/",
  path: "/team/$teamId/players/",
  getParentRoute: () => Route$O
});
const TeamTeamIdMatchesIndexRoute = Route$g.update({
  id: "/team/$teamId/matches/",
  path: "/team/$teamId/matches/",
  getParentRoute: () => Route$O
});
const TeamTeamIdBoardIndexRoute = Route$f.update({
  id: "/team/$teamId/board/",
  path: "/team/$teamId/board/",
  getParentRoute: () => Route$O
});
const TeamTeamIdAdminIndexRoute = Route$e.update({
  id: "/team/$teamId/admin/",
  path: "/team/$teamId/admin/",
  getParentRoute: () => Route$O
});
const TeamTeamIdHomeIndexRoute = Route$d.update({
  id: "/team/$teamId/_home/",
  path: "/team/$teamId/",
  getParentRoute: () => Route$O
});
const PcStaffCompetitionIndexRoute = Route$c.update({
  id: "/competition/",
  path: "/competition/",
  getParentRoute: () => PcStaffRouteRoute
});
const CompetitionCompetitionIdApplyIndexRoute = Route$b.update({
  id: "/competition/$competitionId/apply/",
  path: "/competition/$competitionId/apply/",
  getParentRoute: () => Route$O
});
const CompetitionCompetitionIdMainIndexRoute = Route$a.update({
  id: "/competition/$competitionId/_main/",
  path: "/competition/$competitionId/",
  getParentRoute: () => Route$O
});
const TeamTeamIdVideoArticleIdIndexRoute = Route$9.update({
  id: "/team/$teamId/video/$articleId/",
  path: "/team/$teamId/video/$articleId/",
  getParentRoute: () => Route$O
});
const TeamTeamIdStatisticsRecordsIndexRoute = Route$8.update({
  id: "/team/$teamId/statistics/records/",
  path: "/team/$teamId/statistics/records/",
  getParentRoute: () => Route$O
});
const TeamTeamIdStatisticsLeaderboardIndexRoute = Route$7.update({
  id: "/team/$teamId/statistics/leaderboard/",
  path: "/team/$teamId/statistics/leaderboard/",
  getParentRoute: () => Route$O
});
const TeamTeamIdBoardEditorIndexRoute = Route$6.update({
  id: "/team/$teamId/board/editor/",
  path: "/team/$teamId/board/editor/",
  getParentRoute: () => Route$O
});
const TeamTeamIdBoardArticleIdIndexRoute = Route$5.update({
  id: "/team/$teamId/board/$articleId/",
  path: "/team/$teamId/board/$articleId/",
  getParentRoute: () => Route$O
});
const TeamTeamIdAdminRoleIndexRoute = Route$4.update({
  id: "/team/$teamId/admin/role/",
  path: "/team/$teamId/admin/role/",
  getParentRoute: () => Route$O
});
const TeamTeamIdAdminPlayerBatchIndexRoute = Route$3.update({
  id: "/team/$teamId/admin/player-batch/",
  path: "/team/$teamId/admin/player-batch/",
  getParentRoute: () => Route$O
});
const TeamTeamIdAdminJoinRequestIndexRoute = Route$2.update({
  id: "/team/$teamId/admin/join-request/",
  path: "/team/$teamId/admin/join-request/",
  getParentRoute: () => Route$O
});
const TeamTeamIdAdminBlockIndexRoute = Route$1.update({
  id: "/team/$teamId/admin/block/",
  path: "/team/$teamId/admin/block/",
  getParentRoute: () => Route$O
});
const PcStaffCompetitionCreateIndexRoute = Route.update({
  id: "/competition/create/",
  path: "/competition/create/",
  getParentRoute: () => PcStaffRouteRoute
});
const PcStaffRouteRouteChildren = {
  PcStaffIndexRoute,
  PcStaffCompetitionIndexRoute,
  PcStaffCompetitionCreateIndexRoute
};
const PcStaffRouteRouteWithChildren = PcStaffRouteRoute._addFileChildren(
  PcStaffRouteRouteChildren
);
const TeamTeamIdScheduleRouteRouteChildren = {
  TeamTeamIdScheduleIndexRoute
};
const TeamTeamIdScheduleRouteRouteWithChildren = TeamTeamIdScheduleRouteRoute._addFileChildren(
  TeamTeamIdScheduleRouteRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  PcStaffRouteRoute: PcStaffRouteRouteWithChildren,
  ControlIndexRoute,
  FeedIndexRoute,
  HomeIndexRoute,
  MatchIndexRoute,
  MyIndexRoute,
  NotificationIndexRoute,
  RegisterIndexRoute,
  TeamCreateIndexRoute,
  UserIndexRoute,
  TeamTeamIdScheduleRouteRoute: TeamTeamIdScheduleRouteRouteWithChildren,
  MatchMatchIdIndexRoute,
  MyAccountIndexRoute,
  MyInfoIndexRoute,
  MyLocationIndexRoute,
  MyNoticeIndexRoute,
  MyNotificationIndexRoute,
  MyPhysicalIndexRoute,
  MySchoolIndexRoute,
  MySportsIndexRoute,
  MyTeamListIndexRoute,
  PUserIdIndexRoute,
  TeamFindIndexRoute,
  UserLogoutIndexRoute,
  CompetitionCompetitionIdMainIndexRoute,
  CompetitionCompetitionIdApplyIndexRoute,
  TeamTeamIdHomeIndexRoute,
  TeamTeamIdAdminIndexRoute,
  TeamTeamIdBoardIndexRoute,
  TeamTeamIdMatchesIndexRoute,
  TeamTeamIdPlayersIndexRoute,
  TeamTeamIdStatisticsIndexRoute,
  TeamTeamIdVideoIndexRoute,
  UserLoginGoogleIndexRoute,
  UserLoginKakaoIndexRoute,
  UserLoginTestIndexRoute,
  TeamTeamIdAdminBlockIndexRoute,
  TeamTeamIdAdminJoinRequestIndexRoute,
  TeamTeamIdAdminPlayerBatchIndexRoute,
  TeamTeamIdAdminRoleIndexRoute,
  TeamTeamIdBoardArticleIdIndexRoute,
  TeamTeamIdBoardEditorIndexRoute,
  TeamTeamIdStatisticsLeaderboardIndexRoute,
  TeamTeamIdStatisticsRecordsIndexRoute,
  TeamTeamIdVideoArticleIdIndexRoute
};
const routeTree = Route$O._addFileChildren(rootRouteChildren)._addFileTypes();
let router;
function createRouter() {
  if (router) return router;
  router = createRouter$1({
    routeTree,
    scrollRestoration: true
  });
  return router;
}
function getRouter() {
  return router ?? createRouter();
}
const router$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createRouter,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$z as R,
  Route$p as a,
  Route$j as b,
  Route$i as c,
  Route$h as d,
  Route$f as e,
  Route$e as f,
  Route$d as g,
  Route$a as h,
  Route$9 as i,
  Route$6 as j,
  Route$5 as k,
  Route$3 as l,
  Route$2 as m,
  router$1 as r
};
