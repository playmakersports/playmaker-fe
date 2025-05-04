import { StaticImageData } from "next/image";

import BasketballIcon from "@/assets/icon/sports/basketball.png";
import VolleyballIcon from "@/assets/icon/sports/volley.png";
import FootballIcon from "@/assets/icon/sports/football.png";
import BadmintonIcon from "@/assets/icon/sports/badminton.png";
import RunIcon from "@/assets/icon/sports/run.png";

type SportsInfoType = { value: string; name: string; nameEng: string; icon: StaticImageData };
export const SUPPORT_SPORTS: Array<SportsInfoType> = [
  {
    value: "1",
    name: "농구",
    nameEng: "basketball",
    icon: BasketballIcon,
  },
  {
    value: "2",
    name: "축구",
    nameEng: "football",
    icon: FootballIcon,
  },
  {
    value: "3",
    name: "배구",
    nameEng: "volleyball",
    icon: VolleyballIcon,
  },
  // {
  //   value: "badminton",
  //   name: "배드민턴",
  //   icon: BadmintonIcon,
  // },
  {
    value: "4",
    name: "야구",
    nameEng: "baseball",
    icon: RunIcon,
  },
];
