import { ReactElement } from "react";

import BasketballIcon from "@/assets/icon/sports/Basketball.svg";
import VolleyballIcon from "@/assets/icon/sports/Volleyball.svg";
import SoccerBallIcon from "@/assets/icon/sports/SoccerBall.svg";
import BadmintonIcon from "@/assets/icon/sports/BadmintonIcon.svg";

type SportsInfoType = { value: string; name: string; iconSvg: ReactElement };
export const SUPPORT_SPORTS: Array<SportsInfoType> = [
  {
    value: "basketball",
    name: "농구",
    iconSvg: <BasketballIcon />,
  },
  {
    value: "volley",
    name: "배구",
    iconSvg: <VolleyballIcon />,
  },
  {
    value: "football",
    name: "축구",
    iconSvg: <SoccerBallIcon />,
  },
  {
    value: "badminton",
    name: "배드민턴",
    iconSvg: <BadmintonIcon />,
  },
  {
    value: "run",
    name: "러닝",
    iconSvg: <BasketballIcon />,
  },
];
