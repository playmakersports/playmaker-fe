import React from "react";

import { baseContainerPaddingTop, flexColumnGap24 } from "@/styles/container.css";
import ProfileTop from "./_components/ProfileTop";
import ProfileInfo from "./_components/ProfileInfo";
import { WhiteSectionDivider } from "@/components/common/Container";

function ProfilePage() {
  return (
    <section className={baseContainerPaddingTop}>
      <div className={flexColumnGap24}>
        <ProfileTop />
        <ProfileInfo
          name="이름"
          location="서울특별시"
          university="서울대학교"
          birth="1999.01.01"
          phoneNum="010-1234-5678"
        />
        <WhiteSectionDivider style={{ marginTop: "-4px" }} $child />
      </div>
    </section>
  );
}

export default ProfilePage;
