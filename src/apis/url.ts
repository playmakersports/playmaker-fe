export const boardAPI = {
  VOTE: "/api/vote",
  BOARDS: "/api/boards",
  POLL: "api/boards/poll",
  DETAIL: "/api/boards/detail",
  ATTACHMENTS: "/api/boards/attachments",
  COMMENT: "/api/comment",
};

export const teamJoinAPI = {
  REQUEST: "/api/teams/join/request",
  APPROVE: (teamId: number | string, memberId: number | string) => `/api/teams/join/${teamId}/approve/${memberId}`,
  REJECT: (teamId: number | string, memberId: number | string) => `/api/teams/join/${teamId}/reject/${memberId}`,
  TEAM_REQ_LIST: (teamId: number | string) => `/api/teams/join/team/${teamId}/requests`,
  MY_REQUEST: `/api/teams/join/my-requests`,
};

export const teamBrowseAPI = {
  SEARCH: "/api/teams/browse/search",
  FILTER: "/api/teams/browse/filter",
};

export const profileAPI = {
  MY_PROFILE: "/api/users/me/profile",
  FAV_TEAMS: "/api/users/me/favorite-teams",
  FAV_ARTICLES: "/api/users/me/favorite-articles",
};

export const authAPI = {
  JOIN: "/api/auth/register",
  FITNESS: "/api/auth/fitness-profile",
  KAKAO: "/api/auth/kakao/callback",
  GOOGLE: "/api/auth/google/callback",
  APPLE: "/api/auth/apple/callback",
  REFRESH: "/api/auth/refresh",
};

export const teamAPI = {
  TEAMS: "/api/teams",
  TEAM_LIKE: "/api/like",
  SETTING: {
    VISIBILITY: (teamId: number | string) => `/api/teams/${teamId}/settings/visibility`,
    RECRUIT: (teamId: number | string) => `/api/teams/${teamId}/settings/recruit`,
    PUBLIC: (teamId: number | string) => `/api/teams/${teamId}/settings/public`,
    BASIC: (teamId: number | string) => `/api/teams/${teamId}/settings/basic`,
  },
};

export const commonAPI = {
  CODES: "/api/codes",
};
