"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useProfileGet } from "@/apis/hook/user";

import { baseContainerPaddingTop, baseDividedLineChild, flexColumnGap24 } from "@/styles/container.css";
import ProfileTop from "./_components/ProfileTop";
import ProfileInfo from "./_components/ProfileInfo";
import Loading from "@/components/common/Loading";
import { formattedDateNoHyphen } from "@/util/date";
import { formatDate } from "date-fns";

function ProfilePage() {
  const userId = useParams()["userId"] as string;
  const { data, isLoading } = useProfileGet();

  return (
    <section className={baseContainerPaddingTop}>
      <div className={flexColumnGap24}>
        <ProfileTop
          imageUrl={data?.imageUrl ?? ""}
          username={data?.userName ?? ""}
          isLoading={isLoading}
          isMyProfile={userId === "my"}
        />
        {!isLoading && data ? (
          <ProfileInfo
            name={data?.userName}
            location={data?.activeAreas?.join(",") ?? ""}
            university="서울대학교"
            birth={formatDate(formattedDateNoHyphen(data?.birth), "yyyy년 M월 d일")}
            phoneNum={data?.contact}
          />
        ) : (
          <Loading page />
        )}
        <div className={baseDividedLineChild} style={{ marginTop: "-4px" }} />
      </div>
    </section>
  );
}

export default ProfilePage;
