import { StaticImageData } from "next/image";

import BasketballIcon from "@/assets/icon/sports/basketball.png";
import VolleyballIcon from "@/assets/icon/sports/volley.png";
import FootballIcon from "@/assets/icon/sports/football.png";
import BadmintonIcon from "@/assets/icon/sports/badminton.png";
import RunIcon from "@/assets/icon/sports/run.png";

type SportsInfoType = { value: string; name: string; icon: StaticImageData };
export const SUPPORT_SPORTS: Array<SportsInfoType> = [
  {
    value: "basketball",
    name: "농구",
    icon: BasketballIcon,
  },
  {
    value: "volley",
    name: "배구",
    icon: VolleyballIcon,
  },
  {
    value: "football",
    name: "축구",
    icon: FootballIcon,
  },
  {
    value: "badminton",
    name: "배드민턴",
    icon: BadmintonIcon,
  },
  {
    value: "run",
    name: "러닝",
    icon: RunIcon,
  },
];
