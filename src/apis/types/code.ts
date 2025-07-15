type ApiCodeChildren = {
  codeFormat: string;
  codeName: string;
  codeSequenceKey: string;
  codeValue: string;
  codeValueDes: null | string;
};
export type ApiCodeArea = Array<{ parent: ApiCodeChildren; child: ApiCodeChildren[] }>;
export type ApiHomeResponse = {
  teams: {
    teamId: string | number;
    teamName: string;
    teamLogo: string;
    isMainTeam: boolean;
  }[];
  schedules: {
    scheduleId: string | number;
    title: string;
    date: string;
    teamName: string;
    hasVote: boolean;
  }[];
  notifications: {
    notificationId: string | number;
    title: string;
    content: string;
    date: string;
    isRead: boolean;
    relatedUrl: string;
  }[];
};
