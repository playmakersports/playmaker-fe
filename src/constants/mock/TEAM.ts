export const TEAM_INFO_MOCK = {
  teamName: "JUMP",
  logo: "/images/mock/hongik-jump.png",
  cover:
    "https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  foundedAt: "2000.03.30",
  memberCount: 60,
  introduce: "최강 농구팀! 3년 연속 전국대회 수상",
  sports: "농구",
  univName: "홍익대",
  location: "서울",
};

export const TEAM_PLAYERS_MOCK: Array<{
  playerId: string;
  name: string;
  level: number;
  profileImg: string;
  tag: string[] | string;
  attendRate: number;
  birthDate: string;
  gisu: number;
  sex: "MALE" | "FEMALE";
}> = [
  {
    playerId: "21",
    name: "홍길동",
    level: 5,
    profileImg: "",
    tag: ["리더"],
    attendRate: 0.85,
    birthDate: "1999-10-20",
    gisu: 1,
    sex: "MALE",
  },
  {
    playerId: "34",
    name: "안성재",
    level: 4,
    profileImg: "",
    tag: ["요리사"],
    attendRate: 0.85,
    birthDate: "1999-01-20",
    gisu: 4,
    sex: "MALE",
  },
  {
    playerId: "625",
    name: "최현석",
    level: 3,
    profileImg: "",
    tag: ["요리사"],
    attendRate: 0.65,
    birthDate: "1988-02-30",
    gisu: 12,
    sex: "MALE",
  },
  {
    playerId: "124",
    name: "오상욱",
    level: 2,
    profileImg: "",
    tag: ["요리사"],
    attendRate: 0.65,
    birthDate: "1996-08-30",
    gisu: 12,
    sex: "MALE",
  },
  {
    playerId: "62",
    name: "손흥민",
    level: 1,
    profileImg: "",
    tag: ["축구"],
    attendRate: 0.65,
    birthDate: "1993-11-20",
    gisu: 10,
    sex: "MALE",
  },
];

export const TEAM_SCHEDULE_MOCK = [
  {
    emoji: "⚡️",
    startTime: "16:30",
    endTime: "23:00",
    date: "2024-05-10",
    title: "연습게임 1",
    place: "성균관대학교 경기장",
    description: "올해의 마지막 경기. 모두 화이팅!",
  },
  {
    emoji: "🍖",
    startTime: "16:30",
    endTime: "23:00",
    date: "2024-12-10",
    title: "종강 회식",
    place: "전통주점",
    description: "필참",
  },
  {
    emoji: "🏀",
    startTime: "16:30",
    endTime: "23:00",
    date: "2024-05-10",
    title: "연습게임 3",
    place: "성균관대학교 경기장",
    description: "가장 중요한 대회",
  },
  {
    emoji: "🏀",
    startTime: "21:30",
    endTime: "22:00",
    date: "2024-09-10",
    title: "연습게임 4",
    place: "성균관대학교 경기장",
    description: "가장 중요한 대회",
  },
  {
    emoji: "",
    startTime: "21:30",
    endTime: "22:00",
    date: "2024-09-10",
    title: "연습게임 4",
    place: "성균관대학교 경기장",
    description: "가장 중요한 대회",
  },
];
