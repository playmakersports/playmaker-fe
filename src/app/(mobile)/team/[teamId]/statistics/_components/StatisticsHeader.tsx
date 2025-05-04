import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";

import { atomHeaderTransparent, atomPageTitle } from "@/atom/common";
import HeaderMainDropdown from "../../../_components/HeaderMainDropdown";
import LeftDirectionArrow from "@/assets/icon/arrow/LeftDirection.svg";

function StatisticsHeader() {
  const router = useRouter();
  const [showList, setShowList] = useState(false);
  const [title, setTitle] = useAtom(atomPageTitle);
  const [, setIsTransparent] = useAtom(atomHeaderTransparent);

  useEffect(() => {
    if (showList) {
      setIsTransparent(false);
    }
  }, [showList]);

  const handleHeaderTitle = (title: string) => {
    setTitle(title);
    setShowList(false);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <button
        type="button"
        onClick={() => router.back()}
        style={{ width: "24px", height: "24px", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <LeftDirectionArrow
          width={24}
          height={24}
          style={{
            fill: "var(--gray700)",
          }}
        />
      </button>
      <div>
        <HeaderMainDropdown
          title={`${title} 데이터`}
          showList={showList}
          setShowList={setShowList}
          onCloseList={() => setIsTransparent(true)}
          list={[
            { name: "팀 교류전", action: () => handleHeaderTitle("팀 교류전") },
            { name: "팀 대회전", action: () => handleHeaderTitle("팀 대회전") },
          ]}
        />
      </div>
    </div>
  );
}

export default StatisticsHeader;
