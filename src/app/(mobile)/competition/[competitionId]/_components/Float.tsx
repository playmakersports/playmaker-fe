import React from "react";

import FloatButton from "@/components/common/FloatButton";
import Button from "@/components/common/Button";
import ShareIcon from "@/assets/icon/global/Share.svg";

function CompetitionFloat() {
  return (
    <FloatButton gap="12px">
      <Button type="button" mode="primary" onClick={() => {}} flex={3}>
        대회 영상
      </Button>
      <Button type="button" mode="gray" onClick={() => {}} flex={1.3}>
        <ShareIcon /> <span style={{ marginLeft: "8px" }}>공유</span>
      </Button>
    </FloatButton>
  );
}

export default CompetitionFloat;
