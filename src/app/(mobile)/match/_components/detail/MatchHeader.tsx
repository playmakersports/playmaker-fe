"use client";
import React, { useEffect, useState } from "react";
import { formatDate } from "date-fns";
import NumberFlow from "@number-flow/react";
import clsx from "clsx";

import { fonts } from "@/styles/fonts.css";
import {
  baseCardContainerNoTrans,
  flexAlignCenter,
  flexColumnGap10,
  flexColumnGap20,
  flexColumnGap4,
  flexColumnGap8,
  flexRowGap10,
  flexRowGap4,
  flexSpaceBetween,
} from "@/styles/container.css";
import CalendarIcon from "@/assets/icon/common/outlined/Calendar.svg";
import { colors } from "@/styles/color.css";
import { matchTeamLogo, matchWinLoseLabel } from "./match.css";
import Badge from "@/components/common/Badge";

type TeamInfo = {
  name: string;
  logo: string;
  score: number;
  fouls: number;
  timeouts: number;
};
type Props = {
  title: string;
  subtitle?: string;
  date: string;
  time: string;
  home: TeamInfo;
  away: TeamInfo;
};
function MatchHeader(props: Props) {
  const { title, subtitle, date, time, home, away } = props;
  const [scores, setScores] = useState([0, 0]);
  useEffect(() => {
    setScores([away.score, home.score]);
  }, [away, home]);

  return (
    <div className={baseCardContainerNoTrans}>
      <div
        className={flexColumnGap4}
        style={{
          borderBottom: `1px solid var(--gray200)`,
          margin: "0 -16px",
          padding: "0 16px 20px",
          textAlign: "center",
        }}
      >
        <h3 className={fonts.body3.semibold}>{title}</h3>
        {subtitle && (
          <p className={fonts.body4.regular} style={{ color: "var(--gray600)" }}>
            {subtitle}
          </p>
        )}
        <p
          className={clsx(flexRowGap4, fonts.caption1.regular)}
          style={{
            justifyContent: "center",
            color: "var(--gray400)",
          }}
        >
          <CalendarIcon width={18} height={18} fill="currentColor" /> {formatDate(date, "yyyy년 M월 d일")} {time}
        </p>
      </div>
      <div className={matchWinLoseLabel}>WIN</div>
      <div className={flexColumnGap20}>
        <div className={flexSpaceBetween}>
          <div className={clsx(flexColumnGap8, flexAlignCenter)} style={{ width: "100px" }}>
            <div className={matchTeamLogo} data-win={away.score > home.score}>
              {away.score > home.score && (
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.999 1.33398C15.7485 1.33399 16.4178 1.60773 16.9492 2.1377L17.1367 2.34277C17.5457 2.83663 17.7558 3.43146 17.7559 4.08789C17.7559 4.53998 17.6502 4.97473 17.4326 5.37402V5.375C17.397 5.44024 17.3575 5.50271 17.3174 5.56445L20.4268 9.80859L23.1797 8.6416C23.1795 8.6289 23.1787 8.61621 23.1787 8.60352C23.1787 7.86109 23.4428 7.19314 23.9629 6.66016H23.9639L24.168 6.4707C24.659 6.05732 25.2547 5.84668 25.9111 5.84668C26.5669 5.84678 27.1612 6.05703 27.6553 6.46484L27.8613 6.65137V6.65234L28.0488 6.85742C28.457 7.35186 28.666 7.94727 28.666 8.60352C28.666 9.25759 28.4527 9.84796 28.043 10.3369L27.8555 10.54C27.462 10.9278 26.9938 11.1743 26.4756 11.2773L24.8057 20.915C24.7226 21.3941 24.3065 21.744 23.8203 21.7441H6.17969C5.69364 21.7441 5.27779 21.3948 5.19434 20.916L3.51953 11.2822C2.99272 11.1816 2.5181 10.9318 2.12305 10.5332H2.12207C1.60039 10.0063 1.33306 9.34329 1.33301 8.60352C1.33301 7.86108 1.59703 7.19314 2.11719 6.66016L2.32129 6.4707C2.81239 6.05715 3.40794 5.84673 4.06445 5.84668C4.81424 5.84668 5.48368 6.12137 6.01465 6.65234C6.5459 7.18359 6.82031 7.85337 6.82031 8.60352C6.82031 8.61589 6.8185 8.62825 6.81836 8.64062L9.57129 9.80859L12.6816 5.56348C12.6695 5.54469 12.6572 5.52595 12.6455 5.50684L12.5654 5.36816C12.351 4.97157 12.2432 4.53976 12.2432 4.08984C12.2433 3.34026 12.5172 2.67071 13.0479 2.13965L13.2539 1.95215C13.7481 1.54387 14.3428 1.33398 14.999 1.33398Z"
                    fill="#FFC957"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className={fonts.body3.medium}>{away.name}</div>
          </div>
          <div className={clsx(flexRowGap10, fonts.head5.semibold)}>
            <span className={clsx({ [colors.primary500]: away.score > home.score })}>
              <NumberFlow value={scores[0]} />
            </span>
            :
            <span className={clsx({ [colors.primary500]: away.score < home.score })}>
              <NumberFlow value={scores[1]} />
            </span>
          </div>
          <div className={clsx(flexColumnGap8, flexAlignCenter)} style={{ width: "100px" }}>
            <div className={matchTeamLogo} data-win={away.score < home.score}>
              {away.score < home.score && (
                <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.999 1.33398C15.7485 1.33399 16.4178 1.60773 16.9492 2.1377L17.1367 2.34277C17.5457 2.83663 17.7558 3.43146 17.7559 4.08789C17.7559 4.53998 17.6502 4.97473 17.4326 5.37402V5.375C17.397 5.44024 17.3575 5.50271 17.3174 5.56445L20.4268 9.80859L23.1797 8.6416C23.1795 8.6289 23.1787 8.61621 23.1787 8.60352C23.1787 7.86109 23.4428 7.19314 23.9629 6.66016H23.9639L24.168 6.4707C24.659 6.05732 25.2547 5.84668 25.9111 5.84668C26.5669 5.84678 27.1612 6.05703 27.6553 6.46484L27.8613 6.65137V6.65234L28.0488 6.85742C28.457 7.35186 28.666 7.94727 28.666 8.60352C28.666 9.25759 28.4527 9.84796 28.043 10.3369L27.8555 10.54C27.462 10.9278 26.9938 11.1743 26.4756 11.2773L24.8057 20.915C24.7226 21.3941 24.3065 21.744 23.8203 21.7441H6.17969C5.69364 21.7441 5.27779 21.3948 5.19434 20.916L3.51953 11.2822C2.99272 11.1816 2.5181 10.9318 2.12305 10.5332H2.12207C1.60039 10.0063 1.33306 9.34329 1.33301 8.60352C1.33301 7.86108 1.59703 7.19314 2.11719 6.66016L2.32129 6.4707C2.81239 6.05715 3.40794 5.84673 4.06445 5.84668C4.81424 5.84668 5.48368 6.12137 6.01465 6.65234C6.5459 7.18359 6.82031 7.85337 6.82031 8.60352C6.82031 8.61589 6.8185 8.62825 6.81836 8.64062L9.57129 9.80859L12.6816 5.56348C12.6695 5.54469 12.6572 5.52595 12.6455 5.50684L12.5654 5.36816C12.351 4.97157 12.2432 4.53976 12.2432 4.08984C12.2433 3.34026 12.5172 2.67071 13.0479 2.13965L13.2539 1.95215C13.7481 1.54387 14.3428 1.33398 14.999 1.33398Z"
                    fill="#FFC957"
                    stroke="white"
                    stroke-width="2"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
            <div className={fonts.body3.medium}>{home.name}</div>
          </div>
        </div>
        <div className={flexColumnGap10}>
          <div className={flexSpaceBetween}>
            <div
              className={clsx([fonts.body4.medium, { [colors.primary500]: away.fouls > home.fouls }])}
              style={{ width: "100px", textAlign: "center" }}
            >
              {away.fouls}
            </div>
            <Badge type="primary" size="medium" fillType="light">
              팀 파울수
            </Badge>
            <div
              className={clsx([fonts.body4.medium, { [colors.primary500]: away.fouls < home.fouls }])}
              style={{ width: "100px", textAlign: "center" }}
            >
              {home.fouls}
            </div>
          </div>
          <div className={flexSpaceBetween}>
            <div
              className={clsx([fonts.body4.medium, { [colors.primary500]: away.timeouts > home.timeouts }])}
              style={{ width: "100px", textAlign: "center" }}
            >
              {away.timeouts}
            </div>
            <Badge type="primary" size="medium" fillType="light">
              타임아웃 수
            </Badge>
            <div
              className={clsx([
                fonts.body4.medium,
                {
                  [colors.primary500]: away.timeouts < home.timeouts,
                },
              ])}
              style={{ width: "100px", textAlign: "center" }}
            >
              {home.timeouts}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchHeader;
