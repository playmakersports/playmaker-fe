import { MatchTypeEnums } from "../enums/enums";

export type ApiMatchDetail = {
  id: string;
  title: string;
  matchType: MatchTypeEnums;
  matchDateTime: string;
  homeTeamId: number | string;
  homeTeamName: string;
  awayTeamId: number | string;
  awayTeamName: string;
  homeScore: number;
  awayScore: number;
  homeQ1: number;
  homeQ2: number;
  homeQ3: number;
  homeQ4: number;
  awayQ1: number;
  awayQ2: number;
  awayQ3: number;
  awayQ4: number;
  isCompleted: boolean;
  dataInputProgress: number;
  needsDataInput: boolean;
};
