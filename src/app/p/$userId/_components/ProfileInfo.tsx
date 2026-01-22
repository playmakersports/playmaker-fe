import React from "react";

import { profileInfoItem } from "./profile.css";
import { flexColumnGap16, flexRowGap12 } from "@/styles/container.css";

import PersonIcon from "@/assets/icon/common/filled/Person.svg";
import LocationPinIcon from "@/assets/icon/common/filled/LocationPin.svg";
import CalendarIcon from "@/assets/icon/common/filled/Calendar.svg";
import IdCardIcon from "@/assets/icon/common/outlined/IdCard.svg";
import LockIcon from "@/assets/icon/common/filled/Lock.svg";
import UnlockIcon from "@/assets/icon/common/outlined/Unlock.svg";

type Props = {
  name: string;
  location: string;
  university?: string;
  birth: string;
  phoneNum: string;
};
function ProfileInfo(props: Props) {
  const { name, location, university, birth, phoneNum } = props;

  return (
    <ul className={flexColumnGap16}>
      <li className={flexRowGap12}>
        <PersonIcon width={24} height={24} fill="var(--gray400)" />
        <span className={profileInfoItem}>{name}</span>
        <UnlockIcon width={24} height={24} fill="var(--gray400)" />
      </li>
      <li className={flexRowGap12}>
        <LocationPinIcon width={24} height={24} fill="var(--gray400)" />
        <span className={profileInfoItem}>{location}</span>
        <LockIcon width={24} height={24} fill="var(--gray400)" />
      </li>
      <li className={flexRowGap12}>
        <CalendarIcon width={24} height={24} fill="var(--gray400)" />
        <span className={profileInfoItem}>{birth}</span>
        <UnlockIcon width={24} height={24} fill="var(--gray400)" />
      </li>
      <li className={flexRowGap12}>
        <IdCardIcon width={24} height={24} fill="var(--gray400)" />
        <span className={profileInfoItem}>{phoneNum}</span>
        <UnlockIcon width={24} height={24} fill="var(--gray400)" />
      </li>
    </ul>
  );
}

export default ProfileInfo;
