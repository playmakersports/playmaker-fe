import React from "react";
import styled from "styled-components";

import FemaleIcon from "@/assets/icon/gender/Female.svg";
import MaleIcon from "@/assets/icon/gender/Male.svg";
import MixedGender from "@/assets/icon/gender/MixedGender.svg";

function GenderIcon({ type }: { type: "FEMALE" | "MALE" | "MIXED" }) {
  const GENDER_ICON_MAP: Record<string, React.ReactNode> = {
    FEMALE: <FemaleIcon />,
    MALE: <MaleIcon />,
    MIXED: <MixedGender />,
  };

  return <Badges>{GENDER_ICON_MAP[type]}</Badges>;
}

const Badges = styled.span`
  display: inline-flex;
  margin-left: -2px;
  align-items: center;
`;

export default GenderIcon;
